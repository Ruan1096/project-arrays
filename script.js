const list = document.querySelector('ul')
const buttonshowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')   
const filterAll = document.querySelector('.filter-all')



function foratcurrency(value) {
    const newValue =  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', })
    return newValue
}



function showAll( productsArray ) {

    let myLi = ''

    productsArray.forEach((product) => {
    myLi = myLi + 
            `
            <li>
                <img src="${product.src}" alt="${product.name}">
                <p>${product.name}</p>
                <p class="inten-price">${foratcurrency(product.price)}</p>
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

    function sumAllItems() {
        const totalvalve = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
            list.innerHTML =

             `
            <li>
                
                <p>O valor total dos itens é: R$ ${foratcurrency(totalvalve)}</p>
                
            </li>             `     
 }
 function filterAllItems() {
    const filterJustVegan = menuOptions.filter((products) => products.vegan === true)

    showAll(filterJustVegan)
 }




buttonshowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)