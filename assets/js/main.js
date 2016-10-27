/*var formModal = document.getElementById("formation-link");

formModal.addEventListener("click", modalLink);

function modalLink() {
  var allModal = document.querySelectorAll("div");

  for (var i = 0; i < allModal.length; i++) {
    allModal[i].className = "hide";
  }
}*/


$(function() {

  $('.current-link').click(function(){
    $('.modal-wrapper').addClass('is-open');
    return false;
  });

  $('.close-btn').click(function(){
    $('.modal-wrapper').removeClass('is-open');
  });

});
