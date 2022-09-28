function CretaeCircle(radius){
return{
    radius,
    draw: function(){
        console.log('draw');
    }
}
}

const circle = CretaeCircle(2);
circle.draw();