if (window.innerWidth > 1200) {
    const cursor = curDot()
        // cursor.over('.neo', {
        //     borderColor: 'rgba(255,255,255,.38)',
        //     broderWidth: 1
        // })

    cursor.over(".bigtext", {
        scale: 2,
        background: "#FFF7C6",
        broderWidth: 0,
    });

    // cursor.over(".readtext", {
    //     scale: 0.5,
    //     background: "#fff",
    //     broderWidth: 0
    // });

    cursor.over(".menuu", {
        scale: 2,
        background: "#FFF7C6",
        broderWidth: 0
    });
    // cursor.over(".detail", {
    //     scale: 1,
    //     background: "#fff",
    //     broderWidth: 0
    // })


    // cursor.over(".cdetailtxt", {
    //     scale: 1,
    //     background: "#fff",
    //     broderWidth: 0
    // })

    // cursor.over(".links", {
    //     scale: 2,
    //     background: "#FFF7C6",
    //     broderWidth: 0
    // });


    cursor.over(".link", {
        scale: 0.7,
        background: "#FFF7C6",
        broderWidth: 0
    });

    // cursor.over($('El'), {
    //     scale: .5,
    //     background: '#fff'
    // })

}



// pg transition


function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1.5,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.5,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

$(function() {
    barba.init({
        sync: true,

        transitions: [{
            async leave(data) {
                const done = this.async();

                pageTransition();
                await delay(1000);
                done();
            },

            async enter(data) {
                contentAnimation();
            },

            async once(data) {
                contentAnimation();
            },
        }, ],
    });
});


if (window.innerWidth < 1200) {
    // Get the button, and when the user clicks on it, execute myFunction
    document.getElementById("myBtn").onclick = function() { myFunction() };

    /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
    function myFunction() {
        document.getElementById("mobilenavbg").classList.toggle("show");
    }
}