document.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const movieIndex = parseInt(urlParams.get('movie'));

fetch('MovieTickets.json')
.then(response => response.json())
.then(data => {
    const selectedMovie = data[movieIndex];

    document.getElementById('title').textContent = selectedMovie.title;
    document.getElementById('location').textContent = selectedMovie.location;
    document.getElementById('theater').textContent = selectedMovie.theater;
    document.getElementById('price').textContent = selectedMovie.price;
    document.getElementById('date').textContent = selectedMovie.date;
    document.getElementById('description').textContent = selectedMovie.description;
})
.catch(error => console.error('Error fetching data:', error));
});