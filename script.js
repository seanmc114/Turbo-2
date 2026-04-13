const LEVELS = [
  {
    id: 1,
    title: "Level 1",
    subtitle: "Imperfect • SER basics",
    icon: "🟦",
    prompts: [
      { q: "When I was younger, I ___ very shy. (characteristic)", a: "ser", tip: "SER: characteristic in the past" },
      { q: "My grandfather ___ a doctor. (occupation)", a: "ser", tip: "SER: occupation in the past" },
      { q: "It ___ Monday. (day/date)", a: "ser", tip: "SER: day/date in the past" },
      { q: "At that time, they ___ from Galway. (origin)", a: "ser", tip: "SER: origin in the past" },
      { q: "She ___ my best friend in primary school. (relationship)", a: "ser", tip: "SER: relationship in the past" },
      { q: "As a child, I ___ very quiet. (characteristic)", a: "ser", tip: "SER: characteristic in the past" },
      { q: "It ___ two o’clock. (time)", a: "ser", tip: "SER: time in the past" },
      { q: "My aunt ___ a teacher for years. (occupation)", a: "ser", tip: "SER: occupation in the past" },
      { q: "Back then, we ___ cousins and classmates. (relationship)", a: "ser", tip: "SER: relationship in the past" },
      { q: "When he was young, he ___ very funny. (characteristic)", a: "ser", tip: "SER: characteristic in the past" }
    ]
  },
  {
    id: 2,
    title: "Level 2",
    subtitle: "Imperfect • ESTAR basics",
    icon: "🟩",
    prompts: [
      { q: "Yesterday I ___ very tired. (condition)", a: "estar", tip: "ESTAR: condition in the past" },
      { q: "We ___ at home all evening. (location)", a: "estar", tip: "ESTAR: location in the past" },
      { q: "She ___ nervous before the exam. (emotion)", a: "estar", tip: "ESTAR: emotion in the past" },
      { q: "The book ___ on the table. (position)", a: "estar", tip: "ESTAR: position in the past" },
      { q: "At that moment, they ___ studying. (action)", a: "estar", tip: "ESTAR: ongoing action in the past" },
      { q: "He ___ ill for a week. (condition)", a: "estar", tip: "ESTAR: temporary state in the past" },
      { q: "I ___ in Dublin last weekend. (location)", a: "estar", tip: "ESTAR: location in the past" },
      { q: "You ___ in a bad mood yesterday. (emotion)", a: "estar", tip: "ESTAR: mood in the past" },
      { q: "The door ___ closed. (condition)", a: "estar", tip: "ESTAR: state/condition in the past" },
      { q: "We ___ sitting near the window. (position/action)", a: "estar", tip: "ESTAR: position/action in the past" }
    ]
  },
  {
    id: 3,
    title: "Level 3",
    subtitle: "Imperfect • Mixed",
    icon: "⏳",
    prompts: [
      { q: "When I was younger, I ___ very sporty.", a: "ser", tip: "SER: characteristic in the past" },
      { q: "Yesterday we ___ exhausted after training.", a: "estar", tip: "ESTAR: condition in the past" },
      { q: "My mother ___ a nurse.", a: "ser", tip: "SER: occupation in the past" },
      { q: "At six o’clock, I ___ in the kitchen.", a: "estar", tip: "ESTAR: location in the past" },
      { q: "It ___ Friday and we were happy.", a: "ser", tip: "SER: day/date in the past" },
      { q: "She ___ angry because of the delay.", a: "estar", tip: "ESTAR: emotion in the past" },
      { q: "He ___ my neighbour for years.", a: "ser", tip: "SER: relationship/identity in the past" },
      { q: "The children ___ playing outside.", a: "estar", tip: "ESTAR: action in the past" },
      { q: "At that time, they ___ from Cork.", a: "ser", tip: "SER: origin in the past" },
      { q: "The keys ___ under the sofa.", a: "estar", tip: "ESTAR: position/location in the past" }
    ]
  },
  {
    id: 4,
    title: "Level 4",
    subtitle: "Preterite • Mixed",
    icon: "⚡",
    prompts: [
      { q: "The match ___ fantastic. (event quality)", a: "ser", tip: "SER: what the event was like overall" },
      { q: "I ___ very nervous before the match. (emotion)", a: "estar", tip: "ESTAR: temporary feeling" },
      { q: "The concert ___ in the stadium. (event location)", a: "ser", tip: "SER: event location" },
      { q: "My friends ___ in the stadium too. (actual location)", a: "estar", tip: "ESTAR: actual location" },
      { q: "The film ___ boring. (overall quality)", a: "ser", tip: "SER: defining quality of the film" },
      { q: "We ___ bored during the film. (state)", a: "estar", tip: "ESTAR: temporary state" },
      { q: "Yesterday it ___ three o’clock when she arrived. (time)", a: "ser", tip: "SER: time in the past" },
      { q: "He ___ sick for two days. (condition)", a: "estar", tip: "ESTAR: condition in the past" },
      { q: "The wedding ___ on the beach. (event location)", a: "ser", tip: "SER: event location" },
      { q: "I ___ on the beach all afternoon. (location)", a: "estar", tip: "ESTAR: actual location" }
    ]
  },
  {
    id: 5,
    title: "Level 5",
    subtitle: "Event vs location traps",
    icon: "🎯",
    prompts: [
      { q: "The party ___ at Ana’s house. (event location)", a: "ser", tip: "SER: where the event took place" },
      { q: "The guests ___ at Ana’s house. (actual location)", a: "estar", tip: "ESTAR: where people were" },
      { q: "The meeting ___ in room 12. (event location)", a: "ser", tip: "SER: event location" },
      { q: "The students ___ in room 12. (actual location)", a: "estar", tip: "ESTAR: actual location" },
      { q: "The class ___ on Monday. (day/date)", a: "ser", tip: "SER: day/date" },
      { q: "The teacher ___ in school early. (location)", a: "estar", tip: "ESTAR: location" },
      { q: "The ceremony ___ in the church. (event location)", a: "ser", tip: "SER: event location" },
      { q: "We ___ in the church for an hour. (location)", a: "estar", tip: "ESTAR: actual location" },
      { q: "The exam ___ at nine o’clock. (time)", a: "ser", tip: "SER: time" },
      { q: "I ___ outside the room waiting. (location)", a: "estar", tip: "ESTAR: actual location" }
    ]
  },
  {
    id: 6,
    title: "Level 6",
    subtitle: "Adjective / state traps",
    icon: "🧠",
    prompts: [
      { q: "As a child, she ___ very quiet. (characteristic)", a: "ser", tip: "SER: lasting quality" },
      { q: "Yesterday she ___ quiet because she was upset. (state)", a: "estar", tip: "ESTAR: temporary state" },
      { q: "My uncle ___ boring as a teacher. (defining quality)", a: "ser", tip: "SER: defining quality" },
      { q: "We ___ bored in his class. (state)", a: "estar", tip: "ESTAR: temporary state" },
      { q: "The town ___ small but beautiful. (characteristic)", a: "ser", tip: "SER: characteristic" },
      { q: "The town ___ very busy during the festival. (state)", a: "estar", tip: "ESTAR: temporary condition" },
      { q: "My cousin ___ very serious at school. (characteristic)", a: "ser", tip: "SER: personality/quality" },
      { q: "He ___ serious after the accident. (state)", a: "estar", tip: "ESTAR: condition/state" },
      { q: "The homework ___ difficult. (defining quality)", a: "ser", tip: "SER: what it was like" },
      { q: "I ___ frustrated while doing it. (emotion)", a: "estar", tip: "ESTAR: temporary emotion" }
    ]
  },
  {
    id: 7,
    title: "Level 7",
    subtitle: "Exam-style mixed past",
    icon: "📝",
    prompts: [
      { q: "Last year my father ___ unemployed for a few months. (state)", a: "estar", tip: "ESTAR: temporary state" },
      { q: "When she was young, she ___ very generous. (characteristic)", a: "ser", tip: "SER: characteristic" },
      { q: "The festival ___ in July every year. (date/time)", a: "ser", tip: "SER: date/time of event" },
      { q: "Yesterday we ___ at my grandparents’ house. (location)", a: "estar", tip: "ESTAR: actual location" },
      { q: "My grandmother ___ a dentist. (occupation)", a: "ser", tip: "SER: occupation" },
      { q: "I ___ delighted with my results. (emotion)", a: "estar", tip: "ESTAR: temporary feeling" },
      { q: "It ___ my birthday. (identity/day)", a: "ser", tip: "SER: identifying occasion/day" },
      { q: "The sandwiches ___ on the kitchen table. (position)", a: "estar", tip: "ESTAR: position" },
      { q: "Back then, they ___ our neighbours. (relationship/identity)", a: "ser", tip: "SER: identity/relationship" },
      { q: "At that moment, we ___ chatting in the garden. (action)", a: "estar", tip: "ESTAR: action in progress" }
    ]
  },
  {
    id: 8,
    title: "Level 8",
    subtitle: "Boss level • all traps",
    icon: "👑",
    prompts: [
      { q: "The show ___ amazing, but I ___ exhausted afterwards. (choose the FIRST blank)", a: "ser", tip: "FIRST blank = SER: event quality" },
      { q: "The guests ___ in the hall, but the wedding ___ in the garden. (choose the FIRST blank)", a: "estar", tip: "FIRST blank = ESTAR: actual location" },
      { q: "When I was younger, I ___ shy, but yesterday I ___ nervous before the interview. (choose the FIRST blank)", a: "ser", tip: "FIRST blank = SER: characteristic" },
      { q: "The class ___ on Tuesday, and we ___ in room 5. (choose the FIRST blank)", a: "ser", tip: "FIRST blank = SER: day/date" },
      { q: "My brother ___ a chef, but last week he ___ ill. (choose the FIRST blank)", a: "ser", tip: "FIRST blank = SER: occupation" },
      { q: "The concert ___ in Dublin, and we ___ near the stage. (choose the FIRST blank)", a: "ser", tip: "FIRST blank = SER: event location" },
      { q: "My cousins ___ from Spain, but they ___ in Ireland for the summer. (choose the FIRST blank)", a: "ser", tip: "FIRST blank = SER: origin" },
      { q: "The lesson ___ difficult, and I ___ confused. (choose the FIRST blank)", a: "ser", tip: "FIRST blank = SER: what the lesson was like" },
      { q: "At that moment, she ___ in the library, but normally she ___ very cheerful. (choose the FIRST blank)", a: "estar", tip: "FIRST blank = ESTAR: location" },
      { q: "It ___ two o’clock, and everyone ___ ready to leave. (choose the FIRST blank)", a: "ser", tip: "FIRST blank = SER: time" }
    ]
  }
];

const STORAGE_UNLOCKED = "turbooooooo_past_unlocked";
const STORAGE_BEST_PREFIX = "turbooooooo_past_best_";
const STORAGE_CLEARED = "turbooooooo_past_cleared";

const path = location.pathname.split("/").pop() || "index.html";
const isHome = path === "index.html" || path === "";
const isPlay = path === "play.html";

let state = {
  unlocked: Number(localStorage.getItem(STORAGE_UNLOCKED) || 1),
  currentLevel: Number(localStorage.getItem("turbooooooo_current_level") || 1),
  round: [],
  idx: 0,
  correct: 0,
  startMs: 0,
  timerInt: null,
  accepting: false
};

function getBest(levelId){
  const v = localStorage.getItem(STORAGE_BEST_PREFIX + levelId);
  return v ? Number(v) : 0;
}
function setBest(levelId, value){
  localStorage.setItem(STORAGE_BEST_PREFIX + levelId, String(value));
}
function formatTime(sec){
  return sec ? sec.toFixed(1) + "s" : "—";
}
function shuffle(arr){
  const a = [...arr];
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function playTone(freq=440, duration=0.12, type="triangle", gainValue=0.03, delay=0){
  try{
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if(!playTone.ctx) playTone.ctx = new Ctx();
    const ctx = playTone.ctx;
    if(ctx.state === "suspended") ctx.resume();
    const now = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(gainValue, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(now); osc.stop(now + duration + 0.02);
  }catch{}
}
function toneGood(){ playTone(660,0.08,"triangle",0.03,0); playTone(880,0.1,"triangle",0.03,0.08); }
function toneBad(){ playTone(220,0.1,"sawtooth",0.02,0); playTone(180,0.15,"sawtooth",0.02,0.08); }
function toneStart(){ playTone(392,0.1,"triangle",0.025,0); playTone(523,0.12,"triangle",0.03,0.08); }
function toneWin(){ playTone(523,0.08,"triangle",0.03,0); playTone(659,0.08,"triangle",0.03,0.08); playTone(784,0.12,"triangle",0.035,0.16); }

function launchConfetti(){
  for(let i=0;i<24;i++){
    const p = document.createElement("div");
    p.style.position = "fixed";
    p.style.left = (Math.random() * 100) + "vw";
    p.style.top = "-20px";
    p.style.width = "10px";
    p.style.height = "14px";
    p.style.borderRadius = "3px";
    p.style.background = i % 2 === 0 ? "#ffd43b" : "#00c2b3";
    p.style.zIndex = "9999";
    p.style.pointerEvents = "none";
    p.style.opacity = "0.95";
    p.style.transform = `rotate(${Math.random()*360}deg)`;
    p.style.transition = "transform 1.5s ease-out, top 1.5s ease-out, opacity 1.5s ease-out";
    document.body.appendChild(p);
    requestAnimationFrame(() => {
      p.style.top = "105vh";
      p.style.transform = `translateX(${(Math.random()-0.5)*160}px) rotate(${Math.random()*720}deg)`;
      p.style.opacity = "0.08";
    });
    setTimeout(() => p.remove(), 1600);
  }
}

function renderHome(){
  const grid = document.getElementById("grid");
  const clearedCount = document.getElementById("clearedCount");
  if(!grid) return;
  grid.innerHTML = "";

  let cleared = 0;

  LEVELS.forEach((lvl, index) => {
    const unlocked = lvl.id <= state.unlocked;
    const best = getBest(lvl.id);
    if(best > 0) cleared++;

    const btn = document.createElement("button");
    btn.className = "tile " + (unlocked ? "unlocked" : "locked");
    btn.innerHTML = `
      <div class="tileTop">
        <div class="tileIcon">${lvl.icon}</div>
        <div>
          <div class="tileTitle">${lvl.title}</div>
          <div class="tileMeta">${lvl.subtitle}</div>
          <div class="tileMeta">Best time: <strong>${formatTime(best)}</strong></div>
        </div>
      </div>
      <div class="tileCTA">${unlocked ? "Start level →" : "Locked"}</div>
    `;
    if(unlocked){
      btn.onclick = () => {
        localStorage.setItem("turbooooooo_current_level", String(lvl.id));
        location.href = "play.html";
      };
    }
    grid.appendChild(btn);
  });

  if(clearedCount) clearedCount.textContent = String(cleared);
  const resetBtn = document.getElementById("reset");
  if(resetBtn){
    resetBtn.onclick = () => {
      if(!confirm("Reset all level times and locks?")) return;
      Object.keys(localStorage).forEach(k => {
        if(k.startsWith("turbooooooo_past_") || k === "turbooooooo_current_level"){
          localStorage.removeItem(k);
        }
      });
      state.unlocked = 1;
      renderHome();
    };
  }
}

function startLevel(){
  const levelId = Number(localStorage.getItem("turbooooooo_current_level") || 1);
  state.currentLevel = levelId;
  const lvl = LEVELS.find(x => x.id === levelId) || LEVELS[0];
  state.round = shuffle(lvl.prompts).slice(0, 10);
  state.idx = 0;
  state.correct = 0;
  state.startMs = performance.now();
  state.accepting = true;

  document.getElementById("pill").textContent = `${lvl.title} · ${lvl.subtitle}`;
  updateTimer();
  state.timerInt = setInterval(updateTimer, 100);
  renderQuestion();
  toneStart();

  document.getElementById("homeBtn").onclick = () => {
    location.href = "index.html";
  };
  document.getElementById("serBtn").onclick = () => handleAnswer("ser");
  document.getElementById("estarBtn").onclick = () => handleAnswer("estar");
}

function updateTimer(){
  const sec = (performance.now() - state.startMs) / 1000;
  const timerEl = document.getElementById("timer");
  if(timerEl) timerEl.textContent = sec.toFixed(1) + "s";
}

function renderQuestion(){
  const q = state.round[state.idx];
  document.getElementById("turnNo").textContent = String(state.idx + 1);
  document.getElementById("question").textContent = q.q;
  const out = document.getElementById("out");
  out.classList.add("hidden");
  out.innerHTML = "";
}

function handleAnswer(choice){
  if(!state.accepting) return;
  state.accepting = false;
  const out = document.getElementById("out");
  const current = state.round[state.idx];
  const ok = choice === current.a;

  out.classList.remove("hidden");
  out.innerHTML = `
    <div class="${ok ? 'feedbackGood' : 'feedbackBad'}">${ok ? "✔ Correct" : "✖ Not this time"}</div>
    <div style="margin-top:8px;">${current.tip}</div>
  `;

  if(ok) {
    state.correct++;
    toneGood();
  } else {
    toneBad();
  }

  setTimeout(() => {
    state.idx++;
    if(state.idx >= 10){
      finishLevel();
    } else {
      renderQuestion();
      state.accepting = true;
    }
  }, 650);
}

function finishLevel(){
  clearInterval(state.timerInt);
  state.timerInt = null;
  const elapsed = (performance.now() - state.startMs) / 1000;
  const lvl = LEVELS.find(x => x.id === state.currentLevel) || LEVELS[0];
  const oldBest = getBest(lvl.id);
  let best = oldBest;

  if(oldBest === 0 || elapsed < oldBest){
    setBest(lvl.id, elapsed);
    best = elapsed;
  }

  let unlockedNew = false;
  if(state.correct === 10 && state.unlocked === lvl.id && lvl.id < LEVELS.length){
    state.unlocked++;
    localStorage.setItem(STORAGE_UNLOCKED, String(state.unlocked));
    unlockedNew = true;
  }

  const out = document.getElementById("out");
  out.classList.remove("hidden");
  out.innerHTML = `
    <div style="font-weight:900;font-size:1.25rem;margin-bottom:8px;">
      ${oldBest === 0 || elapsed < oldBest ? "New High Score!" : (state.correct === 10 ? "Level Cleared!" : "Round Complete")}
    </div>
    <div style="margin-bottom:8px;"><strong>${lvl.title}</strong> • ${lvl.subtitle}</div>
    <div style="margin-bottom:8px;">Score: <strong>${state.correct}/10</strong></div>
    <div style="margin-bottom:8px;">Time: <strong>${elapsed.toFixed(1)}s</strong></div>
    <div style="margin-bottom:14px;">Best time: <strong>${best.toFixed(1)}s</strong></div>
    <div class="controls" style="justify-content:center;">
      <button id="againBtn" type="button">Play Again</button>
      <button id="levelsBtn" class="ghost" type="button">Back to Levels</button>
    </div>
    <div class="tiny">${unlockedNew ? "Next level unlocked." : "Best time is stored on the level tile."}</div>
  `;
  toneWin();
  if(state.correct === 10 || oldBest === 0 || elapsed < oldBest) launchConfetti();

  document.getElementById("againBtn").onclick = startLevel;
  document.getElementById("levelsBtn").onclick = () => location.href = "index.html";
}

if(isHome) renderHome();
if(isPlay) startLevel();
