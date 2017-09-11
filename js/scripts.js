$(function() {
 $('.type-it').typeIt({
   speed: 120,
   deleteSpeed: 80,
   lifeLike: false,
   autoStart: false,
   loop: true,
   loopDelay: 750,
   breakLines: true,
   breakDelay: 750
 })
  .tiType('Portland, Oregon &#9730;')
  .tiSettings({speed: 140})
  .tiDelete(18)
  .tiType('Web Developer');
});
