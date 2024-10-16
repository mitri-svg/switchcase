let user = prompt("Adivizi qeyd edin:")
let parol = prompt("Paroluvuzu qeyd edin:")

switch (true) {
    case user == "erlams" && parol == 123456:
        document.getElementById("text").innerHTML = "Siz adminsiz";
        break;

    case user == "mitri" || user == "Mitri" && parol == 123456:
        document.getElementById("text").innerHTML = `${user}, xos geldiniz`;

        break;
    case user == "togrul" || user == "Togrul" && parol == 123456:
        document.getElementById("text").innerHTML = `${user}, xos geldiniz`;

        break;
    case user == "aysel" || user == "Aysel" && parol == 123456:
        document.getElementById("text").innerHTML = `${user}, xos geldiniz`;

        break;
    case user == "Huriye" || user == "huriye" && parol == 123456:
        document.getElementById("text").innerHTML = `${user}, xos geldiniz`;

        break;
    case user == "cabir" || user == "Cabir" && parol == 123456:
        document.getElementById("text").innerHTML = `${user}, xos geldiniz`;

        break;

    default:
        document.getElementById("text").innerHTML = "Parol ya da ad sehv yazilib";
        
        break;
}