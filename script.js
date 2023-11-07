const taskEntry=document.getElementById("taskEntry");
const taskList=document.getElementById("taskList");

const drag = document.querySelector("#taskList");

new Sortable(drag, {
	animation: 350
});


function addTask(){
	if(taskEntry.value=='')
	{
		alert("You must have to enter a task !");
	}
	else{
		let li=document.createElement("li");
		li.innerHTML=taskEntry.value;
		taskList.appendChild(li);
		let span =document.createElement("SPAN");
		span.innerHTML = "&#10060;";
		li.appendChild(span);
		saveData();
	}
	taskEntry.value='';
}

taskList.addEventListener ('click',
	function(event){
	if (event.target.tagName==="LI"){
		event.target.classList.toggle("checked");
		saveData();
	}
	else if(event.target.tagName==="SPAN"){
		event.target.parentElement.remove();
		saveData();
	}
	console.log(event);

},
false
);


function saveData(){
	localStorage.setItem("mytask",taskList.innerHTML);

}
function displayData(){
	taskList.innerHTML = localStorage.getItem("mytask")
}
displayData();




function myFunction(){
var element=document.getElementById('darkMode');
element.classList.toggle("dark-mode");
}

// to store data for while browser is open sessionStorage 