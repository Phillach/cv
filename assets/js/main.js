/*var formModal = document.getElementById("formation-link");

formModal.addEventListener("click", modalLink);

function modalLink() {
  var allModal = document.querySelectorAll("div");

  for (var i = 0; i < allModal.length; i++) {
    allModal[i].className = "hide";
  }
}*/



function onReady(){
    initFormation();
    initRealisation();
}

function initFormation() {
    var formationLink = document.querySelector('.formation-link');
    var modalWrapperFormation = document.querySelector('.modal-wrapper-formation');
    var closeBtnFormation = document.querySelector('.close-btn-formation');

    formationLink.addEventListener("click", function(){
        modalWrapperFormation.classList.add("is-open");
    });

    closeBtnFormation.addEventListener("click", function(){
        modalWrapperFormation.classList.remove("is-open");
    });

}

function initRealisation() {
    var realisationLink = document.querySelector('.realisation-link');
    var modalWrapperRealisation = document.querySelector('.modal-wrapper-realisation');
    var closeBtnRealisation = document.querySelector('.close-btn-realisation');

    realisationLink.addEventListener("click", function(){
        modalWrapperRealisation.classList.add("is-open");
    });

    closeBtnRealisation.addEventListener("click", function(){
        modalWrapperRealisation.classList.remove("is-open");
    });
}

document.addEventListener("DOMContentLoaded", onReady);
