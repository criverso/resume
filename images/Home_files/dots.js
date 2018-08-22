

TweenMax.set("img",{xPercent:"-50%",yPercent:"-50%"})

var total = 70 , dotmagic = document.getElementById('dotmagic') ,
w = dotmagic.offsetWidth , h = dotmagic.offsetHeight;
 
 for (var i=0 , div ; i<total; i++){ 
  div = document.createElement('div');   div.className='dot';
  dotmagic.appendChild(div);
  TweenMax.set(div,{x:R(0,w),y:R(-100,100),opacity:1,scale:R(0,0.5)+0.5,backgroundColor:"hsl("+R(170,360)+",50%,50%)"});
  animm(div);
 };
 
 function animm(elm){   
 TweenMax.to(elm,R(0,5)+3,{y:h,ease:Linear.easeNone,repeat:-1, delay:-5});
 TweenMax.to(elm,R(0,5)+1,{x:'+=70', repeat:-1,yoyo:true,ease:Sine.easeInOut})
 TweenMax.to(elm,R(0,1)+0.5,{opacity:0, repeat:-1,yoyo:true,ease:Sine.easeInOut})
 };

function R(min, max){ return min + ( Math.random() * (max - min)) };

