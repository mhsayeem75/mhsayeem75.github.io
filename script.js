// ==========================================
// Sayeem IT Solution
// Professional Final Script
// ==========================================



// ==========================================
// DEFAULT PRODUCTS
// ==========================================


const defaultProducts = [


{
name:"Desktop Computer",
price:"35,000৳ থেকে",
image:"images/computer.jpg"
},


{
name:"Laptop",
price:"45,000৳ থেকে",
image:"images/laptop.jpg"
},


{
name:"Attendance Machine",
price:"8,000৳ থেকে",
image:"images/attendance.jpg"
},


{
name:"CCTV Camera",
price:"3,500৳ থেকে",
image:"images/cctv.jpg"
},


{
name:"WiFi Router",
price:"1,500৳ থেকে",
image:"images/router.jpg"
},


{
name:"Computer Accessories",
price:"Contact Us",
image:"images/computer-accessories.jpg"
},


{
name:"Phone Accessories",
price:"Contact Us",
image:"images/phone-accessories.jpg"
}


];








// ==========================================
// SHOW PRODUCTS
// ==========================================


function displayProducts(products){


const productBox = document.getElementById("productsData");


if(!productBox) return;



productBox.innerHTML = "";



products.forEach(product=>{


productBox.innerHTML += `


<div class="card">



<img src="${product.image}"

class="product-img"

alt="${product.name}"

onerror="this.src='images/no-image.png'">





<h3>

${product.name}

</h3>





<p>

Sayeem IT Solution Quality Product

</p>





<h4>

Price: ${product.price}

</h4>





<a class="btn"

target="_blank"

href="https://wa.me/8801601689809?text=Hello%20Sayeem%20IT%20Solution,%20I%20want%20to%20order%20${product.name}">


Order Now


</a>





</div>


`;



});


}







// ==========================================
// LOAD DEFAULT PRODUCT
// ==========================================


displayProducts(defaultProducts);








// ==========================================
// FIREBASE PRODUCT LOAD
// ==========================================


if(typeof db !== "undefined"){



db.collection("products").onSnapshot((snapshot)=>{



let firebaseProducts = [];



snapshot.forEach((doc)=>{


firebaseProducts.push(doc.data());


});





displayProducts([

...defaultProducts,

...firebaseProducts

]);




});



}

else{


console.log("Firebase database not connected");


}









// ==========================================
// PAGE LOADER
// ==========================================


window.addEventListener("load",()=>{


const loader=document.getElementById("loader");



if(loader){


setTimeout(()=>{


loader.style.display="none";


},800);


}



});









// ==========================================
// BACK TO TOP BUTTON
// ==========================================


const topBtn=document.getElementById("topBtn");



if(topBtn){



topBtn.style.display="none";



window.addEventListener("scroll",()=>{



if(window.scrollY > 400){


topBtn.style.display="flex";


}

else{


topBtn.style.display="none";


}



});





topBtn.onclick=()=>{


window.scrollTo({


top:0,


behavior:"smooth"


});



};



}









// ==========================================
// SMOOTH SCROLL
// ==========================================


document.querySelectorAll('a[href^="#"]').forEach(link=>{


link.addEventListener("click",function(e){



const target=document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({


behavior:"smooth"


});


}



});



});
