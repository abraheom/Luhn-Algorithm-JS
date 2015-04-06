var a = "";
window.onload=function(){
    var inp = document.getElementById("input");
    inp.onkeydown=function(){
        if(inp.innerText.length>=16 && event.keyCode!=8 && event.keyCode!=37 && event.keyCode!=38 && event.keyCode!=39 && event.keyCode!=40){
            event.preventDefault();
            return false;
        }
    }
    inp.focus();
}
function key(){
    var inp = document.getElementById("input");
    if(inp.innerText!=a){
        autoStylize(inp,inp.innerText);
        a=inp.innerText;      
    }
}
function autoStylize(inp,t){
    var res ="";
    var text = t;
    for(var i=0;i<text.length;i++){
        if(i<6)
            res+="<label class='ccBin'>";
        if(i>=6){
            if(text.substring(i,i+1)=="x" || text.substring(i,i+1)=="X")
                res+="<label class='x'>";
            else 
                res+="<label>";
        }

        res+=text.substring(i,i+1);
        res+="</label>";
    }

        var sel = window.getSelection();
        var off=sel.extentOffset;
        for(var i=0;i<inp.childNodes.length;i++){
            inp.removeChild(inp.childNodes[i]);
        }
        inp.innerHTML=res;
        seld(off); 
}
function seld(off){
    var el = document.getElementById("input");
    var range = document.createRange();
    var sel = window.getSelection();
    range.setStart(el.childNodes[el.childNodes.length-1],1);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
}


function Stylize(bin,cc){
    var res ="";
    for(var i=0;i<cc.length;i++){
        if(i<6)
            res+="<label class='ccBin'>";
        if(i>=6){
            if(bin.substring(i,i+1)=="x" || bin.substring(i,i+1)=="X")
                res+="<label class='x'>";
            else 
                res+="<label>";
        }

        res+=cc.substring(i,i+1);
        res+="</label>";
    }
    return res;
}
function generar(){
    var bin = document.getElementById("input").innerText;
    var div = document.getElementById("cards");
    div.innerHTML="";
    for(var i=0;i<10;i++){
        var cc = ccGen(bin);
        div.innerHTML+=Stylize(bin,cc)+"<br>";   
    }
}