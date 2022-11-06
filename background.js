const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];

function paintBg () {
  const chosenImage = images[Math.floor(Math.random() * images.length)];

  const bgImage = document.createElement("img");
  
  bgImage.src = `${chosenImage}`;
  
  document.body.style.backgroundImage = `url(${chosenImage})`;
}


paintBg ();
setInterval(paintBg, 9000);
