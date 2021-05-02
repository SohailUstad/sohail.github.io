var b=1;
function plus(){
	a=document.getElementById("p1");
	a.innerHTML=b;
	b+=1;
}
function minus(){
	a=document.getElementById("p1");
	if(b==0){
		b=b;
	}
	else{
	b-=1;
	}
	a.innerHTML=b;
}
function reset(){
	b=1;
	a=document.getElementById("p1");
	a.innerHTML=b-1;
}
function record(){
	a=document.getElementById("div");
	c=document.createElement("li");
	if(b!=0){
		d=document.createTextNode(b-1);
	}
	else{
		d=document.createTextNode(b);
	}
	c.appendChild(d);
	a.insertBefore(c,a.childNodes[1]);
}
function remove(){
	a=document.getElementById("div");
	while(a.firstChild){
		a.removeChild(a.firstChild);
	}
}
