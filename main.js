// contact page start
function formsubmit(){
    let Name = document.getElementById("exampleInputName").value;
    let Email = document.getElementById("exampleInputEmail").value;
    let Option = document.getElementById("exampleInputOption").value;
    let Message = document.getElementById("exampleInputMessage").value;
    if(Name ==""||Email ==""||Option ==""||Message ==""){
       alert("Pleade fill-up every empty fields!");
       return false;
    }
    alert("Message delivered successfully!!!");
    return true;    
}
// contact page end
// footer start
function showDateTime(){
    let today = new Date();
    document.getElementById("date-time").innerHTML=today.toLocaleString();
    return true;
}
showDateTime();
// footer end