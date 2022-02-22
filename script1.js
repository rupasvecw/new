function btnclicked(){
  let xhr=XMLHttpRequest();
   xhr.open("GET","https://jsonplaceholder.type.com/users",true);
   xhr.send();
   xhr.onload=function(){
    if(xhr.status===200){
        let maindata =JSON.parse(this.response)
       let tds;
       for(i=0;i<maindata.length;i++){
           <tr>
               <td>${maindata[i].id}</td>
               <td>${maindata[i].name}</td>
               <td>${maindata[i].email}</td>
           </tr>
           document.getElementById("data").innerhtml+=tds
       }
    }
   
   }
}