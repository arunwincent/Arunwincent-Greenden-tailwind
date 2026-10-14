//selecting side navbar, menu icon
var sidenav =document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
sidenav.style.right="-50%"
})

//product search functionality

var productcontainer=document.getElementById("productcontainer")
var search=document.getElementById("search-input")
var list=productcontainer.querySelectorAll("div")
search.addEventListener("keyup",function(event){
    var entervalue=event.target.value.toUpperCase()
    for (var count = 0; count < list.length; count = count + 1) {
        var h1Element = list[count].querySelector("h1")
        
        if (h1Element) {
            var productname = h1Element.textContent
            
            if (productname.toUpperCase().indexOf(entervalue) < 0) {
                list[count].style.display = "none" 
            } else {
                list[count].style.display = "block" 
            }
        }
    }
})