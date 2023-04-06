
function checkedOnClick(el){
    var checkboxesList = document.getElementsByClassName("checkoption");
    for (var i = 0; i < checkboxesList.length; i++) {
        checkboxesList.item(i).checked = false; 
    }
    el.checked = true; 
   }
   function checkedOnClick1(el){
    var checkboxesList = document.getElementsByClassName("checkoption1");
    for (var i = 0; i < checkboxesList.length; i++) {
        checkboxesList.item(i).checked = false; 
    }
    el.checked = true; 
   }
let button=document.getElementById("submit")
button.addEventListener('click',Clicked)

   function Clicked(){
    var inputs=document.getElementsByClassName("fildes")
    var test=0
    for (var i=0;i<inputs.length;i++){
        if (inputs.item(i).value!=""){test+=1}
             
    }
    if(test!=inputs.length){alert("please fill all the fildes")}
    else(document.querySelector("Form").reset())
   
}
