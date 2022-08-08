const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.card-container');
const paymentDetailContainer = document.querySelector('.payment-detail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

navEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
cart.addEventListener('click', toggleShoppingCart);
productDetailCloseIcon.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
   const isDesktopMenuClosed = productDetail.classList.contains('inactive');
   const isPaymentDetailContainerClosed = paymentDetailContainer.classList.contains('inactive');

   if (!isDesktopMenuClosed || !isPaymentDetailContainerClosed) {
      productDetail.classList.add('inactive')
      paymentDetailContainer.classList.add('inactive')
   }
   desktopMenu.classList.toggle('inactive');
}
function toggleShoppingCart(){
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
   const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
   const isPaymentDetailContainerClosed = paymentDetailContainer.classList.contains('inactive')

   if(!isMobileMenuClosed || !isDesktopMenuClosed || !isPaymentDetailContainerClosed){
      mobileMenu.classList.add('inactive')
      desktopMenu.classList.add('inactive')
      paymentDetailContainer.classList.add('inactive')
   }
   productDetail.classList.toggle('inactive');
}
function toggleMobileMenu(){
   const isPaymentDetailContainerClosed = paymentDetailContainer.classList.contains('inactive')
   const isProductDetailClosed = productDetail.classList.contains('inactive')

   if(!isPaymentDetailContainerClosed || !isProductDetailClosed){
      paymentDetailContainer.classList.add('inactive')
      productDetail.classList.add('inactive')
   }
   mobileMenu.classList.toggle('inactive');
}

const productList = [];
productList.push({
   name: 'T-shirt',
   price: 120,
   image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
   name: 'White look',
   price: 120,
   image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
   name: 'Jeans',
   price: 80,
   image: 'https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

function createProducts(productList){
   for (product of productList){
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
   
      //product = {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      productImg.addEventListener('click', openProductDetailAside);
   
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
   
      const divText = document.createElement('div');
   
      const productPrice = document.createElement('p');
      productPrice.innerText = '$ ' + product.price;
      const productName = document.createElement('p');
      productName.innerText = product.name;
   
      divText.appendChild(productPrice);
      divText.appendChild(productName);
   
      const divFigure = document.createElement('div');
      const figure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
   
      figure.appendChild(productImgCart);
      divFigure.appendChild(figure);
   
      productInfo.appendChild(divFigure);
      productInfo.appendChild(divText);
   
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
   
      cardContainer.appendChild(productCard);
      
   }
   
}
function openProductDetailAside(){
   const isProductDetailClosed = productDetail.classList.contains('inactive');
   const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

   if (!isProductDetailClosed || !isDesktopMenuClosed || !isMobileMenuClosed){
      productDetail.classList.add('inactive')
      desktopMenu.classList.add('inactive')
      mobileMenu.classList.add('inactive')
   }
   paymentDetailContainer.classList.remove('inactive');
}
function closeProductDetail(){
   paymentDetailContainer.classList.add('inactive');
}
createProducts(productList);
