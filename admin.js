function addProduct(){


let name =
document.getElementById("name").value;


let price =
document.getElementById("price").value;


let image =
document.getElementById("image").value;



db.collection("products").add({

name:name,

price:price,

image:image

})


.then(()=>{

alert("Product Added Successfully");

});


}
