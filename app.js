// select our btn
const openModal = document.querySelector('.modal-btn');
const closeModal = document.querySelector('.close-btn');

// select class modal
const showModal = document.querySelector('.modal-overlay');

//add btn event to open
openModal.addEventListener('click', function(){
    showModal.classList.add('show-modal');
}) 

// add btn event to close
closeModal.addEventListener('click', function() {
    showModal.classList.remove('show-modal');
    console.log(closeModal);
})
