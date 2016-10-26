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
    $('.modal-formation').addClass('is-open');
    return false;
  });

  //$('.current-link').click(function(){
  //  $('.formation-modal-wrapper').removeClass('is-open');
  //});

});
