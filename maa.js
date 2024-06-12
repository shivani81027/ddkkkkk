
let nam=document.querySelector("#ne");
let email=document.querySelector("#em");
let bu1=document.querySelector("#bu1");
let form=document.querySelector("form");
let ln=document.querySelector("a");


console.dir(nam);


console.dir(email);

console.dir(bu1);

let  un="skc";
let pss="ssz";

email.addEventListener("change",function () {
  if (nam.value==un && email.value==pss) {
      bu1.style.display="inline-block"
      
   } else {bu1.style.display="none"
      
}});






bu1.addEventListener("click",function () {

  if (nam.value==un&&email.value==pss) {
    alert("your information right");
    window.location.href="https://www.youtube.com/watch?v=qFYUPRLpRww";
    
  } else {
    alert( "your information wrong")

    
  }
      
    });
    



bu1.addEventListener("click",function () {
  let box=document.createElement("div");
 
  let inp2=document.createElement("h1");
  let inp3=document.createElement("h1");

  inp2.innerText=nam.value;
  inp3.innerText=email.value;
  

  box.appendChild(inp2);
  box.appendChild(inp3);

 
  inp2.value=""
  inp3.value=""
});





    let gh= function () {


      if (email.type == "password") {
          email.type = "text";
          
      } else {
          email.type = "password";
          
      }
    };    
    
    
    showw.addEventListener("click",gh);


    let bt1=document.querySelector("#bt1");
    
    let bt2=document.querySelector("#bt2");
    let pp=document.getElementById("pc1");

    let pic1="file1.png";
    let pic2="file2.png";
    let pic3="file3.png";
    let pic4="download.png";
    let w=0;

 
    let immg=[pic1,pic2,pic3,pic4];
    console.log(immg);

   setInterval(
     function () {
      pp.setAttribute("src",immg[0]);
      
    setTimeout( function () {
      pp.setAttribute("src",immg[1])
      
    },500);
    setTimeout( function () {
      pp.setAttribute("src",immg[2])
      
    },1000);
    setTimeout( function () {
      pp.setAttribute("src",immg[3])
      
    },2500)
    
  },function () {
 
    setTimeout(
      function () {
        if (pic1.style.display=="inline-block") {
          pp.setAttribute("src",immg[0])
        }
        
      },500
    );
    setTimeout(
      function () {
        if (pic2.style.display=="inline-block") {
          pp.setAttribute("src",immg[1])
        }
        
      },1000
    );
    setTimeout(
      function () {
        if (pic3.style.display=="inline-block") {
          pp.setAttribute("src",immg[2])
        }
        
      },1500
    );
    setTimeout(
      function () {
        if (pic4.style.display=="inline-block") {
          pp.setAttribute("src",immg[3])
        }
        
      },2000
    );
    
  },3800);




  let hk=document.querySelector("#hk");
  console.dir(hk);
  let input_va=document.querySelector("#input_value");




//  let time=20;
// console.dir(time);


// 

let tx=hk.innerText;

 input_va.addEventListener("change",function () {


  if (input_va.value!="ssz") {
    setInterval(() => {
      if (tx==0) {
    
  
      
    } else {
       
    
        hk.innerText=tx--;
     
    }
    }, 300);

  } else {
    alert("value is right");
  }
  
 });




setInterval(() => {
  if (tx==0) {

alert("time out")
  
} else {
   

    hk.innerText=tx--;
 
}
}, 300)



setInterval(() => {

  while (tx!=0) {
    hk.innerText=tx--; 
  }

}, 300);

while (time>0) {
    console.log(time);
    setInterval(function () {
        time--;
        hk.innerText==tx--;
      
         },1000);
  
  };



    setInterval( function () {
      if (w<3) {
        pp.setAttribute("src",immg[++w]);
      }
      else(w=0)
      console.log(w);


      
     
    },1000);

let a=10;
let b=50;
    setTimeout(function () {console.log(a+b)
    
    },1000);

    bt1.addEventListener("click",function () {
     
      if (w<3) {
        pp.setAttribute("src",immg[++w]);
      }
      else(w=0)
      console.log(w);


      
    });
    
    bt2.addEventListener("click",function () {
     if (w>=0 

      
     ) {
      pp.setAttribute("src",immg[w--]);
     } else {
      w=immg.length
     }
      

      console.log(w);
    });
   

    bt2.addEventListener("click",function () {
      pp.setAttribute("src",immg[--w]);
      console.log(w);


      
    });

 

        
 
    let na="prompt()";

  let data=[];
  console.dir(data);
   let y=data.length;
    
  
 
    for (let x = prompt(); data.length < 3; x=prompt()) {
      data.push(x);
      
    };

    for (let x = prompt(); x < 11; x=prompt()) {
      data.push(x);
      
    };


    let bto=document.querySelector("#btr3");
    let pn=document.querySelector("#uk")
    console.dir(bto);
    console.dir(pn);
  let p="ssz" 

let password=pn


let dat=[];
console.dir(dat);

bto.addEventListener("click",function () {
  if (password==p) {
    alert("your input is right")
    
   }
  
});

bto.addEventListener("click",function () {
  if (password!=p && dat.length==3) {
    dat.push(pn.value);
    alert("length=3");
   }
  
});
bto.addEventListener("click",function () {
  if (password!=p && dat.length==2) {
    dat.push(pn.value);
    alert("length=2");
   }
  
});
bto.addEventListener("click",function () {
  if (password!=p && dat.length==1) {
    dat.push(pn.value);
    alert("length=1");
   }
  
});
bto.addEventListener("click",function () {
  if (password!=p && dat.length==0) {
    dat.push(pn.value);
    alert("length=0");
   }
  
});
let v=alert("your input valu enter")

for (let x = v; 4 < dat.length; x=v) {
  alert("you block")
  
};

let y1=document.querySelector("#y1");
    let y2=document.querySelector("#y2");
    let y3=document.querySelector("#y3");
    let y4=document.querySelector("#y4");
    let y5=document.querySelector("#y5");
    let y6=document.querySelector("#y6");
    let y7=document.querySelector("#y7");


let bbs=document.querySelector("#bbs");


let hh=document.querySelector("#h");
console.dir(hh)






bbs.addEventListener("click",function () {
  if (hh.value=="shonu_kumar" ) {
   y1. style.display="inline-block";
  
  }
   else if (hh.value=="mohan_kumar"  ) {
    y2. style.display="inline-block";
   
  }

  else if (hh.value=="shohan_kumar"  ) {
    y3. style.display="inline-block";
   
  }
  else if (hh.value=="ramu_kumar" ) {
    y4. style.display="inline-block";
  
  }
  else if (hh.value=="suraj_kumar" ) {
    y5. style.display="inline-block";
  
  }
  else if (hh.value=="monu_kumar" ) {
    y6. style.display="inline-block";
    
  }
  else if (hh.value=="ram_kumar" ) {
    y7. style.display="inline-block";
   
  }
  else{
    alert("your valu is wrong");
  }
   
  });
  





while (a>!18 && b!="bihar" && c>!7
  // &&a==("") && b==("") && c==("")
) {
  a=prompt("age");
  b=prompt("address");     
  c=prompt("height");
};

if (a>!18 && b!="bihar" && c>!7) {
  while (a>!18 && b!="bihar" && c>!7
  
) {
  a=prompt("age");
  b=prompt("address");     
  c=prompt("height");
};

  
}  else if (a==("") && b==("") && c==(""))
   {while (a==("") && b==("") && c==("")

) {
a=prompt("age");
b=prompt("address");     
c=prompt("height");
};
  
}  else {
  alert("your input is right")
};





let bs1=document.querySelector("#btr8");

let ne=document.querySelector("#uk");

console.dir(ne);
ne.addEventListener("change",function () {
  if (ne.value==(length=8)) {
    bs.style.display="inline-block"
      
  } else {bs.style.display="none"
  } 
});


let s_name=["ram","mohan","shohan"];
let age=[18,25,60];

let address=["kaithwar","skp","lohana"];
let d=[s_name,age,address];
console.dir(d);
let hy=document.querySelector("h1");

let in1=document.querySelector("#uk");
let in2=document.querySelector("#arr");
let bbt=document.querySelector("#btr8");





let bbr=document.querySelector("#btr7");

let ry=[];
let in4=document.querySelector("#ar");
let in5=document.querySelector("#tt");
let in7=document.querySelector("#ge");
let in6=document.querySelector("#ss");



bbr.addEventListener("click",function () {
if (in7.value=="male") 
  {d.push([]);
 
    d[(d.length-1)][0]=in4.value;
    d[(d.length-1)][1]=in5.value;
    d[(d.length-1)][2]=in6.value;
    console.log("male:");
  }
    

 else if (in7.value=="female") {
  d.push([]);
 
    d[(d.length-1)][0]=in4.value;
    d[(d.length-1)][1]=in5.value;
    d[(d.length-1)][2]=in6.value;
    console.log("female:");

 } 
 else {
  alert("other");
}
  
});


  
// d.push([]);
 
//   d[(d.length-1)][0]=in4.value
//   d[(d.length-1)][1]=in5.value
//   d[(d.length-1)][2]=in6.value
// bbt.addEventListener("click",function () {
//   if (in1.value=="s_name") {
    
//     hy.innerText=d[0][in2.value];
    
//   }else if (in1.value=="age") {
//     hy.innerText=d[1][in2.value];
//   } 
//   else if (in1.value=="address") {
//     hy.innerText=d[2][in2.value];
//   } 
//   else {
//     alert("your input value wrong");
//   }
// });
  

let btl1=document.querySelector("#btl1");
let dd=document.querySelector("#q")



  

