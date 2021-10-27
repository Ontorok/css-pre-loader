const radioSpin = document.getElementById('radspin')
const radioSqure = document.getElementById('radsqure')
const spin = document.getElementById('circleloader')
const squere = document.getElementById('squreloader')

radioSpin.addEventListener('change', function (e) {
    spin.classList.replace('hide', 'show')
    squere.classList.replace('show', 'hide')
})

radioSqure.addEventListener('change', function (e) {
    squere.classList.replace('hide', 'show')
    spin.classList.replace('show', 'hide')
})
