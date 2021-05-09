var b=1;
var res=0;
function plus(){
	a=document.getElementById("p1");
	a.innerHTML=b;
	res=b;
	b+=1;
}
function minus(){
	a=document.getElementById("p1");
	if(b!=0){
		res=b-1;
		b-=1;
		a.innerHTML=b;
	}
}
function reset(){
	b=0;
	res=0;
	a=document.getElementById("p1");
	a.innerHTML=b;
}
function record(){
	a=document.getElementById("div");
	c=document.createElement("li");
	d=document.createTextNode(res);
	c.appendChild(d);
	a.insertBefore(c,a.childNodes[1]);
}
function remove(){
	a=document.getElementById("div");
	while(a.firstChild){
		a.removeChild(a.firstChild);
	}
}
