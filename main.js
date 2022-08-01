const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
cart.addEventListener('click', toggleShoppingCart);


function toggleDesktopMenu() {
   const isDesktopMenuClosed = productDetail.classList.contains('inactive');

   if (!isDesktopMenuClosed) {
      productDetail.classList.add('inactive')
   }
   desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
   const isMobileMenuClosed = productDetail.classList.contains('inactive');

   if(!isMobileMenuClosed){
      productDetail.classList.add('inactive')
   }
   mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart(){
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
   const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

   if(!isMobileMenuClosed || !isDesktopMenuClosed){
      mobileMenu.classList.add('inactive')
      desktopMenu.classList.add('inactive')
   }

   productDetail.classList.toggle('inactive');
}





