// Prelevo elementi dal DOM
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');
const closeButton = document.getElementById('close-overlay');
const rowElem = document.querySelector(".row");
let images = [];

// Funzione per stampare i post nella griglia
const printPosts = () => {
    images.forEach(curItem => {
        rowElem.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 py-4 d-flex ptrel">
                <div class="card flex-fill">
                    <img class="gallery-img" src="${curItem.thumbnailUrl}" alt="${curItem.title}">
                    <div class="card-body">
                        <p class="p-style">${curItem.title}</p>
                    </div>
                </div>
            </div>`;
    });

    
    document.querySelectorAll('.gallery-img').forEach(img => {
        img.addEventListener('click', (event) => {
            overlayImg.src = event.target.src; 
            overlay.classList.add('visible'); 
        });
    });
};

// Chiamata API
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(resp => {
    console.log(resp.data);
    images = resp.data;
    printPosts();
}).catch(error => console.error("Errore nella chiamata API:", error));


closeButton.addEventListener('click', () => {
    overlay.classList.remove('visible')
});
