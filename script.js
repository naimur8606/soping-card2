const iphoneDisable = document.getElementById("iphone-disable").addEventListener("click",function(){
    const iphone11= document.getElementById("iphone-11").style.display="none";
})
const cover = document.getElementById("cover-disable").addEventListener("click",function(){
    const Cover= document.getElementById("cover").style.display="none";
})
const iphoneMinus= document.getElementById("iphone-minus").addEventListener("click",function(){
    const iphoneCount = document.getElementById("iphone-count").innerText;
    iphoneNumber= parseFloat(iphoneCount);
    document.getElementById("iphone-count").innerText=iphoneNumber-1;
    const subTotal= document.getElementById("subtotal").innerText;
    SubTotal=parseFloat(subTotal);
    document.getElementById("subtotal").innerText=SubTotal-1229;
    const tex = document.getElementById("tex").innerText;
    Tex = parseFloat(tex);
    document.getElementById("tex").innerText= Tex-5;
    const total = document.getElementById("total").innerText;
    Total = parseFloat(total);
    document.getElementById("total").innerText=Total-1234;
})
const iphonePlus= document.getElementById("iphone-plus").addEventListener("click",function(){
    const iphoneCount = document.getElementById("iphone-count").innerText;
    iphoneNumber= parseFloat(iphoneCount);
    document.getElementById("iphone-count").innerText=iphoneNumber+1;
    const subTotal= document.getElementById("subtotal").innerText;
    SubTotal=parseFloat(subTotal);
    document.getElementById("subtotal").innerText=SubTotal+1229;
    const tex = document.getElementById("tex").innerText;
    Tex = parseFloat(tex);
    document.getElementById("tex").innerText= Tex+5;
    const total = document.getElementById("total").innerText;
    Total = parseFloat(total);
    document.getElementById("total").innerText=Total+1234;
})
const coverMinus= document.getElementById("cover-minus").addEventListener("click",function(){
    const coverCount = document.getElementById("cover-count").innerText;
    coverNumber= parseFloat(coverCount);
    document.getElementById("cover-count").innerText = coverNumber-1;
    const subTotal= document.getElementById("subtotal").innerText;
    SubTotal=parseFloat(subTotal);
    document.getElementById("subtotal").innerText=SubTotal-59;
    const tex = document.getElementById("tex").innerText;
    Tex = parseFloat(tex);
    document.getElementById("tex").innerText= Tex-1;
    const total = document.getElementById("total").innerText;
    Total = parseFloat(total);
    document.getElementById("total").innerText=Total-60;
})
const coverPlus= document.getElementById("cover-plus").addEventListener("click",function(){
    const coverCount = document.getElementById("cover-count").innerText;
    coverNumber= parseFloat(coverCount);
    document.getElementById("cover-count").innerText=coverNumber+1;
    const subTotal= document.getElementById("subtotal").innerText;
    SubTotal=parseFloat(subTotal);
    document.getElementById("subtotal").innerText=SubTotal+59;
    const tex = document.getElementById("tex").innerText;
    Tex = parseFloat(tex);
    document.getElementById("tex").innerText= Tex+1;
    const total = document.getElementById("total").innerText;
    Total = parseFloat(total);
    document.getElementById("total").innerText=Total+60;
})
const Status= document.getElementById("order").addEventListener("click",function(){
    const status= document.getElementById("status").style.display="block";
})