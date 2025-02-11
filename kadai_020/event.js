const clickBtn = document.getElementById('btn');
clickBtn?.addEventListener('click', () => {
    const text = document.getElementById('text');
    const newText = document.createElement('h2');
    newText.textContent = 'ボタンをクリックしました';
    text?.replaceWith(newText);
});