function toggleLongText() {
  var longText = document.getElementById("long-text");
  if (longText.style.display === "none") {
    longText.style.display = "block";
    document.querySelector("button").textContent = "Read Less";
  } else {
    longText.style.display = "none";
    document.querySelector("button").textContent = "Read More";
  }
}