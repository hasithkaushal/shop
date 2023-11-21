function multiplyDiv() {
  var originalDiv = document.getElementsByClassName("product-card-bg");
  var originalContainer = document.getElementById("product-container");
  for (let i = 0; i < 11; i++) {
    originalContainer.appendChild(originalDiv[i].cloneNode(true));
  }
}

multiplyDiv();
