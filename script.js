db.collection("products").onSnapshot((snapshot)=>{

let products = document.getElementById("productsData");

products.innerHTML = "";


snapshot.forEach((doc)=>{

let data = doc.data();


products.innerHTML += `

<div class="card">

<img src="${data.image}" class="product-img">


<h3>${data.name}</h3>


<h4>${data.price}</h4>


<a class="btn"
href="https://wa.me/8801601689809?text=I want to order ${data.name}">

Order Now

</a>


</div>

`;

});


});
db.collection("products")
.onSnapshot((snapshot)=>{


let box=document.getElementById("productsData");


box.innerHTML="";


snapshot.forEach(doc=>{


let p=doc.data();



box.innerHTML += `

<div class="card">


<img src="${p.image}" class="product-img">


<h3>${p.name}</h3>


<h4>${p.price}</h4>


<a class="btn"

href="https://wa.me/8801601689809?text=I want ${p.name}">

Order Now

</a>


</div>


`;


});


});
