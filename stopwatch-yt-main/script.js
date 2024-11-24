const watch = document.querySelector("#watch")
let milliSeconds = 0
let timer

// Start the watch
function startWatch() {
    watch.classList.remove("paused")
    clearInterval(timer)
    timer = setInterval(() => {
        milliSeconds += 10
        let dateTimer = new Date(milliSeconds)
        watch.innerHTML =
            ('0' + dateTimer.getUTCHours()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCSeconds()).slice(-2) + ":" +
            ('0' + dateTimer.getUTCMilliseconds()).slice(-3, -1)
    }, 10)
}

// Pause the watch
// This is the best of the best
function pauseWatch() {
    watch.classList.add("paused")
    clearInterval(timer)
}

// Reset the watch
function resetWatch() {
    watch.classList.remove("paused")
    clearInterval(timer)
    milliSeconds = 0
    watch.innerHTML = `00:00:00:00`
}


// Event Listeners
document.addEventListener("click", (e) => {
    const el = e.target
    if(el.id === 'start') startWatch()
    if(el.id === 'pause') pauseWatch()
    if(el.id === 'reset') resetWatch()
})
