const projectRpa = document.getElementById("project-rpa");

const projectModal = document.getElementById("project-modal");


projectRpa.addEventListener("click", function () {

    projectModal.style.display = "flex";

});

const modalClose = document.querySelector(".modal-close");


modalClose.addEventListener("click", function () {

    projectModal.style.display = "none";

});

projectModal.addEventListener("click", function (event) {

    if (event.target === projectModal) {

        projectModal.style.display = "none";

    }

});