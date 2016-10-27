/*var formModal = document.getElementById("formation-link");

formModal.addEventListener("click", modalLink);

function modalLink() {
  var allModal = document.querySelectorAll("div");

  for (var i = 0; i < allModal.length; i++) {
    allModal[i].className = "hide";
  }
}*/


$(function() {
//formation modal
  $('.current-link').click(function(){
    $('.modal-wrapper-formation').addClass('is-open');
    return false;
  });

  $('.close-btn').click(function(){
    $('.modal-wrapper-formation').removeClass('is-open');
  });

  //realisation modal
  $('.realisation-link').click(function(){
    $('.modal-wrapper-realisation').addClass('is-open');
    return false;
  });

  $('.close-btn').click(function(){
    $('.modal-wrapper-realisation').removeClass('is-open');
  });

});
