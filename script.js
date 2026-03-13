function submitFeedback(){

var name=document.getElementById("name").value;
var regno=document.getElementById("regno").value;
var department=document.getElementById("department").value;
var subject=document.getElementById("subject").value;
var teacher=document.getElementById("teacher").value;
var rating=document.getElementById("rating").value;
var feedback=document.getElementById("feedback").value;

var url="https://script.google.com/macros/s/AKfycby8WKwUTYJrcqh_IcwGV06wMZnuAawu8V_4q3TP9QI_6LK5W4vLYYHsdA4gV4qcWeMwbw/exec";


url += "?name="+name+
"&regno="+regno+
"&department="+department+
"&subject="+subject+
"&teacher="+teacher+
"&rating="+rating+
"&feedback="+feedback;

fetch(url)
.then(res=>res.text())
.then(data=>{
document.getElementById("popup").style.display="flex";
});

}

function closePopup(){

document.getElementById("popup").style.display="none";

}
