const dayh2 = document.querySelector("#day");

function getDay() {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dateObj = new Date();

  const month = monthNames[dateObj.getMonth()];  
  const day = String(dateObj.getDate()).padStart(2, '0'); 
  const year = dateObj.getFullYear();

  dayh2.textContent = `${month}. ${day}, ${year}`;
}

getDay();