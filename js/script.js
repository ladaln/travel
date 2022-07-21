"use strict"
//slick slider
$(document).ready(function () {
	$('.slider').slick({
		centerMode: true,
		centerPadding: '320px',
		arrows: false,
		dots: true,
		initialSlide: 1,
		slidesToShow: 1,
		/*autoplay:true,
		speed:1000,
		autoplaySpeed:800,*/
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					centerMode: false,
					centerPadding: '40px',
					slidesToShow: 1,
				}
			},


			{
				breakpoint: 1024,
				settings: {
					arrows: true,
					centerMode: false,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});
});

//burger

let hamburger = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let account = document.querySelector('#account');

hamburger.addEventListener('click', function () {
	hamburger.classList.toggle('active');
	menu.classList.toggle('active');
})

/*account.addEventListener('click', function () {
	hamburger.classList.toggle('active');
	menu.classList.toggle('active');
})*/


//login иr account(POPUP)
const popupLinks = document.querySelectorAll(".popup-link");//кнопка и аккаунт для вызова попап
const popup = document.querySelector('#popupName')//весь блок
const popupcontainer = document.querySelector('.popup_container')//контейнер попапа
const password = document.querySelector("#password");//инпут пароль
const email = document.querySelector("#email")//инпут почты
const signInBtn = document.querySelector('.sign-in-button')//sign in кнопка
const register = document.querySelector('.register')// кнопка register
const elementsToHide = document.querySelectorAll('.hide')
const loginHeader = document.querySelector('.login-header-text')
const alreadyHaveAccount = document.querySelector('.no-account')
const line = document.querySelector('.line')

function popupWindow() {
	for (let i = 0; i < popupLinks.length; i++) {
		const popupLink = popupLinks[i];
		popupLink.addEventListener('click', function (e) {
			e.preventDefault();
			popup.classList.remove('none', 'change-popup');

			popup.classList.add("open");

		})
	}
}
popupWindow()

popup.addEventListener('mousedown', (e) => {
	if (e.target == popup) {
		popup.classList.toggle('none')
		password.value = '';
		email.value = '';
	}
}
)

let emailValue = '';
let passwordValue = '';

email.addEventListener("input", (event) => {
	emailValue = event.target.value;

})

password.addEventListener("input", (event) => {
	passwordValue = event.target.value; passwordValue.value = '';
})

signInBtn.addEventListener('click', (e) => {
	if (emailValue && passwordValue) {
		alert(`Your email is: ${emailValue}. Your password is: ${passwordValue} `)
		passwordValue = '';
		emailValue = '';
	}
	else if (emailValue && !passwordValue) {

		alert(`Please, enter your password!`)
		return email.value
	}
	else if (!emailValue && passwordValue) {
		alert('Please, enter your email!')
		return password.value
	}
	else {
		alert(`Please,enter your email and password!`)

	}
	password.value = '';
	email.value = '';
})

let hide = [];
register.addEventListener('click', (e) => {
	if (register.className === 'register') {
		for (let i = 0; i < elementsToHide.length; i++) {
			let hide = elementsToHide[i];
			hide.classList.add('hidden');
			register.classList.add('log')
			secondInnerTextAndClass()

		}
	}
	else if (register.className == 'register log') {
		for (let i = 0; i < elementsToHide.length; i++) {
			let hide = elementsToHide[i];
			hide.classList.remove('hidden');
			popupcontainer.classList.remove('short')
			if (popupcontainer.classList !== 'short') {
				firstInnerTextAndClass()
			}
		}
		register.classList.remove('log')
	}
})

function firstInnerTextAndClass() {
	loginHeader.innerText = 'Log in to your account';
	signInBtn.innerText = 'Sign in';
	register.innerText = "Register"
	alreadyHaveAccount.innerText = "Don't have an account?"

	line.classList.remove('newline')
}

function secondInnerTextAndClass() {
	loginHeader.innerText = 'Create account';
	signInBtn.innerText = 'Sign up';
	register.innerText = "Log in"
	alreadyHaveAccount.innerText = "Already have an account?"
	popupcontainer.classList.add('short')
	line.classList.add('newline')
}


console.log(`Слайдер изображений в секции destinations +50
Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50
логин попап соответствует верстке его закрытие происходит при клике вне попапа +25
логин попап имеет 2 инпута (логин и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными (для реализации можно использовать тег ) +25
Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25
Итого: 125 баллов`)