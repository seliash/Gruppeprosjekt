document.body.style.display = "grid"
document.body.style.gridTemplate = "80px 1fr 10%/10% 1fr 10%"
document.body.style.minHeight = "100vh"
document.body.style.margin = "0"

let header_element = document.createElement("div")
let logo_image = document.createElement("img")
let center_element = document.createElement("div")
let footer_element = document.createElement("div")

header_element.style.display = "flex"
header_element.style.gridArea = "1/1/2/4"
header_element.style.backgroundColor = "gray"

document.body.className = "entire_page"

//Fikser header-element div-en og legger den inn i body
header_element.className = "header_element"
document.body.appendChild(header_element)

//Fikser logoen og legger den inn i header-elementet
logo_image.id = "logo_image"
logo_image.src = "Bilder/Logoer/Naborevyen_logo.png"
logo_image.alt = " "
header_element.appendChild(logo_image)

//Fikser center-element div-en og legger den inn i body
center_element.className = "center_element"
document.body.appendChild(center_element)

//Fikser footer-element div-en og legger denn inn i body
footer_element.className = "footer_element"
document.body.appendChild(footer_element)
