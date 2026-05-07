const kanaToRomaji = {
    'あ': ['a', 'u', 'ua'], 'い': ['i', 'ui'], 'う': ['u', 'wu', 'whu'], 'え': ['e', 'ei'], 'お': ['o', 'ou'],
    'か': ['ka', 'ca'], 'き': ['ki'], 'く': ['ku', 'cu', 'qu'], 'け': ['ke'], 'こ': ['ko', 'co'],
    'さ': ['sa'], 'し': ['si', 'shi', 'ci'], 'す': ['su'], 'せ': ['se', 'ce'], 'そ': ['so'],
    'た': ['ta'], 'ち': ['ti', 'chi'], 'つ': ['tu', 'tsu'], 'て': ['te'], 'と': ['to'],
    'な': ['na'], 'に': ['ni'], 'ぬ': ['nu'], 'ね': ['ne'], 'の': ['no'],
    'は': ['ha'], 'ひ': ['hi'], 'ふ': ['fu', 'hu'], 'へ': ['he'], 'ほ': ['ho'],
    'ま': ['ma'], 'み': ['mi'], 'む': ['mu'], 'め': ['me'], 'も': ['mo'],
    'や': ['ya'], 'ゆ': ['yu'], 'よ': ['yo'],
    'ら': ['ra'], 'り': ['ri'], 'る': ['ru'], 'れ': ['re'], 'ろ': ['ro'],
    'わ': ['wa'], 'を': ['wo'], 'ん': ['nn', 'xn', 'n'],
    'が': ['ga'], 'ぎ': ['gi'], 'ぐ': ['gu'], 'げ': ['ge'], 'ご': ['go'],
    'ざ': ['za'], 'じ': ['zi', 'ji'], 'ず': ['zu'], 'ぜ': ['ze'], 'ぞ': ['zo'],
    'だ': ['da'], 'ぢ': ['di'], 'づ': ['du'], 'で': ['de'], 'ど': ['do'],
    'ば': ['ba'], 'び': ['bi'], 'ぶ': ['bu'], 'べ': ['be'], 'ぼ': ['bo'],
    'ぱ': ['pa'], 'ぴ': ['pi'], 'ぷ': ['pu'], 'ぺ': ['pe'], 'ぽ': ['po'],
    'ぁ': ['la', 'xa'], 'ぃ': ['li', 'xi'], 'ぅ': ['lu', 'xu'], 'ぇ': ['le', 'xe'], 'ぉ': ['lo', 'xo'],
    'ゃ': ['lya', 'xya'], 'ゅ': ['lyu', 'xyu'], 'ょ': ['lyo', 'xyo'],
    'っ': ['ltu', 'xtu', 'ltsu'], 'ゎ': ['lwa', 'xwa'],
    'きゃ': ['kya', 'kilya', 'kixya'], 'きゅ': ['kyu', 'kilyu', 'kixyu'], 'きょ': ['kyo', 'kilyo', 'kixyo'],
    'しゃ': ['sya', 'sha', 'silya', 'sixya', 'shilya', 'shixya'], 'しゅ': ['syu', 'shu', 'silyu', 'sixyu', 'shilyu', 'shixyu'], 'しょ': ['syo', 'sho', 'silyo', 'sixyo', 'shilyo', 'shixyo'],
    'ちゃ': ['tya', 'cha', 'tilya', 'tixya', 'chilya', 'chixya'], 'ちゅ': ['tyu', 'chu', 'tilyu', 'tixyu', 'chilyu', 'chixyu'], 'ちょ': ['tyo', 'cho', 'tilyo', 'tixyo', 'chilyo', 'chixya'],
    'にゃ': ['nya', 'nilya', 'nixya'], 'にゅ': ['nyu', 'nilyu', 'nixyu'], 'にょ': ['nyo', 'nilya', 'nixyo'],
    'ひゃ': ['hya', 'hilya', 'hixya'], 'ひゅ': ['hyu', 'hilyu', 'hixyu'], 'ひょ': ['hyo', 'hilya', 'hixyo'],
    'みゃ': ['mya', 'milya', 'mixya'], 'みゅ': ['myu', 'milyu', 'mixyu'], 'みょ': ['myo', 'milya', 'mixyo'],
    'りゃ': ['rya', 'rilya', 'rixya'], 'りゅ': ['ryu', 'rilyu', 'rixyu'], 'りょ': ['ryo', 'rilya', 'rixyo'],
    'ぎゃ': ['gya', 'gilya', 'gixya'], 'ぎゅ': ['gyu', 'gilyu', 'gixyu'], 'ぎょ': ['gyo', 'gilyo', 'gixyo'],
    'じゃ': ['zya', 'ja', 'jya', 'zilya', 'zixya', 'jilya', 'jixya'], 'じゅ': ['zyu', 'ju', 'jyu', 'zilyu', 'zixyu', 'jilyu', 'jixyu'], 'じょ': ['zyo', 'jo', 'jyo', 'zilyo', 'zixyo', 'jilyo', 'jixyo'], 'じぇ': ['zye', 'je', 'jye', 'zilye', 'zixye', 'jilye', 'jixye'],
    'びゃ': ['bya', 'bilya', 'bixya'], 'びゅ': ['byu', 'bilyu', 'bixyu'], 'びょ': ['byo', 'bilyo', 'bixyo'],
    'ぴゃ': ['pya', 'pilya', 'pixya'], 'ぴゅ': ['pyu', 'pilyu', 'pixyu'], 'ぴょ': ['pyo', 'pilya', 'pixyo'],
    'てぃ': ['thi', 'txi', 'teli', 'texi'], 'でぃ': ['dhi', 'dxi', 'deli', 'dexi'],
    'ふぁ': ['fa', 'fwa', 'fula', 'fuxa'], 'ふぃ': ['fi', 'fwi', 'fyi', 'fuli', 'fuhi'], 'ふぇ': ['fe', 'fwe', 'fye', 'fule', 'fuxe'], 'ふぉ': ['fo', 'fwo', 'fulo', 'fuxo'],
    'うぁ': ['wha', 'ula', 'uxa'], 'うぃ': ['wi', 'whi', 'uli', 'uxi'], 'うぇ': ['we', 'whe', 'ule', 'uxe'], 'うぉ': ['who', 'ulo', 'uxo'],
    'ヴぁ': ['va', 'vula', 'vuxa'], 'ヴぃ': ['vi', 'vuli', 'vuxi'], 'ヴ': ['vu'], 'ヴぇ': ['ve', 'vule', 'vuxe'], 'ヴぉ': ['vo', 'vulo', 'vuxo'],
    'くぁ': ['qa', 'kwa', 'qwa', 'kula', 'kuxa'], 'くぃ': ['qi', 'qwi', 'qyi', 'kuli', 'kuxi'], 'くぇ': ['qe', 'qwe', 'qye', 'kule', 'kuxe'], 'くぉ': ['qo', 'qwo', 'kulo', 'kuxo'],
    'ぐぁ': ['gwa', 'gula', 'guxa'], 'つぁ': ['tsa', 'tsula', 'tsuxa'], 'つぃ': ['tsi', 'tsuli', 'tsuxi'], 'つぇ': ['tse', 'tsule', 'tsuxe'], 'つぉ': ['tso', 'tsulo', 'tsuxo'],
    'とぁ': ['twa', 'tola', 'toxa'], 'とぃ': ['twi', 'toli', 'toxi'], 'とぅ': ['twu', 'tolu', 'toxu'], 'とぇ': ['twe', 'tole', 'toxe'], 'とぉ': ['two', 'tolo', 'toxo'],
    'どぁ': ['dwa', 'dola', 'doxa'], 'どぃ': ['dwi', 'doli', 'doxi'], 'どぅ': ['dwu', 'dolu', 'doxu'], 'どぇ': ['dwe', 'dole', 'doxe'], 'どぉ': ['dwo', 'dolo', 'doxo'],
    'ー': ['-'], '、': [','], '。': ['.'], '！': ['!'], '？': ['?'], '!': ['!'], '?': ['?'], ',': [','], '.': ['.']
};

function toFullWidth(str) {
    return str.replace(/[A-Za-z0-9]/g, s => String.fromCharCode(s.charCodeAt(0) + 0xFEE0));
}

class TypingEngine {
    constructor() { this.reset(); }
    reset() {
        this.kanaParts = [];
        this.currentIndex = 0;
        this.currentTyped = "";
        this.completedString = "";
        this.totalKeystrokes = 0;
        this.correctKeystrokes = 0;
    }
    setWord(kanaList) {
        this.reset();
        const rawString = Array.isArray(kanaList) ? kanaList.join('') : kanaList;
        let i = 0;
        while (i < rawString.length) {
            if (i + 1 < rawString.length && kanaToRomaji[rawString.substring(i, i + 2)]) {
                this.kanaParts.push(rawString.substring(i, i + 2));
                i += 2;
            } else {
                this.kanaParts.push(rawString.substring(i, i + 1));
                i++;
            }
        }
    }
    handleInput(key) {
        this.totalKeystrokes++;
        if (this.currentIndex >= this.kanaParts.length) return false;
        const targetKana = this.kanaParts[this.currentIndex];
        let patterns = kanaToRomaji[targetKana] || [targetKana];
        if (targetKana === 'っ' && this.currentIndex + 1 < this.kanaParts.length) {
            const nextPatterns = kanaToRomaji[this.kanaParts[this.currentIndex + 1]];
            if (nextPatterns) patterns = [...patterns, ...new Set(nextPatterns.map(p => p[0]))];
        }
        let nextInput = this.currentTyped + key;
        if (targetKana === 'ん' && this.currentTyped === 'n' && key !== 'n' && key !== "'") {
            if (!patterns.some(p => p.startsWith(nextInput))) {
                this.completedString += 'n';
                this.currentIndex++;
                this.currentTyped = "";
                this.correctKeystrokes++;
                if (this.currentIndex < this.kanaParts.length) return this.handleInput(key);
                return 'completed';
            }
        }
        const validPattern = patterns.find(p => p.startsWith(nextInput));
        if (validPattern) {
            this.currentTyped = nextInput;
            this.correctKeystrokes++;
            if (validPattern === this.currentTyped) {
                this.completedString += this.currentTyped;
                this.currentTyped = "";
                this.currentIndex++;
            }
            if (this.currentIndex >= this.kanaParts.length) return 'completed';
            return 'valid';
        }
        return 'invalid';
    }
    getDisplayHtml() {
        const completedHiragana = this.kanaParts.slice(0, this.currentIndex).join('');
        const currentRomajiFW = toFullWidth(this.currentTyped);
        return `<span class="ime-text">${completedHiragana}${currentRomajiFW}</span><span class="cursor"></span>`;
    }
}

const typer = new TypingEngine();
let currentMode = 'search';
let words = [];
let currentWordIndex = 0;
let startTime = 0;
let isActive = false;

// 統計用変数
let totalCorrectKeys = 0;
let totalMistakes = 0;
let totalKeystrokes = 0;
let wordStartTime = 0;
let firstKeyPressTime = 0;
let totalLatency = 0;
let totalTypingDuration = 0;
let wordsCompleted = 0;
let bonusTimeEarned = 0; // 加算された秒数の合計

const searchInput = document.getElementById('searchInput');
const typingDisplay = document.getElementById('typingDisplay');
const targetText = document.getElementById('targetText');
const kanjiDisplay = document.getElementById('kanjiDisplay');
const kanaDisplay = document.getElementById('kanaDisplay');
const actionBtn = document.getElementById('actionBtn');
const luckyBtn = document.getElementById('luckyBtn');
const stats = document.getElementById('stats');
const sushidaStats = document.getElementById('sushidaStats');
const kpsEl = document.getElementById('kps');
const accuracyEl = document.getElementById('accuracy');
const progressEl = document.getElementById('progress');
const difficultySelect = document.getElementById('difficultySelect');
const showKanji = document.getElementById('showKanji');
const showHiragana = document.getElementById('showHiragana');
const showRomaji = document.getElementById('showRomaji');
const showNone = document.getElementById('showNone');
const shadowOpacityInput = document.getElementById('shadowOpacity');
const settingsBtn = document.getElementById('settingsBtn');
const settingsMenu = document.getElementById('settingsMenu');
const siteTitleInput = document.getElementById('siteTitleInput');
const btn1Input = document.getElementById('btn1Input');
const btn2Input = document.getElementById('btn2Input');
const logoContainer = document.getElementById('logo');
const modeRadios = document.querySelectorAll('input[name="mode"]');

const resultModal = document.getElementById('resultModal');
const closeResultBtn = document.getElementById('closeResultBtn');

function resetStats() {
    totalCorrectKeys = 0;
    totalMistakes = 0;
    totalKeystrokes = 0;
    totalLatency = 0;
    totalTypingDuration = 0;
    wordsCompleted = 0;
    bonusTimeEarned = 0;
    startTime = Date.now();
}

const GOOGLE_COLORS = ['#4285f4', '#ea4335', '#fbbc05', '#4285f4', '#34a853', '#ea4335'];

function updateLogo(text) {
    const val = text || 'My Typing';
    logoContainer.innerHTML = val.split('').map((char, i) => {
        const color = GOOGLE_COLORS[i % GOOGLE_COLORS.length];
        return `<span style="color: ${color}">${char}</span>`;
    }).join('');
    document.title = val;
}

function updateButtons() {
    if (currentMode === 'search') {
        actionBtn.textContent = btn1Input.value || '検索';
        luckyBtn.textContent = btn2Input.value || 'おまかせ';
    } else if (currentMode === 'typing' || currentMode === 'sushida') {
        actionBtn.textContent = 'やり直し';
        luckyBtn.textContent = currentMode === 'typing' ? '次のワード' : '終了';
    }
}

siteTitleInput.addEventListener('input', (e) => {
    updateLogo(e.target.value);
    localStorage.setItem('typingSiteTitle', e.target.value);
});

btn1Input.addEventListener('input', (e) => {
    localStorage.setItem('typingBtn1', e.target.value);
    updateButtons();
});

btn2Input.addEventListener('input', (e) => {
    localStorage.setItem('typingBtn2', e.target.value);
    updateButtons();
});

shadowOpacityInput.addEventListener('input', (e) => {
    const val = e.target.value;
    document.querySelectorAll('.shadow-text').forEach(el => el.style.opacity = val);
    localStorage.setItem('typingShadowOpacity', val);
});

modeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.checked) setMode(e.target.value);
    });
});

settingsBtn.addEventListener('click', (e) => {
    settingsMenu.classList.toggle('hidden');
    e.stopPropagation();
});

document.addEventListener('click', (e) => {
    if (!settingsMenu.contains(e.target) && e.target !== settingsBtn) {
        settingsMenu.classList.add('hidden');
    }
});

async function loadWords() {
    const diff = difficultySelect.value;
    const filename = `words_${diff}.json`;
    try {
        const response = await fetch(filename);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        words = data.list.sort(() => Math.random() - 0.5);
    } catch (e) {
        console.error('Failed to load words:', e);
        words = [{text: '読み込み失敗', kana: ['よ', 'み', 'こ', 'み', 'し', 'っ', 'ぱ', 'い']}];
    }
}

const timeLeftEl = document.getElementById('timeLeft');
const earnedMoneyEl = document.getElementById('earnedMoney');
const comboCountEl = document.getElementById('comboCount');
const dishCountEl = document.getElementById('dishCount');

const SUSHIDA_CONFIG = {
    easy: { fee: 3000, time: 60, cycle: [2,2,2, 3,3,3, 4,4,4, 5,5,5, 6,6,6, 7,7,7, 6,6,6, 5,5,5, 4,4,4, 3,3,3] },
    normal: { fee: 5000, time: 90, cycle: [5,5,5, 6,6,6, 7,7,7, 8,8,8, 9,9,9, 10,10,10, 9,9,9, 8,8,8, 7,7,7, 6,6,6] },
    hard: { fee: 10000, time: 120, cycle: [9,9,9, 10,10,10, 11,11,11, 12,12,12, 13,13,13, 14,14,14, 13,13,13, 12,12,12, 11,11,11, 10,10,10] }
};

let sushidaTimer = 0, sushidaMoney = 0, sushidaCombo = 0, sushidaDishes = 0, sushidaInterval = null, currentCycleIndex = 0, sushidaBonusStage = 0;

function getDishPrice(len) {
    if (len <= 4) return 100;
    if (len <= 6) return 180;
    if (len <= 9) return 240;
    if (len <= 12) return 380;
    return 500;
}

function setMode(mode) {
    currentMode = mode;
    if (sushidaInterval) { clearInterval(sushidaInterval); sushidaInterval = null; }
    document.body.classList.remove('typing-mode', 'typing-started');
    targetText.classList.add('hidden');
    typingDisplay.classList.add('hidden');
    stats.classList.add('hidden');
    sushidaStats.classList.add('hidden');
    isActive = false;
    
    kanjiDisplay.innerHTML = '';
    kanaDisplay.innerHTML = '';
    typingDisplay.innerHTML = '';
    searchInput.value = '';

    if (mode === 'search') {
        searchInput.disabled = false; searchInput.readOnly = false; searchInput.value = ''; searchInput.placeholder = ''; searchInput.focus();
    } else if (mode === 'typing') {
        document.body.classList.add('typing-mode');
        targetText.classList.remove('hidden'); typingDisplay.classList.remove('hidden'); stats.classList.remove('hidden');
        searchInput.disabled = false; searchInput.value = ''; searchInput.placeholder = '何かキーを押して開始'; searchInput.readOnly = true;
        loadWords().then(() => startTyping());
    } else if (mode === 'sushida') {
        document.body.classList.add('typing-mode');
        targetText.classList.remove('hidden'); typingDisplay.classList.remove('hidden'); sushidaStats.classList.remove('hidden');
        searchInput.disabled = false; searchInput.value = ''; searchInput.placeholder = 'キーを押してスタート'; searchInput.readOnly = true;
        loadWords().then(() => startSushida());
    }
    updateButtons();
}

function startSushida() {
    const config = SUSHIDA_CONFIG[difficultySelect.value];
    sushidaTimer = config.time; sushidaMoney = 0; sushidaCombo = 0; sushidaDishes = 0; currentCycleIndex = 0; sushidaBonusStage = 0;
    resetStats();
    isActive = true; document.body.classList.remove('typing-started');
    updateSushidaDisplay(); nextSushidaWord();
}

function nextSushidaWord() {
    const config = SUSHIDA_CONFIG[difficultySelect.value];
    const targetLen = config.cycle[currentCycleIndex];
    let candidates = words.filter(w => {
        const kana = Array.isArray(w.kana) ? w.kana.join('') : w.kana;
        return targetLen >= 14 ? kana.length >= 14 : kana.length === targetLen;
    });
    if (candidates.length === 0) candidates = words;
    const word = candidates[Math.floor(Math.random() * candidates.length)];
    typer.setWord(word.kana);
    currentWordIndex = words.indexOf(word);
    wordStartTime = Date.now();
    firstKeyPressTime = 0;
    updateDisplay();
}

function handleSushidaInput(key) {
    if (!document.body.classList.contains('typing-started')) {
        document.body.classList.add('typing-started');
        searchInput.placeholder = '';
    }
    
    if (firstKeyPressTime === 0) {
        firstKeyPressTime = Date.now();
        totalLatency += (firstKeyPressTime - wordStartTime) / 1000;
    }

    const prevCorrect = typer.correctKeystrokes;
    const res = typer.handleInput(key);
    totalKeystrokes++;

    if (typer.correctKeystrokes > prevCorrect) {
        sushidaCombo++;
        totalCorrectKeys++;
        checkSushidaBonus();
    } else if (res === 'invalid') {
        sushidaCombo = 0;
        totalMistakes++;
    }

    if (res === 'completed') {
        const now = Date.now();
        totalTypingDuration += (now - firstKeyPressTime) / 1000;
        wordsCompleted++;

        const kana = Array.isArray(words[currentWordIndex].kana) ? words[currentWordIndex].kana.join('') : words[currentWordIndex].kana;
        sushidaMoney += getDishPrice(kana.length);
        sushidaDishes++;
        currentCycleIndex = (currentCycleIndex + 1) % SUSHIDA_CONFIG[difficultySelect.value].cycle.length;
        
        if (currentMode === 'sushida' && isActive) nextSushidaWord();
        return;
    }
    updateSushidaDisplay(); updateDisplay();
}

function checkSushidaBonus() {
    let bonus = 0;
    if (sushidaBonusStage === 0 && sushidaCombo >= 28) { bonus = 1; sushidaBonusStage = 1; }
    else if (sushidaBonusStage === 1 && sushidaCombo >= 59) { bonus = 1; sushidaBonusStage = 2; }
    else if (sushidaBonusStage === 2 && sushidaCombo >= 92) { bonus = 2; sushidaBonusStage = 3; }
    else if (sushidaBonusStage === 3 && sushidaCombo >= 130) { bonus = 3; sushidaBonusStage = 0; sushidaCombo = 0; }
    if (bonus > 0) { 
        sushidaTimer += bonus; 
        bonusTimeEarned += bonus; // 統計用に記録
        showBonusEffect(bonus); 
    }
}

function showBonusEffect(sec) {
    const el = document.createElement('div'); el.className = 'sushida-bonus'; el.textContent = `+${sec}秒`;
    const footer = document.querySelector('.footer'); footer.appendChild(el);
    setTimeout(() => el.remove(), 1200);
}

function updateSushidaDisplay() {
    timeLeftEl.textContent = Math.ceil(sushidaTimer);
    earnedMoneyEl.textContent = sushidaMoney.toLocaleString();
    comboCountEl.textContent = sushidaCombo;
    dishCountEl.textContent = sushidaDishes;
}

function startSushidaTimer() {
    if (sushidaInterval) return;
    sushidaInterval = setInterval(() => {
        sushidaTimer -= 0.1;
        if (sushidaTimer <= 0) { sushidaTimer = 0; endSushida(); }
        updateSushidaDisplay();
    }, 100);
}

function endSushida() {
    clearInterval(sushidaInterval); sushidaInterval = null; isActive = false;
    showResult();
}

function showResult() {
    const elapsed = (Date.now() - startTime) / 1000;
    const accuracy = totalKeystrokes > 0 ? (totalCorrectKeys / totalKeystrokes * 100) : 100;
    const kps = totalCorrectKeys / (elapsed || 1);
    const realKps = totalCorrectKeys / (totalTypingDuration || 1);
    const avgLatency = wordsCompleted > 0 ? (totalLatency / wordsCompleted) : 0;
    
    let projected = 0;
    let fee = 0;
    if (currentMode === 'sushida') {
        const config = SUSHIDA_CONFIG[difficultySelect.value];
        fee = config.fee;
        
        // --- 高度な予測計算 ---
        // 1. ミスなしの場合の1単語あたりの平均時間 = 平均Latency + (平均単語文字数 / Real KPS)
        const avgKeysPerWord = wordsCompleted > 0 ? (totalCorrectKeys / wordsCompleted) : 10;
        const timePerWordNoMiss = avgLatency + (avgKeysPerWord / (realKps || 1));
        
        // 2. 理論上の最大制限時間 = 基本時間 + 連打ボーナス期待値
        // ミスなしなら連打は常に続く。130打ごとに7秒(1+1+2+3)加算されるモデル
        const bonusPerKey = 7 / 130; 
        const totalTheoreticalTime = config.time / (1 - (bonusPerKey / timePerWordNoMiss * avgKeysPerWord));
        
        // 3. 予想打鍵数 = 総時間 / 1単語時間 * 平均文字数
        const projectedKeys = (totalTheoreticalTime / (timePerWordNoMiss || 1)) * avgKeysPerWord;
        
        // 4. 金額換算
        const moneyPerKey = wordsCompleted > 0 ? (sushidaMoney / totalCorrectKeys) : 0;
        projected = Math.round(projectedKeys * moneyPerKey);
    }

    const profit = sushidaMoney - fee;

    document.getElementById('resMoney').textContent = currentMode === 'sushida' ? sushidaMoney.toLocaleString() : "-";
    document.getElementById('resCorrect').textContent = totalCorrectKeys;
    document.getElementById('resKps').textContent = kps.toFixed(1);
    document.getElementById('resMiss').textContent = totalMistakes;
    document.getElementById('resFee').textContent = fee.toLocaleString();
    document.getElementById('resProfit').textContent = profit.toLocaleString();
    document.getElementById('resLatency').textContent = avgLatency.toFixed(2);
    document.getElementById('resAccuracy').textContent = Math.round(accuracy);
    document.getElementById('resRealKps').textContent = realKps.toFixed(1);
    document.getElementById('resProjected').textContent = projected.toLocaleString();
    
    resultModal.classList.remove('hidden');
}

closeResultBtn.addEventListener('click', () => {
    resultModal.classList.add('hidden');
    setMode('search');
});

[showKanji, showHiragana, showRomaji, showNone].forEach(el => el && el.addEventListener('change', () => updateDisplay()));

window.addEventListener('keydown', (e) => {
    if (currentMode === 'search') return;
    if (e.key === 'Escape') { setMode('search'); return; }
    if (e.key.length !== 1) return;
    if (currentMode === 'sushida') {
        if (!isActive) return;
        if (!sushidaInterval) startSushidaTimer();
        handleSushidaInput(e.key); return;
    }
    if (currentMode === 'typing') {
        if (!isActive) return;
        if (searchInput.placeholder !== '') searchInput.placeholder = '';
        
        if (firstKeyPressTime === 0) {
            firstKeyPressTime = Date.now();
            totalLatency += (firstKeyPressTime - wordStartTime) / 1000;
        }

        const prevCorrect = typer.correctKeystrokes;
        const res = typer.handleInput(e.key);
        totalKeystrokes++;

        if (typer.correctKeystrokes > prevCorrect) {
            totalCorrectKeys++;
        } else if (res === 'invalid') {
            totalMistakes++;
        }

        if (res === 'completed') {
            const now = Date.now();
            totalTypingDuration += (now - firstKeyPressTime) / 1000;
            wordsCompleted++;

            if (currentMode === 'typing' && isActive) {
                currentWordIndex++; 
                if (currentWordIndex >= words.length) showResult();
                else nextWord();
            }
        } else updateDisplay();
    }
});

function startTyping() {
    resetStats();
    currentWordIndex = 0; isActive = true; nextWord();
}

function nextWord() {
    if (currentWordIndex >= words.length) {
        showResult();
        return;
    }
    typer.setWord(words[currentWordIndex].kana);
    wordStartTime = Date.now();
    firstKeyPressTime = 0;
    updateDisplay();
}

function updateDisplay(isCompleted = false) {
    if (!words || words.length === 0 || !words[currentWordIndex] || !isActive) return;
    const word = words[currentWordIndex];
    
    const opacity = shadowOpacityInput.value;

    if (showKanji && showKanji.checked) {
        const newKanji = `<span class="shadow-text" style="opacity: ${opacity}">${word.text}</span>`;
        if (kanjiDisplay.innerHTML !== newKanji) kanjiDisplay.innerHTML = newKanji;
    } else {
        if (kanjiDisplay.innerHTML !== "") kanjiDisplay.innerHTML = '';
    }

    let displayContent = "";
    if (isCompleted) {
        displayContent = `<span class="ime-text completed">${word.text}</span>`;
    } else {
        const text = word.text;
        const totalKanaParts = typer.kanaParts.length;
        const progress = totalKanaParts > 0 ? (typer.currentIndex / totalKanaParts) : 0;
        
        const completedKanjiCount = Math.floor(text.length * progress);
        const completedKanji = text.substring(0, completedKanjiCount);
        
        const kanaString = typer.kanaParts.join('');
        const kanaProgressCount = text.length > 0 ? Math.floor(kanaString.length * (completedKanjiCount / text.length)) : 0;
        const remainingConfirmedKana = typer.kanaParts.slice(0, typer.currentIndex).join('').substring(kanaProgressCount);
        
        const currentRomajiFW = toFullWidth(typer.currentTyped);
        
        displayContent = `<span class="ime-text">${completedKanji}${remainingConfirmedKana}${currentRomajiFW}</span><span class="cursor"></span>`;
    }
    
    if (typingDisplay.innerHTML !== displayContent) {
        typingDisplay.innerHTML = displayContent;
    }
    typingDisplay.classList.remove('hidden');

    if (showHiragana && showHiragana.checked) {
        const newKana = `<span class="shadow-text" style="opacity: ${opacity}">(${typer.kanaParts.join('')})</span>`;
        if (kanaDisplay.innerHTML !== newKana) {
            kanaDisplay.innerHTML = newKana;
        }
        kanaDisplay.style.display = 'inline';
    } else {
        kanaDisplay.style.display = 'none';
    }
    
    const newProgress = `${currentWordIndex + 1}/${words.length}`;
    if (progressEl.textContent !== newProgress) progressEl.textContent = newProgress;
    
    if (startTime > 0) {
        const elapsed = (Date.now() - startTime) / 1000;
        const newKps = (totalCorrectKeys / (elapsed || 1)).toFixed(1);
        if (kpsEl.textContent !== newKps) kpsEl.textContent = newKps;
        
        const newAccuracy = Math.round(totalKeystrokes > 0 ? (totalCorrectKeys / totalKeystrokes * 100) : 100).toString();
        if (accuracyEl.textContent !== newAccuracy) accuracyEl.textContent = newAccuracy;
    }
}

actionBtn.addEventListener('click', () => {
    if (currentMode === 'search') {
        const query = searchInput.value;
        if (query) window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    } else if (currentMode === 'typing') startTyping();
    else if (currentMode === 'sushida') startSushida();
});

luckyBtn.addEventListener('click', () => {
    if (currentMode === 'search') window.location.href = 'https://www.google.com/search?btnI=I&q=google';
    else if (currentMode === 'typing') { currentWordIndex++; nextWord(); }
    else if (currentMode === 'sushida') endSushida();
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && currentMode === 'search') actionBtn.click();
});

const savedTitle = localStorage.getItem('typingSiteTitle') || 'My Typing';
siteTitleInput.value = savedTitle; updateLogo(savedTitle);

const savedBtn1 = localStorage.getItem('typingBtn1') || '検索';
btn1Input.value = savedBtn1;
const savedBtn2 = localStorage.getItem('typingBtn2') || 'おまかせ';
btn2Input.value = savedBtn2;

const savedOpacity = localStorage.getItem('typingShadowOpacity') || '0.2';
shadowOpacityInput.value = savedOpacity;

setMode('search');
