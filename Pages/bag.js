let displayBagObj;
onLoad();


function onLoad(){
    getBagDeatailsFromStore();
    displayBag();
}

function getBagDeatailsFromStore(){
    displayBagObj=storeBag.map((ele)=>{
        for(let i=0;i<items.length;i++){
            if(ele==items[i].id){
                return items[i];
            }
        }
    })
    console.log(displayBagObj);
}

function displayBag(){
    let getMain_left=document.querySelector('.leftSide');
    let htmlPart="";
    displayBagObj.forEach(element => {
        htmlPart+=generateOneItem(element);
    });
    console.log(htmlPart);
    getMain_left.innerHTML=htmlPart;


}

function generateOneItem(item){
    console.log(item);
    return `<div class="main-left">
    <div class="img-cover">
        <img src="../${item.image}" alt="">
    </div>
    <div class="img-data">
        <h3>${item.company}</h3>
        <span>${item.item_name} <br>
            <b>${item.original_price}</b> <span class="old-price">${item.current_price}</span>(0% OFF)
        </span>
        <br><br>
        <p><b><span style="font-size: 1.07rem; font-weight: 900;">14 days</span> return available</b> <br>
        Delivery by <span style="color: greenyellow; font-weight: 900;">${item.delivery_date}</span> </p>
    </div>
    <div>
        <button class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
    </div>
</div>`
}