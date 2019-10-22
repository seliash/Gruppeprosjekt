

var body = document.getElementById("arkiv_body"); //arkiv boddyen
img_6=document.getElementById("6");
img_6.addEventListener('click',function(){clicked(img_6)});

function clicked(img_element){ //bytter clasene hoverable med img_in_focus etter om bildet er trykket
    console.log(  "clicked nr " + img_element);
if (img_element.className=="hoverable") //ustabil knapp funksjon, men men
{
    console.log("activate");
    img_element.classList.remove("hoverable");
    //høyde=img_element.offsetHeight //får høyden til bildet inkludert padding i pixler.
    //console.log(høyde);
    console.log("arkivbody,høyde "+body.clientHeight)
    img_element.classList.add("img_in_focus");
    høyde=img_element.offsetHeight;
    arkiv_høyde=body.clientHeight;
    console.log(høyde +"  "+ arkiv_høyde);
    img_element.style.paddingBottom=" calc(" + (arkiv_høyde - høyde) + "px) "

}
else {
    console.log("deactivate");
    img_element.classList.add("hoverable");
    img_element.classList.remove("img_in_focus");
    img_element.style.paddingBottom="0px";
}
}
