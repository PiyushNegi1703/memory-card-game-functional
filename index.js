const loginButton = document.getElementById('login')
const bgm = new Audio('./assets/bgm.mp3')
bgm.play()
bgm.loop = true
bgm.volume = 0.4

loginButton.onclick = () => {
    location.href = './login.html'
    localStorage.clear()
}

// Scrolling Effect....
gsap.to("#img",{
    scrollTrigger : {
        scrub:0.5,
    },
    x : 1500,
    y : 500,
})

gsap.from("#wolf",{
    scrollTrigger : {
        scrub:0.5,
    },
    x : 400,
})

gsap.from("#castle",{
    scrollTrigger : {
        scrub:0.5,
    },
    x : -100,
})

gsap.to("#bats",{
    scrollTrigger : {
        scrub:0.5,
    },
    scale : 1.5,
})

gsap.to("#haloween",{
    scrollTrigger : {
        scrub:0.5,
    },
    y : -200,
})