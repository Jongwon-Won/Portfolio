const projectCards = document.querySelectorAll(".project-card");

const projectModal = document.getElementById("project-modal");

const modalClose = document.querySelector(".modal-close");

const modalNumber = document.getElementById("modal-number");

const modalTitle = document.getElementById("modal-title");

const modalBackground = document.getElementById("modal-background");

const modalApproach = document.getElementById("modal-approach");

const modalRole = document.getElementById("modal-role");

const modalResult = document.getElementById("modal-result");


// 프로젝트 영상 관련 요소

const modalVideoSection = document.getElementById("modal-video-section");

const modalVideo = document.getElementById("modal-video");



const projectData = {

    1: {
        title: "구매 발주 프로세스 자동화",

        background:
            "실시간으로 접수되는 구매 신청에 대해 내부 결재, ERP 발주 처리, 거래처 발주서 발송 및 발주 현황 보고까지 여러 단계의 반복 업무가 발생하고 있었습니다.",

        approach:
            "구매 신청서를 기준으로 내부 결재부터 ERP 발주 처리, 거래처 메일 발송까지 이어지는 프로세스를 RPA로 연결했습니다. 또한 주·월 단위로 발주 데이터를 자동 취합하여 발주 현황 보고까지 수행하도록 구성했습니다.",

        role:
            "구매 발주 업무 분석부터 자동화 프로세스 설계, RPA 개발, 테스트, 현업 적용 및 운영까지 전 과정을 직접 수행했습니다. ERP, 그룹웨어, 문서중앙화, Excel, PDF 및 OCR 연계를 포함한 End-to-End 자동화를 구축했습니다.",

        result:
            "연간 업무 절감 시간 : 1,828.4시간\n연간 금액 환산 : 약 5,000만원\n연간 인력 대체 : 0.95명",

        video:
            ""
    },


    2: {
        title: "경쟁사 상품·시장 모니터링 자동화",

        background:
            "경쟁사 자사몰에 매일 접속하여 당사와 유사한 상품과 신규 출시 상품을 확인하고, 상품 정보를 수작업으로 취합해야 하는 반복적인 시장조사 업무가 발생하고 있었습니다.",

        approach:
            "RPA가 경쟁사 자사몰에 접속하여 상품명, 상품 수, URL 등의 정보를 자동 수집하도록 구성했습니다. 기존 수집 데이터와 비교하여 신규 등록된 상품을 식별하고 변경된 상품 현황을 담당자에게 자동 안내하도록 구현했습니다.",

        role:
            "경쟁사 상품 조사 업무 분석부터 자동화 설계, 웹 데이터 수집 로직 개발, 비교·탐지 기능 구현, 테스트, 현업 적용 및 운영까지 전 과정을 직접 수행했습니다.",

        result:
            "연간 업무 절감 시간 : 324시간\n연간 금액 환산 : 약 972만원\n연간 인력 대체 : 0.17명",

        video:
            ""
    },


    3: {
        title: "대형마트 매출 데이터 분석 자동화",

        background:
            "대형마트에서 제공하는 판매 데이터를 기반으로 상품별 판매 실적을 분석하고, 재고 부족 및 장기재고를 지속적으로 관리해야 하는 업무가 발생하고 있었습니다.",

        approach:
            "대형마트의 판매 데이터를 자동 수집·가공하여 상품별 판매 실적과 판매 추이를 분석하도록 구성했습니다. 판매 및 재고 데이터를 함께 분석하여 재고 부족 상품은 담당자에게 안내하고 발주 업무로 연결하며, 장기간 판매되지 않는 상품은 장기재고 대상으로 분류하도록 자동화했습니다.",

        role:
            "판매·재고 관리 업무 분석부터 자동화 프로세스 설계, 데이터 수집·분석 로직 개발, ERP 및 업무 시스템 연계, 테스트, 현업 적용 및 운영까지 전 과정을 직접 수행했습니다.",

        result:
            "연간 업무 절감 시간 : 1,796시간\n연간 금액 환산 : 약 5,056만원\n연간 인력 대체 : 0.93명",

        video:
            ""
    },


    4: {
        title: "온실가스 배출량 산정 및 AI 보고서 자동화",

        background:
            "온실가스 배출량 산정을 위해 ERP와 외부 사이트에 분산된 여러 데이터를 수집하고, 이를 계산·정리하여 경영진 보고자료로 작성하는 과정이 필요했습니다.",

        approach:
            "ERP에서 자재재고현황, 유틸리티 사용량, 생산 수율 및 매입 데이터를 수집하고 KRX 사이트에서 KAU26 데이터를 추가 수집하도록 구성했습니다. 수집된 데이터를 기반으로 배출량 누적 Excel과 요약 보고서를 작성한 뒤 ChatGPT를 활용하여 경영진용 PowerPoint 보고서를 생성하고 메일로 자동 배포하도록 연결했습니다.",

        role:
            "온실가스 보고 업무 분석부터 데이터 수집 및 산정 프로세스 설계, RPA 개발, ChatGPT 연계, PowerPoint 보고서 생성, 테스트, 경영진 보고 프로세스 적용 및 운영까지 전 과정을 직접 수행했습니다.",

        result:
            "연간 업무 절감 시간 : 4시간\n연간 금액 환산 : 약 8만원\n연간 인력 대체 : 0.002명",

        video:
            ""
    },


    5: {
        title: "매입·매출 마감 및 회계 대사 자동화",

        background:
            "국내·외 매입 및 매출 과정에서 수주, 거래명세서, 세금계산서, 입금전표, 매출부가세, 가수금, 법인카드 등 다양한 마감 및 회계 처리 업무가 반복적으로 발생하고 있었습니다.",

        approach:
            "부서별 마감 업무를 RPA로 자동화하고, 스캔된 계산서는 OCR을 활용하여 데이터를 추출하도록 구성했습니다. 데이터 위치가 일정하지 않은 PDF는 ChatGPT를 활용하여 필요한 정보를 추출하고, 마감 이후에는 홈택스 세금계산서와 ERP 전표를 자동 대사하여 건수 및 금액 차이를 확인하도록 구현했습니다.",

        role:
            "부서별 매입·매출 마감 업무 분석부터 자동화 프로세스 설계, RPA 개발, ERP·홈택스·거래처 시스템 연계, OCR 및 ChatGPT 적용, 테스트, 현업 적용 및 운영까지 전 과정을 직접 수행했습니다.",

        result:
            "연간 업무 절감 시간 : 2,915.7시간\n연간 금액 환산 : 약 6,306만원\n연간 인력 대체 : 확인 필요",

        video:
            ""
    },


    6: {
        title: "IT 시스템 정기 점검 자동화",

        background:
            "ERP, 네트워크 및 보안 시스템을 대상으로 월·분기·연 단위의 정기 점검을 반복적으로 수행해야 하며, 점검 시기와 대상 시스템을 지속적으로 관리해야 했습니다.",

        approach:
            "월 단위 ERP 백업 및 AS 처리 결과, 방화벽·스위치 특이사항을 점검하고, 분기 단위로 ERP DB·OS 로그인 정책, 접근권한자, ERP 권한 및 불법 프로그램 사용 여부를 점검하도록 구성했습니다. 연 단위 IT 정책서 점검과 그룹웨어 게시 업무도 자동화했습니다.",

        role:
            "IT 시스템 및 보안 점검 업무 분석부터 점검 항목 정의, 자동화 프로세스 설계, RPA 개발, 시스템 연계, 테스트, 정기 실행 적용 및 운영까지 전 과정을 직접 수행했습니다.",

        result:
            "연간 업무 절감 시간 : 12시간\n연간 금액 환산 : 약 24만원\n연간 인력 대체 : 0.006명",

        video:
            ""
    }

};



// =========================
// 영상 정지 및 초기화
// =========================

function stopModalVideo() {

    modalVideo.pause();

    modalVideo.currentTime = 0;

}



// =========================
// 프로젝트 팝업 닫기
// =========================

function closeProjectModal() {

    stopModalVideo();

    projectModal.style.display = "none";

}



// =========================
// 프로젝트 카드 클릭
// =========================

projectCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const projectNumber = card.dataset.project;

        const data = projectData[projectNumber];


        // 등록되지 않은 프로젝트일 경우 종료

        if (!data) {

            return;

        }


        // 프로젝트 번호
        // 1 -> PROJECT 01
        // 10 -> PROJECT 10

        modalNumber.textContent =
            "PROJECT " + String(projectNumber).padStart(2, "0");


        modalTitle.textContent = data.title;

        modalBackground.textContent = data.background;

        modalApproach.textContent = data.approach;

        modalRole.textContent = data.role;

        modalResult.textContent = data.result;



        // =========================
        // 프로젝트 영상 연결
        // =========================

        stopModalVideo();


        if (data.video) {

            modalVideo.src = data.video;

            modalVideoSection.style.display = "block";

            modalVideo.load();

        } else {

            modalVideo.removeAttribute("src");

            modalVideoSection.style.display = "none";

            modalVideo.load();

        }



        // =========================
        // 팝업 표시
        // =========================

        projectModal.style.display = "flex";


        // 밝기 변화 효과 다시 실행

        projectModal.classList.remove("modal-fade-in");

        void projectModal.offsetWidth;

        projectModal.classList.add("modal-fade-in");

    });

});



// =========================
// 영상 클릭 재생 / 일시정지
// =========================

modalVideo.addEventListener("click", function () {

    if (modalVideo.paused) {

        modalVideo.play();

    } else {

        modalVideo.pause();

    }

});



// =========================
// X 버튼으로 팝업 닫기
// =========================

modalClose.addEventListener("click", function () {

    closeProjectModal();

});



// =========================
// 팝업 바깥 영역 클릭 시 닫기
// =========================

projectModal.addEventListener("click", function (event) {

    if (event.target === projectModal) {

        closeProjectModal();

    }

});



// =========================
// ESC 키로 팝업 닫기
// =========================

document.addEventListener("keydown", function (event) {

    if (
        event.key === "Escape" &&
        projectModal.style.display === "flex"
    ) {

        closeProjectModal();

    }

});



// =========================
// TOP 버튼
// =========================

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



// =========================
// 모바일 메뉴
// =========================

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



// =========================
// 이메일 주소 복사
// =========================

const emailLink = document.getElementById("email-link");


emailLink.addEventListener("click", function (event) {

    event.preventDefault();

    navigator.clipboard.writeText("wjw0927@hanmail.net");

    alert("이메일 주소가 복사되었습니다.");

});