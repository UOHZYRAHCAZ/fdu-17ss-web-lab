selectionone();
var index=-1;
var tablesarr=new Array();
function selectoneonchange(selectionoptionvalue){
 switch (selectionoptionvalue) {
   case "SELECT ONE":
     selectionone();
     break;
   case "CREATE TABLE":
     createtable();
     break;
   case "ADD ROW":
     addrow();
     break;
   case "DELETE ROW":
     deleterow();
     break;
   case "DELETE TABLE":
     deletetable();
     break;
   default:
 }
}
function selectionone(){
 let contentobj=document.getElementById("content");
 contentobj.innerHTML="";
}
function createtable(){
 let contentobj=document.getElementById("content");
 contentobj.innerHTML="";
 let tablenameinput=document.createElement("input");
 tablenameinput.id="tablenameinput"
 tablenameinput.setAttribute("type","text");
 tablenameinput.setAttribute("placeholder","Table Name");
 contentobj.appendChild(tablenameinput);
 let colnumberinput=document.createElement("input");
 colnumberinput.id="colnumberinput";
 colnumberinput.setAttribute("type","number");
 colnumberinput.setAttribute("placeholder","Columns Numbers");
 colnumberinput.setAttribute("onchange","addattribute(this.value)");
 contentobj.appendChild(colnumberinput);
 let newbr=document.createElement("br");
 contentobj.appendChild(newbr);
}
function addattribute(colnumber){
 if(document.getElementById("createtablecommit")){
   document.getElementById("content").removeChild(document.getElementById("brcandel"));
   document.getElementById("content").removeChild(document.getElementById("createtablecommit"));
   var temp1=document.getElementsByClassName("attributename").length;
   for(let j=1;j<=temp1;j++){
     document.getElementById("content").removeChild(document.getElementById("Attr"+j));
   }
 }
 if(colnumber>0)
   {
   for(let i=1;i<=colnumber;i++){
   let attributename=document.createElement("input");
   attributename.setAttribute("type","text");
   attributename.setAttribute("placeholder","Attribute");
   attributename.id="Attr"+i;
   attributename.className="attributename";
   document.getElementById("content").appendChild(attributename);
 }
 let newbr=document.createElement("br");
   newbr.id="brcandel";
 document.getElementById("content").appendChild(newbr);
 let commitbutton=document.createElement("button");
 commitbutton.id="createtablecommit";
 let commitbuttonnode=document.createTextNode("Commit");
 commitbutton.appendChild(commitbuttonnode);
 document.getElementById("content").appendChild(commitbutton);
 document.getElementById("createtablecommit").onclick=function(){
   if (document.getElementById("tablenameinput").value==""||document.getElementById("tablenameinput").value=="SELECT") {alert("请输入正确的表名");return;}
   else{
     tablesarr.push({name:document.getElementById("tablenameinput").value,colnumber:document.getElementById("colnumberinput").value,Attributenames:[],content:[]});
     index=tablesarr.length-1;
     for(let i=1;i<=tablesarr[index].colnumber;i++){
       tablesarr[index].Attributenames.push(document.getElementById("Attr"+i).value);
     }
     console.log(tablesarr[index].name);
     console.log(tablesarr[index].colnumber);
     console.log(tablesarr[index].Attributenames);
     refreshform();
   }
 };
}
}

function addrow(){if(index>=0){
 let contentobj=document.getElementById("content");
 contentobj.innerHTML="";
 for (let i=1;i<=tablesarr[index].colnumber;i++){
   let rownames=document.createElement("input");
   rownames.setAttribute("type","text");
   rownames.setAttribute("placeholder",tablesarr[index].Attributenames[i-1]);
   rownames.id="rownames"+i;
   rownames.className="rownames";
   document.getElementById("content").appendChild(rownames);
 }
 let newbr=document.createElement("br");
 document.getElementById("content").appendChild(newbr);
 let commitbutton=document.createElement("button");
 commitbutton.id="addrowcommit";
 let commitbuttonnode=document.createTextNode("Commit");
 commitbutton.appendChild(commitbuttonnode);
 document.getElementById("content").appendChild(commitbutton);
 document.getElementById("addrowcommit").onclick=function(){
   let temparr=new Array();
   for (let i=1;i<=tablesarr[index].colnumber;i++) temparr.push(document.getElementById("rownames"+i).value);
   tablesarr[index].content.push(temparr);
   console.log(tablesarr[index].content);
   for (let i=1;i<=tablesarr[index].colnumber;i++)document.getElementById("rownames"+i).value="";
   refreshform();
 };
}
else{  let contentobj=document.getElementById("content");
 contentobj.innerHTML="";}
}
function deleterow(){if(index>=0){
 let contentobj=document.getElementById("content");
 contentobj.innerHTML="";
 for (let i=1;i<=tablesarr[index].colnumber;i++){
   let rowsdel=document.createElement("input");
   rowsdel.setAttribute("type","text");
   rowsdel.setAttribute("placeholder",tablesarr[index].Attributenames[i-1]);
   rowsdel.id="rowsdel"+i;
   rowsdel.className="rowsdel";
   document.getElementById("content").appendChild(rowsdel);
 }
 let newbr=document.createElement("br");
 document.getElementById("content").appendChild(newbr);
 let commitbutton=document.createElement("button");
 commitbutton.id="deleterowcommit";
 let commitbuttonnode=document.createTextNode("Commit");
 commitbutton.appendChild(commitbuttonnode);
 document.getElementById("content").appendChild(commitbutton);
   document.getElementById("deleterowcommit").onclick=function(){
     if (tablesarr[index].content.length>0){
     for(let i=0;i<tablesarr[index].content.length;i++){
       let temp=true;
       for(let j=1;j<=tablesarr[index].content[i].length;j++){
       if((document.getElementById("rowsdel"+j).value!=tablesarr[index].content[i][j-1])&&(document.getElementById("rowsdel"+j).value!="")){temp=false;break;}
       }
       if(temp){
         tablesarr[index].content.splice(i,1);
         break;}
     }
    for(let i=1;i<=tablesarr[index].colnumber;i++)document.getElementById("rowsdel"+i).value="";
   refreshform();
   }
   };
}
else{  let contentobj=document.getElementById("content");
 contentobj.innerHTML="";}
}
function deletetable(){if(index>=0){
 let contentobj=document.getElementById("content");
 contentobj.innerHTML="";
 let warningword=document.createElement("h1");
 let warningwordnode=document.createTextNode("WARNING: You cannot undo this action!");
 warningword.appendChild(warningwordnode);
 document.getElementById("content").appendChild(warningword);
 let commitbutton=document.createElement("button");
 commitbutton.id="deletetablecommit";
 let commitbuttonnode=document.createTextNode("Commit");
 commitbutton.appendChild(commitbuttonnode);
 document.getElementById("content").appendChild(commitbutton);
   document.getElementById("deletetablecommit").onclick=function(){
     tablesarr.splice(index,1);
     if(tablesarr.length>0)index=0;
     else index=-1;
     refreshform();
   };
}
else{  let contentobj=document.getElementById("content");
 contentobj.innerHTML="";}
}
function selecttwoonchange(selectionoptionvalue){
 if(selectionoptionvalue=="SELECT"){index=-1;refreshform();}
 else{for(let i=0;i<tablesarr.length;i++){
   if(tablesarr[i].name==selectionoptionvalue){index=i;refreshform();break;}
 }}
}
function refreshform(){
 document.getElementById("selecttwo").innerHTML="";
 let selectoption=document.createElement("option");
 selectoption.setAttribute("value","SELECT");
 let selectoptionnode=document.createTextNode("SELECT");
 selectoption.appendChild(selectoptionnode);
 document.getElementById("selecttwo").appendChild(selectoption);
 if (tablesarr.length>0){
   if(index==-1){selectoption.setAttribute("selected","selected");}

     for(let i=0;i<tablesarr.length;i++){
       let newoption=document.createElement("option");
       let newoptionnode=document.createTextNode(tablesarr[i].name);
       newoption.appendChild(newoptionnode);
       newoption.setAttribute("value",tablesarr[i].name);
       if(index==i) newoption.setAttribute("selected","selected");
      document.getElementById("selecttwo").appendChild(newoption);
   }
 }
 else{  selectoption.setAttribute("selected","selected");}
 document.getElementById("showtable").innerHTML="";
 if (index==-1) {document.getElementById("showtable").innerHTML="";}
 else{
   let headtr=document.createElement("tr");
   for(let i=0;i<tablesarr[index].colnumber;i++){
     let tablehead=document.createElement("th");
     let tableheadnode=document.createTextNode(tablesarr[index].Attributenames[i]);
     tablehead.appendChild(tableheadnode);
     headtr.appendChild(tablehead);
   }
   document.getElementById("showtable").appendChild(headtr);
   if (tablesarr[index].content.length>0)for(let i=0;i<tablesarr[index].content.length;i++){
     let newtr=document.createElement("tr");
     for (let j=0;j<tablesarr[index].content[i].length;j++){
       let newtd=document.createElement("td");
       let newtdnode=document.createTextNode(tablesarr[index].content[i][j]);
       if(Math.round(i%2)==0) newtd.className="oddtr"
       else newtd.className="eventr"
       newtd.appendChild(newtdnode);
       newtr.appendChild(newtd);
     }
   document.getElementById("showtable").appendChild(newtr);
   }
 }
}
