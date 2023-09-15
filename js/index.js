function update(id,add,num){
    const product=document.getElementById(id+'-cost');
    if(add==true){
        product.innerText=num;
    }
    else{
        product.innerText=0;
    }
}
function add(){

        const memoryCost=parseFloat(document.getElementById('memory-cost').innerText);
        const storageCost=parseFloat(document.getElementById('storage-cost').innerText);
        const deliveryCost=parseFloat(document.getElementById('delivery-cost').innerText);
        const basePrice=parseFloat(document.getElementById('base-price').innerText);

        const result=memoryCost+storageCost+deliveryCost+basePrice;

        document.getElementById('total-price').innerText=result;
        

}

document.getElementById('memory-1').addEventListener('click',function(){
    update('memory',false,0);
    add();
    
});
document.getElementById('memory-2').addEventListener('click',function(){
    update('memory',true,100);
    add();
});
document.getElementById('storage-1').addEventListener('click',function(){
    update('storage',false,0);
    add();
});
document.getElementById('storage-2').addEventListener('click',function(){
    update('storage',true,50);
    add();
});
document.getElementById('storage-3').addEventListener('click',function(){
    update('storage',true,70);
    add();
});
document.getElementById('delivery-1').addEventListener('click',function(){
    update('delivery',false,0);
    add();
});
document.getElementById('delivery-2').addEventListener('click',function(){
    update('delivery',true,20);
    add();
});




document.getElementById('coupon-button').addEventListener('click',function(){
   const code=document.getElementById('promo-code').value;
    let price=parseFloat(document.getElementById('total-price').innerText);
    if(code=='iloveyouananya'){
        price=price-(price*.1);
    }
    document.getElementById('total-amount').innerText=price;
    document.getElementById('promo-code').value='';
    
});