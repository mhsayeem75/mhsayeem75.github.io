// ===================================
// Sayeem IT Solution
// Complete Script File
// ===================================



// ================================
// FIREBASE PRODUCT LOAD
// ================================

if (typeof db !== "undefined") {


db.collection("products").onSnapshot((snapshot)=>{


    const productsBox = document.getElementById("productsData");


    if(!productsBox) return;


    productsBox.innerHTML = "";


    snapshot.forEach((doc)=>{


        const product = doc.data();



        productsBox.innerHTML += `

        <div class="card">


        <img src="${product.image}"
        class="product-img"
        onerror="this.src='images/no-image.png'"
        alt="${product.name}">


        <h3>${product.name}</h3>


        <p>
        Sayeem IT Solution Quality Product
        </p>


        <h4>
        Price: ${product.price}
        </h4>


        <a class="btn"
        target="_blank"
        href="https://wa.me/8801601689809?text=Hello Sayeem IT Solution, I want to order ${product.name}">

        Order Now

        </a>


        </div>

        `;


    });


});


}

else{

console.log("Firebase database not connected");

}







// ================================
// PAGE LOADER
// ================================


window.addEventListener("load",()=>{


const loader=document.getElementById("loader");


if(loader){


loader.style.display="none";


}


});







// ================================
// BACK TO TOP
// ================================


const topBtn=document.getElementById("topBtn");


if(topBtn){


topBtn.style.display="none";


window.addEventListener("scroll",()=>{


if(window.scrollY > 300){


topBtn.style.display="block";


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







// ================================
// SMOOTH MENU SCROLL
// ================================


document.querySelectorAll('a[href^="#"]').forEach(link=>{


link.addEventListener("click",function(e){


let target=document.querySelector(this.getAttribute("href"));


if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});
