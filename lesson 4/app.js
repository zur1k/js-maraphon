const board = document.querySelector('#board')
const colors = ['#bf9334', '#bf4e34', '#4e34bf', '#9334bf', '#34bf4e', '#60bf34', '#a5bf34', '#34a5bf']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')
	square.addEventListener('mouseover', () => {
		setColor(square)
	})
	square.addEventListener('mouseleave', () => {
		removeColor(square)
	})

	board.append(square)

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