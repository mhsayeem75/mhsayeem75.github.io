function orderProduct(product){


let phone="8801601689809";


let message="I want to order: "+product;



window.open(

"https://wa.me/"+phone+"?text="+encodeURIComponent(message),

"_blank"

);


}
