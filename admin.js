let products = [];


const form = document.getElementById("productForm");

const list = document.getElementById("productList");

const total = document.getElementById("totalProduct");



form.addEventListener("submit",function(e){

e.preventDefault();


let product={

name:document.getElementById("productName").value,

price:document.getElementById("productPrice").value,

image:document.getElementById("productImage").value,

desc:document.getElementById("productDesc").value

};


products.push(product);


showProducts();


form.reset();


});





function showProducts(){


list.innerHTML="";


products.forEach((item,index)=>{


list.innerHTML += `

<tr>

<td>${item.name}</td>

<td>${item.price}</td>

<td>

<button onclick="deleteProduct(${index})">

Delete

</button>

</td>

</tr>

`;


});


total.innerHTML=products.length;


}




function deleteProduct(index){

products.splice(index,1);

showProducts();

}
