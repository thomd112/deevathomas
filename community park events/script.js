fetch("https://data.cityofnewyork.us/resource/6v4b-5gp4.json")
  .then(response => response.json())
  .then(data => {
   
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

  const dataContainer = document.getElementById("data-container");
const showHideBtn = document.getElementById("show-hide-btn");

showHideBtn.addEventListener("click", function() {
  if (dataContainer.style.display === "none") {
    dataContainer.style.display = "block";
    showHideBtn.innerText = "Hide Data";
  } else {
    dataContainer.style.display = "none";
    showHideBtn.innerText = "Show Data";
  }
});

fetch("https://data.cityofnewyork.us/resource/6v4b-5gp4.json")
  .then(response => response.json())
  .then(data => {
    // Do something with the data here
    console.log(data);
    dataContainer.innerHTML = JSON.stringify(data);
  })
  .catch(error => {
    console.error(error);
  });



  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }










