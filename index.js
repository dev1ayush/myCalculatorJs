
// for all the key expect equal and clear

   for(let i = 0; i<document.querySelectorAll(".number").length; i++) {

   document.querySelectorAll(".number")[i].addEventListener("click", getValue);


   function getValue(){

    let valueKey = document.querySelectorAll(".number")[i].value;
      
   //   displying the value in caclulator  order 

     let displyValue = document.querySelector("input").getAttribute("value") + valueKey;  

    document.querySelector("input").setAttribute("value", displyValue)

   }
}
     
   // for equal button

   document.querySelector(".equal").addEventListener    ("click", ()=> {

   let noToBeCalculated =document.querySelector("input").value;
      if(noToBeCalculated===""){
         document.querySelector("input").setAttribute("value", "");

       }else{
           let equal = eval(noToBeCalculated);
           document.querySelector("input").setAttribute("value", equal);
       }});

      //  cler button

           document.querySelector(".clear").addEventListener    ("click", ()=> {
      
         document.querySelector("input").setAttribute("value", "");
       } );
 
 

