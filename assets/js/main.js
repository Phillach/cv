window.addEventListener("hashchange", function(event){
    var modalWrapperFormation = document.querySelector('.modal-wrapper-formation');
    var modalWrapperRealisation = document.querySelector('.modal-wrapper-realisation');
    var currentlyOpen = document.querySelector(".is-open");
    var formationLink = document.querySelector(".formation-link");
    var realisationLink = document.querySelector(".realisation-link");
    var currentLink = document.querySelector(".current-link");

    if (currentLink) {
        currentLink.classList.remove("current-link");
    }

    if (currentlyOpen) {
        currentlyOpen.classList.remove('is-open');
    }

    switch (window.location.hash) {
        case "#formation":
            modalWrapperFormation.classList.add("is-open");
            formationLink.classList.add("current-link");
            
            break;

        case "#realisation":
            modalWrapperRealisation.classList.add("is-open");
            realisationLink.classList.add("current-link");

            break;
    }
});
