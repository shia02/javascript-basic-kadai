const clickBtn = document.getElementById('btn');
clickBtn?.addEventListener('click', () => {
    const text = document.getElementById('text');
    if (text) {
        text.innerHTML = 'ボタンをクリックしました';
    }
});