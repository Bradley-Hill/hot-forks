const hiddenMenuButton =  document.querySelector('#hidden-menu-button')
const menu =  document.querySelector('#menu')

document.querySelector('#menu-button').addEventListener('click', () => {
    menu.style.display = 'none';
    hiddenMenuButton.style.display = 'inline';
})

hiddenMenuButton.addEventListener('click', () => {
    menu.style.display = 'flex';
    hiddenMenuButton.style.display = 'none';
})
var myVideo = document.getElementById("trailer1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

