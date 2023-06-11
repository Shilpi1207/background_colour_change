const colors=['red','green','blue','orange','purple','pink'];

function changeColor(){
    const colorIndex=parseInt(Math.random()*colors.length)
    document.body.style.background=colors[colorIndex];
}