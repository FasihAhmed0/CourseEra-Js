




function colorChange(){
    console.log("works");
    let letters="0123456789ABCDEF";
    let color="#";

    for(let i=0;i<6;i++){
        console.log(letters[Math.floor(Math.random()*16)])
        colorVal=letters[Math.floor(Math.random()*16)]
        color+=colorVal
    }

    let background= document.getElementById("maincontainter")
    background.style.backgroundColor=color

    let colorName=document.getElementById("bluefont")
    colorName.textContent=color
    

    
}





