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
/*	for (var i = 0; i < 50; i++) {
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

function getAlbum(album_id){
	for (var i = 0; i < Albums.length; i++) {
		if (Albums[i].album_id==album_id) {
			return Albums[i]
		}
	}
}
function addDriveSrc(driveID) {
 return "https://drive.google.com/uc?id="+ driveID
}

function construct_album(album){//skal injektere hele albummet i HTML
//oppretter div - Arkiv_Bilder
	album.album_node=document.createElement("div");
	album.album_node.id=album.album_id;
	album.album_node.className="Arkiv_Bilder";


//Oppretter h2-elementet
	h2=document.createElement("h2")
	h2.className="arkiv_title";
	h2.appendChild(document.createTextNode(album.album_id)); //legger til teksten inne i h2
	album.album_node.appendChild(h2); //legger til h2 i albummet.

//Oppretter venstre button
	lft_butn=document.createElement("button");
	album.album_node.appendChild(lft_butn);
	lft_butn.className="knapp_l";
	lft_butn.appendChild(document.createTextNode("left"))

//	lft_butn.outerHTML= "<button class="+'"'+"knapp_l"+'"'+" onclick="+'"'+"iterate_l()"+'"'+"> Left </button>"

// legger inn de første 5 bildene
//  HTML- formen på bildet
//  <img src="https://drive.google.com/uc?id=ID_bilde" class="hoverable" alt="Arkiv" id="ID_bilde">
	for (var i = 0; i < 5; i++) {
		im=document.createElement("img");
		im.src=addDriveSrc(album.images[i])
		im.className= "hoverable";
		im.alt="arkiv bilde";
		im.id=album.images[i];
		//console.log("giv event listn:"+album.images[i]);
		album.album_node.appendChild(im);
		// legger til EventListener e er musepekeren, e.target er det den trykker på, altså bildet.
		im.addEventListener('click',function(e){ clicked(e.target.id)});
	}
	// Oppretter høyre button
	rgt_butn=document.createElement("button");
	album.album_node.appendChild(rgt_butn);
	rgt_butn.className="knapp_r";
	rgt_butn.appendChild(document.createTextNode("right"));//legger til teksten left til knappen


	//legger til EventListenere for de to knappene.
	lft_butn.addEventListener('click',function(e){iterate(e.target,'l')})
	rgt_butn.addEventListener('click',function(e){iterate(e.target,'r')})

	//legger inn albumet i arkivet:
	body.appendChild(album.album_node);

}


function iterate(butn_node, dir){//ittererer album bilder i en retning TODO
	console.log(butn_node, dir);
	pics=butn_node.parentNode;	//album noden
	album_data=getAlbum(pics.id); // data beholderen for albumet.
	console.log(album);


	//super crude "itterasjon" igjennom bildene, sjekker ikke om man er på kanten av bildene.
	if (dir=="l") {
		console.log("l");
		pics.insertBefore(	pics.childNodes[1+5],pics.childNodes[1+1])//setter bilde nr 5 før bilde nr 1

	//setter så bildet til venstre til å være det nye bildet.
		newId=album_data.images[album_data.img_l-1];
		pics.childNodes[1+1].src=addDriveSrc(newId);
		pics.childNodes[1+1].id=newId;

		//oppdaterer hvor bildepekerne står
			album_data.img_r-=1;
			album_data.img_l-=1;
	}
	else if (dir="r") {
		console.log("r");
		pics.insertBefore( pics.childNodes[1+1], pics.childNodes[7])
//setter så bildet til høyre til å være det nye bildet:
		newId=album_data.images[album_data.img_r+1];
		pics.childNodes[1+5].src=addDriveSrc(newId);
		pics.childNodes[1+5].id=newId;
//oppdaterer hvor bildepekerne står
	album_data.img_r+=1;
	album_data.img_l+=1;
	}
}
/*
function iterate_l(){iterate("l")}
function iterate_r() { iterate("r")}
*/

function clicked(img_id){ //bytter clasene hoverable med img_in_focus etter om bildet er trykket
		img_element=document.getElementById(img_id);
		console.log(  "clicked nr " + img_element);
		console.log(img_element.className);
	if (img_element.className=="hoverable") //ustabil knapp funksjon, men men
	{
	    console.log("activate");
	    img_element.classList.remove("hoverable");
	    //høyde=img_element.offsetHeight //får høyden til bildet inkludert padding i pixler.
	    //console.log(høyde);
	    console.log("arkivbody,høyde "+body.clientHeight)
	    img_element.classList.add("img_in_focus");
			//// TODO: fikse img in focus for tilfeldige store bilder.
			// TODO: Fikse slik at høyre knappen kommer under bildet i fokus.
	    høyde=img_element.offsetHeight;
	    arkiv_høyde=body.clientHeight;
	    console.log(høyde +"  "+ arkiv_høyde);
	    img_element.style.paddingBottom=" calc(" + (arkiv_høyde - høyde) + "px) "

	}
	else {
	    console.log("deactivate");
			/*
	    img_element.classList.add("hoverable");
	    img_element.classList.remove("img_in_focus");*/
			img_element.className="hoverable";
	    img_element.style.paddingBottom="0px";
	}
}
