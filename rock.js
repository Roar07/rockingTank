var c=document.querySelector('canvas[id="gamePlay"]');

c.width=600;
c.height=900;

var cdraw= c.getContext('2d');


var cGreen=["#0C4459","#0D734D","#0AA640","#0BD92A","#A7F2B2"];
var cRed=["#52040B","#75060F","#960814","#C90A1B","#FF0D22"];
var cblue=["#0468BF","#22A2F2","#52B5F2","#6BCCF2","#91E0F2"];
var cbrown=["#730C02","#BF4904","#F27405","#F28705","#F29F05"];
var cgrey=["#0D0D0D","#404040","#737373","#A6A6A6","#D9D9D9"];
var cyellow=["#D97014","#F2911B","#F2A81D","#F2C029","#F2D230"];
var cdblue=["#00060D","#021426","#0A2540","#163859","#284D73"];


var brtYellow=["#F2E205","#F2E963","#F2EB8D","#F2EFBB","#F2F2F2"];
var brtGreen=["#58DE58","#47731A","#68A629","#DEF2B3","#D2F25C"];
var brtblue=["#BEBAE8","#DFCCFF","#D9E0FF","#BACEE8","#CCF0FF"];
var brtpink=["#DDF0FF","#E1F4EB","#EEF7E3","#FFF2E0","#FFEBEA"];
var brtbrown=["#E8DBBF","#E8E1D0","#FFE8B5","#FFF8E4","#FFFDF7"];
var brtpurple=["#D4B2CC","#EBCADD","#FFDEEB","#FFEDF5","#FFFFFF"];
var brtred=["#E3505B","#D9383D","#E3505B","#E2837D","#EFC9BC"];


var clRock=[cgrey,cGreen,cRed,cblue,cbrown,cyellow,cdblue];

var min=30;
var range=10;
var hit=false;
var j=0;
var maxRks=3;
var score=0;

//=======================rocks==============================================

var rocks=function(){


    this.x=-50;
    this.y=120;
    this.size=50+Math.random()*30;
    this.ex=10+Math.random()*10;
    this.theme=clRock[Math.floor(Math.random()*clRock.length)];
    this.ang=0;
    this.tag=Math.floor(min+Math.random()*range);

    this.dx=1+Math.random()*2;
    this.dy=0;
    this.d0=Math.random()*0.05;

    this.draw=function(){

            
        cdraw.translate(this.x,this.y);
        cdraw.rotate(this.ang);
        cdraw.beginPath();

        var cg=cdraw.createLinearGradient(0,this.size+this.ex,0,-this.size-this.ex);

        cg.addColorStop(0.2,this.theme[0]);
        cg.addColorStop(0.4,this.theme[1]);
        cg.addColorStop(0.7,this.theme[2]);
        cg.addColorStop(1,this.theme[4]);
        

        cdraw.moveTo(-this.size-this.ex,0);
        cdraw.lineTo(-this.size+this.ex,-this.size+this.ex);
        cdraw.lineTo(0,-this.size-this.ex);
        cdraw.lineTo(this.size-this.ex,-this.size+this.ex);
        cdraw.lineTo(this.size+this.ex,0);
        cdraw.lineTo(this.size-this.ex,this.size-this.ex);
        cdraw.lineTo(0,this.size+this.ex);
        cdraw.lineTo(-this.size+this.ex,this.size-this.ex);
        cdraw.lineTo(-this.size-this.ex,0);


        cdraw.strokeStyle="#F29F05";
        cdraw.stroke();
        cdraw.fillStyle=cg;
        cdraw.fill();

        cdraw.scale(0.6,0.65);
        cdraw.beginPath();

        cdraw.moveTo(-this.size-this.ex,0);
        cdraw.lineTo(-this.size+this.ex,-this.size+this.ex);
        cdraw.lineTo(0,-this.size-this.ex);
        cdraw.lineTo(this.size-this.ex,-this.size+this.ex);
        cdraw.lineTo(this.size+this.ex,0);
        cdraw.lineTo(this.size-this.ex,this.size-this.ex);
        cdraw.lineTo(0,this.size+this.ex);
        cdraw.lineTo(-this.size+this.ex,this.size-this.ex);
        cdraw.lineTo(-this.size-this.ex,0);

        cdraw.strokeStyle="white";
        cdraw.stroke();
        cdraw.fillStyle=this.theme[3];
        cdraw.fill();

    
        cdraw.setTransform(1,0,0,1,this.x,this.y);
        cdraw.rotate(this.ang);
        cdraw.beginPath();
        cdraw.fillStyle=this.theme[0];
        cdraw.font="bold 40px fantasy";
        cdraw.textAlign="center";
        cdraw.fillText(this.tag,0,20);
        cdraw.fill();
        
        }

    this.update=function(){

        this.draw();


       if(this.x-this.size-this.ex<0){
       
         this.x++;
    
           }else{
            this.x+=this.dx;
            this.y+=this.dy;
            this.ang+=this.d0;
            this.dy+=0.05;
            

            if(this.y+this.size+1>c.height-20)this.dy=-this.dy;

            if(this.x+80>c.width||this.x-this.size-this.ex-1<0)this.dx=-this.dx; 

        }
        
    }


}


//======================================Bullets===========================================


var i=0;
var blt=new Array();
var k=0;
var X=c.width/2;
var head=0;

var rks=new Array();

var bullet=function(){
    this.x=X;
    this.y=c.height-120;
    this.radius=5;
    this.speed=10;

    this.draw=function(){
        cdraw.beginPath();
        cdraw.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        cdraw.fillStyle="black";
        cdraw.strokeStyle="black"
        cdraw.stroke();
        cdraw.fill();
    }

    this.update=function(){
        this.draw();
        this.y-=this.speed;
    }
}


setInterval(cblt,60)

function cblt(){
    if(i==40){
               
        blt[head]=new bullet();

      (head<39)?head++:head=0;

    }else{
    blt[i]=new bullet();
    ++i;
    }
}

var r=setInterval(cRock,5000);

function cRock(){

        rks[j]=new rocks();
        ++j;

}



//======================animate============================
//background theme==============================

var back=[mountain];
var xm1=100;
var xm2=150;
var ym=250;
var dx1=0.2;
var dx2=0.3;
var backIndex=0;


var v;
var cimg=new Image();
cimg.src="img src/tank1.jpg" ;
cimg.imgAlign="center";




function animate(){
    v=requestAnimationFrame(animate);
    cdraw.clearRect(0,0,c.width,c.height);

    cdraw.beginPath();
    cdraw.fillStyle=crtGradient(c.width/2,0,200,550,brtpink);
    cdraw.fillRect(0,0,c.width,550);
     
        back[backIndex]();



    if(j>maxRks){
        clearInterval(r);
    }

        for(p=0;p<j;++p){
            if(rks[p].tag<=0){

                rks[p]=new rocks();
            }

        }
    

    for(h=0;h<j;h++){
     cdraw.setTransform(1,0,0,1,0,0);
        rks[h].update();
    }

    cdraw.setTransform(1,0,0,1,0,0);


   for(a=0;a<i;++a){
       if(blt[a]!=null){
       blt[a].update();
       }
     // console.log(" hai working");
   }

   cdraw.drawImage(cimg,X-25,c.height-120,50,80);
   

  hitDetect();

  checkCrash();

   ++k;

  // console.log(k);

}


//============================background mountain=============
function mountain(){
    
        
    cdraw.beginPath();
    
     
     
         mkMountain(xm1,ym,brtblue);
         mkMountain(xm2,ym+30,brtYellow);
         mkMountain(xm1+100,ym+60,brtbrown);
         mkMountain(xm2+100,ym+90,brtred);
         mkMountain(xm1+180,ym+120,brtGreen);
         mkMountain(xm2+150,ym+140,brtpurple);
         mkMountain(xm1+50,ym+160,brtpink);
 
 
     if(xm1>=150||xm1<0)dx1=-dx1;
     if(xm2>200||xm2<0)dx2=-dx2;
 
     xm1+=dx1;
     xm2-=dx2;
}


 function mkMountain(x,y,color){

    cdraw.beginPath();
    cdraw.moveTo(x-400,y+250)
    cdraw.lineTo(x-200,y)
    cdraw.lineTo(x,y+250);
    cdraw.lineTo(x+200,y);
    cdraw.lineTo(x+400,y+250);
    cdraw.lineTo(x+600,y);
    cdraw.lineTo(x+800,y+250);
    cdraw.fillStyle=crtGradient(x,y+250,x,y,color);
    cdraw.fill();

}

 function crtGradient(x1,y1,x2,y2,color){
    var cl=cdraw.createLinearGradient(x1,y1,x2,y2);
    cdraw.fillStyle=cl;
    cl.addColorStop(0.2,color[0])
    cl.addColorStop(0.5,color[1])
    cl.addColorStop(0.6,color[2])
    cl.addColorStop(0.9,color[3])
    cl.addColorStop(1,color[4])


    return cl;

}
 


function checkCrash(){
    for(m=0;m<j;++m){
        var d=disBtw(X,c.height-60,rks[m].x,rks[m].y);

        if(d<=rks[m].size+rks[m].ex+30){
            
            for(t=0;t<15;t++){
                cdraw.beginPath();
                cdraw.moveTo(X,c.height-60);
                cdraw.lineTo(X-100+(Math.random()*200),c.height-60-100+(Math.random()*200))
                cdraw.strokeStyle="lightgrey";
                cdraw.lineWidth=5;
                cdraw.stroke();
            }
            
            //cdraw.fill();
            
            cancelAnimationFrame(v);
            cdraw.beginPath();
        cdraw.setTransform(1,0,0,1,c.width/2,c.height/2);
        cdraw.beginPath();
        cdraw.fillStyle="red";
        var texte="GAME OVER"
        cdraw.font="bold 80px fantasy";
        cdraw.textAlign="center";
        cdraw.fillText(texte,-20,15);
        cdraw.fill();

        }
    
    }
}




function hitDetect(){
    
    for(m=0;m<j;++m){
    for(l=0;l<i;l++){

        if(blt[l]!=null){
        var d=disBtw(blt[l].x,blt[l].y,rks[m].x,rks[m].y);
        
        if(d<=blt[l].radius+rks[m].size+rks[m].ex+5){
            console.log("hit Detected");
           if(rks[m].tag>0) rks[m].tag--;
            cdraw.beginPath();
            cdraw.arc(blt[l].x,blt[l].y,100,0,Math.PI*2,false);
            cdraw.strokeStyle="red";
            cdraw.stroke();

            for(t=0;t<8;t++){
                cdraw.beginPath();
                cdraw.moveTo(blt[l].x,blt[l].y);
                cdraw.lineTo(blt[l].x-100+(Math.random()*200),blt[l].y-100+(Math.random()*200))
                cdraw.strokeStyle="red";
                cdraw.stroke();
            }
            
            

            blt[l]=null;
            console.log(blt[l]);

            score++;
            Scoreboard();

        }


        }

        
    }
  }
    
}


function disBtw(x1,y1,x2,y2){
    return Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
}



document.addEventListener("keydown",function(e){
    
    if(e.keyCode==39||e.keyCode==68){
        if(X<c.width-20)X+=15;
    }

    if(e.keyCode==37||e.keyCode==65){
        if(X>20)X-=15;
    }
   
});

//animate();



var control=document.querySelector('canvas[id="control"]');

control.width=400;
control.height=900;

var ctrl=control.getContext('2d');
var Color3=["#F25252","#F25252","#6FF26B","#0597F2","#F25252"];


var bkcl=ctrl.createLinearGradient(0,0,control.width/2,control.height/4);
bkcl.addColorStop(0.2,Color3[0])
bkcl.addColorStop(0.4,Color3[1])
bkcl.addColorStop(0.6,Color3[2])
bkcl.addColorStop(0.8,Color3[3])
bkcl.addColorStop(1,Color3[4])
ctrl.fillStyle=bkcl;
ctrl.fillRect(0,0,control.width,control.height);



ctrl.fillStyle="#004483"
ctrl.font="bold 40px Comic Sans MS";
ctrl.fillText("start",control.width/2-80,control.height/2-50,120);
ctrl.fillText("Controls-",control.width/2-80,control.height/2+100);



control.addEventListener("click",function(e){
    if(e.offsetX>=control.width/2-80&&e.offsetX<=control.width/2+50){
        if(e.offsetY<=control.height/2-50&&e.offsetY>=control.height/2-90){
           cancelAnimationFrame(v);

            requestAnimationFrame(animate);

            
    }
  }
})



//========================scoreboard===========================
var s=document.querySelector('canvas[id="score"]');

s.width=400;
s.height=900;

var sb=s.getContext('2d');



var sbbk=sb.createLinearGradient(s.width,0,0,s.height);
sbbk.addColorStop(0.2,Color3[0]);
sbbk.addColorStop(0.4,Color3[1]);
sbbk.addColorStop(0.6,Color3[2]);
sbbk.addColorStop(0.8,Color3[3]);
sbbk.addColorStop(1,Color3[4]);
sb.fillStyle=sbbk;
sb.fillRect(0,0,control.width,control.height);


function Scoreboard(){
sb.fillStyle=sbbk;
sb.fillRect(0,0,control.width,control.height);

highScore=localStorage.getItem("highScore");
if(highScore==null){
    localStorage.setItem("highScore",score);
}else{
    if(score>=highScore){
    localStorage.setItem("highScore",score);
    }
}

highScore=localStorage.getItem("highScore");

sb.fillStyle="#004483"
sb.font="bold 40px Comic Sans MS";
sb.fillText("Score",100,300,130);
sb.fillText(score,100,400);
sb.fillText("HighScore",100,500);
sb.fillText(highScore,100,600);
console.log("m working")
}

