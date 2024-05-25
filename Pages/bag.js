const ConvenienceFee=99;
let displayBagObj;
onLoad();


function onLoad(){
    getBagDeatailsFromStore();
    displayBag();
    displayBagSummary();
}

function displayBagSummary(){
    let getSummaryData=document.querySelector('.price-data');
    let totalMRP=0;
    let discountMRP=0;
    let totalAmt=0;

    displayBagObj.forEach((ele)=> {
        totalMRP+=ele.original_price;
        discountMRP+=ele.original_price-ele.current_price;
    })

    totalAmt+=totalMRP-discountMRP+ConvenienceFee;
    getSummaryData.innerHTML=`<div class="one-grid">
    <p>PRICE DETAILS (${displayBagObj.length} items)</p>
</div>
<div class="two-grid">
    <div class="two-grid-one">
        <p>Total MRP</p>
        <p>Discount MRP</p>
        <p>Convenience Fee</p>
        <p><b>Total Amount</b></p>
    </div>
    <div class="two-grid-two">
        <p>&#8377;${totalMRP}</p>
        <p>&#8377; ${discountMRP}</p>
        <p>&#8377; ${ConvenienceFee}</p>
        <p><b>&#8377; ${totalAmt}</b></p>
    </div>
</div>
<div class="third-grid">
    <button class="btn btn-primary">PLACE ORDER</button>
</div>`
}

function getBagDeatailsFromStore(){
    displayBagObj=storeBag.map((ele)=>{
        for(let i=0;i<items.length;i++){
            if(ele==items[i].id){
                return items[i];
            }
        }
    })
}

function displayBag(){
    let getMain_left=document.querySelector('.leftSide');
    let htmlPart="";
    displayBagObj.forEach(element => {
        htmlPart+=generateOneItem(element);
    });
    getMain_left.innerHTML=htmlPart;


}

function removeBagItem(itemId){
    console.log('click'+itemId);
    storeBag=storeBag.filter((ele)=> ele !=itemId)
    console.log(storeBag);
    localStorage.setItem('storeBag', JSON.stringify(storeBag));
    getBagDeatailsFromStore();
    displayIconCount();
    displayBag();
    displayBagSummary();

}

function generateOneItem(item){
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
        <button class="btn btn-danger" onclick="removeBagItem(${item.id})"><i class="fa-solid fa-trash"></i></button>
    </div>
</div>`
}

