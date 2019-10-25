var Albums=[];

var body = document.getElementById("arkiv_body"); //arkiv boddyen

/*img_6=document.getElementById("6");
img_6.addEventListener('click',function(){clicked(img_6)});
*/

arkiv_bilder=document.getElementById("");




function load() {
	var mydata = JSON.parse(bilder);
	album=new Album("revy_id",mydata)
	Albums.push(album);

	console.log(Albums);
	construct_album(album);
//test på innlastning
//TODO: Fikse slik at footeren ikke blir mega lang ved dette tilfellet:
	/*for (var i = 0; i < 50; i++) {
		construct_album(album);
	}*/
}
class Album {
	constructor(album_id,img_data) {

		this.album_id=album_id
		this.images=img_data
		this.img_l=1
		this.img_r=5
		this.album_node=null
	}
}

function construct_album(album){//skal injektere hele albummet i HTML
//oppretter div - Arkiv_Bilder
	album.album_node=document.createElement("div");
	album.id=album.album_id;
	album.album_node.className="Arkiv_Bilder";

//Oppretter h2-elementet
	h2=document.createElement("h2")
	h2.className="arkiv_title";
	h2.appendChild(document.createTextNode(album.album_id)); //legger til teksten inne i h2
	album.album_node.appendChild(h2); //legger til h2 i albummet.

//Oppretter venstre button
	lft_butn=document.createElement("button");
	album.album_node.appendChild(lft_butn);
	lft_butn.outerHTML= "<button class="+'"'+"knapp_l"+'"'+" onclick="+'"'+"iterate_l()"+'"'+"> Left </button>"
// se høyre button for hva som skjer ovenfor.

// legger inn de første 5 bildene
//  HTML- formen på bildet
//  <img src="https://drive.google.com/uc?id=ID_bilde" class="hoverable" alt="Arkiv" id="ID_bilde">
for (var i = 0; i < 5; i++) {
	im=document.createElement("img");
	im.src= "https://drive.google.com/uc?id="+ album.images[i] ;
	im.className= "hoverable";
	im.alt="arkiv bilde";
	im.id=album.images[i];

	album.album_node.appendChild(im);
}


// Oppretter høyre button
rgt_butn=document.createElement("button");
album.album_node.appendChild(rgt_butn);
rgt_butn.outerHTML= "<button class="+'"'+"knapp_r"+'"'+" onclick="+'"'+"iterate_r()"+'"'+"> Right </button>"
/* Bruker outer HTML, men kan og bruke denne jsen: Selv om det å få en "onklick er kjipt slik"
rgt_butn.className="knapp_r";
rgt_butn.onclick="iterate_r()";
rgt_butn.appendChild(document.createTextNode("right"));//legger til teksten left til knappen
*/


//legger inn albumet i arkivet:
body.appendChild(album.album_node);

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
