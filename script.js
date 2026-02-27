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

const filterSection = document.getElementById("filter-section");

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

mainContainer.addEventListener("click",function(event){

    console.log(event.target.classList.contains("interviewButton"));
   
    if(event.target.classList.contains("interviewButton")) {
        const parentNode = event.target.parentNode.parentNode;
        const mobile = parentNode.querySelector('.mobile').innerText;
        const react = parentNode.querySelector('.react').innerText;
        const remote = parentNode.querySelector('.remote').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const notes = parentNode.querySelector('.notes').innerText;

        const cardInfo = {
            mobile,
            react,
            remote,
            status,
            notes
        }

        const mobileExist = interviewList.find(item => item.mobile == cardInfo.mobile);

        if(!mobileExist){
            interviewList.push(cardInfo);
        }
        renderInterview ();

    }

    
})

function renderInterview (){
    filterSection.innerHTML = '';

    for(let interview of interviewList){
        let div = document.createElement('div');
        div.className = "card flex justify-between p-5 mb-5  bg-white";
        div.innerHTML = ` 
        <div class="space-y-6">
                    <div>
                        <h1 class="mobile text-2xl font-bold">Mobile First Corp</h1>
                        <p class="react text-xl text-gray-500">React Native Develope</p>
                    </div>
                    <div>
                        <p class="remote  text-gray-500 ">Remote
 • 
Full-time 
•
 $130,000 - $175,000</p>
                    </div>
                    <div>
                        <p class="status w-[113px] bg-gray-300 px-2">Not Applied</p>
                        <p class="notes">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>
                    <div class="flex gap-2">
                        <button class="ineterviewButton bg-green-200 p-2">INTERVIEW</button>
                        <button class="rejectButton  bg-red-200 p-2">REJECTED</button>
                    </div>
                </div>
                <div>
                    <button class="trash"><i class="fa-solid fa-trash-can"></i></button>
                </div>`
    }
}