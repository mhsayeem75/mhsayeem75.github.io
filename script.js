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
