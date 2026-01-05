let btnTabs = document.getElementsByClassName("btn-tab");
let btnSubmit = document.getElementById("btn-form1");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let activeTab = document.querySelector(".btn-tab.active");
let btnReg = document.querySelector(".btn-register");

const urlParams = new URLSearchParams(window.location.search);
const registered = urlParams.get('registered');
const logged = urlParams.get('logged');
let form = document.querySelector(".reg-form");


Array.from(btnTabs).forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let activeTab = document.querySelector(".btn-tab.active");
        activeTab.classList.remove("active");
        btn.classList.toggle("active");
        if (index === 1) {
            btnSubmit.textContent = "Login"
            form.action = '../php/log.php';

        } else {
            btnSubmit.textContent = "Create an Account";
            form.action = '../php/reg.php'
        }
    })
})
// ---------------------------------------------------------------------------------------------------------




if (registered === '1') {
    // Меняем action формы
    form.action = 'log.php';
    Array.from(btnTabs).forEach((btn, index) => {
        activeTab.classList.remove("active");
        btn.classList.toggle("active");
        if (index === 1) {
            btnSubmit.textContent = "Login"
            form.action = '../php/log.php';
        }
    })
    alert('Successfully registered!.');
}


if (logged === '1') {
    console.log('logged')
    let userLogged = true;
    if (userLogged) {
        console.log(form);
        btnReg.style.display = 'none';
    }
}