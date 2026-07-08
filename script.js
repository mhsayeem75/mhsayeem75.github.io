// ===================================
// Sayeem IT Solution
// Default + Firebase Product System
// ===================================


// DEFAULT PRODUCTS

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




// SHOW PRODUCT FUNCTION

function showProducts(products){

let box=document.getElementById("productsData");

if(!box) return;


box.innerHTML="";


products.forEach(product=>{


box.innerHTML += `


<div class="card">


<img src="${product.image}"
class="product-img"
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
href="https://wa.me/8801601689809?text=I want to order ${product.name}">

Order Now

</a>


</div>



`;


});


}



// SHOW DEFAULT PRODUCT

showProducts(defaultProducts);






// FIREBASE PRODUCT LOAD


if(typeof db !== "undefined"){


db.collection("products").onSnapshot(snapshot=>{


let firebaseProducts=[];


snapshot.forEach(doc=>{


firebaseProducts.push(doc.data());


});


// Default + Firebase merge

showProducts([
...defaultProducts,
...firebaseProducts
]);


});


}







// LOADER


window.addEventListener("load",()=>{


let loader=document.getElementById("loader");


if(loader){

loader.style.display="none";

}


});






// TOP BUTTON


let topBtn=document.getElementById("topBtn");


if(topBtn){


topBtn.style.display="none";


window.addEventListener("scroll",()=>{


if(window.scrollY>300){

topBtn.style.display="block";

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
