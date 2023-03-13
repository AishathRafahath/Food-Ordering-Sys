import{menu}from './data.js'

const menuContainer = document.querySelector('.menuContainer');
const totalPrice = document.querySelector('.totalPrice');


// Iterating over data array to display menu
menu.forEach(item =>{
    menuContainer.innerHTML += `
    <div class="menuItemContainer">
        <img src="./photos/${item.name}.png" alt="" class="imgIcon">
        <div class="menuItemContainer_details">
            <h3>${item.name}</h3>
            <p>${item.ingredients}</p>
            <h4>$${item.price}</h4>
        </div>
        <div class="btnDiv">
            <button class="addToOrderBtn">+</button>
        </div>
        <div class="menuItemContainer_divider"></div>
    </div>
    `
})
// Array of buttons
const addToOrderBtn = document.querySelectorAll('.addToOrderBtn')
// btn pushes item into the array below and renders 
let renderArr = [];
// btn pushes remove btn into array below
let removeBtns = []
let sum = 0;
addToOrderBtn.forEach((btn,index) =>{
    btn.addEventListener('click',()=>{
        renderArr.push(menu[index]);
        render(renderArr,index);
        sum += menu[index].price;
        totalPrice.innerHTML = `$${sum}`

    })
})

const renderDiv = document.querySelector('.renderDiv');



function render(array,indexNum){
    renderDiv.innerHTML += 
    `
    <div class="renderItem">
    <h4>${array[indexNum].name}</h4><span class="removeOrder">remove</span>
    <div class="renderPriceDiv">
    <p>$${array[indexNum].price}</p>
    </div>
    </div>
    `

    let removeBtnsNodeList = document.querySelectorAll('.removeOrder')
    getRemoveBtns(removeBtnsNodeList);
    
   
    
}

function getRemoveBtns(btnsList){
    btnsList.forEach((removeBtn,index)=>{
        removeBtn.addEventListener('click',()=>{
            sum = sum - renderArr[index].price
            totalPrice.innerHTML = sum;
            renderArr.splice(index,1);
            renderUpdatedOrder(renderArr);
            
            
            
        })
    })
}

function renderUpdatedOrder(updatedArr){
    renderDiv.innerHTML = ''
    for(let i =0; i<updatedArr.length; i++)
    renderDiv.innerHTML += `
    <div class="renderItem">
    <h4>${updatedArr[i].name}</h4><span class="removeOrder">remove</span>
    <div class="renderPriceDiv">
    <p>$${updatedArr[i].price}</p>
    </div>
    </div>
    
    `

    let removeBtnsNodeList = document.querySelectorAll('.removeOrder')
    getRemoveBtns(removeBtnsNodeList);
}









