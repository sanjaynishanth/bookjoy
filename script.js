var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("popup-button");

addpopupbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
})

var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click", function(event) {
    event.preventDefault()
    popupoverlay.style.display = "none";
    popupbox.style.display="none"
})

var container = document.querySelector(".container")
var addbook = document.getElementById("add-popup")
var booknameinput = document.getElementById("book-name-input")
var authornameinput = document.getElementById("author-name-input")
var shortdiscription = document.getElementById("short-discription")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h1>${booknameinput.value}</h1>
    <h5>${authornameinput.value}</h5>
    <p>${shortdiscription.value}</p>
    <button class=close-button ,onclick="deletebook(event)">close</button>`

    container.append(div)
    popupoverlay.style.display = "none";
    popupbox.style.display="none"
})


function deletebook(event){
    event.target.parentElement.remove()

}