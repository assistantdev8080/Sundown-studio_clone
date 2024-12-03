const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

/*var a = document.querySelector("#elem1")
var abc = a.getAttribute("data-image")
console.log(abc)*/

var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})
var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
    
// Get all the images inside the right-div
var images = document.querySelectorAll('#right-div img');

// Function to show the image at the given index
function showImage(index) {
    // Loop through all images
    for (var i = 0; i < images.length; i++) {
        // Hide all images by removing 'active' class
        images[i].classList.remove('active');
    }

    // Show the image at the given index by adding 'active' class
    images[index].classList.add('active');
}

