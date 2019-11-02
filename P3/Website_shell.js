let logo_image = document.createElement("img")
let footer_element = document.createElement("div")
footer_element.id = "footer_element"
footer_element.className = "header_footer_class"
let header_element = document.createElement("div")
header_element.id = "header_element"
header_element.className = "header_footer_class"
let shell_style = document.createElement("link")
document.body.appendChild(header_element)
document.body.appendChild(footer_element)

//Definerer stylesheetet til htmlen definert gjennom js-fila
shell_style.rel = "stylesheet"
shell_style.href = "Website_shell_style.css"

//Setter diverse html-attributter
document.getElementsByTagName("html")[0].lang = "no-nb"
document.getElementsByTagName("html")[0].dir = "ltr"
document.getElementsByTagName("head")[0].appendChild(shell_style)
document.getElementsByTagName("html")[0].className = "html_shell"

//Legger logo inn i header-element
logo_wrapper = document.createElement("a")
logo_wrapper.appendChild(logo_image)
logo_wrapper.href = "Hovedside.html"
logo_wrapper.id = "logo_image_wrapper"
logo_image.src = "../P3/Bilder/Logoer/Naborevyen_logo_cropped.png"
logo_image.alt = " "//Denne skal linke tilbake til hovedsiden, så den skal ikke ha noe navn
logo_image.id = "logo_image"
header_element.appendChild(logo_wrapper)

//Footer
footer_element.appendChild(document.createElement("p"))
footer_element.childNodes[0].innerHTML = "Kontakt Naborevyen: <br> <a href=\"mailto: naborevy1@gmail.com\">E-post: naborevy1@gmail.com</a>"
footer_element.appendChild(document.createElement("p"))
footer_element.childNodes[1].innerHTML = "Facebook: <br> <a href=\"https://www.facebook.com/naborevyen\" target=\"_blank\">facebook.com/naborevyen</a>"

//Header
var mq = window.matchMedia("(max-width: 900px)");
if (mq.matches) { //Mobile

    //Henter og definerer bilde til bruk i mobilmeny
    let hamburger_image = document.createElement("img")
    hamburger_image.src = "Bilder/iconfinder_menu-alt_134216.svg"
    hamburger_image.alt = " "//Denne skal bare vise linker til andre sider
    hamburger_image.id = "hamburger_image"

    //Lager struktur for mobilmeny
    let hamburger_wrapper = document.createElement("div")
    let hamburger_button = document.createElement("a")
    let hamburger_dropdown = document.createElement("div")
    hamburger_dropdown.className = "unclicked"
    hamburger_button.href = "javascript:void(0);"
    hamburger_button.addEventListener("click", showNavigation)
    header_element.appendChild(hamburger_wrapper)
    hamburger_wrapper.appendChild(hamburger_button)
    hamburger_button.appendChild(hamburger_image)
    hamburger_wrapper.appendChild(hamburger_dropdown)
    hamburger_dropdown.id = "hamburger_dropdown"

    let om_oss = document.createElement("a")
    om_oss.href = "Om_oss.html"
    om_oss.innerText = "Om oss"
    hamburger_dropdown.appendChild(om_oss)
    let undergrupper = document.createElement("a")
    undergrupper.href = "Oversikt_undergrupper.html"
    undergrupper.innerText = "Undergrupper"
    hamburger_dropdown.appendChild(undergrupper)
    let arkiv = document.createElement("a")
    arkiv.href = "Arkiv.html"
    arkiv.innerText = "Arkiv"
    hamburger_dropdown.appendChild(arkiv)
    let påmelding = document.createElement("a")
    påmelding.href = "https://docs.google.com/forms/d/e/1FAIpQLSeskn70ldpsOhrC71ehc9mKVIHHxpKQwQsjKTQEpHXSUcUXnw/viewform?usp=sf_link"
    påmelding.target = "_blank"
    påmelding.innerText = "Påmelding"
    hamburger_dropdown.appendChild(påmelding)
    let billetter = document.createElement("a")
    billetter.href = "Billettsalg.html"
    billetter.innerText = "Billetter"
    hamburger_dropdown.appendChild(billetter)

    function showNavigation() {
        if (hamburger_dropdown.className == "clicked") {
            hamburger_dropdown.className = "unclicked"
        }
        else{
            hamburger_dropdown.className = "clicked"
        }
    }
}
else { //Desktop
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
    kostymeOgRek.innerText = "Kostyme og rekvisitta"
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
    let teknikk = document.createElement("a")
    teknikk.innerText = "Teknikk"
    teknikk.href = "Teknikk.html"
    undergrupper_dropdown.appendChild(teknikk)
    let velferd = document.createElement("a")
    velferd.innerText = "Velferd"
    velferd.href = "Velferd.html"
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
}
