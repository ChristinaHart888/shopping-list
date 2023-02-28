document.getElementById("loginForm").addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.replace('/home')
})

document.getElementById("registerLink").addEventListener('click', (e) => {
    e.preventDefault();
    window.location.replace('/register')
})