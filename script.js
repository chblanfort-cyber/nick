const choices = ['rock', 'paper', 'scissors'];
const emojis = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
};

let playerScore = 0;
let computerScore = 0;

const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const resultText = document.getElementById('result-text');
const playerChoiceEl = document.getElementById('player-choice');
const computerChoiceEl = document.getElementById('computer-choice');

document.querySelectorAll('.choice-btn').forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.dataset.choice);
    });
});

document.getElementById('reset-btn').addEventListener('click', resetGame);

function playRound(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    playerChoiceEl.textContent = emojis[playerChoice] + ' ' + playerChoice;
    computerChoiceEl.textContent = emojis[computerChoice] + ' ' + computerChoice;

    if (playerChoice === computerChoice) {
        resultText.textContent = "It's a tie!";
        resultText.style.color = '#ffd93d';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultText.textContent = 'You win this round! 🎉';
        resultText.style.color = '#6bcb77';
        playerScore++;
        playerScoreEl.textContent = playerScore;
    } else {
        resultText.textContent = 'Computer wins this round 😅';
        resultText.style.color = '#ff6b6b';
        computerScore++;
        computerScoreEl.textContent = computerScore;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = '0';
    computerScoreEl.textContent = '0';
    resultText.textContent = 'Make your move!';
    resultText.style.color = 'white';
    playerChoiceEl.textContent = '—';
    computerChoiceEl.textContent = '—';
}
