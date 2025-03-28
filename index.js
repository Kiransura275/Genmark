const inputEle = document.querySelector(".input-area");
const outputEle = document.querySelector(".output-area");
const copyEle = document.querySelector(".copy");
const clearEle = document.querySelector(".clear");

//handle copy 


const handleCopy = async()=>{
	const data = outputEle.textContent;
	try {

			await navigator.clipboard.writeText(data);
			alert("copied");
		}
	catch (error) {
		alert("Not copied")
		
	}
}

//handle clear

const handleClear = ()=>{
	inputEle.value = "";
	handleMarkDown();
}


copyEle.addEventListener("click",handleCopy);
clearEle.addEventListener("click",handleClear);

//handleMark down
const handleMarkDown = ()=>{

    console.log("changed");
	

	//storing in local storage 
	localStorage.setItem("key",inputEle.value);

	//handle mark down

    const toHTML = inputEle.value
		.replace(/^### (.*$)/gim, '<h3>$1</h3>') // h3 tag
		.replace(/^## (.*$)/gim, '<h2>$1</h2>') // h2 tag
		.replace(/^# (.*$)/gim, '<h1>$1</h1>') // h1 tag
		.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>') // bold text
		.replace(/\*(.*)\*/gim, '<i>$1</i>')// italic text
		.replace(/-(.*)/gim, '<li>$1</li>'); // italic text
	outputEle.innerHTML =  toHTML.trim();



}



//handling input 

inputEle.addEventListener("input",handleMarkDown)

//BuildIt it up

const buildItUp = ()=>{

	//getting data from local storage 

	const data = localStorage.getItem("key") ||"- Hi there welcome to chai cohort !";
	
	inputEle.value = data;
	handleMarkDown();




}




//restart

window.addEventListener("load",buildItUp);
