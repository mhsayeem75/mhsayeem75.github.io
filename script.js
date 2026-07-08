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
                alt="${product.name}"
                onerror="this.style.display='none'">


                <h3>${product.name}</h3>


                <p>
                Sayeem IT Solution Quality Product
                </p>


                <h4>
                Price: ${product.price}
                </h4>


                <a class="btn"
                target="_blank"
                href="https://wa.me/8801601689809?text=Hello%20Sayeem%20IT%20Solution,%20I%20want%20to%20order%20${product.name}">

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

    const loader = document.getElementById("loader");


    if(loader){

        loader.style.display="none";

    }

});






// ================================
// BACK TO TOP BUTTON
// ================================

const topBtn = document.getElementById("topBtn");


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


        const target = document.querySelector(this.getAttribute("href"));


        if(target){

            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});
