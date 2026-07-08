// ==========================================
// Sayeem IT Solution
// Admin Product Add System
// ==========================================



function addProduct(){



let name = document.getElementById("name").value;

let price = document.getElementById("price").value;

let image = document.getElementById("image").value;





if(name=="" || price=="" || image==""){


alert("Please fill all fields");

return;


}





db.collection("products").add({


name:name,


price:price,


image:image,


date:new Date()



})



.then(()=>{


alert("Product Added Successfully");



document.getElementById("name").value="";

document.getElementById("price").value="";

document.getElementById("image").value="";



})



.catch((error)=>{


alert("Error: "+error.message);



});



}
