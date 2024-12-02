//selecting the element
var container=document.querySelector(".container")
var addbtn=document.querySelector(".add-btn")
var overlay=document.querySelector(".overlay")
var bookform=document.querySelector(".book-form")
var cancel=document.getElementById("cancel-book")
var add=document.getElementById("add-book")

//selecting inputs

var booktitle=document.querySelector(".book-title-input")
var bookauthor=document.querySelector(".book-author-input")
var booktextarea=document.querySelector(".book-textarea-input")
// var deletee=document.querySelector(".btn")


addbtn.addEventListener("click",function(){
    overlay.style.display="block"
    bookform.style.display="block"
})

cancel.addEventListener("click",function(){
    overlay.style.display="none"
    bookform.style.display="none"
})



add.addEventListener("click", function(){
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${booktextarea.value}</p>
    <button class="btn" onclick="deletee(event)">Delete</button>`
    container.append(div)

    overlay.style.display="none"
    bookform.style.display="none"


})
function deletee(event){
    event.target.parentElement.remove()

}