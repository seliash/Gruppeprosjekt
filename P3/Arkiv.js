var Albums=[];

var body = document.getElementById("arkiv_body"); //arkiv boddyen

img_6=document.getElementById("6");
img_6.addEventListener('click',function(){clicked(img_6)});


arkiv_bilder=document.getElementById("");


class Album {
	constructor(album_id,img_data) {
		this.album_id=album_id
		this.images=img_data
		this.img_l=1
		this.img_r=5
	}
}


function load() {
	var mydata = JSON.parse(bilder);
	alert(mydata[0]);
	Albums.push(Album,mydata)
	console.log(Albums);

}


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


function iterate(dir){//ittererer album bilder i en retning TODO

	pics=document.getElementById("Revy???")
	butn=0;
	console.log(pics);
		console.log(pics.childNodes);
	console.log(pics.childNodes.length);

	for (var i = 0; i < pics.childNodes.length; i++) { //finner knappen, usikker på hvorfor...
//console.log(	pics.childNodes[i]);
		if (pics.childNodes[i].className=="knapp_"+dir) {
			butn=pics.childNodes[i]
		}
	}
	//super crude itterasjon igjennom:
	if (dir=="l") {
		load()
		for (var i = 5; i < 16; i+=2) {//går til venstre
			pics.childNodes[i].src=pics.childNodes[i+2].src;
		}
	}
	else if (dir="r") {
			for (var i = 15; i >5; i-=2) {//går til høyre
				pics.childNodes[i].src=pics.childNodes[i-2].src;
			}
	}
}

function iterate_l(){iterate("l")}
function iterate_r() { iterate("r")}
