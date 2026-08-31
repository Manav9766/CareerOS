import { supabase } from './supabase.js';
import { seedData } from './data.js';

const KEY = 'careeros-state-v1';
const app = document.getElementById('app');
let session = null;
let syncing = false;
let originalSetItem = Storage.prototype.setItem;

function clone(x){ return JSON.parse(JSON.stringify(x)); }

function authScreen(message=''){
  app.innerHTML = `<div style="min-height:100vh;display:grid;place-items:center;padding:24px;background:#0b0f16;color:#f7f8fb;font-family:Inter,sans-serif">
    <section style="width:min(440px,100%);background:#11161f;border:1px solid #28303e;border-radius:18px;padding:30px;box-shadow:0 20px 60px #0005">
      <div style="display:flex;gap:12px;align-items:center;margin-bottom:24px"><div style="width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,#7c6cff,#a855f7);display:grid;place-items:center;font-weight:800">C</div><div><div style="font-size:20px;font-weight:800">CareerOS</div><div style="font-size:10px;letter-spacing:.18em;color:#9fb3d9">JOB ACQUISITION SYSTEM</div></div></div>
      <h2 style="margin:0 0 8px;font-size:26px">Your private career workspace</h2>
      <p style="margin:0 0 22px;color:#9fb0cc;line-height:1.5">Sign in to keep applications, contacts, interviews, tasks and progress synced across devices.</p>
      <form id="authForm" style="display:grid;gap:12px">
        <input id="authEmail" type="email" required placeholder="Email" style="padding:12px 14px;border-radius:10px;border:1px solid #30394a;background:#0d121a;color:white;font:inherit">
        <input id="authPassword" type="password" minlength="6" required placeholder="Password" style="padding:12px 14px;border-radius:10px;border:1px solid #30394a;background:#0d121a;color:white;font:inherit">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:4px">
          <button type="submit" style="padding:11px;border:0;border-radius:10px;background:#765df6;color:white;font-weight:700;cursor:pointer">Sign in</button>
          <button id="createAccount" type="button" style="padding:11px;border:1px solid #30394a;border-radius:10px;background:#171d27;color:white;font-weight:700;cursor:pointer">Create account</button>
        </div>
        <div id="authMessage" style="min-height:20px;color:#a9b8d2;font-size:13px">${message}</div>
      </form>
    </section>
  </div>`;
  bindAuth();
}

function bindAuth(){
  const msg = document.getElementById('authMessage');
  document.getElementById('authForm')?.addEventListener('submit', async e => {
    e.preventDefault();
    msg.textContent = 'Signing in…';
    const email = document.getElementById('authEmail').value.trim();
    const password = document.getElementById('authPassword').value;
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    msg.textContent = error ? error.message : 'Signed in.';
  });
  document.getElementById('createAccount')?.addEventListener('click', async () => {
    const email = document.getElementById('authEmail').value.trim();
    const password = document.getElementById('authPassword').value;
    if(!email || password.length < 6){ msg.textContent = 'Enter an email and a password of at least 6 characters.'; return; }
    msg.textContent = 'Creating account…';
    const { error } = await supabase.auth.signUp({ email, password });
    msg.textContent = error ? error.message : 'Account created. Check your email if Supabase asks you to confirm it.';
  });
}

async function loadRemoteState(){
  const { data, error } = await supabase.from('workspace_state').select('state').eq('user_id', session.user.id).maybeSingle();
  if(error) throw error;
  let state = data?.state && Object.keys(data.state).length ? data.state : clone(seedData);
  state.meta = state.meta || {};
  state.meta.demo = false;
  originalSetItem.call(localStorage, KEY, JSON.stringify(state));
  if(!data){
    await supabase.from('workspace_state').upsert({ user_id: session.user.id, state, updated_at: new Date().toISOString() }, { onConflict: 'user_id' });
  }
}

function installCloudMirror(){
  Storage.prototype.setItem = function(key, value){
    originalSetItem.call(this, key, value);
    if(this === localStorage && key === KEY && session && !syncing){
      let parsed;
      try { parsed = JSON.parse(value); } catch { return; }
      parsed.meta = parsed.meta || {};
      parsed.meta.demo = false;
      syncing = true;
      supabase.from('workspace_state').upsert({ user_id: session.user.id, state: parsed, updated_at: new Date().toISOString() }, { onConflict: 'user_id' })
        .then(({error}) => { if(error) console.error('CareerOS cloud sync failed:', error); })
        .finally(() => { syncing = false; });
    }
  };
}

async function startApp(){
  try {
    await loadRemoteState();
    installCloudMirror();
    await import('./app.js');
    const logout = document.createElement('button');
    logout.textContent = 'Sign out';
    logout.title = `Signed in as ${session.user.email}`;
    logout.style.cssText = 'position:fixed;right:18px;bottom:18px;z-index:999;padding:9px 12px;border-radius:10px;border:1px solid #313a49;background:#141a23;color:#dbe6ff;cursor:pointer;font:600 12px Inter,sans-serif';
    logout.onclick = () => supabase.auth.signOut();
    document.body.appendChild(logout);
  } catch(err){
    console.error(err);
    authScreen('Could not load your cloud workspace. Please sign in again.');
  }
}

const { data } = await supabase.auth.getSession();
session = data.session;

supabase.auth.onAuthStateChange(async (_event, newSession) => {
  const hadSession = !!session;
  session = newSession;
  if(session && !hadSession){ location.reload(); }
  if(!session && hadSession){ localStorage.removeItem(KEY); location.reload(); }
});

if(session) await startApp();
else authScreen();
