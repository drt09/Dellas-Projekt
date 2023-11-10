function execCmd(command, value = null) {
    document.execCommand(command, false, value);
}

function toggleItalic() {
    execCmd('italic');
}

function changeFont() {
    document.execCommand("fontSize", false, num);
    var fontElements = document.getElementsByTagName("font");
    for (var i = 0, len = fontElements.length; i < len; ++i) {
        if (fontElements[i].size == "7") {
            fontElements[i].removeAttribute("size");
            fontElements[i].style.fontSize = "30px";
        }
    }
}