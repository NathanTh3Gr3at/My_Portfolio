const collapsibleElement=document.getElementsByClassName("collapsible")
var i
for ( i=0;i<collapsibleElement.length;i++){
    collapsibleElement[i].addEventListener("click",function(){
        this.classList.toggle("activated");
        var content=this.nextElementSibling;
        if(content.style.maxHeight){
            content.style.maxHeight=null;
        }else{
            content.style.maxHeight=content.scrollHeight +"px"
        }
    })
}