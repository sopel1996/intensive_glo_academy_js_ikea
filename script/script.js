//day 1
const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const overlay = document.querySelector('.overlay');
const btnCloseCatalog = catalog.querySelector('.btn-close');
// const catalogList = catalog.querySelector('.catalog-list');
const subCatalog = document.querySelector('.subcatalog');
const subCatalogHeader = document.querySelector('.subcatalog-header');
const btnCloseSubCatalog = subCatalog.querySelector('.btn-return');


const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
};

const closeMenu = function(){
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    subCatalog.classList.remove('subopen');
};

const openSubMenu = evt =>{
    evt.preventDefault();
    const itemList = evt.target.closest('.catalog-list__item');
    if(itemList){
        subCatalogHeader.innerHTML = itemList.innerHTML;
        subCatalog.classList.add('subopen');
    }
};

const closeSubMenu = () =>{
    subCatalog.classList.remove('subopen');
};

btnBurger.addEventListener('click', openMenu);
btnCloseCatalog.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalog.addEventListener('click', openSubMenu);
btnCloseSubCatalog.addEventListener('click', closeSubMenu);
