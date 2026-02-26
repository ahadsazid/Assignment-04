let total = document.getElementById("total");
let interviewCount = document.getElementById("interviewCount");
let rejectCount = document.getElementById("rejectCount");
let sidebar = document.getElementById("sidebar");
let allCards = document.getElementById("allCards");

let interviewList = [];
let rejectedList = [];

const allBtn = document.getElementById("all-btn");
const interBtn =document.getElementById("inter-btn");
const rejectBtn = document.getElementById("reject-btn");

const mainContainer = document.querySelector("main");

function calculateCount(){
    total.innerText = allCards.children.length;
    sidebar.innerText = allCards.children.length + "jobs";
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectedList.length;

}
calculateCount();

function toggleStyle(id){
    
    allBtn.classList.remove("bg-blue-500", "text-white");
    interBtn.classList.remove("bg-blue-500","text-white");
    rejectBtn.classList.remove("bg-blue-500","text-white");

    allBtn.classList.add("bg-white", "text-black");
    interBtn.classList.add("bg-white","text-black");
    rejectBtn.classList.add("bg-white","text-black");

    

    const selected =document.getElementById(id);

    

    selected.classList.remove("bg-white", "text-black");
    selected.classList.add("bg-blue-500", "text-white");




}