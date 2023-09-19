let btnMenu = document.querySelector('.menu');
let ulItem = document.querySelector('.ul-header');
let sliderMenu = document.querySelector('.slider-menu');
let  flag=false;
btnMenu.addEventListener('click', () => {
 
  if(!flag){
    flag=true;
    ulItem.style.right='0%'
    sliderMenu.style.right='50%'
  }else{
    flag=false;
    ulItem.style.right='-100%'
    sliderMenu.style.right='-100%'
  }
})