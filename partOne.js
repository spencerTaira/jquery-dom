"use strict";

let $img = $("article img");
$img.addClass("image-center");
let $p = $("article p");
$p.last().remove();
$('h1').css({'font-size': randNum0to100() + 'px'});



/**
 * Returns a random number from 0 - 100
 */
function randNum0to100() {
  return Math.floor(Math.random() * 101);
}