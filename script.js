let total = document.getElementById("total");
let interviewCount = document.getElementById("interviewCount");
let rejectCount = document.getElementById("rejectCount");
let sidebar = document.getElementById("sidebar");

let allCards = document.getElementById("allCards");

let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

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
    currentStatus = id;

    

    selected.classList.remove("bg-white", "text-black");
    selected.classList.add("bg-blue-500", "text-white");

    if(id === 'inter-btn'){
        allCards.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderInterview();

    }
    else if(id === 'all-btn'){
        allCards.classList.remove("hidden");
        filterSection.classList.add("hidden");
    }else if(id === 'reject-btn'){
         allCards.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderReject();

    }




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

        parentNode.querySelector('.status').innerText = "Interview";

        const cardInfo = {
            mobile,
            react,
            remote,
            status:'Interview',
            notes
        }

        const mobileExist = interviewList.find(item => item.mobile == cardInfo.mobile);

         parentNode.querySelector('.status').innerText = "Interview";

        if(!mobileExist){
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item => item.mobile !== cardInfo.mobile);

        calculateCount();

        if(currentStatus == 'reject-btn'){
            renderReject();
        }

       

    }else if(event.target.classList.contains("rejectButton")) {
        const parentNode = event.target.parentNode.parentNode;
        const mobile = parentNode.querySelector('.mobile').innerText;
        const react = parentNode.querySelector('.react').innerText;
        const remote = parentNode.querySelector('.remote').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const notes = parentNode.querySelector('.notes').innerText;

        parentNode.querySelector('.status').innerText = "Rejected";

        const cardInfo = {
            mobile,
            react,
            remote,
            status:'Reject',
            notes
        }

        const mobileExist = rejectedList.find(item => item.mobile == cardInfo.mobile);

         parentNode.querySelector('.status').innerText = "Rejected";

        if(!mobileExist){
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.mobile !== cardInfo.mobile);

        if(currentStatus == 'inter-btn'){
            renderInterview();

        }

        calculateCount();

        





    }

    
})


function renderInterview (){
    filterSection.innerHTML = '';

    if(interviewList.length ===0){
        noJobs();
        return;
    }

    for(let interview of interviewList){
        let div = document.createElement('div');
        div.className = "card flex justify-between p-5 mb-5  bg-white";
        div.innerHTML = ` 
        <div class="space-y-6">
                    <div>
                        <h1 class="mobile text-2xl font-bold">${interview.mobile}</h1>
                        <p class="react text-xl text-gray-500">${interview.react}</p>
                    </div>
                    <div>
                        <p class="remote  text-gray-500 ">${interview.remote}</p>
                    </div>
                    <div>
                        <p class="status w-[113px] bg-gray-300 px-2">${interview.status}</p>
                        <p class="notes">${interview.notes}</p>
                    </div>
                    <div class="flex gap-2">
                        <button class="interviewButton bg-green-200 p-2">INTERVIEW</button>
                        <button class="rejectButton  bg-red-200 p-2">REJECTED</button>
                    </div>
                </div>
                <div>
                    <button class="trash"><i class="fa-solid fa-trash-can"></i></button>
                </div>`

                filterSection.appendChild(div);
    }
}

function renderReject(){
    filterSection.innerHTML = '';

    if(rejectedList.length === 0){
        noJobs();
        return;
    }

    for(let reject of rejectedList){
        let div = document.createElement('div');
        div.className = "card flex justify-between p-5 mb-5  bg-white";
        div.innerHTML = ` 
        <div class="space-y-6">
                    <div>
                        <h1 class="mobile text-2xl font-bold">${reject.mobile}</h1>
                        <p class="react text-xl text-gray-500">${reject.react}</p>
                    </div>
                    <div>
                        <p class="remote  text-gray-500 ">${reject.remote}</p>
                    </div>
                    <div>
                        <p class="status w-[113px] bg-gray-300 px-2">${reject.status}</p>
                        <p class="notes">${reject.notes}</p>
                    </div>
                    <div class="flex gap-2">
                        <button class="interviewButton bg-green-200 p-2">INTERVIEW</button>
                        <button class="rejectButton  bg-red-200 p-2">REJECTED</button>
                    </div>
                </div>
                <div>
                    <button class="trash"><i class="fa-solid fa-trash-can"></i></button>
                </div>`

                filterSection.appendChild(div);
    }
}

function noJobs(){
    filterSection.innerHTML = `
    <div class="flex flex-col items-center justify-center py-20 text-center text-gray-500">
            <img src="./jobs.png" alt="">
            <h2 class="text-xl font-semibold text-gray-700">No jobs available</h2>
            <p class="text-sm mt-2">Check back soon for new job opportunities</p>
        </div>`;

}