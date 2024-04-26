//your code here
let dragelem=null;
        let temp=null;
        let sw=null;
        let a=document.getElementById("parent");
         render();
        function render(){
          a=document.getElementById("parent");
      for (let i = 0; i < a.children.length; i++) {
        a.children[i].addEventListener("drag",(e)=>{ 
          sw=e.target; 
        dragelem=sw.cloneNode(true);
        });
        a.children[i].addEventListener("dragover",(e)=>{
        e.preventDefault();
    });}
for (let k = 0; k < a.children.length; k++) {
   a=document.getElementById("parent");
    a.children[k].addEventListener("drop",(e)=>{
      temp=e.target.cloneNode(true);
      e.target.replaceWith(dragelem);
     sw.replaceWith(temp);
        dragelem=null;
        render();
    });  }}