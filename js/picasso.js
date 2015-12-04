// Js with Steer
//alert("Hellloooooooooo");
// Aim: Display the lightbox with the correct image when we click on an image
// Step 1: Add a click event listener to our image inside of the sections
$("section img").on("click", function(){
// Step 2: Fade in a lightbox over 250ms
  $("#lightbox").fadeIn("250")
// Step 3: Replace an image in the lightbox with the image that has been clicked on
// Store the src attribute of the image that has been clicked on.
  var imageSrc = $(this).attr("src");
  console.log(imageSrc);
// Replace lightbox img
//$("body").css("background","red");
// replace the lightbox img src with the ImageSrc we stored in the variable.
$("#lightbox img").attr("src",imageSrc)
});
// Step 4: Add a click event listener to the lightbox
$("#lightbox").on("click", function(){
// Step 5: Fade out the lightbox
  $("#lightbox").fadeOut("250")
});
//Aim: Change the background colour of the body as we scroll down the page:
//step1 : Create a scroll event listener. Attach to the whole document or page.
//this monitors scroll events on the page, and triggers the function every time a user scrolls.
$(document).on("scroll", function(){

//step2: Store the number of pixels from the top of the page (This happens every time we scroll)We use the scrollTop action, this returns the vertical postion of the scroll bar.
  var pixelsFromTop = $(document).scrollTop()
  console.log(pixelsFromTop)
//step3: change the background colour according to how far from the top of the page we currently are.
 //if (thisIsTrue) {
   //do something
 //} else {
   //it's not true, do something else
// }

if (pixelsFromTop > 50) {
  //Turn the body background colour to blue
  //.addclass action allows us to add classses to elements in our html. Here we add the blue class from our CSS - note we don't need the . here as it is only expecting the class name
  $("body").addClass("blue");
}
  else {
$("body").removeClass("blue");
  }

//Step 4: .toggleClass is an alternative to the long way above. - it does the same thing, but quicker as there is a true/false (boolean) within. It has the following syntax: $("element").toggleClass("className", "state"); the state is the value that needs to be evaluated as either true or false.

$("body").toggleClass("rose", pixelsFromTop > 1410);
$("body").toggleClass("cubism", pixelsFromTop > 2935);

});
