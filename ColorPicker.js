
let btn=document.getElementById("btn").addEventListener('click',function(){
    let r=document.getElementById("r").value;
    let g=document.getElementById("g").value;
    let b=document.getElementById("b").value;
    let box1=document.getElementById("color1");
    let rgb= "rgb(" + r + "," + g + "," + b + ")"
    box1.style.backgroundColor=rgb;
    console.log(rgb);
   
    let fav1=document.getElementById("my").addEventListener('click',function(){
    let name=document.getElementById("name").value;
    let color=document.getElementById("color").value;
    let tr=document.createElement("tr");
    let body=document.getElementById("body");
    body.appendChild(tr);
    tr.innerHTML="<th>" + name +"</th>" + "<th>" + color +"</th>"
    return;
    
    });
   
});
    
    let btn2=document.getElementById("btn2").addEventListener('click',function(){
    let r2=document.querySelector(".r2").value;
    let g2=document.querySelector(".g2").value;
    let b2=document.querySelector(".b2").value;
    let box2=document.getElementById("color2");
    let rgb2= "rgb(" + r2 + "," + g2 + "," + b2 + ")"
    box2.style.backgroundColor=rgb2;
    console.log(rgb2);
  
    let fav1=document.getElementById("my2").addEventListener('click',function(){
    let name=document.getElementById("name").value;
    let color=document.getElementById("color").value;
    let tr=document.createElement("tr");
    let body=document.getElementById("body");
    body.appendChild(tr);
    tr.innerHTML="<th>" + name +"</th>" + "<th>" + color +"</th>"

    
 });

});


   


