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
        console.log(renderArr,index);
        render(renderArr,index);
        sum += menu[index].price;
        totalPrice.innerHTML = `$${sum}`

    })
})

const renderDiv = document.querySelector('.renderDiv');



function render(arr,index){
    renderDiv.innerHTML += 
    `
    <div class="renderItem">
    <h4>${arr[index].name}</h4> <span class="removeOrder"> remove </span>
    <div class="renderPriceDiv">
    <p>$${arr[index].price}</p>
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

const completeOrderBtn = document.querySelector('.completeOrderBtn');
const modalContainer = document.querySelector('.modalContainer');
const mainContainer = document.querySelector('.mainContainer');

if(renderDiv != null){
    console.log('not empty');
}else{
    console.log('empty');
}

completeOrderBtn.addEventListener('click',()=>{
    modalContainer.style.display = 'inline'
    mainContainer.style.backgroundColor = '#E2E2E2'
})

const mainOrdersContainer = document.querySelector('.mainOrdersContainer');
const paymentBtn = document.querySelector('.paymentBtn');
paymentBtn.addEventListener('click',()=>{
    modalContainer.style.display = 'none'
    mainContainer.style.backgroundColor = 'white'
    mainOrdersContainer.innerHTML = `Your order is on it's way, Enjoy!`
})


/*
 Need to refactor 
 1. Theres a bug in rendering when button is clicked
 2. Complete order btn should only be pressed if there is an order
 3. Payment should only be made if the input fields are filled
 4. Message should be given with name
 5. Rate experience
 6. Ask if the user would like to place another order
 7. theme toggle for user
*/








