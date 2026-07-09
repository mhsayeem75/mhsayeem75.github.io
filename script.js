// ==========================================
// Sayeem IT Solution
// Final script.js
// ==========================================



// ===============================
// FIREBASE PRODUCT LOAD
// ===============================


document.addEventListener("DOMContentLoaded", function(){



const productBox = document.getElementById("productsData");



if(productBox && typeof db !== "undefined"){



db.collection("products").onSnapshot((snapshot)=>{


snapshot.forEach((doc)=>{


let product = doc.data();



productBox.innerHTML += `



<div class="product-card">



<img src="${product.image}"

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





<a class="order-btn"

target="_blank"

href="https://wa.me/8801601689809?text=I want ${product.name}">


Order Now

</a>




</div>


`;



});



});


}

else{


console.log("Firebase not connected");


}




});









// ===============================
// PRODUCT SEARCH
// ===============================



const searchInput=document.getElementById("searchInput");



if(searchInput){



searchInput.addEventListener("keyup",function(){



let value=this.value.toLowerCase();



let products=document.querySelectorAll(".product-card");



products.forEach(function(product){



let text=product.innerText.toLowerCase();



if(text.includes(value)){


product.style.display="block";


}

else{


product.style.display="none";


}



});


});


}









// ===============================
// TOP BUTTON
// ===============================



const topBtn=document.getElementById("topBtn");



if(topBtn){



window.addEventListener("scroll",function(){



if(window.scrollY > 300){


topBtn.style.display="block";


}

else{


topBtn.style.display="none";


}



});





topBtn.onclick=function(){



window.scrollTo({


top:0,


behavior:"smooth"


});


};



}









// ===============================
// PAGE LOADER
// ===============================


window.addEventListener("load",()=>{


let loader=document.getElementById("loader");


if(loader){


loader.style.display="none";


}



});









// ===============================
// SMOOTH SCROLL
// ===============================



document.querySelectorAll('a[href^="#"]').forEach(link=>{


link.addEventListener("click",function(e){



let target=document.querySelector(

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
