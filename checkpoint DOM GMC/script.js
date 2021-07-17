//$('.close').click(function(){
//  $('.card').parent().slideUp();
//})
let totalP=document.querySelector("#total");
let btnI=document.querySelectorAll(".btni");
let btnD=document.querySelectorAll(".btnd");
let qteS=document.getElementsByClassName("qte");
let likebtn=document.querySelectorAll(".like");
let likeclr=document.querySelectorAll(".far");
let cardPrice=document.getElementsByClassName("card-price");

//function calcul total
function calcul(){
  let totalvar=0;
  for (let i=0 ; i<btnD.length;i++){
    totalvar=totalvar+(parseInt((qteS[i].innerHTML),10)*parseInt((cardPrice[i].innerHTML),10));
    totalP.innerHTML="TOTAL IS: "+totalvar+",00 €"
  }
}
calcul();

for (let i=0 ; i<btnD.length;i++){
//increment btn
 btnI[i].addEventListener("click" ,function () {
  qteS[i].innerHTML++;
  calcul();
});
//decrement btn
  btnD[i].addEventListener("click", function () {
    let qtee=parseInt((qteS[i].innerHTML),10);
    if (qtee>1){
  qteS[i].innerHTML--;}
  calcul();
});
//like btn
 likeclr[i].addEventListener("click", function(){
   if (likeclr[i].style.color === "grey"){
     likeclr[i].style.color="blue";
     likeclr[i].innerHTML++;
     }
     else 
          likeclr[i].style.color="grey";
          likeclr[i].innerHTML--;
 });
//  remove btn
let rmvBtn=document.querySelectorAll(".close");
rmvBtn[i].addEventListener("click",function(){

  rmvBtn[i].parentElement.remove();
  calcul();
})
}








