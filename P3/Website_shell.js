let header_element = document.createElement("div")
let logo_image = document.createElement("img")
let footer_element = document.createElement("div")

//Setter diverse html-attributter
document.getElementsByTagName("html")[0].lang = "no-nb"
document.getElementsByTagName("html")[0].dir = "ltr"
document.getElementsByTagName("html")[0].className = "html_shell"

//Styling for body
document.body.style.display = "grid"
document.body.style.gridTemplate = "80px 1fr 10%/10% 1fr 10%"
document.body.style.minHeight = "100vh"
document.body.style.margin = "0"

//Styling for header-elementet
header_element.style.display = "flex"
header_element.style.gridArea = "1/1/2/4"
header_element.style.backgroundColor = "gray"

//Styling for center-elementet
document.getElementById("center_element").style.display = "flex"
document.getElementById("center_element").style.gridArea = "2/2/3/3"
document.getElementById("center_element").style.flexDirection = "column"
document.getElementById("center_element").style.backgroundColor = "lightgray"

//Styling for footer-elementet
footer_element.style.display = "flex"
footer_element.style.gridArea = "3/1/4/4"
footer_element.style.backgroundColor = "darkgray"

//Legger header-element inn i body
header_element.className = "header_element"
document.body.appendChild(header_element)

//Legger logo inn i header-element
logo_image.id = "logo_image"
logo_image.src = "Bilder/Logoer/Naborevyen_logo.png"
logo_image.alt = " "
header_element.appendChild(logo_image)

//Legger footer-element inn i body
footer_element.className = "footer_element"
document.body.appendChild(footer_element)
