var sun = document.getElementById("sun");
var planets = document.getElementsByClassName("planet");

var a =[100, 150,200,250,300,350,400,450,500];
var b =[50,75,100,125,150,175,200,225,250];
var speeds =[0.14,0.11,0.10,0.08,0.06,0.04,0.03,0.02,0.06];
var angles =[0,0,0,0,0,0,0,0,0];

setInterval(function(){
    for (var i =0; i< planets.length; i++){
        angles[i] += speeds[i];
        var x =a[i] * Math.cos(angles[i]); //x cordinate
        var y =a[i] * Math.sin(angles[i]); //y cordinate
        planets[i].style.left =(sun.offsetLeft + x) +"px";
        planets[i].style.top =(sun.offsettop + y) +"px";

    }
}, 70);