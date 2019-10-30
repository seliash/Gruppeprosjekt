let logo_image = document.createElement("img")
let footer_element = document.createElement("div")
let left_footer_element = document.createElement("div")
let right_footer_element = document.createElement("div")
let header_element = document.createElement("div")
let left_header_element = document.createElement("div")
let right_header_element = document.createElement("div")
let shellStyle = document.createElement("link")

//Definerer stylesheetet til htmlen definert gjennom js-fila
shellStyle.rel = "stylesheet"
shellStyle.href = "Website_shell_style.css"

//Setter diverse html-attributter
document.getElementsByTagName("html")[0].lang = "no-nb"
document.getElementsByTagName("html")[0].dir = "ltr"
document.getElementsByTagName("head")[0].appendChild(shellStyle)

//Legger header-elementer inn i body
document.body.appendChild(header_element)
document.body.appendChild(left_header_element)
document.body.appendChild(right_header_element)

//Legger logo inn i header-element
logo_wrapper = document.createElement("a")
logo_wrapper.appendChild(logo_image)
logo_wrapper.href = "Hovedside.html"
logo_image.src = "../P3/Bilder/Logoer/Naborevyen_logo_cropped.png"
logo_image.alt = " "//Denne skal linke tilbake til hovedsiden, så den skal ikke ha noe navn
header_element.appendChild(logo_wrapper)

//Legger footer-elementer inn i body
document.body.appendChild(footer_element)
document.body.appendChild(left_footer_element)
document.body.appendChild(right_footer_element)

//Navbar-variabler
let navbar = document.createElement("ul")
let om_oss = document.createElement("li")
let undergrupper = document.createElement("li")
let arkiv = document.createElement("li")
let påmelding = document.createElement("li")
let billetter = document.createElement("li")
let undergrupper_dropdown = document.createElement("div")
undergrupper.className = "dropdown_btn"

//undergrupper
let styret = document.createElement("a")
styret.innerText = "Styret"
styret.href = "Undergrupper/Styret.html"
undergrupper_dropdown.appendChild(styret)
let bygg = document.createElement("a")
bygg.innerText = "Bygg"
bygg.href = "Undergrupper/Bygg.html"
undergrupper_dropdown.appendChild(bygg)
let dans = document.createElement("a")
dans.innerText = "Dans"
dans.href = "Undergrupper/Dans.html"
undergrupper_dropdown.appendChild(dans)
let kostymeOgRek = document.createElement("a")
kostymeOgRek.innerText = "Kostyme og rekvisitta"
kostymeOgRek.href = "Undergrupper/Kostyme_og_rekvisitter.html"
undergrupper_dropdown.appendChild(kostymeOgRek)
let musikk = document.createElement("a")
musikk.innerText = "Musikk"
musikk.href = "Undergrupper/Musikk.html"
undergrupper_dropdown.appendChild(musikk)
let økonomi = document.createElement("a")
økonomi.innerText = "Økonomi"
økonomi.href = "Undergrupper/Økonomi.html"
undergrupper_dropdown.appendChild(økonomi)
let prDesign = document.createElement("a")
prDesign.innerText = "PR og design"
prDesign.href = "Undergrupper/PR_og_design.html"
undergrupper_dropdown.appendChild(prDesign)
let skribent = document.createElement("a")
skribent.innerText = "Skribent"
skribent.href = "Undergrupper/Skribent.html"
undergrupper_dropdown.appendChild(skribent)
let teknikk = document.createElement("a")
teknikk.innerText = "Teknikk"
teknikk.href = "Undergrupper/Teknikk.html"
undergrupper_dropdown.appendChild(teknikk)
let velferd = document.createElement("a")
velferd.innerText = "Velferd"
velferd.href = "Undergrupper/Velferd.html"
undergrupper_dropdown.appendChild(velferd)

//Navbar
om_oss.appendChild(document.createElement("a"))
undergrupper.appendChild(document.createElement("a"))
arkiv.appendChild(document.createElement("a"))
påmelding.appendChild(document.createElement("a"))
billetter.appendChild(document.createElement("a"))
om_oss.firstChild.href = "Om_oss.html"
om_oss.firstChild.innerText = "Om oss"
undergrupper.firstChild.href = "Oversikt_undergrupper.html" //--Denne må endres!
undergrupper.firstChild.innerText = "Undergrupper"
undergrupper.appendChild(undergrupper_dropdown)
arkiv.firstChild.href = "Arkiv.html"
arkiv.firstChild.innerText = "Arkiv"
påmelding.firstChild.href = "https://docs.google.com/forms/d/e/1FAIpQLSeskn70ldpsOhrC71ehc9mKVIHHxpKQwQsjKTQEpHXSUcUXnw/viewform?usp=sf_link" //--Denne må endres!
påmelding.firstChild.target="_blank"
påmelding.firstChild.innerText = "Påmelding"
billetter.firstChild.href = "Billettsalg.html"
billetter.firstChild.innerText = "Billetter"
navbar.appendChild(om_oss)
navbar.appendChild(undergrupper)
navbar.appendChild(arkiv)
navbar.appendChild(påmelding)
navbar.appendChild(billetter)
header_element.appendChild(navbar)

//Footer
footer_element.appendChild(document.createElement("p"))
footer_element.childNodes[0].innerHTML = "Kontakt Naborevyen: <br> <a href=\"mailto: naborevy1@gmail.com\">E-post: naborevy1@gmail.com</a>"
footer_element.appendChild(document.createElement("p"))
footer_element.childNodes[1].innerHTML = "Facebook: <br> <a href=\"https://www.facebook.com/naborevyen\" target=\"_blank\">facebook.com/naborevyen</a>"

//Assigning IDs and class names
document.getElementsByTagName("html")[0].className = "html_shell"
header_element.className = "header_footer_class"
left_header_element.className = "header_footer_class"
right_header_element.className = "header_footer_class"
footer_element.className = "header_footer_class"
left_footer_element.className = "header_footer_class"
right_footer_element.className = "header_footer_class"

logo_image.id = "logo_image"
header_element.id = "header_element"
left_header_element.id = "left_header_element"
right_header_element.id = "right_header_element"
footer_element.id = "footer_element"
left_footer_element.id = "left_footer_element"
right_footer_element.id = "right_footer_element"
undergrupper.id = "undergrupperID"
undergrupper_dropdown.id = "undergrupper_dropdown"
navbar.id = "navbar"
