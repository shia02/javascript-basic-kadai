const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn?.addEventListener('click', () => {
    setTimeout(() => {
        if (text) {
            text.innerHTML = 'ボタンをクリックしました';
        }
    }, 2000)
});