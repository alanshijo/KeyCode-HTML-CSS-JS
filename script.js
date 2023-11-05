window.addEventListener('keydown', (e) => {
  const content = document.querySelector('.main');
  content.innerHTML = `
        <div class="container">
            <div class="key">
                key
                <span class="key-code">${e.key === ' ' ? 'Space' : e.key}</span>
            </div>
            <div class="key">
                keyCode
                <span class="key-code">${e.keyCode}</span>
            </div>
            <div class="key">
                code
                <span class="key-code">${e.code}</span>
            </div>
        </div>
    `;
});
