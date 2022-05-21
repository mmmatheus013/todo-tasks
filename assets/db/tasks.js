let tasks = [
    "Call Sam For payments", 
    "Make payment to Bluedart", 
    "Office rent", 
    "Office grocery shopping",
    "Ask for Lunch to Clients",
    "Client Meeting at 11 AM",
];


   
function loadListTasks() {
    for (let i = 0; i < tasks.length; i++){
   
        let index= i + 1;
        document.getElementById('contentList' + index).innerHTML = tasks[i].toString();
    
    }
    
}

loadListTasks();