let timeout;

let password = document.getElementById('password')
let strengthBadge = document.getElementById('password-strength')
let strengthBadgeLabel = document.getElementById('password-strength-label')


let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

function StrengthChecker(PasswordParameter){
    if(strongPassword.test(PasswordParameter)) {
        strengthBadge.className = "strong-pass";
        strengthBadgeLabel.innerText = "Fuerte";
    } else if(mediumPassword.test(PasswordParameter)){
        strengthBadge.className = "medium-pass";
        strengthBadgeLabel.innerText = "Media";
    } else{
        strengthBadge.className = "weak-pass";
        strengthBadgeLabel.innerText = "Débil";
    }
}
password.addEventListener("input", () => {
    strengthBadge.style.display= 'block'

    clearTimeout(timeout);
    timeout = setTimeout(() => StrengthChecker(password.value), 500);

    if(password.value.length !== 0){
        strengthBadge.style.display != 'block'
        strengthBadgeLabel.style.display = 'block'
    } else{
        strengthBadge.style.display = 'none'
        strengthBadgeLabel.style.display = 'none'

    }
});