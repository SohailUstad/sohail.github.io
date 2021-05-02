var b=1;
function change(){
	a=document.getElementById("p1");
	a.innerHTML=b;
	b+=1;
}
function reset(){
	b=0;
	a=document.getElementById("p1");
	a.innerHTML=b;
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

