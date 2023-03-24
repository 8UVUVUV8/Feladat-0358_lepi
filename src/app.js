/*
File: app.js
Author: Szekeres András
Copyright: 2023, Szekeres András
Group: Szoft I-2 N
Date: 2023-03-24
Github: https://github.com/8UVUVUV8/
Licenc: GNU GPL
*/

var aSide = document.querySelector('#aSide');
var bSide = document.querySelector('#bSide');
var cSide = document.querySelector('#cSide');
var calcButton = document.querySelector('#calcbutton')
var result = document.querySelector('#result')

if(calcButton){
    calcButton.addEventListener('click', () => {
        getData()
    });
}

function getData()
{
    var a = aSide.value;
    var b = bSide.value;
    var c = cSide.value;

    elteCalculus(a,b,c)
    // console.log(a,b,c)
}
function elteCalculus(a,b,c){
    var res = a*b*c
    outPut(res)
}
function outPut(res){
    result.value = res
    mrClean()
}
function mrClean(){
    aSide.value = null
    bSide.value = null
    cSide.value = null
}




















