//  Start   Header

let header=document.createElement("div");
header.className="header";

let logo=document.createTextNode("Elzero");
let ul=document.createElement("ul");
let span=document.createElement("span");
let li1=document.createTextNode("Home");
let li2=document.createTextNode("About");
let li3=document.createTextNode("Service");
let li4=document.createTextNode("Contant");

for(let i=1;i<=4;i++){
    let li=document.createElement("li");  
    if(i==1)li.appendChild(li1);  
    else if(i==2)li.appendChild(li2); 
    else if(i==3)li.appendChild(li3); 
    else li.appendChild(li4); 
    ul.appendChild(li);
}
span.appendChild(logo);
header.appendChild(span);
header.appendChild(ul);




header.style.backgroundColor="white";
header.style.position="absolute";
header.style.minHeight="50px";
header.style.width="100%";
header.style.top="0px";
header.style.left="0px";
header.style.display="flex";
header.style.justifyContent="space-between";

document.body.appendChild(header);
span.style.fontSize="25px";
span.style.padding="10px";
span.style.paddingLeft="15px";
span.style.color="#0075ff";
span.style.fontWeight="800";


ul.style.listStyle="none";
ul.style.display="flex";
ul.style.gap="10px";
ul.style.padding="10px";
ul.style.color="#aaa";

// End Header


// Start Contant
let contant=document.createElement("div");
contant.className="contant";


for(let i=1;i<=15;i++){

    let div_con=document.createElement("div");
    div_con.className="div-con";
    let span_num=document.createElement("span");
    let txt_num=document.createTextNode(`${i}`);
    let span_con=document.createElement("span");
    let txt=document.createTextNode("Product");
    span_con.appendChild(txt);
    span_con.className="product";
    span_num.appendChild(txt_num);
    div_con.appendChild(span_num);
    div_con.appendChild(span_con);
    contant.appendChild(div_con);
    span_num.style.display="block";
    span_num.style.padding="10px";
    span_con.style.display="block";
    span_con.style.padding="10px";
    div_con.style.backgroundColor="white";
    div_con.style.padding="10px";
    div_con.style.textAlign="center";
     div_con.style.height="165px";
    div_con.style.backgroundColor="#EEE";

}
contant.style.display="grid";
contant.style.gap="10px";
contant.style.gridTemplateColumns="repeat(5, 1fr)";
contant.style.position="absolute";
contant.style.top="70px";
contant.style.width="100%";
document.body.appendChild(contant);


//End Contant 


// Start Footer

let footer=document.createElement("div");
footer.className="footer";
let sfoot=document.createElement('span');
sfoot.className="span-footer";
let txt_f=document.createTextNode("Copyright 2024");
sfoot.appendChild(txt_f);
footer.appendChild(sfoot);


footer.style.backgroundColor="#0075ff";
footer.style.position="absolute";
footer.style.minHeight="60px";
footer.style.width="100%";
footer.style.bottom="0px";
footer.style.left="0px";
footer.style.color="white";
footer.style.textAlign="center";
footer.style.fontSize="20px";
document.body.appendChild(footer);



//End Footer