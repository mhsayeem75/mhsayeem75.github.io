let products = JSON.parse(localStorage.getItem("products")) || [];


document.getElementById("productForm")
.addEventListener("submit",function(e){


e.preventDefault();



let product={

name:document.getElementById("name").value,

price:document.getElementById("price").value,

image:document.getElementById("image").value

};



products.push(product);



localStorage.setItem(
"products",
JSON.stringify(products)
);



alert("Product Added Successfully");


location.reload();


});




function showProducts(){


let box=document.getElementById("productList");


products.forEach((p,index)=>{


box.innerHTML += `


<div class="card">


<img src="${p.image}"
class="product-img">


<h3>${p.name}</h3>


<h4>${p.price}</h4>


<button onclick="deleteProduct(${index})">

Delete

</button>


</div>


`;


});


}



function deleteProduct(index){


products.splice(index,1);


localStorage.setItem(
"products",
JSON.stringify(products)
);


location.reload();


}



showProducts();
