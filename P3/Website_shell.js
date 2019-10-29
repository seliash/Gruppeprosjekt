let header_element = document.createElement("div")
let logo_image = document.createElement("img")
let footer_element = document.createElement("div")
let left_header_element = document.createElement("div")
let right_header_element = document.createElement("div")

//Setter diverse html-attributter
document.getElementsByTagName("html")[0].lang = "no-nb"
document.getElementsByTagName("html")[0].dir = "ltr"
document.getElementsByTagName("html")[0].className = "html_shell"

//Styling for body
document.body.style.display = "grid"
document.body.style.gridTemplate = "80px 1fr 10vh/10% 1fr 10%"
document.body.style.minHeight = "100vh"
document.body.style.margin = "0"

//Styling for header-elementet
header_element.style.display = "flex"
header_element.style.gridArea = "1/2/2/3"
header_element.style.backgroundColor = "#a01405"
header_element.style.justifyContent = "space-between"

//Styling for center-elementet
document.getElementsByClassName("center_element")[0].style.display = "flex"
document.getElementsByClassName("center_element")[0].style.gridArea = "2/2/3/3"
document.getElementsByClassName("center_element")[0].style.flexDirection = "column"
document.getElementsByClassName("center_element")[0].style.backgroundColor = "lightgray"

//Styling for footer-elementet
footer_element.style.display = "flex"
footer_element.style.gridArea = "3/1/4/4"
footer_element.style.backgroundColor = "#a01405"

//Styling for left_header_element og right_header_element
left_header_element.style.gridarea = "1/1/2/2"
right_header_element.style.gridarea = "1/3/2/4"
left_header_element.style.backgroundColor = "#a01405"
right_header_element.style.backgroundColor = "#a01405"

//Styling for logobildet
logo_image.style.maxHeight = "80px"

//Legger header-elementer inn i body
header_element.className = "header_element"
document.body.appendChild(header_element)
document.body.appendChild(left_header_element)
document.body.appendChild(right_header_element)

//Legger logo inn i header-element
logo_image.id = "logo_image"
logo_image.src = "../P3/Bilder/Logoer/Naborevyen_logo_cropped.png"
logo_image.alt = " "
header_element.appendChild(logo_image)

//Legger footer-element inn i body
footer_element.className = "footer_element"
document.body.appendChild(footer_element)

//Navbar-variabler
let navbar = document.createElement("ul")
let om_oss = document.createElement("li")
let undergrupper = document.createElement("li")
let arkiv = document.createElement("li")
let påmelding = document.createElement("li")
let billetter = document.createElement("li")

//Navbar
om_oss.appendChild(document.createElement("a"))
undergrupper.appendChild(document.createElement("a"))
arkiv.appendChild(document.createElement("a"))
påmelding.appendChild(document.createElement("a"))
billetter.appendChild(document.createElement("a"))
om_oss.firstChild.href = "link.asp"
om_oss.firstChild.innerText = "Om oss"
undergrupper.firstChild.href = "link.asp"
undergrupper.firstChild.innerText = "Undergrupper"
arkiv.firstChild.href = "link.asp"
arkiv.firstChild.innerText = "Arkiv"
påmelding.firstChild.href = "link.asp"
påmelding.firstChild.innerText = "Påmelding"
billetter.firstChild.href = "link.asp"
billetter.firstChild.innerText = "Billetter"
navbar.appendChild(om_oss)
navbar.appendChild(undergrupper)
navbar.appendChild(arkiv)
navbar.appendChild(påmelding)
navbar.appendChild(billetter)
header_element.appendChild(navbar)
navbar.className = "navbar"
