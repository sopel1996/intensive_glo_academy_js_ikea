import { getData } from './get_data.js'
import generateSubCatalog from './generate_subcatalog.js';

export const catalog = () => {
    const updateSubCatalog = generateSubCatalog();


    const btnBurger = document.querySelector('.btn-burger');
    const catalog = document.querySelector('.catalog');
    const subCatalog = document.querySelector('.subcatalog');
    const subCatalogHeader = document.querySelector('.subcatalog-header');
    const btnCloseSubCatalog = subCatalog.querySelector('.btn-return');

    const overlay = document.createElement('div');

    overlay.classList.add('overlay');

    document.body.insertAdjacentElement('beforeend', overlay);


    const openMenu = () => {
        catalog.classList.add('open');
        overlay.classList.add('active');
    };

    const closeMenu = function(){
        catalog.classList.remove('open');
        overlay.classList.remove('active');
        subCatalog.classList.remove('subopen');
    };

    const handlerCatalog = evt =>{
        evt.preventDefault();
        const target = evt.target;
        const itemList = target.closest('.catalog-list__item');
        if(itemList){
            getData.subCatalog(target.textContent, (data)=>{ 
                updateSubCatalog(target.textContent, data)
                subCatalog.classList.add('subopen');
            })


        }

        if (evt.target.closest('.btn-close'))
        {
            closeMenu();
        }
    };

    const closeSubMenu = () =>{
        subCatalog.classList.remove('subopen');
    };

    btnBurger.addEventListener('click', openMenu);
    overlay.addEventListener('click', closeMenu);
    catalog.addEventListener('click', handlerCatalog);
    subCatalog.addEventListener('click', (evt)=>{
        const btnReturn = evt.target.closest('.btn-return');
        if(btnBurger) closeSubMenu();
    })


}