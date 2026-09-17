const projectCards = document.querySelectorAll(".project-card");

const projectModal = document.getElementById("project-modal");

const modalClose = document.querySelector(".modal-close");

const modalNumber = document.getElementById("modal-number");

const modalTitle = document.getElementById("modal-title");

const modalBackground = document.getElementById("modal-background");

const modalApproach = document.getElementById("modal-approach");

const modalRole = document.getElementById("modal-role");

const modalResult = document.getElementById("modal-result");

const projectData = {

    1: {
        title: "전사 RPA 업무자동화 운영 체계 구축",
        background: "프로젝트 01의 배경 내용을 작성할 영역입니다.",
        approach: "프로젝트 01의 접근 및 해결 방법을 작성할 영역입니다.",
        role: "프로젝트 01에서 담당한 역할을 작성할 영역입니다.",
        result: "프로젝트 01의 결과와 성과를 작성할 영역입니다."
    },

    2: {
        title: "업무 시스템 연계 자동화",
        background: "프로젝트 02의 배경 내용을 작성할 영역입니다.",
        approach: "프로젝트 02의 접근 및 해결 방법을 작성할 영역입니다.",
        role: "프로젝트 02에서 담당한 역할을 작성할 영역입니다.",
        result: "프로젝트 02의 결과와 성과를 작성할 영역입니다."
    },

    3: {
        title: "근태관리 프로세스 자동화",
        background: "프로젝트 03의 배경 내용을 작성할 영역입니다.",
        approach: "프로젝트 03의 접근 및 해결 방법을 작성할 영역입니다.",
        role: "프로젝트 03에서 담당한 역할을 작성할 영역입니다.",
        result: "프로젝트 03의 결과와 성과를 작성할 영역입니다."
    },

    4: {
        title: "P-Box 이물 검사 시스템 도입",
        background: "프로젝트 04의 배경 내용을 작성할 영역입니다.",
        approach: "프로젝트 04의 접근 및 해결 방법을 작성할 영역입니다.",
        role: "프로젝트 04에서 담당한 역할을 작성할 영역입니다.",
        result: "프로젝트 04의 결과와 성과를 작성할 영역입니다."
    }

};
projectCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const projectNumber = card.dataset.project;

        const data = projectData[projectNumber];

        modalNumber.textContent = "PROJECT 0" + projectNumber;

        modalTitle.textContent = data.title;

        modalBackground.textContent = data.background;

        modalApproach.textContent = data.approach;

        modalRole.textContent = data.role;

        modalResult.textContent = data.result;

        projectModal.style.display = "flex";

    });

});


modalClose.addEventListener("click", function () {

    projectModal.style.display = "none";

});


projectModal.addEventListener("click", function (event) {

    if (event.target === projectModal) {

        projectModal.style.display = "none";

    }

});

const topButton = document.getElementById("top-button");

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

const menuButton = document.getElementById("menu-button");

const nav = document.getElementById("nav");


menuButton.addEventListener("click", function () {

    nav.classList.toggle("show");

});

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("show");

    });

});

const emailLink = document.getElementById("email-link");

emailLink.addEventListener("click", function (event) {

    event.preventDefault();

    navigator.clipboard.writeText("wjw0927@hanmail.net");

    alert("이메일 주소가 복사되었습니다.");

});