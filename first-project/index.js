const container = document.querySelector('.container');

populateUI();

container.addEventListener('click', (e) =>{
    if(e.target.classList.contains('fa-heart')){
        e.target.classList.toggle('ic-active')
        setLikeItemStorage(e.target.id);
    }
});

// Save selected currency index
function setLikeItemStorage(id){
    const selectedBooks = document.querySelectorAll('.ic-active');
    const booksIds = [...selectedBooks].map(book => book.id);
    localStorage.setItem('selectedBooks', JSON.stringify(booksIds));
}

// Get data from localstorage and populate
function populateUI(){
   
    const selectedBooks = JSON.parse(localStorage.getItem('selectedBooks'));
    if(selectedBooks !== null && selectedBooks.length > 0){
     selectedBooks.map(book=> {
         var DOMBook = document.querySelector('#' + book);
         DOMBook.classList.add('ic-active');
     })
    }

}
