document.addEventListener('DOMContentLoaded', () => {
    const normal = document.getElementById('aNormal');
    const minimalista = document.getElementById('aMinimalista');

    normal.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.className = 'normal';
    });

    minimalista.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.className = 'minimalista';
    });
});
