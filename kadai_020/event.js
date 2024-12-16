const btnEvent = document.getElementById('btn');

btnEvent.addEventListener('click', () => {
   const textEvent = document.querySelector('h2');
   textEvent.textContent = 'ボタンをクリックしました';
});