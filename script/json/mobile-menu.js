 var cont=0

function checado(){
   
    if(!document.getElementById("btMenu").checked){
        document.getElementById("uls").style.transform="translateX("+0+")"
        cont=1
        console.log(cont)
    }
    else{
        if(document.getElementById("btMenu").checked){
        document.getElementById("uls").style.transform="translateX("+100+"%"+")"
        cont=0  
        console.log(cont)
        }
    }
}

function fechar(){
    if(cont==1){
        document.getElementById("uls").style.transform="translateX("+100+"%"+")"
        cont=0;
        document.getElementById("btMenu").checked=false;
    }
}




