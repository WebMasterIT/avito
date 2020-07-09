const modalAdd = document.querySelector('.modal__add'),
      addAd = document.querySelector('.add__ad'),
      modalBtnSubmit = document.querySelector('.modal__btn-submit'),
      modalSubmit = document.querySelector('.modal__submit'),
      catalog = document.querySelector('.catalog'),
      modalItem = document.querySelector('.modal__item'),
      modalBtnWarning = document.querySelector('.modal__btn-warning');


const dataBase = [];

const elementsModalSubmit = [...modalSubmit.elements]
.filter(elem => elem.tagName !== 'BUTTON' && elem.type !== 'submit');

     
   
const closeModal = ("keydown",function(event) {
    const target = event.target;

    if (target.closest('.modal__close') || target === modalItem || 
        event.key === 'Escape' || target === modalAdd ) {
        
        modalSubmit.reset();
        modalItem.classList.add('hide'); 
        modalAdd.classList.add('hide');
        document.removeEventListener('keydown', closeModal);
    }
})


modalSubmit.addEventListener('input', () => {
    const validForm = elementsModalSubmit.every( elem => elem.value);
    modalBtnSubmit.disabled =  !validForm;
    modalBtnWarning.style.display = validForm ? 'none' : '';
})

modalSubmit.addEventListener('submit', event => {
    event.preventDefault();
    const itemObj = {};
    for (const elem of elementsModalSubmit) {
        itemObj[elem.name] = elem.value;
    }

    dataBase.push(itemObj);
    modalSubmit.reset();

})

addAd.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    modalBtnSubmit.disabled = true;
    document.addEventListener('keydown', closeModal);
});

catalog.addEventListener('click', event => {
    const target = event.target;

    if (target.closest('.card')) {
        modalItem.classList.remove('hide');
        document.addEventListener('keydown', closeModal);
    };

});

modalAdd.addEventListener('click', closeModal);
modalItem.addEventListener('click', closeModal);



    


