const form = document.querySelector("#formPlan");
const button = document.querySelector("#btnCreatePlan");
const modalPlan= document.querySelector('#exampleModal');
const modal = new bootstrap.Modal(modalPlan);


function validar() {
    let desabilitar = false;

    if (form.recipient.value == "") {
        desabilitar = true;
    }

    if (desabilitar == true) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    modal.hide();
}

form.addEventListener("keyup", validar);
form.addEventListener("submit", onFormSubmit, false);