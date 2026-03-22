const list = document.querySelector('ul')
const buttonshowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
let myLi = ''

function showAll() {
    menuOptions.forEach((product) => {
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
    const newPrice = menuOptions.map ((products) => ({
        name: products.name,
        price: products.price * 0.9,
        src: products.src
    }))
}   

buttonshowAll.addEventListener('click', showAll)
buttonMapAll.addEventListener('click', mapAllItems)