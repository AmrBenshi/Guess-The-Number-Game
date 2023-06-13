let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', () => {
    let guessing = document.querySelector('.guessing').value;
    if (!guessing) {
        displayMessage("No Number ")
    } else if (guessing == secretNumber) {
        displayMessage("🎉 Correct Number!")
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else {
        if (score > 5) {
            displayMessage(guessing > secretNumber ? "📈 Too high!" : "📉 Too low!")
            score -= 5;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('body').style.backgroundColor = '#ad0000';
            displayMessage('You Lose!');
            document.querySelector('.score').textContent = 0;
        }
    }
})
document.querySelector('.again').addEventListener('click', () => {
    console.log(score);
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guessing').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
});