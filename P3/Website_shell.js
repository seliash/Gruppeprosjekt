let logo_image = document.createElement("img")
let footer_element = document.createElement("div")
footer_element.id = "footer_element"
footer_element.className = "header_footer_class"
let header_element = document.createElement("div")
header_element.id = "header_element"
header_element.className = "header_footer_class"
let shell_style = document.createElement("link")
let viewportdef = document.createElement("Meta")
viewportdef.name="viewport"
viewportdef.content="width=device-width,initial-scale=1"
document.body.appendChild(header_element)
document.body.appendChild(footer_element)

//Definerer stylesheetet til htmlen definert gjennom js-fila
shell_style.rel = "stylesheet"
shell_style.href = "Website_shell_style.css"

//Setter diverse html-attributter
document.getElementsByTagName("html")[0].lang = "no-nb"
document.getElementsByTagName("html")[0].dir = "ltr"
document.getElementsByTagName("head")[0].appendChild(shell_style)
document.getElementsByTagName("head")[0].appendChild(viewportdef)
document.getElementsByTagName("html")[0].className = "html_shell"

//Legger logo inn i header-element
logo_wrapper = document.createElement("a")
logo_wrapper.appendChild(logo_image)
logo_wrapper.href = "http://folk.ntnu.no/hkvie/"
logo_wrapper.id = "logo_image_wrapper"
logo_image.src = "Bilder/Logoer/Naborevyen_logo_cropped.png"
logo_image.alt = " "//Denne skal linke tilbake til hovedsiden, så den skal ikke ha noe navn
logo_image.id = "logo_image"
header_element.appendChild(logo_wrapper)

//Henter og definerer bilde til bruk i mobilmeny
let hamburger_image = document.createElement("img")
hamburger_image.src = "Bilder/Hjemmesideelementer/iconfinder_menu-alt_134216.svg"
hamburger_image.alt = " "//Denne skal bare vise linker til andre sider
hamburger_image.id = "hamburger_image"

//Definerer knapper i navigasjonsbaren
let om_oss_a = document.createElement("a")
om_oss_a.href = "Om_oss.html"
om_oss_a.innerText = "Om oss"
let undergrupper_a = document.createElement("a")
undergrupper_a.href = "Oversikt_undergrupper.html"
undergrupper_a.innerText = "Undergrupper"
let arkiv_a = document.createElement("a")
arkiv_a.href = "Arkiv.html"
arkiv_a.innerText = "Arkiv"
let påmelding_a = document.createElement("a")
påmelding_a.href = "https://docs.google.com/forms/d/e/1FAIpQLSeskn70ldpsOhrC71ehc9mKVIHHxpKQwQsjKTQEpHXSUcUXnw/viewform?usp=sf_link"
påmelding_a.target = "_blank"
påmelding_a.innerText = "Påmelding"
let billetter_a = document.createElement("a")
billetter_a.href = "Billettsalg.html"
billetter_a.innerText = "Billetter"

//Kode for navigasjonsbar på mobil
let hamburger_wrapper = document.createElement("div")
let hamburger_button = document.createElement("a")
let hamburger_dropdown = document.createElement("div")
hamburger_dropdown.className = "unclicked"
hamburger_button.href = "javascript:void(0)"
hamburger_button.addEventListener("click", showNavigation)
header_element.appendChild(hamburger_wrapper)
hamburger_wrapper.appendChild(hamburger_button)
hamburger_button.appendChild(hamburger_image)
hamburger_wrapper.appendChild(hamburger_dropdown)
hamburger_dropdown.id = "hamburger_dropdown"
hamburger_wrapper.id = "hamburger_wrapper"

hamburger_dropdown.appendChild(om_oss_a)
hamburger_dropdown.appendChild(undergrupper_a)
hamburger_dropdown.appendChild(arkiv_a)
hamburger_dropdown.appendChild(påmelding_a)
hamburger_dropdown.appendChild(billetter_a)
function showNavigation() {
    if (hamburger_dropdown.className == "clicked") {
        hamburger_dropdown.className = "unclicked"
    }
    else{
        hamburger_dropdown.className = "clicked"
    }
}

//Kode for navigasjonsbar på desktop
//Navbar-variabler
let navbar = document.createElement("ul")
navbar.id = "navbar"
let om_oss = document.createElement("li")
let undergrupper = document.createElement("li")
undergrupper.id = "undergrupperID"
undergrupper.className = "dropdown_btn"
let arkiv = document.createElement("li")
let påmelding = document.createElement("li")
let billetter = document.createElement("li")
let undergrupper_dropdown = document.createElement("div")
undergrupper_dropdown.id = "undergrupper_dropdown"

//undergrupper
let styret = document.createElement("a")
styret.innerText = "Styret"
styret.href = "Styret.html"
undergrupper_dropdown.appendChild(styret)
let bygg = document.createElement("a")
bygg.innerText = "Bygg"
bygg.href = "Bygg.html"
undergrupper_dropdown.appendChild(bygg)
let dans = document.createElement("a")
dans.innerText = "Dans"
dans.href = "Dans.html"
undergrupper_dropdown.appendChild(dans)
let kostymeOgRek = document.createElement("a")
kostymeOgRek.innerText = "Kostyme og rekvisitt"
kostymeOgRek.href = "Kostyme_og_rekvisitter.html"
undergrupper_dropdown.appendChild(kostymeOgRek)
let musikk = document.createElement("a")
musikk.innerText = "Musikk"
musikk.href = "Musikk.html"
undergrupper_dropdown.appendChild(musikk)
let økonomi = document.createElement("a")
økonomi.innerText = "Økonomi"
økonomi.href = "Økonomi.html"
undergrupper_dropdown.appendChild(økonomi)
let prDesign = document.createElement("a")
prDesign.innerText = "PR og design"
prDesign.href = "PR_og_design.html"
undergrupper_dropdown.appendChild(prDesign)
let skribent = document.createElement("a")
skribent.innerText = "Skribent"
skribent.href = "Skribent.html"
undergrupper_dropdown.appendChild(skribent)
let skuespillere = document.createElement("a")
skuespillere.innerText = "Skuespillere"
skuespillere.href = "Skuespill.html"
undergrupper_dropdown.appendChild(skuespillere)
let teknikk = document.createElement("a")
teknikk.innerText = "Teknikk"
teknikk.href = "Teknikk.html"
undergrupper_dropdown.appendChild(teknikk)
let velferd = document.createElement("a")
velferd.innerText = "Velferd"
velferd.href = "Velferd.html"
undergrupper_dropdown.appendChild(velferd)

//Navbar
navbar.appendChild(om_oss)
navbar.appendChild(undergrupper)
navbar.appendChild(arkiv)
navbar.appendChild(påmelding)
navbar.appendChild(billetter)
for (i = 0; i < 5; i++) {
    navbar.childNodes[i].appendChild(document.createElement("a"))
    navbar.childNodes[i].firstChild.href = hamburger_dropdown.childNodes[i].href
    navbar.childNodes[i].firstChild.innerText = hamburger_dropdown.childNodes[i].innerText
}
undergrupper.appendChild(undergrupper_dropdown)
påmelding.firstChild.target="_blank"
header_element.appendChild(navbar)

//Hjørne-elementer
let left_footer_element = document.createElement("div")
left_footer_element.id = "left_footer_element"
left_footer_element.className = "header_footer_class"
let right_footer_element = document.createElement("div")
right_footer_element.id = "right_footer_element"
right_footer_element.className = "header_footer_class"
let left_header_element = document.createElement("div")
left_header_element.id = "left_header_element"
left_header_element.className = "header_footer_class"
let right_header_element = document.createElement("div")
right_header_element.id = "right_header_element"
right_header_element.className = "header_footer_class"
document.body.appendChild(left_header_element)
document.body.appendChild(right_header_element)
document.body.appendChild(left_footer_element)
document.body.appendChild(right_footer_element)

//Footer
footer_element.appendChild(document.createElement("p"))
footer_element.childNodes[0].innerHTML = "Kontakt oss: <br> <a href=\"mailto: naborevy1@gmail.com\">naborevy1@gmail.com</a>"
footer_element.appendChild(document.createElement("div"))
footer_element.childNodes[1].appendChild(document.createElement("p"))
footer_element.childNodes[1].firstChild.innerText = "Sosiale medier:"
footer_element.childNodes[1].appendChild(document.createElement("div"))
for (i = 0; i < 3; i++) {
    footer_element.childNodes[1].childNodes[1].appendChild(document.createElement("a"))
    footer_element.childNodes[1].childNodes[1].childNodes[i].appendChild(document.createElement("img"))
    footer_element.childNodes[1].childNodes[1].childNodes[i].target = "_blank"
}
footer_element.childNodes[1].childNodes[1].childNodes[0].href = "https://www.facebook.com/naborevyen/"
footer_element.childNodes[1].childNodes[1].childNodes[1].href = "https://www.instagram.com/naborevyen/"
footer_element.childNodes[1].childNodes[1].childNodes[2].href = "https://www.youtube.com/channel/UCfSrgsnrHl_qZKESvrx37Bg"
footer_element.childNodes[1].childNodes[1].childNodes[0].firstChild.src = "Bilder/Hjemmesideelementer/Facebook.png"
footer_element.childNodes[1].childNodes[1].childNodes[1].firstChild.src = "Bilder/Hjemmesideelementer/Instagram.png"
footer_element.childNodes[1].childNodes[1].childNodes[2].firstChild.src = "Bilder/Hjemmesideelementer/Youtube.png"
footer_element.childNodes[1].childNodes[1].childNodes[0].firstChild.alt = "Facebook"
footer_element.childNodes[1].childNodes[1].childNodes[1].firstChild.alt = "Instagram"
footer_element.childNodes[1].childNodes[1].childNodes[2].firstChild.alt = "YouTube"
