// let button=document.querySelector("#icon");

// let page=document.querySelector(".page")
// button.classList.add("check")
// button.addEventListener("click",()=>{
//     button.classList.toggle("page")
   
// })
// document.addEventListener('DOMContentLoaded', () => {
//     const toggleButton = document.getElementById('icon');
//     const currentTheme = localStorage.getItem('theme');

//     // Apply the saved theme on page load
//     if (currentTheme) {
//         document.page.classList.add(currentTheme);
//     } else {
//         document.page.classList.add('light'); // Default theme
//     }

//     // Toggle theme on button click
//     toggleButton.addEventListener('click', () => {
//         if (document.page.classList.contains('light')) {
//             document.page.classList.remove('light');
//             document.page.classList.add('dark');
//             localStorage.setItem('theme', 'dark');
//         } else {
//             document.page.classList.remove('dark');
//             document.page.classList.add('light');
//             localStorage.setItem('theme', 'light');
//         }
//     });
// });











let link=document.querySelector("#ic")
let button = document.querySelector("#icon");
let body = document.querySelector("body");

// Set initial theme based on local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
}

// Add 'check' class to the button initially
button.classList.add("check");

// Add click event listener to the button
button.addEventListener("click", () => {
    // Toggle between light and dark themes
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
      link.classList.add("light")
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        link.classList.add("light")
        localStorage.setItem('theme', 'dark');
    }
})