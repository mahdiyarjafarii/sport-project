let btn=document.querySelector(".nav-button");
btn.addEventListener("click",function(){
    btn.classList.toggle("change");
});
$(window).scroll(function(){
    let position=$(this).scrollTop();
    let navb=document.querySelector(".nav-menu")
   console.log(position)
   if(position>=200){
       navb.classList.add("custom-navbar")
   }else{
       navb.classList.remove("custom-navbar")
   }
})
$(window).scroll(function(){
    let position=$(this).scrollTop();
    let navb=document.querySelector(".award-img")
    let nava=document.querySelector(".award-text")

   if(position>=700){
       navb.classList.add("fromLeft")
       nava.classList.add("fromRight")

   }else{
    navb.classList.remove("fromLeft")
    nava.classList.remove("fromRight")
   }
})
$('.gallery-list-item').click(function(){
let value=$(this).attr('data-filter');
$(this).addClass('.active-item').siblings().removeClass('.active-item')
if(value === 'all'){
    $('.filter').show(300)
}else{
    $('.filter').not('.'+value).hide(300)
    $('.filter').filter('.'+value).show(300)
}
})
$(window).scroll(function(){
    let position=$(this).scrollTop();
    let card1=document.querySelector(".card-1")
    let card2=document.querySelector(".card-2")
    let card3=document.querySelector(".card-3")


   if(position>=4400){
       card1.classList.add("movefromLeft")
       card2.classList.add("movefromBotton")
       card3.classList.add("movefromRight")


   }else{
    card1.classList.remove("movefromLeft")
    card2.classList.remove("movefromBotton")
    card3.classList.remove("movefromRight")

   }
})


