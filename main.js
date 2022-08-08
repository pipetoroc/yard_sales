const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.card-container');

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
   const mobileMenuClosed = mobileMenu.classList.contains('inactive');
   //const isProductDetailClosed = productDetail.classList.contains('inactive');

   if(mobileMenuClosed){
      mobileMenu.classList.add('inactive')
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
createProducts(productList);
