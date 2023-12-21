let exampleForm = document.forms.example_form
let errorIcon = document.querySelectorAll('.icon')
let requiredInps = document.querySelectorAll('.required')
let SUCCESS = document.querySelector('#Success')
let ERROR = document.querySelector('#Error')
 


let patterns = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    phone: /^998[012345789][0-9]{8}$/,
    mum: /^[a-z ,.'-]+$/i,
    pap: /^[a-z ,.'-]+$/i,
    age: /^\S[0-9]{0,3}$/,
    js: /^[a-z ,.'-]+$/i,
    html: /^[a-z ,.'-]+$/i,
    css: /^[a-z ,.'-]+$/i,
    car: /^[a-z ,.'-]+$/,
}

exampleForm.onsubmit = (event) => {
    event.preventDefault() //предотвращает отправку формы браузером и обновление страницы + без него мой код не работает
    let isError = false

    let ErCount = 0


    requiredInps.forEach((inp) => {
        inp.classList.remove('error')
        inp.nextElementSibling.nextElementSibling.classList.remove('error-icon-active')
        inp.nextElementSibling.innerHTML = 'Need to fill';
        inp.nextElementSibling.style.color = 'grey'
        inp.previousElementSibling.style.color = 'blue'
        if (inp.value.length === 0) {
            inp.parentElement.classList.add('invalid')
            isError = true
            inp.nextElementSibling.nextElementSibling.classList.add('invalid')
            inp.nextElementSibling.innerHTML = 'Need to fill of ' + inp.name 
             ErCount++
        } else {
            inp.nextElementSibling.nextElementSibling.classList.remove('invalid')
        }


    })


    SUCCESS.innerHTML = `Success: ${requiredInps.length - ErCount} / ${requiredInps.length}`
    ERROR.innerHTML = `Error: ${ErCount} / ${requiredInps.length}`

    if (isError == false) {
        onsubmit()
    } else {
        alert('Ответье на ВСЕ вопросы!')
    }
}



// function validate(regex, field) {
//     if (regex.test(field.value)) {
//         field.parentElement.classList.remove('invalid')
//     } else {
//         field.parentElement.classList.add('invalid')
//     }
// }


// function onSubmit() {
//     let user = {}
//     let fm = new FormData(exampleForm)

//     fm.forEach((value, key) => {
//         user[key] = value
//     })

//     console.log(user);
// }

// exampleForm.onsubmit = (event) => {
//     event.preventDefault()
//     let isError = false




//     requiredInps.forEach((inp) => {
//         inp.classList.remove('error')
//         inp.nextElementSibling.nextElementSibling.classList.remove('error-icon-active')
//         inp.nextElementSibling.innerHTML = 'Need to fill';
//         inp.nextElementSibling.style.color = 'grey'
//         inp.previousElementSibling.style.color = 'blue'
//         if (inp.value.length === 0) {
//             inp.parentElement.classList.add('invalid')
//             isError = true
//             inp.nextElementSibling.nextElementSibling.classList.add('invalid')
//             inp.nextElementSibling.innerHTML = 'Need to fill of ' + inp.name 
             
//         } else {
//             inp.nextElementSibling.nextElementSibling.classList.remove('invalid')
//         }


//     })


//     if (isError === true) {

//     } else {
//         onSubmit()
//     }
// }

