document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       ELEMENTS
       ========================================= */

    const backgroundMusic =
        document.getElementById('backgroundMusic');

    const startButton =
        document.getElementById('startButton');

    const envelopeContainer =
        document.getElementById('envelopeContainer');

    const unfoldButton =
        document.getElementById('unfoldButton');

    const lastSurpriseButton =
        document.getElementById('lastSurpriseButton');

    const finalGreetingElement =
        document.getElementById('finalGreeting');


    /* =========================================
       STEPS
       ========================================= */

    const steps = {
        step1: document.getElementById('step1'),
        step2: document.getElementById('step2'),
        step3: document.getElementById('step3'),
        step4: document.getElementById('step4'),
        step5: document.getElementById('step5')
    };


    /* =========================================
       CUSTOM TEXT
       ========================================= */

    const messageGreeting = "Happy Birthday,";


    /* =========================================
       STEP TRANSITION
       ========================================= */

    function transitionToStep(targetStepId) {

        const currentActive =
            document.querySelector('.step.active');

        if (currentActive) {
            currentActive.classList.remove('active');
        }

        if (steps[targetStepId]) {
            steps[targetStepId].classList.add('active');
        }
    }


    /* =========================================
       STEP 1
       ========================================= */

    startButton.addEventListener('click', () => {

        transitionToStep('step2');

        /*
         * Music is optional.
         * This prevents an error if no audio file exists.
         */

        if (backgroundMusic) {

            backgroundMusic.play().catch(error => {
                console.log(
                    "Music could not autoplay:",
                    error
                );
            });

        }

    });


    /* =========================================
       STEP 2 - ENVELOPE
       ========================================= */

    envelopeContainer.addEventListener('click', () => {

        envelopeContainer.classList.add('open');

        const instruction =
            envelopeContainer.querySelector(
                '.click-instruction'
            );

        if (instruction) {
            instruction.style.opacity = '0';
        }

        setTimeout(() => {

            transitionToStep('step3');

            setTimeout(() => {

                const letterContainer =
                    document.getElementById(
                        'letterContainer'
                    );

                if (letterContainer) {
                    letterContainer.classList.add('show');
                }

            }, 100);

        }, 700);

    });


    /* =========================================
       STEP 3 - LETTER
       ========================================= */

    unfoldButton.addEventListener('click', () => {

        transitionToStep('step4');

        startCelebrationAnimations();

    });


    /* =========================================
       STEP 4 - BIRTHDAY CELEBRATION
       ========================================= */

    function startCelebrationAnimations() {

        /* -------------------------
           Typewriter
           ------------------------- */

        let i = 0;

        finalGreetingElement.textContent = '';

        finalGreetingElement.style.borderRight =
            '3px solid white';

        const typingInterval =
            setInterval(() => {

                if (i < messageGreeting.length) {

                    finalGreetingElement.textContent +=
                        messageGreeting.charAt(i);

                    i++;

                } else {

                    clearInterval(typingInterval);

                    finalGreetingElement.classList.add(
                        'typed'
                    );

                }

            }, 100);


        /* -------------------------
           Confetti
           ------------------------- */

        createConfettiCannon(120, 0.5);

        setTimeout(() => {
            createConfettiCannon(100, 0.3);
        }, 500);

        setTimeout(() => {
            createConfettiCannon(80, 0.2);
        }, 1000);


        /* -------------------------
           Balloons
           ------------------------- */

        createBalloons(18);


        /* -------------------------
           Fireworks
           ------------------------- */

        createFireworks(7);

    }


    /* =========================================
       CONFETTI
       ========================================= */

    function createConfettiCannon(
        count,
        delayMultiplier
    ) {

        const container =
            document.querySelector(
                '.confetti-cannon-container'
            );

        if (!container) return;


        const colors = [
            '#ff3f87',
            '#ff8fc4',
            '#ffd166',
            '#c77dff',
            '#5eead4',
            '#ff9f43',
            '#ffffff'
        ];


        for (let i = 0; i < count; i++) {

            const confetti =
                document.createElement('div');

            confetti.classList.add('confetti');


            /* Random color */

            confetti.style.backgroundColor =
                colors[
                    Math.floor(
                        Math.random() * colors.length
                    )
                ];


            /* Random position */

            confetti.style.left =
                `${Math.random() * 100}vw`;

            confetti.style.top =
                `${Math.random() * 20 - 10}vh`;


            /* Random animation */

            const duration =
                Math.random() * 2 + 3;

            const delay =
                Math.random() * delayMultiplier;

            confetti.style.animationDuration =
                `${duration}s`;

            confetti.style.animationDelay =
                `${delay}s`;


            /* Random size */

            const size =
                Math.random() * 8 + 5;

            confetti.style.width =
                `${size}px`;

            confetti.style.height =
                `${size}px`;


            /* Some circular */

            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            }


            /* Random rotation */

            confetti.style.transform =
                `rotate(${Math.random() * 360}deg)`;


            container.appendChild(confetti);


            /* Remove after animation */

            confetti.addEventListener(
                'animationend',
                () => confetti.remove()
            );

        }

    }


    /* =========================================
       BALLOONS
       ========================================= */

    function createBalloons(count) {

        const container =
            document.querySelector(
                '.balloons-container'
            );

        if (!container) return;


        const colors = [
            '#ff3f87',
            '#ff8fc4',
            '#c77dff',
            '#ffd166',
            '#5eead4',
            '#ff9f43'
        ];


        for (let i = 0; i < count; i++) {

            const balloon =
                document.createElement('div');

            balloon.classList.add('balloon');


            balloon.style.left =
                `${Math.random() * 80 + 10}vw`;


            balloon.style.backgroundColor =
                colors[
                    Math.floor(
                        Math.random() * colors.length
                    )
                ];


            balloon.style.animationDuration =
                `${Math.random() * 6 + 10}s`;


            balloon.style.animationDelay =
                `${Math.random() * 5}s`;


            container.appendChild(balloon);


            balloon.addEventListener(
                'animationend',
                () => balloon.remove()
            );

        }

    }


    /* =========================================
       FIREWORKS
       ========================================= */

    function createFireworks(count) {

        const container =
            document.querySelector(
                '.fireworks-container'
            );

        if (!container) return;


        const colors = [
            '#ff3f87',
            '#ffd166',
            '#ffffff',
            '#5eead4',
            '#c77dff',
            '#ff8fc4'
        ];


        for (let i = 0; i < count; i++) {

            const firework =
                document.createElement('div');

            firework.classList.add('firework');


            firework.style.left =
                `${Math.random() * 80 + 10}vw`;


            firework.style.bottom =
                `${Math.random() * 20}vh`;


            const color =
                colors[
                    Math.floor(
                        Math.random() * colors.length
                    )
                ];


            firework.style.backgroundColor = color;

            firework.style.boxShadow =
                `0 0 8px ${color}, 0 0 15px ${color}`;


            const delay =
                Math.random() * 3;


            firework.style.animationDelay =
                `${delay}s, ${delay + 3}s`;


            container.appendChild(firework);


            firework.addEventListener(
                'animationend',
                () => firework.remove()
            );

        }

    }


    /* =========================================
       STEP 5 - LAST SURPRISE
       ========================================= */

    if (lastSurpriseButton) {

        lastSurpriseButton.addEventListener(
            'click',
            () => {

                transitionToStep('step5');

                startLastSurprise();

            }
        );

    }


    /* =========================================
       LAST SURPRISE ANIMATION
       ========================================= */

    function startLastSurprise() {

        const card =
            document.querySelector(
                '.last-surprise-card'
            );

        if (!card) return;


        card.classList.remove('show');


        setTimeout(() => {

            card.classList.add('show');

        }, 100);


        /* Extra hearts */

        createLastSurpriseHearts();

    }


    /* =========================================
       LAST SURPRISE HEARTS
       ========================================= */

    function createLastSurpriseHearts() {

        const container =
            document.querySelector(
                '.last-surprise-container'
            );

        if (!container) return;


        const hearts = [
            '♡',
            '♥',
            '♡',
            '✦',
            '♡',
            '♥',
            '✧',
            '♡'
        ];


        hearts.forEach((symbol, index) => {

            const heart =
                document.createElement('span');

            heart.classList.add(
                'last-floating-heart'
            );

            heart.textContent = symbol;


            heart.style.left =
                `${Math.random() * 90 + 5}%`;


            heart.style.animationDelay =
                `${index * 0.4}s`;


            heart.style.fontSize =
                `${Math.random() * 15 + 18}px`;


            container.appendChild(heart);


            setTimeout(() => {
                heart.remove();
            }, 9000);

        });

    }

});
