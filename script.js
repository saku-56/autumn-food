document.addEventListener('DOMContentLoaded', function() {
  // 慰めボタンの処理
  const comfortButton = document.getElementById('comfort-btn');
  const comfortDisplay = document.getElementById('comfort-display');

  comfortButton.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * comfortMessages.length);
    const randomMessage = comfortMessages[randomIndex];

    displayMessage(comfortDisplay, randomMessage);
  });

  // 誘惑ボタンの処理
  const temptationButton = document.getElementById('temptation-btn');
  const temptationDisplay = document.getElementById('temptation-display');

  temptationButton.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * temptationMessages.length);
    const randomMessage = temptationMessages[randomIndex];

    displayMessage(temptationDisplay, randomMessage);
  });

  // メッセージ表示の共通関数
  function displayMessage(displayElement, message) {
    displayElement.textContent = message;
    displayElement.style.opacity = '0';
    setTimeout(() => {
      displayElement.style.opacity = '1';
    }, 100);
  }
});
