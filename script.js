var rect = document.querySelector("#centre");


rect.addEventListener("mousemove",function(details){
    var rectangleLocation = rect.getBoundingClientRect();
    console.log(details.clientX);
})
