
var plus = document.querySelector("#plus");
var minus = document.querySelector("#minus");
var daba = document.querySelector("div1");
var reset = document.querySelector("#reset");
var box = document.querySelector("#box").textContent;

plus.addEventListener("click",function(){
    const num=parseInt(box)
    box=num+1;
    
    daba.innerHTML=box
    
})

minus.addEventListener("click",function(){
    const num =parseInt(box)
    box = num-1;
    daba.innerHTML=box
    
})

reset.addEventListener("click",function(){
    num =0;
    box = num;
    
    daba.innerHTML = box;
    
})
