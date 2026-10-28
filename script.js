const cube = document.querySelector(".cube");
const cubeFaces = document.querySelectorAll(".cube__face");
const radioGroup = document.querySelector(".radio-group");
const statusText = document.getElementById("status");
const cubeOpacitySwitch = document.getElementById("toggleswitch");
const copyright = document.getElementById("copy");

//  event listeners for interactivity
cubeOpacitySwitch.addEventListener("change", cubeOpacity);
radioGroup.addEventListener("change", changeSide);

statusText.innerHTML = "<p class='cubeOpacityText'>solid</p>"; // initial status text
let currentClass = ""; // variable to track current cube face class

// function to change the visible side of the cube
function changeSide() {
  const checkedRadio = radioGroup.querySelector(":checked"); // get the checked radio button
  const showClass = "show-" + checkedRadio.value; // create class name based on selected side
  if (currentClass) {
    cube.classList.remove(currentClass); // remove the current class
  }
  cube.classList.add(showClass); // add the new class to show the selected side
  currentClass = showClass; // update current class
}

changeSide(); // set initial side

// function to toggle cube opacity
function cubeOpacity() {
  const opacityValue = this.checked ? "0.6" : "1"; // determine opacity based on toggle state
  cubeFaces.forEach((face) => {
    face.style.backgroundColor = `rgba(255, 255, 255, ${opacityValue})`; // set opacity for each face
  });
  statusText.innerHTML = `<p class="cubeOpacityText">${this.checked ? "transparent" : "solid"}</p>`; // update status text
}

// Dynamically generate copyright information
copyright.innerHTML =
  "Copyright &copy; " + // Start of the copyright string
  new Date().getFullYear() + // Get the current year
  ` <a href="https://www.gaz41.com">gaz41.com</a>. <span class="copy2">All Rights Reserved</span>`;
