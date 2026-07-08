// Mobile Menu Toggle

function toggleMenu(){

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


// Back To Top Button

const topBtn = document.getElementById("topBtn");


window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

};


topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};



// Scroll Animation

const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{

    sections.forEach(section=>{

        const position = section.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){

            section.classList.add("show");

        }

    });

});



// Contact Form Alert

const form = document.querySelector("form");


if(form){

form.addEventListener("submit",function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

});

}
