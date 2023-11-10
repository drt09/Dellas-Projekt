function closeDiv(){
    document.getElementById("listDiv").innerHTML = 
    '<div id="closeOpenDiv" onclick="openDiv()"><img id="closeOpenImg" src="assets/img/arrow.png"></div><h1 id="closedText">Bevásárló listák</h1>'
    document.getElementById("listDiv").style.right = "-410px"
    document.getElementById("closeOpenImg").style.rotate = "180deg"
    document.getElementById("closeOpenImg").style.marginRight = "10px"
}

function openDiv(){
    document.getElementById("listDiv").innerHTML = 
    '<div id="listText"><h2>Bevásárló listák</h2></div><div id="closeOpenDiv" onclick="closeDiv()"><img id="closeOpenImg" src="assets/img/arrow.png"></div><div id="listChooser"></div><div id="listWrite"></div>'
    document.getElementById("listDiv").style.right = "-0px"
    document.getElementById("closeOpenImg").style.rotate = "0deg"
    document.getElementById("closeOpenImg").style.marginRight = "0px"
}

function listMaker(){
    document.getElementById("listMaker").style.display = "block"
    document.getElementById("mainDiv").innerHTML = ""
}

function closeMaker(){
    document.getElementById("listMaker").style.display = "none"
    document.getElementById("mainDiv").innerHTML = '<h1 id="first">⬅ Készítsen egy új bevásárló listát!</h1><h1 id="second">Nézze meg a bevásárló listáit! ➞</h1><h1 id="third">⬅ Nyomtassa ki a kész bevásárló listáit!</h1>'
}