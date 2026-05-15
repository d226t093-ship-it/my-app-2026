let currentLevelIndex = 0;
let score = 0;
let timeLeft = 0;
let timerInterval = null;
let foundDifferences = [];
let isGameOver = false;

// DOM Elements
const originalImg = document.getElementById('original-img');
const modifiedImg = document.getElementById('modified-img');
const originalOverlay = document.getElementById('original-overlay');
const modifiedOverlay = document.getElementById('modified-overlay');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const totalDiffsDisplay = document.getElementById('total-diffs');
const startScreen = document.getElementById('start-screen');
const resultScreen = document.getElementById('result-screen');
const resultTitle = document.getElementById('result-title');
const resultMessage = document.getElementById('result-message');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

// Initialize Game
function initGame() {
    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', startGame);
    
    // 両方の画像とオーバーレイにクリックイベントを追加
    [originalOverlay, modifiedOverlay].forEach(el => {
        el.style.pointerEvents = 'auto'; // オーバーレイでクリックを受け取る
        el.addEventListener('click', handleImageClick);
    });
}

function startGame() {
    currentLevelIndex = 0;
    loadLevel(currentLevelIndex);
    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    isGameOver = false;
}

function loadLevel(index) {
    const level = levels[index];
    originalImg.src = level.original;
    modifiedImg.src = level.modified;
    
    score = 0;
    timeLeft = level.timeLimit;
    foundDifferences = [];
    
    scoreDisplay.textContent = score;
    totalDiffsDisplay.textContent = level.differences.length;
    timerDisplay.textContent = timeLeft;
    
    // クリア前のマーカーを削除
    originalOverlay.innerHTML = '';
    modifiedOverlay.innerHTML = '';
    
    startTimer();
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            endGame(false, "時間切れ！");
        }
    }, 1000);
}

function handleImageClick(e) {
    if (isGameOver) return;
    
    const level = levels[currentLevelIndex];
    const rect = e.target.getBoundingClientRect();
    
    // クリック位置をパーセンテージで計算
    const clickX = ((e.clientX - rect.left) / rect.width) * 100;
    const clickY = ((e.clientY - rect.top) / rect.height) * 100;
    
    // 未発見の間違いをチェック
    const hit = level.differences.find(diff => {
        if (foundDifferences.includes(diff.id)) return false;
        
        const distance = Math.sqrt(
            Math.pow(clickX - diff.x, 2) + Math.pow(clickY - diff.y, 2)
        );
        return distance <= diff.radius;
    });
    
    if (hit) {
        markDifference(hit);
    }
}

function markDifference(diff) {
    foundDifferences.push(diff.id);
    score++;
    scoreDisplay.textContent = score;
    
    // 両方の画像にマーカーを表示
    [originalOverlay, modifiedOverlay].forEach(overlay => {
        const marker = document.createElement('div');
        marker.className = 'found-marker';
        marker.style.left = `${diff.x}%`;
        marker.style.top = `${diff.y}%`;
        marker.style.width = `${diff.radius * 2}%`;
        
        overlay.appendChild(marker);
    });
    
    if (score === levels[currentLevelIndex].differences.length) {
        endGame(true, "すべての間違いを見つけた！");
    }
}

function endGame(isWin, message) {
    isGameOver = true;
    clearInterval(timerInterval);
    
    resultTitle.textContent = isWin ? "クリア！" : "ゲームオーバー";
    resultMessage.textContent = message;
    resultScreen.classList.add('active');
}

// 起動
document.addEventListener('DOMContentLoaded', initGame);
