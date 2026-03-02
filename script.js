/*
  TURBO Verbs (Spanish)
  - Gameplay logic preserved: same levels, timer, 10 questions, 30s penalty, unlock rule.
  - Upgrades added for kids + accessibility:
    * 🔊 Read questions (speech synthesis)
    * 🎙 Dictate answers (speech recognition, where supported)
    * Simple sound effects + PERFECT fanfare
    * Confetti on perfect round
  - Verb pool changed to ONLY the verbs requested.
*/

// -----------------------------
// 1) VERB DATA (only requested verbs)
// -----------------------------

const SUBJECTS_PRESENT = [
  { en: "I", neg: "I do not", q: "Do I" },
  { en: "You", neg: "You do not", q: "Do you" },
  { en: "He", neg: "He does not", q: "Does he" },
  { en: "She", neg: "She does not", q: "Does she" },
  { en: "We", neg: "We do not", q: "Do we" },
  { en: "They", neg: "They do not", q: "Do they" },
];

const SUBJECTS_PAST = [
  { en: "I", neg: "I did not", q: "Did I" },
  { en: "You", neg: "You did not", q: "Did you" },
  { en: "He", neg: "He did not", q: "Did he" },
  { en: "She", neg: "She did not", q: "Did she" },
  { en: "We", neg: "We did not", q: "Did we" },
  { en: "They", neg: "They did not", q: "Did they" },
];

const SUBJECTS_FUTURE = [
  { en: "I", neg: "I will not", q: "Will I" },
  { en: "You", neg: "You will not", q: "Will you" },
  { en: "He", neg: "He will not", q: "Will he" },
  { en: "She", neg: "She will not", q: "Will she" },
  { en: "We", neg: "We will not", q: "Will we" },
  { en: "They", neg: "They will not", q: "Will they" },
];

// Each verb defines English base + Spanish conjugations for (I,You,He,She,We,They)
// gustar/encantar are naturally expressed with me/te/le/nos/les
const VERBS = [
  {
    key: "querer",
    enBase: "want",
    es: {
      Present: ["quiero", "quieres", "quiere", "quiere", "queremos", "quieren"],
      Past: ["quise", "quisiste", "quiso", "quiso", "quisimos", "quisieron"],
      Future: ["querré", "querrás", "querrá", "querrá", "querremos", "querrán"],
    }
  },
  {
    key: "preparar",
    enBase: "prepare",
    es: {
      Present: ["preparo", "preparas", "prepara", "prepara", "preparamos", "preparan"],
      Past: ["preparé", "preparaste", "preparó", "preparó", "preparamos", "prepararon"],
      Future: ["prepararé", "prepararás", "preparará", "preparará", "prepararemos", "prepararán"],
    }
  },
  {
    key: "beber",
    enBase: "drink",
    es: {
      Present: ["bebo", "bebes", "bebe", "bebe", "bebemos", "beben"],
      Past: ["bebí", "bebiste", "bebió", "bebió", "bebimos", "bebieron"],
      Future: ["beberé", "beberás", "beberá", "beberá", "beberemos", "beberán"],
    }
  },
  {
    key: "comer",
    enBase: "eat",
    es: {
      Present: ["como", "comes", "come", "come", "comemos", "comen"],
      Past: ["comí", "comiste", "comió", "comió", "comimos", "comieron"],
      Future: ["comeré", "comerás", "comerá", "comerá", "comeremos", "comerán"],
    }
  },
  {
    key: "escribir",
    enBase: "write",
    es: {
      Present: ["escribo", "escribes", "escribe", "escribe", "escribimos", "escriben"],
      Past: ["escribí", "escribiste", "escribió", "escribió", "escribimos", "escribieron"],
      Future: ["escribiré", "escribirás", "escribirá", "escribirá", "escribiremos", "escribirán"],
    }
  },
  {
    key: "estudiar",
    enBase: "study",
    es: {
      Present: ["estudio", "estudias", "estudia", "estudia", "estudiamos", "estudian"],
      Past: ["estudié", "estudiaste", "estudió", "estudió", "estudiamos", "estudiaron"],
      Future: ["estudiaré", "estudiarás", "estudiará", "estudiará", "estudiaremos", "estudiarán"],
    }
  },
  {
    key: "cantar",
    enBase: "sing",
    es: {
      Present: ["canto", "cantas", "canta", "canta", "cantamos", "cantan"],
      Past: ["canté", "cantaste", "cantó", "cantó", "cantamos", "cantaron"],
      Future: ["cantaré", "cantarás", "cantará", "cantará", "cantaremos", "cantarán"],
    }
  },
  {
    key: "ir",
    enBase: "go",
    es: {
      Present: ["voy", "vas", "va", "va", "vamos", "van"],
      Past: ["fui", "fuiste", "fue", "fue", "fuimos", "fueron"],
      Future: ["iré", "irás", "irá", "irá", "iremos", "irán"],
    }
  },
  {
    key: "vivir",
    enBase: "live",
    es: {
      Present: ["vivo", "vives", "vive", "vive", "vivimos", "viven"],
      Past: ["viví", "viviste", "vivió", "vivió", "vivimos", "vivieron"],
      Future: ["viviré", "vivirás", "vivirá", "vivirá", "viviremos", "vivirán"],
    }
  },
  {
    key: "tener",
    enBase: "have",
    es: {
      Present: ["tengo", "tienes", "tiene", "tiene", "tenemos", "tienen"],
      Past: ["tuve", "tuviste", "tuvo", "tuvo", "tuvimos", "tuvieron"],
      Future: ["tendré", "tendrás", "tendrá", "tendrá", "tendremos", "tendrán"],
    }
  },
  {
    key: "conducir",
    enBase: "drive",
    es: {
      Present: ["conduzco", "conduces", "conduce", "conduce", "conducimos", "conducen"],
      Past: ["conduje", "condujiste", "condujo", "condujo", "condujimos", "condujeron"],
      Future: ["conduciré", "conducirás", "conducirá", "conducirá", "conduciremos", "conducirán"],
    }
  },
  {
    key: "quemar",
    enBase: "burn",
    es: {
      Present: ["quemo", "quemas", "quema", "quema", "quemamos", "queman"],
      Past: ["quemé", "quemaste", "quemó", "quemó", "quemamos", "quemaron"],
      Future: ["quemaré", "quemarás", "quemará", "quemará", "quemaremos", "quemarán"],
    }
  },
  {
    key: "gustar",
    enBase: "like",
    special: "gustar",
    es: {
      Present: ["me gusta", "te gusta", "le gusta", "le gusta", "nos gusta", "les gusta"],
      Past: ["me gustó", "te gustó", "le gustó", "le gustó", "nos gustó", "les gustó"],
      Future: ["me gustará", "te gustará", "le gustará", "le gustará", "nos gustará", "les gustará"],
    }
  },
  {
    key: "encantar",
    enBase: "love",
    special: "encantar",
    es: {
      Present: ["me encanta", "te encanta", "le encanta", "le encanta", "nos encanta", "les encanta"],
      Past: ["me encantó", "te encantó", "le encantó", "le encantó", "nos encantó", "les encantó"],
      Future: ["me encantará", "te encantará", "le encantará", "le encantará", "nos encantará", "les encantará"],
    }
  },
  {
    key: "abrir",
    enBase: "open",
    es: {
      Present: ["abro", "abres", "abre", "abre", "abrimos", "abren"],
      Past: ["abrí", "abriste", "abrió", "abrió", "abrimos", "abrieron"],
      Future: ["abriré", "abrirás", "abrirá", "abrirá", "abriremos", "abrirán"],
    }
  },
  {
    key: "cerrar",
    enBase: "close",
    es: {
      Present: ["cierro", "cierras", "cierra", "cierra", "cerramos", "cierran"],
      Past: ["cerré", "cerraste", "cerró", "cerró", "cerramos", "cerraron"],
      Future: ["cerraré", "cerrarás", "cerrará", "cerrará", "cerraremos", "cerrarán"],
    }
  },
  {
    key: "jugar",
    enBase: "play",
    es: {
      Present: ["juego", "juegas", "juega", "juega", "jugamos", "juegan"],
      Past: ["jugué", "jugaste", "jugó", "jugó", "jugamos", "jugaron"],
      Future: ["jugaré", "jugarás", "jugará", "jugará", "jugaremos", "jugarán"],
    }
  },
  {
    key: "nadar",
    enBase: "swim",
    es: {
      Present: ["nado", "nadas", "nada", "nada", "nadamos", "nadan"],
      Past: ["nadé", "nadaste", "nadó", "nadó", "nadamos", "nadaron"],
      Future: ["nadaré", "nadarás", "nadará", "nadará", "nadaremos", "nadarán"],
    }
  },
  {
    key: "dibujar",
    enBase: "draw",
    es: {
      Present: ["dibujo", "dibujas", "dibuja", "dibuja", "dibujamos", "dibujan"],
      Past: ["dibujé", "dibujaste", "dibujó", "dibujó", "dibujamos", "dibujaron"],
      Future: ["dibujaré", "dibujarás", "dibujará", "dibujará", "dibujaremos", "dibujarán"],
    }
  },
  {
    key: "lavar",
    enBase: "wash",
    es: {
      Present: ["lavo", "lavas", "lava", "lava", "lavamos", "lavan"],
      Past: ["lavé", "lavaste", "lavó", "lavó", "lavamos", "lavaron"],
      Future: ["lavaré", "lavarás", "lavará", "lavará", "lavaremos", "lavarán"],
    }
  },
  {
    key: "saludar",
    enBase: "greet",
    es: {
      Present: ["saludo", "saludas", "saluda", "saluda", "saludamos", "saludan"],
      Past: ["saludé", "saludaste", "saludó", "saludó", "saludamos", "saludaron"],
      Future: ["saludaré", "saludarás", "saludará", "saludará", "saludaremos", "saludarán"],
    }
  },
  {
    key: "ganar",
    enBase: "win",
    es: {
      Present: ["gano", "ganas", "gana", "gana", "ganamos", "ganan"],
      Past: ["gané", "ganaste", "ganó", "ganó", "ganamos", "ganaron"],
      Future: ["ganaré", "ganarás", "ganará", "ganará", "ganaremos", "ganarán"],
    }
  },
  {
    key: "perder",
    enBase: "lose",
    es: {
      Present: ["pierdo", "pierdes", "pierde", "pierde", "perdemos", "pierden"],
      Past: ["perdí", "perdiste", "perdió", "perdió", "perdimos", "perdieron"],
      Future: ["perderé", "perderás", "perderá", "perderá", "perderemos", "perderán"],
    }
  },
  {
    key: "ver",
    enBase: "see",
    es: {
      Present: ["veo", "ves", "ve", "ve", "vemos", "ven"],
      Past: ["vi", "viste", "vio", "vio", "vimos", "vieron"],
      Future: ["veré", "verás", "verá", "verá", "veremos", "verán"],
    }
  },
  {
    key: "llevar",
    enBase: "carry",
    es: {
      Present: ["llevo", "llevas", "lleva", "lleva", "llevamos", "llevan"],
      Past: ["llevé", "llevaste", "llevó", "llevó", "llevamos", "llevaron"],
      Future: ["llevaré", "llevarás", "llevará", "llevará", "llevaremos", "llevarán"],
    }
  },
];

function cap(word){
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function buildVerbSets(){
  const sets = { Present: [], Past: [], Future: [] };

  for (const v of VERBS) {
    // Present
    SUBJECTS_PRESENT.forEach((s, idx) => {
      const enPos = `${s.en} ${v.enBase}${(s.en === "He" || s.en === "She") ? "s" : ""}`;
      const enNeg = `${s.neg} ${v.enBase}`;
      const enQ = `${s.q} ${v.enBase}?`;
      const esPos = v.es.Present[idx];
      sets.Present.push(
        { en: enPos, es: esPos },
        { en: enNeg, es: `no ${esPos}` },
        { en: enQ, es: `${esPos}?` },
      );
    });

    // Past
    SUBJECTS_PAST.forEach((s, idx) => {
      const enPos = `${s.en} ${v.enBase}ed`;
      // Handle common irregular English pasts for kid clarity
      const irregularPast = {
        go: "went",
        eat: "ate",
        drink: "drank",
        write: "wrote",
        sing: "sang",
        see: "saw",
        have: "had",
        lose: "lost",
        win: "won",
        drive: "drove",
        draw: "drew",
      };
      const pastVerb = irregularPast[v.enBase] || (v.enBase.endsWith("e") ? `${v.enBase}d` : `${v.enBase}ed`);

      const enPosFixed = `${s.en} ${pastVerb}`;
      const enNeg = `${s.neg} ${v.enBase}`;
      const enQ = `${s.q} ${v.enBase}?`;
      const esPos = v.es.Past[idx];

      sets.Past.push(
        { en: enPosFixed, es: esPos },
        { en: enNeg, es: `no ${esPos}` },
        { en: enQ, es: `${esPos}?` },
      );
    });

    // Future
    SUBJECTS_FUTURE.forEach((s, idx) => {
      const enPos = `${s.en} will ${v.enBase}`;
      const enNeg = `${s.neg} ${v.enBase}`;
      const enQ = `${s.q} ${v.enBase}?`;
      const esPos = v.es.Future[idx];

      sets.Future.push(
        { en: enPos, es: esPos },
        { en: enNeg, es: `no ${esPos}` },
        { en: enQ, es: `${esPos}?` },
      );
    });
  }

  return sets;
}

const VERB_SETS = buildVerbSets();

// -----------------------------
// 2) STATE
// -----------------------------

let currentTense = "Present";
let currentLevel = 1;
let unlockedLevels = { Present: 1, Past: 1, Future: 1 };
let gameVerbs = [];
let startTime, timerInterval;

// -----------------------------
// 3) DOM
// -----------------------------

const tenseButtons = document.querySelectorAll(".tense-button");
const levelList = document.getElementById("level-list");
const gameContainer = document.getElementById("game");
const questionsContainer = document.getElementById("questions");
const resultsContainer = document.getElementById("results");

const readAllBtn = document.getElementById("read-all");
const stopReadingBtn = document.getElementById("stop-reading");
const soundToggle = document.getElementById("sound-toggle");
const voiceToggle = document.getElementById("voice-toggle");
const arcadeToggle = document.getElementById("arcade-toggle");
const startVoiceToggle = document.getElementById("startvoice-toggle");

// -----------------------------
// 4) VOICE + DICTATION
// -----------------------------

function voiceEnabled(){
  return !!(voiceToggle && voiceToggle.checked);
}
function soundEnabled(){
  return !!(soundToggle && soundToggle.checked);
}

function arcadeEnabled(){
  return !!(arcadeToggle && arcadeToggle.checked);
}

function startVoiceEnabled(){
  return !!(startVoiceToggle && startVoiceToggle.checked);
}

function stopSpeaking(){
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function speak(text, lang){
  if (!voiceEnabled()) return;
  if (!("speechSynthesis" in window)) return;

  stopSpeaking();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = 1.0;
  u.pitch = 1.0;
  window.speechSynthesis.speak(u);
}

const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
function canDictate(){
  return !!SpeechRec;
}

function dictateInto(input){
  if (!voiceEnabled()) return;
  if (!canDictate()) {
    // If dictation isn't supported, just read a quick hint.
    speak("Dictation not supported on this browser.", "en-GB");
    return;
  }

  const rec = new SpeechRec();
  rec.lang = "es-ES";
  rec.interimResults = false;
  rec.maxAlternatives = 1;

  // Little UX: show listening state
  input.classList.add("listening");
  try { rec.start(); } catch { /* ignore */ }

  rec.onresult = (e) => {
    const txt = (e.results?.[0]?.[0]?.transcript || "").trim();
    input.value = txt;
    input.focus();
  };
  rec.onerror = () => {};
  rec.onend = () => input.classList.remove("listening");
}

// Read all questions in order
async function readAllQuestions(){
  if (!voiceEnabled()) return;
  const prompts = Array.from(document.querySelectorAll(".qPrompt"))
    .map(el => el.textContent.trim())
    .filter(Boolean);

  if (!prompts.length) return;

  // Speak sequentially: use utterance end events
  stopSpeaking();

  let i = 0;
  const speakNext = () => {
    if (i >= prompts.length) return;
    const u = new SpeechSynthesisUtterance(prompts[i]);
    u.lang = "en-GB";
    u.rate = 1.0;
    u.onend = () => { i++; speakNext(); };
    window.speechSynthesis.speak(u);
  };
  speakNext();
}

if (readAllBtn) readAllBtn.addEventListener("click", readAllQuestions);
if (stopReadingBtn) stopReadingBtn.addEventListener("click", stopSpeaking);

// -----------------------------
// 5) SOUND FX (no external files)
// -----------------------------

let audioCtx = null;
function ctx(){
  if (!soundEnabled()) return null;
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume().catch(()=>{});
  return audioCtx;
}

function beep(freq, durationMs, when=0){
  const c = ctx();
  if (!c) return;
  const t0 = c.currentTime + when;

  const osc = c.createOscillator();
  const gain = c.createGain();

  osc.type = "triangle";
  osc.frequency.setValueAtTime(freq, t0);
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(0.35, t0 + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + durationMs/1000);

  osc.connect(gain);
  gain.connect(c.destination);

  osc.start(t0);
  osc.stop(t0 + durationMs/1000 + 0.02);
}

function sfxClick(){
  beep(520, 60, 0);
}
function sfxCorrect(){
  beep(660, 80, 0);
  beep(880, 80, 0.08);
}
function sfxWrong(){
  beep(220, 140, 0);
}
function sfxUnlock(){
  beep(523.25, 90, 0);
  beep(659.25, 90, 0.10);
  beep(783.99, 140, 0.20);
}
function sfxFanfare(){
  // A quick “victory” riff
  beep(523.25, 100, 0);
  beep(659.25, 100, 0.12);
  beep(783.99, 120, 0.24);
  beep(1046.5, 180, 0.40);
  beep(1318.5, 220, 0.62);
}

// -----------------------------
// 6) CONFETTI
// -----------------------------

function confettiBurst(){
  const colors = ["#ff6f61", "#6e7fca", "#1abc9c", "#f39c12", "#2ecc71", "#e74c3c"]; // only used for confetti pieces
  const count = 42;
  for (let i=0;i<count;i++){
    const d = document.createElement("div");
    d.className = "confetti";
    d.style.left = Math.random()*100 + "vw";
    d.style.background = colors[Math.floor(Math.random()*colors.length)];
    d.style.transform = `translateY(-10px) rotate(${Math.random()*360}deg)`;
    d.style.animationDuration = (1100 + Math.random()*900) + "ms";
    d.style.width = (6 + Math.random()*10) + "px";
    d.style.height = (8 + Math.random()*16) + "px";
    document.body.appendChild(d);
    setTimeout(()=>d.remove(), 2200);
  }

function spawnSparkNear(el){
  if (!arcadeEnabled()) return;
  try{
    const r = el.getBoundingClientRect();
    const s = document.createElement("div");
    s.className = "spark";
    s.style.left = (r.left + r.width*0.6) + "px";
    s.style.top = (r.top + r.height*0.35) + "px";
    document.body.appendChild(s);
    setTimeout(()=>s.remove(), 900);
  }catch(e){}
}

function showComboBanner(text){
  if (!arcadeEnabled()) return;
  const b = document.createElement("div");
  b.className = "comboBanner";
  b.textContent = text;
  document.body.appendChild(b);
  setTimeout(()=>b.remove(), 900);
}

function showTrophy(text){
  if (!arcadeEnabled()) return;
  const o = document.createElement("div");
  o.className = "trophyOverlay";
  o.innerHTML = `<div class="trophyCard">🏆<div class="trophyText">${text}</div></div>`;
  document.body.appendChild(o);
  setTimeout(()=>o.remove(), 1400);
}
}

// -----------------------------
// 7) GAME UI + LOGIC (preserved)
// -----------------------------

// Tense buttons
const tenseButtonSfx = () => { if (soundEnabled()) sfxClick(); };

tenseButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tenseButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentTense = btn.dataset.tense;
    tenseButtonSfx();
    renderLevels();
  });
});

renderLevels();

function renderLevels() {
  levelList.style.display = "flex";
  gameContainer.style.display = "none";
  levelList.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const button = document.createElement("button");
    const bestTimeKey = `bestTime_${currentTense}_Level${i}`;
    const bestTime = localStorage.getItem(bestTimeKey);
    const locked = i > unlockedLevels[currentTense];

    button.textContent = locked ? `Level ${i} 🔒` : `Level ${i}${bestTime ? ` - Best: ${bestTime}s` : ""}`;
    button.disabled = locked;

    button.addEventListener("click", () => {
      if (soundEnabled()) sfxClick();
      startGame(i);
    });

    levelList.appendChild(button);
  }
}

function startGame(level) {
  currentLevel = level;
  gameVerbs = shuffleArray([...VERB_SETS[currentTense]]).slice(0, 10);

  levelList.style.display = "none";
  gameContainer.style.display = "block";
  questionsContainer.innerHTML = "";
  resultsContainer.innerHTML = "";

  gameVerbs.forEach((verb, idx) => {
    const row = document.createElement("div");
    row.className = "qRow";

    const prompt = document.createElement("div");
    prompt.className = "qPrompt";
    prompt.innerHTML = `<strong>${verb.en}</strong>`;

    const inputWrap = document.createElement("div");
    const input = document.createElement("input");
    input.type = "text";
    input.setAttribute("data-answer", verb.es);
    input.setAttribute("inputmode", "text");
    input.autocomplete = "off";
    input.spellcheck = false;

    // Small “read prompt” on focus (optional but light)
    input.addEventListener("focus", () => {
      if (voiceEnabled()) speak(verb.en, "en-GB");
    });

    inputWrap.appendChild(input);

    const tools = document.createElement("div");
    tools.className = "qTools";

    const speakBtn = document.createElement("button");
    speakBtn.className = "iconBtn";
    speakBtn.type = "button";
    speakBtn.title = "Read the English prompt";
    speakBtn.textContent = "🔊";
    speakBtn.addEventListener("click", () => speak(verb.en, "en-GB"));

    const micBtn = document.createElement("button");
    micBtn.className = "iconBtn";
    micBtn.type = "button";
    micBtn.title = canDictate() ? "Dictate your Spanish answer" : "Dictation not supported";
    micBtn.textContent = "🎙";
    micBtn.disabled = !canDictate();
    micBtn.addEventListener("click", () => dictateInto(input));

    tools.appendChild(speakBtn);
    tools.appendChild(micBtn);

    row.appendChild(prompt);
    row.appendChild(inputWrap);
    row.appendChild(tools);
    questionsContainer.appendChild(row);

    // Auto-focus first input
    if (idx === 0) setTimeout(()=>input.focus(), 40);
  });

  startTimer();

  // Optional hype voice at start (doesn't change gameplay)
  if (startVoiceEnabled() && voiceEnabled()) {
    speak(`Level ${currentLevel}. Go!`, "en-GB");
  }

}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("timer").textContent = `Time: ${elapsed}s`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

document.getElementById("submit").addEventListener("click", () => {
  stopSpeaking();
  stopTimer();

  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  let penalty = 0;
  let correct = 0;
  let combo = 0;

  document.querySelectorAll("#questions input").forEach(input => {
    const expected = (input.dataset.answer || "").trim();
    const given = input.value.trim().toLowerCase();
    const expectedLower = expected.toLowerCase();

    if (given === expectedLower) {
      correct++;
      combo++;
      input.style.border = "2px solid green";
      input.classList.add("popCorrect");
      spawnSparkNear(input);
      if (combo === 3) showComboBanner("🔥 TRIPLE!");
      if (combo === 5) showComboBanner("⚡ SUPER!");
      if (combo === 7) showComboBanner("🚀 MEGA!");
      if (soundEnabled()) sfxCorrect();
      setTimeout(()=>input.classList.remove("popCorrect"), 700);
    } else {
      combo = 0;
      penalty += 30;
      input.style.border = "2px solid red";
      if (soundEnabled()) sfxWrong();
    }
  });

  const totalTime = elapsed + penalty;
  resultsContainer.innerHTML = `<h3>Game Over!</h3><p>Correct: ${correct}/10</p><p>Time: ${elapsed}s + Penalty: ${penalty}s = <strong>${totalTime}s</strong></p><h4>Feedback:</h4>`;

  // Feedback list (unchanged in meaning)
  document.querySelectorAll("#questions input").forEach(input => {
    const correctAnswer = (input.dataset.answer || "").trim();
    const userAnswer = input.value.trim();
    if (userAnswer.toLowerCase() !== correctAnswer.toLowerCase()) {
      const feedback = document.createElement("p");
      // The prompt text is inside the previous siblings in our new layout
      const promptText = input.closest(".qRow")?.querySelector(".qPrompt")?.textContent?.trim() || "";
      feedback.innerHTML = `<strong>${promptText}</strong> → Correct answer: <span style='color: green;'>${correctAnswer}</span> | Your answer: <span style='color: red;'>${userAnswer || "(blank)"}</span>`;
      resultsContainer.appendChild(feedback);

      // Mini speak buttons for correction
      const speakFix = document.createElement("button");
      speakFix.type = "button";
      speakFix.className = "a11yBtn";
      speakFix.style.marginLeft = "8px";
      speakFix.textContent = "🔊";
      speakFix.title = "Read the correct Spanish";
      speakFix.addEventListener("click", () => speak(correctAnswer, "es-ES"));
      feedback.appendChild(speakFix);
    }
  });

  // Save best time
  const bestTimeKey = `bestTime_${currentTense}_Level${currentLevel}`;
  const savedBestTime = localStorage.getItem(bestTimeKey);
  if (!savedBestTime || totalTime < parseInt(savedBestTime)) {
    localStorage.setItem(bestTimeKey, totalTime);
  }

  // Unlock logic unchanged
  if (totalTime <= levelUnlockTime(currentLevel)) {
    if (unlockedLevels[currentTense] < currentLevel + 1) {
      unlockedLevels[currentTense] = currentLevel + 1;
      const unlockMsg = document.createElement("p");
      unlockMsg.style.color = "blue";
      unlockMsg.innerHTML = `<strong>Level ${currentLevel + 1} Unlocked!</strong>`;
      resultsContainer.appendChild(unlockMsg);
      if (soundEnabled()) sfxUnlock();
      showTrophy(`Level ${currentLevel + 1} Unlocked!`);
    }
  }

  // PERFECT round celebration
  if (correct === 10) {
    const celebration = document.createElement("div");
    celebration.className = "perfect-celebration";
    celebration.textContent = "🎉 PERFECT GAME! 🎉";
    resultsContainer.prepend(celebration);

    if (soundEnabled()) sfxFanfare();
    confettiBurst();

    if (voiceEnabled()) speak("Perfect round!", "en-GB");

    setTimeout(() => {
      celebration.remove();
    }, 5000);
  }

  // Buttons
  const tryAgainButton = document.createElement("button");
  tryAgainButton.textContent = "Try Again";
  tryAgainButton.className = "try-again";
  tryAgainButton.onclick = () => {
    if (soundEnabled()) sfxClick();
    startGame(currentLevel);
  };
  resultsContainer.appendChild(tryAgainButton);

  const backButton = document.createElement("button");
  backButton.textContent = "Back to Levels";
  backButton.id = "back-button";
  backButton.onclick = () => {
    if (soundEnabled()) sfxClick();
    renderLevels();
  };
  resultsContainer.appendChild(backButton);
});

function levelUnlockTime(level) {
  return 100 - (level - 1) * 5;
}