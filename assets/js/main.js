let listBtn = []

function loadCookies(){
    let y = getCookie("lista").split(",")
    for (x of y){
        listBtn.push(x)
    }
}

function listMaker(s = "", l = ""){
    var listName = document.getElementById("listName").value
    document.getElementById("listMaker").style.display = "block"
    document.getElementById("mainDiv").innerHTML = ""
    document.getElementById("listInput").innerHTML = s
    document.getElementById("listInput").focus();
    if (document.getElementById("listChoose").innerHTML.includes(listName+"</button>") && s == "") {
        alert("Van")
    }
    else
    document.getElementById("listChoose").innerHTML += "<button onclick='listOpen(\""+listName+"\")' class='listChooseBtn'>"+listName+"</button>"
    document.getElementById("listnameTxt").innerHTML = listName
    listBtn.push(listName)
    setCookie('lista',listBtn.join(),30)
}

function SaveList(){
    document.getElementById("listInput").innerHTML = document.getElementById("listInput").innerHTML.replace(";","")
    let listInputText = document.getElementById("listInput").innerHTML
    setCookie(listnameTxt.innerHTML,listInputText,30)
}

function listOpen(x){
    let s = getCookie(x)
    document.getElementById("listWText").innerHTML = s
    for (let i = 0; i < s.length; i++) {
        if (document.getElementsByClassName("listChooseBtn").innerHTML == s) {
            x = document.getElementsByClassName("listChooseBtn").innerHTML
        }
    }
    document.getElementById("listWName").innerHTML = x
}

function listEdit(x){
    let s = getCookie(x)
    document.getElementById("listMaker").style.display = "block"
    document.getElementById("mainDiv").innerHTML = ""
    document.getElementById("listInput").innerHTML = s
}

function openDiv(){
    document.getElementById("listDiv").innerHTML = 
    '<div id="listText"><h2>Bevásárló listák</h2></div><div id="closeOpenDiv" onclick="closeDiv()"><img id="closeOpenImg" src="assets/img/arrow.png"></div><div id="listChooser"><h2>Írja be a bevásárló lista nevét</h2><input type="text" maxlength="15" id="listName"><button id="newListBtn" onclick="listMaker()">Létrehoz</button><div id="listChoose"></div></div><div id="listWrite"><div id="listWName"></div><div id="listWText"></div></div>'
    document.getElementById("listDiv").style.right = "-0px"
    document.getElementById("closeOpenImg").style.rotate = "0deg"
    document.getElementById("closeOpenImg").style.marginRight = "0px"
    for (x of listBtn){
        console.log(x)
        document.getElementById("listChoose").innerHTML += "<button onclick='listOpen(\""+x+"\")' class='listChooseBtn'>"+x+"</button>"
    }
}

function closeDiv(){
    document.getElementById("listDiv").innerHTML = 
    '<div id="closeOpenDiv" onclick="openDiv()"><img id="closeOpenImg" src="assets/img/arrow.png"></div><h1 id="closedText">Bevásárló listák</h1>'
    document.getElementById("listDiv").style.right = "-410px"
    document.getElementById("closeOpenImg").style.rotate = "180deg"
    document.getElementById("closeOpenImg").style.marginRight = "10px"
}

function newList(){
    document.getElementById("listDiv").innerHTML = 
    '<div id="listText"><h2>Bevásárló listák</h2></div><div id="closeOpenDiv" onclick="closeDiv()"><img id="closeOpenImg" src="assets/img/arrow.png"></div><div id="listChooser"><h2>Írja be a bevásárló lista nevét</h2><input type="text" maxlength="15" id="listName"><button id="newListBtn" onclick="listMaker()">Létrehoz</button><div id="listChoose"></div></div><div id="listWrite"><div id="listWName"></div><div id="listWText"></div></div>'
    document.getElementById("listDiv").style.right = "-0px"
    document.getElementById("closeOpenImg").style.rotate = "0deg"
    document.getElementById("closeOpenImg").style.marginRight = "0px"
    for (x of listBtn){
        document.getElementById("listChoose").innerHTML += "<button onclick='listOpen()' class='listChooseBtn'>"+x+"</button>"
    }
}

function closeMaker(){
    document.getElementById("listMaker").style.display = "none"
    document.getElementById("mainDiv").innerHTML = '<h1 id="first">⬅ Készítsen egy új bevásárló listát!</h1><h1 id="second">Nézze meg a bevásárló listáit! ➞</h1><h1 id="third">⬅ Nyomtassa ki a kész bevásárló listáit!</h1>'
    document.getElementById("listInput").innerHTML = '<span id="listSpan">Kezdje el begépelni a listáját!</span>'
}

function spanDelete(){
    document.getElementById("listSpan").innerHTML = ''
}

function selectBox(){
    document.getElementById("listInput").innerHTML += '<input type="checkbox" class="checkbox">'
}

function DeleteList(){
    document.getElementById("Approve").style.display = "block"
    document.getElementById("ApproveDiv").style.display = "block"
}

function Yes(){
    document.getElementById("listInput").innerHTML = ''
    document.getElementById("Approve").style.display = "none"
    document.getElementById("ApproveDiv").style.display = "none"
}

function No(){
    document.getElementById("Approve").style.display = "none"
    document.getElementById("ApproveDiv").style.display = "none"
}
