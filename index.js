
/* definimos todos los datos que vamos a recoger del formulario */ 
const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const mensajefinal = document.getElementById('mensajefinal');



form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

/* configuramos el error que queremos que aparezca al introducir algo mal */
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.add('iconoError');
    inputControl.classList.remove('success');
    

 
    
}
/* configuramos la confirmación que queremos que aparezca al introducir algo bien */

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.add('iconoExito');
    inputControl.classList.remove('error');
    
    
};

/* comprobamos el formato del mail */
const isValidEmail = email => {
    const re = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return re.test(String(email).toLowerCase());
}

/* comprobamos que el nombre solo sean letras */
const isValidNombre = nombre => {
    const re2 = /^[a-zA-Z]*$/;
    return re2.test(String(nombre).toLowerCase());
}


const validateInputs = () => {
    const nombreValue = nombre.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    

/* Configurammos los avisos si dejamos el campo en blanco o si no se cumple el formato */
    if(nombreValue === '') {
        setError(nombre, 'Rellene este campo');
    } else if (!isValidNombre(nombreValue)) {
            setError(nombre, 'El nombre solo puede contener letras, no admite números');
    } else {
        setSuccess(nombre);
    }

    if(emailValue === '') {
        setError(email, 'Rellene este campo');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email inválido');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Rellene este campo');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'La clave debe tener mínimo 8 caracteres')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Rellene este campo');
    } else if (password2Value !== passwordValue) { /*comprobamos que las contraseñas coinciden */
        setError(password2, "Las contraseñas no coinciden");
    } else {
        setSuccess(password2);
      
    }



    

    



}

