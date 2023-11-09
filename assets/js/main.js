function closeDiv(){
    document.getElementById("listDiv").innerHTML = '<div id="closeOpenDiv" onclick="openDiv()"><img id="closeOpenImg" src="assets/img/arrow.png"></div>'
    document.getElementById("listDiv").style.right = "-410px"
    document.getElementById("closeOpenImg").style.rotate = "180deg"
    document.getElementById("closeOpenImg").style.marginRight = "10px"
}

function openDiv(){
    document.getElementById("listDiv").innerHTML = '<div id="closeOpenDiv" onclick="closeDiv()"><img id="closeOpenImg" src="assets/img/arrow.png"></div><div id="listChooser"></div><div id="listWrite"></div>'
    document.getElementById("listDiv").style.right = "-0px"
    document.getElementById("closeOpenImg").style.rotate = "0deg"
    document.getElementById("closeOpenImg").style.marginRight = "0px"
}