const item = document.querySelector('input');
const error= document.getElementById('error');
const btn = document.getElementById('btn'); 
const ul= document.getElementById('store');
btn.addEventListener('click',() =>{
if(item.value=="")
{
	alert('please enter the value');
} 
else
{  
	const li = document.createElement('li');   
	const span = document.createElement('span');
	const i= document.createElement('i'); 
	const e= document.createElement('i');
	const l= document.createElement('i');
	const g= document.createElement('i');
	e.classList.add('fas');
	e.classList.add('fa-edit'); 
    g.classList.add('fa'); 
	i.classList.add('fa');
	i.classList.add('fa-trash-alt'); 
	l.classList.add('fa');
	l.classList.add('fa-sort-up'); 
	g.classList.add('fa-sort-down');
	const val= item.value;
      span.innerHTML= val; 
	let pos = ul.firstElementChild;
	if(pos==null){
	ul.appendChild(li); 
	li.appendChild(span); 
	li.appendChild(i);  
	li.appendChild(g);
	li.appendChild(e);
	li.appendChild(l); 
} else
{ 
	ul.insertBefore(li,pos);  
	li.appendChild(span);
	li.appendChild(i); 
	li.appendChild(g);
	li.appendChild(e);
	li.appendChild(l);
 }

	item.value="";


} 

 
});  
ul.addEventListener('click',(e)=>{

const lif= e.target; 
//const edit=document.querySelector(".fa-trash-alt");
//const edit1= document.querySelector(".fa-edit");
//const edit2 = document.querySelector(".fa-sort-up");
if(e.target.classList.contains('fa-trash-alt'))
{
    ul.removeChild(lif.parentNode);
}
 else if(e.target.classList.contains('fa-edit'))
	{ var ans =lif.parentNode.firstChild;
  var editnode=prompt("edit the value",ans.innerHTML);

    ans.innerHTML=editnode; 
   
} 
  else if (e.target.classList.contains('fa-sort-up'))
{   
	var move= e.target;
  if(ul.firstElementChild === move.parentNode)
  {
     ul.insertBefore(move.parentNode, move.parentNode); 
  }
 else{

ul.insertBefore(move.parentNode,move.parentNode.previousSibling); 
}

}  
  else if(e.target.classList.contains('fa-sort-down'))
  {
     if(ul.lastElementChild== e.target.parentNode)
     {
     	ul.insertBefore(e.target.parentNode, e.target.parentNode);

     } 
     else 
     {
     	ul.insertBefore( e.target.parentNode.nextSibling,e.target.parentNode); 
     	console.log(e.target.parentNode);
     	console.log( e.target.parentNode.nextSibling);
     } 

  }
         

});
