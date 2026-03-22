const list = document.querySelector('ul')
const buttonshowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')


function showAll( productsArray ) {

    let myLi = ''

    productsArray.forEach((product) => {
    myLi = myLi + `
            <li>
                <img src="${product.src}" alt="${product.name}">
                <p>${product.name}</p>
                <p class="inten-price">${product.price}</p>
            </li> 
            `       
})

list.innerHTML = myLi
}
function mapAllItems() { 
    console.log('chamei')
    const newPrice = menuOptions.map ((products) => ({
        ...products,

         price: products.price * 0.9,

       
    }))
    showAll(newPrice)
    console.log(newPrice)
}   

buttonshowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)