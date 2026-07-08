// Firebase Product Load

db.collection("products").onSnapshot((snapshot)=>{


let productsBox=document.getElementById("productsData");


if(!productsBox) return;


productsBox.innerHTML="";



snapshot.forEach((doc)=>{


let product=doc.data();



productsBox.innerHTML += `


<div class="card">


<img src="${product.image}"
class="product-img">


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
href="https://wa.me/8801601689809?text=I want ${product.name}"
target="_blank">

Order Now

</a>


</div>


`;



});


});
