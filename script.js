const list = document.querySelector('ul')
const buttonshowAll = document.querySelector('.show-all')
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

buttonshowAll.addEventListener('click', showAll)