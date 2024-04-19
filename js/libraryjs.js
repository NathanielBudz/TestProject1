document.addEventListener('DOMContentLoaded', () => {
    const genres = {
        'Dystopian': ['The Maze Runner', 'The Hunger Games', 'Divergent'],
        'Science Fiction': ['Ender\'s Game', 'Neuromancer', 'Snow Crash'],
        'Fantasy': ['The Hobbit', 'Harry Potter and the Sorcerer\'s Stone', 'The Name of the Wind']
    };

  
    function displayBooks(query = '') {
        document.querySelectorAll('section ul').forEach(ul => ul.innerHTML = '');

        Object.entries(genres).forEach(([genre, books]) => {
            const genreId = genre.toLowerCase().replace(/\s+/g, '');
            const ul = document.querySelector(`#${genreId} ul`);

            books.forEach(book => {
                if (query === '' || book.toLowerCase().includes(query.toLowerCase())) {
                    const li = document.createElement('li');
                    li.textContent = book;
                    ul.appendChild(li);
                }
            });
        });
    }

    const searchBox = document.getElementById('searchBox');
    searchBox.addEventListener('input', () => {
        const query = searchBox.value.trim();
        displayBooks(query);
    });

    displayBooks();
});
