function calcular(){
   let strA= document.getElementById("valorA").value
   let strB= document.getElementById("valorB").value
   let strC= document.getElementById("valorC").value

   if( strA==="") {
        alert("valor a en blanco")
   } else if(strB === ""){ 
    alert("valor b en blanco")
   }else if(strC === ""){
    alert("valor c en blanco")
   }
   else{
    alert("Todo bien")
   }
}

function Limpiar(){
    document.getElementById("valorA").value = ""
    document.getElementById("valorB").value = ""
    document.getElementById("valorC").value = ""  
}

 