"use strict";

// Number 1
let $img = $("article img");
$img.addClass("image-center");

// Number 2
let $p = $("article p");
$p.last().remove();

// Number 3
$('h1').css({ 'font-size': randNum0to100() + 'px' });

/**
 * Returns a random number from 0 - 100
 */
function randNum0to100() {
  return Math.floor(Math.random() * 101);
}

// Number 4
let $newLi = $("<li>New list item!</li>");
$("ol").append($newLi);

// Number 5
$("aside").empty();
$("aside").append("<p>Lists suck, sorry.</p>");

// Number 6
let $numberForms = $(".form-control");

$(".row.mb-5").on("change", ".form-control", changeColor)

/** Change background color of body based on rgb values in input forms. */
function changeColor() {
  let colorVals = [];
  $numberForms.each(function () {
    colorVals.push($(this).val());
  });
  $("body").css("background-color", `rgb(${colorVals[0]}, ${colorVals[1]}, ${colorVals[2]})`);
}


// Number 7 - removes image when clicked
$img.on("click", function () {
  $img.remove();
})




