import { getData }  from './get_data.js'
const wishList = [
    'idd005','idd100', 'idd077','idd033'
];
const generateGoodsPage = () =>{

    const mainHeader  = document.querySelector('.main-header');
    const goodsList  = document.querySelector('.goods-list');

    const generteCards = (data) =>{
        goodsList.textContent= '';
        data.forEach(item => {
            goodsList.insertAdjacentHTML('afterbegin',`
            <li>${item.name}</li>
            `)
        });
    };


    if (location.pathname.includes('goods') && location.search){
        const search  = decodeURI(location.search);
        const prop = search.split('=')[0].slice(1);
        const value = search.split('=')[1];

        if (prop==='s') {
           getData.search(value, generteCards);
           mainHeader.textContent=`Вы искали: ${value}`;

        }else if (prop===  'wishlist'){
            getData.wishList(wishList,generteCards);
            mainHeader.textContent=`Список желаний`;
        } else if (prop ==='cat' || prop ==='subcat'){
            getData.category(prop, value, generteCards);
            mainHeader.textContent=value;
        }
    }

};

export default generateGoodsPage;