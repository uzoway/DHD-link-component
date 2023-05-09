// Select the elements using queryselector
const button = document.querySelector(".main__container--link");
const overlay = document.querySelector(".overlay");


// Get the size and position of the button relative to the viewport
const buttonCord = button.getBoundingClientRect();


// Initialize empty variables to store the x and y coordinate of the cursor position relative to the link element
let mousePosX;
let mousePosY;


button.addEventListener("mouseover", (e) => {
    // Update the position of the overlay with the position of the cursor relative to the link element on mouseenter
    mousePosX = e.clientX - buttonCord.left;
    mousePosY = e.clientY - buttonCord.top;

    gsap.set(overlay, {
        top: mousePosY,
        left: mousePosX
    })
    
    // Add the active class to the overlay
    overlay.classList.add("active");
})


// Remove the active class after 1s on mouseleave
button.addEventListener("mouseleave", () => {
    setTimeout(() => {
        overlay.classList.remove("active");
    }, 1000)
})


