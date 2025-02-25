const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const form = document.querySelector('#form');
const errorText = document.querySelector('#error-text'); 

form.addEventListener('submit', async e => {
    e.preventDefault();
    try {
        const user = {
            email: emailInput.value,
            password: passwordInput.value
        }
        // el axios es un puente el fron  con el back y estamos enviando con el metodo http la informacion del usuario que es el email y contraseña ,await porque es asincrono 
        await axios.post('/api/login', user) 
        // redirigir al usuario a la pagina de todos  en caso de ser correcto
        window.location.pathname = `/todos/`
    } catch (error) {
    console.log(error) 
    errorText.innerHTML = error.response.data.error;
    }
})