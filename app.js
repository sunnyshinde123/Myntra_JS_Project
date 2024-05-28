let storeBag;

onLoad();

function onLoad(){
    let storeBagStr=localStorage.getItem('storeBag');
    storeBag=storeBagStr ? JSON.parse(storeBagStr): [];
    displayItems();
    displayIconCount();
}

function displayItems(){
    let container=document.querySelector('.main-section');
    if(!container){
        return;
    }
    let html="";
    items.forEach((ele)=> {
        html+=`<div class="card card-section" style="width: 18rem;">
        <div class="img-box">
            <img src="${ele.image}" class="card-img-top card-img" alt="...">
            <span><b>${ele.rating.stars}<i class="fa-solid fa-star"></i>|${ele.rating.count}</b></span>
        </div>
        <div class="card-body">
          <h5 class="card-title">${ele.company}</h5>
          <span class="card-text">${ele.item_name}</span>
          <span class="price-span"><br><b>Rs. ${ele.current_price}</b>&nbsp; <span class="old-price">Rs ${ele.original_price}</span> &nbsp;<span class="discount">(${ele.discount_percentage}% OFF)</span>
          <a href="#" class="btn btn-primary .btn-add-bag" onClick="addInBag(${ele.id})">Add to Bag</a>
        </div>
    </div>`
    })
    container.innerHTML=html;

}


let addToBag=document.querySelector('.Add to Bag')

function addInBag(id){
    if(id){
        storeBag.push(id);
        localStorage.setItem('storeBag', JSON.stringify(storeBag));
        displayIconCount();
    }
}

function displayIconCount(){
    let bagCounterElement=document.querySelector('.Bag-Item-Count');
    if(storeBag.length>0){
        bagCounterElement.style.visibility="visible";
        bagCounterElement.innerText=storeBag.length;
    }
    else{
        bagCounterElement.style.visibility="hidden";
    }
}