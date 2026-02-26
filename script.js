let total = document.getElementById("total");
let interviewCount = document.getElementById("interviewCount");
let rejectCount = document.getElementById("rejectCount");
let sidebar = document.getElementById("sidebar");
let allCards = document.getElementById("allCards");

function calculateCount(){
    total.innerText = allCards.children.length;
    sidebar.innerText =allCards.children.length + "jobs";
}
calculateCount();