(function () {
    setTimeout(function () {
        document.getElementById('loader-wrapper').classList.add("fade-off");
    
        new TypeIt("#job-typeit", {
            strings: "Software Developer",
            startDelay: 750,
            speed: 80
        }).go();
    
        let birthDate = new Date(2007, 10, 20);
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
    
        document.getElementById('virsta').innerHTML = age;
        document.getElementById('page-content').style.display = 'block';

        AOS.init({
            duration: 500,
            once: true
        });

    }, 700);
})();

function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className = "nav mobile";
    } else {
        x.className = "nav";
    }
}

function linkClick() {
    mobileMenu();
}


function sendMessage(){

    params = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        message: document.getElementById('contact-message').value,
    }

    const serviceID = "service_m2il8yl";
    const templateID = "template_rcxsuof";

    if (params.message.length == 0){
        contactsError("The message field is empty");
        return;
    }

    if (params.name.length == 0){
        contactsError("The name field is empty");
        return;
    }

    if (validateEmail(document.getElementById('contact-email').value)){
        emailjs.send(serviceID,templateID,params).then((res) => {
            document.getElementById('contact-name').value = "";
            document.getElementById('contact-email').value = "";
            document.getElementById('contact-message').value = "";
            var validationMessageSelector = document.getElementById('validation-message');
            validationMessageSelector.classList.add("error");
            validationMessageSelector.style.color = "green";
            validationMessageSelector.innerHTML = "Your message has been sent successfully!!!";
            setTimeout(() => {
                validationMessageSelector.innerHTML = "";
            },5000);
        })
    }else{
        contactsError("Invalid Email");
    }
    
}


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function contactsError(errorMessage) {
    var validationMessageSelector = document.getElementById('validation-message');
    validationMessageSelector.classList.add("error");
    validationMessageSelector.style.color = "red";
    validationMessageSelector.innerHTML = errorMessage;
    setTimeout(() => {
            validationMessageSelector.innerHTML = "";
        },5000);
}
