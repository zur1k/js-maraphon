const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
let time = 20
const board = document.querySelector('#board')
let score = 0
const colors = ['#bf9334', '#bf4e34', '#4e34bf', '#9334bf', '#34bf4e', '#60bf34', '#a5bf34', '#34a5bf']


startBtn.addEventListener('click', (event) => {
	event.preventDefault()
	screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
	if (event.target.classList.contains('time-btn')) {
		time = parseInt(event.target.getAttribute('data-time'))
		screens[1].classList.add('up')
		startGame()
	}
})
board.addEventListener('click', event => {
	if (event.target.classList.contains('circle')) {
		score++
		event.target.remove()
		createRandomCircle()

	}
})
// debug


function startGame() {
	setInterval(decreaseTime, 1000)
	createRandomCircle()
	setTimeout(time)
}

function decreaseTime() {
	if (time === 0) {
		finishGame()
	}
	else {
		let current = --time
		if (current < 10) {
			current = `0${current}`
		}
		setTime(current)
	}

}

function setTime(value) {
	timeEl.innerHTML = `00:${value}`
}
function finishGame() {
	timeEl.parentNode.classList.add('hide')
	board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
	const circle = document.createElement('div')
	const size = getRandomNumber(10, 60)
	const { width, height } = board.getBoundingClientRect()
	const x = getRandomNumber(0, width - size)
	const y = getRandomNumber(0, height - size)



	circle.classList.add('circle')
	circle.style.width = `${size}px`
	circle.style.height = `${size}px`
	circle.style.top = `${y}px`
	circle.style.left = `${x}px`
	circle.style.backgroundColor = `${setColor(circle)}`
	board.append(circle)
}

function getRandomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = ` 0 0 2px ${color}`
}

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = ` 0 0 2px #1d1d1d`

}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}