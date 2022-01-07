function logout(){
    alert("Are you sure want to Logout")
}
function search_loc(e){
   
   var input_val=document.getElementById("location").value;
 
   if(input_val==="work from home"){
    window.open('..//Sorting/work_loc.html', '_blank');
   }
   if(input_val==="delhi"){
    window.open('..//Sorting/Delhi_loc.html', '_blank');
     
   }
   if(input_val==="pune"){
    window.open('..//Sorting/Pune_loc.html', '_blank');
   }
  
}
function search_cat(){
   
var input_val=document.getElementById("category").value;
   if(input_val==="sales"){
    window.open('..//Sorting/Sellcatg.html', '_blank');
   }
   if(input_val==="web development"){
    window.open('..//Sorting/webdev_catg.html', '_blank');
     
   }
   if(input_val==="marketing"){
    window.open('..//Sorting/marketingcatg.html', '_blank');
   }
   if(input_val==="architechure"){
    window.open('..//Sorting/Architech_catg.html', '_blank');
   }
}
function searchlast(){
   var input=document.getElementById("searchlast").value;
   if(input=="sales" || input=="marketing" ||input=="web development" ||input=="pune" ||input=="delhi"){
    window.open('..//Sorting/work_loc.html', '_blank');
   }
}
function logout(){
    alert("Are you sure want to logout?")
  }
