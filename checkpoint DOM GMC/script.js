let totalP=document.getElementById("total");
let btnI=document.querySelectorAll(".btni");
let btnD=document.querySelectorAll(".btnd");
let likeBtn=document.querySelectorAll(".like");
let likeclr=document.querySelectorAll(".far");

let totalvar=0;
// function count
function count(priceU){
  totalvar=~~totalP.innerHTML
  totalvar=totalvar+priceU;
  totalP.innerHTML=totalvar;
}
for (let i=0 ; i<btnI.length;i++){
  let rmvBtn=document.querySelectorAll(".close");
  let cardPrices=document.querySelectorAll(".card-price");
  let qteS=document.querySelectorAll(".qte");
  let cardPu=parseInt((cardPrices[i].innerHTML),10);
  
//increment btn
  btnI[i].addEventListener("click" ,function () {
  qteS[i].value++
  count(cardPu);
  });
//decrement btn
  btnD[i].addEventListener("click", function (e) {
  if (qteS[i].value>1){
    count(-cardPu);
    qteS[i].value--;}
  });
//  remove btn
  rmvBtn[i].addEventListener("click",function(){
  totalvar=totalvar-(qteS[i].value*cardPu);
  totalP.innerHTML=totalvar;
  rmvBtn[i].parentElement.remove();
  });
//like btn color
  likeBtn[i].addEventListener("click",function(){
    switch (likeclr[i].style.color){
      case
       "grey":likeclr[i].style.color="blue";
      likeclr[i].innerHTML=~~likeclr[i].innerHTML+1;
      break;
      case
       "blue":likeclr[i].style.color="grey";
      likeclr[i].innerHTML=~~likeclr[i].innerHTML-1;
      
    }});
// block keybord edit
  qteS[i].addEventListener("keydown",function (evt) {
    evt.preventDefault();
  });
}