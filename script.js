// ==========================================
// Sayeem IT Solution
// Final Script.js
// Design + Firebase Product System
// ==========================================



// ==========================================
// LOAD PRODUCTS FROM FIREBASE
// ==========================================


document.addEventListener("DOMContentLoaded",()=>{


const productsBox = document.getElementById("productsData");


if(!productsBox) return;



// Firebase check


if(typeof db === "undefined"){


console.log("Firebase not connected");

return;


}




db.collection("products").onSnapshot((snapshot)=>{



productsBox.innerHTML = "";



if(snapshot.empty){


productsBox.innerHTML = `


<div class="card">


<h3>No Product Available</h3>


<p>

Please check again later.

</p>


</div>


`;


return;


}





snapshot.forEach((doc)=>{



let product = doc.data();



productsBox.innerHTML += `



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

href="https://wa.me/8801601689809?text=Hello%20Sayeem%20IT%20Solution%20I%20want%20to%20order%20${product.name}">


Order Now


</a>




</div>



`;



});




});



});









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



window.addEventListener("scroll",()=>{



if(window.scrollY > 300){


topBtn.style.display="flex";


}

else{


topBtn.style.display="none";


}



});





topBtn.addEventListener("click",()=>{


window.scrollTo({


top:0,


behavior:"smooth"


});



});



}









// ==========================================
// SMOOTH SCROLL
// ==========================================



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
