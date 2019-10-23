center_element=document.getElementsByClassName("center_element")[0];

banner=document.getElementsByClassName("banner")[0];
console.log(banner);
høyde=banner.offsetHeight;
sibling=banner.nextSibling;
console.log(sibling);
sibling.style.paddingTop= ""+høyde+"px"
