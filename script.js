document.addEventListener('DOMContentLoaded', function() {
  // なぐさめボタンの処理
  let comfortClickCount = 0;

  const comfortButton = document.getElementById('comfort-btn');
  const comfortDisplay = document.getElementById('comfort-display');

  comfortButton.addEventListener('click', function() {
    comfortClickCount++;
    if (comfortClickCount === 5) {
    // 5回目の特別メッセージ
    comfortDisplay.textContent = "こんなに押したからもう大丈夫や";
    comfortDisplay.style.cssText = `
    color:rgb(32, 31, 31);
    font-weight: bold;
    font-size: 1.8em;
    text-align: center;
    margin-top: 30px;
    padding: 20px;
    `;

    comfortButton.style.display = "none";
  } else {

    const randomIndex = Math.floor(Math.random() * comfortMessages.length);
    const randomMessage = comfortMessages[randomIndex];

    displayMessage(comfortDisplay, randomMessage);
  }
  });

  // 誘惑ボタンの処理
  let temptationClickCount = 0;
  const temptationButton = document.getElementById('temptation-btn');
  const temptationDisplay = document.getElementById('temptation-display');

  temptationButton.addEventListener('click', function() {

     temptationClickCount++;
    if (temptationClickCount === 7) {
    // 7回目の特別メッセージ
    temptationDisplay.textContent = "こんなに押したのにまだ食べに行かへんの？？";
    temptationDisplay.style.cssText = `
    color:rgb(32, 31, 31);
    font-weight: bold;
    font-size: 1.8em;
    text-align: center;
    margin-top: 30px;
    padding: 20px;
    `;

    temptationButton.style.display = "none";
  } else {

    const randomIndex = Math.floor(Math.random() * temptationMessages.length);
    const randomMessage = temptationMessages[randomIndex];

    displayMessage(temptationDisplay, randomMessage);
  }
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
