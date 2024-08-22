document.querySelector('.load-more').addEventListener('click', () => {
    fetch('https://api.example.com/content')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.content-container');
            data.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('content-item');
                div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
                container.appendChild(div);
            });
        })
        .catch(error => console.error('Error:', error));
});
