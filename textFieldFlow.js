var clear,
	left = document.getElementById("first"),
	right = document.getElementById("second")
document.getElementById("rightFlow").addEventListener('click', shiftRight)
document.getElementById("pause").addEventListener('click', function () {
	clearInterval(clear)
})
document.getElementById("leftFlow").addEventListener('click', shiftLeft)

function shiftRight() {
	clearInterval(clear)
	clear = setInterval(function () {
		right.value += left.value.substring(0, 1);
		left.value = left.value.substring(1, left.length);
	}, 1000)
}

function shiftLeft() {
	clearInterval(clear)
	clear = setInterval(function () {
		left.value = right.value.substring(right.value.length - 1) + left.value
		right.value = right.value.substring(0, right.value.length - 1)
	}, 1000)
}