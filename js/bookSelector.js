function waveAnimation() {
    const buttons = document.querySelectorAll('.bookButton');
    const spines = document.querySelectorAll('.spine');

    document.querySelectorAll('.spine').forEach((spine, index) => {
    spine.style.setProperty('--i', index + 1);
    });

    buttons.forEach(button => {
        button.addEventListener('mouseover', (event) => {
            const wrapper = event.target.closest('.buttonWrapper');
            const prev1Wrapper = wrapper.previousElementSibling;
            const prev2Wrapper = prev1Wrapper?.previousElementSibling;
            const next1Wrapper = wrapper.nextElementSibling;
            const next2Wrapper = next1Wrapper?.nextElementSibling;

            event.target.classList.add('hovered');
            prev1Wrapper?.querySelector('.bookButton')?.classList.add('prev1');
            prev2Wrapper?.querySelector('.bookButton')?.classList.add('prev2');
            next1Wrapper?.querySelector('.bookButton')?.classList.add('next1');
            next2Wrapper?.querySelector('.bookButton')?.classList.add('next2');
        });

        button.addEventListener('mouseout', () => {
            const parent = document.querySelector('#bookButtonContainer');
            const allButtons = parent.querySelectorAll('.bookButton');
            allButtons.forEach(btn => btn.classList.remove('next1', 'next2', 'prev1', 'prev2', 'hovered'));
        });
    });

    const arrowWrapper = document.querySelector('#arrowWrapper');

    arrowWrapper.addEventListener('mouseover', () => {
        arrowWrapper.classList.add('hovered');
    });

    arrowWrapper.addEventListener('mouseout', () => {
        arrowWrapper.classList.remove('hovered');
    });

    if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
        function updateActiveButton() {
            let currentSpineIndex = 0;

            spines.forEach((spine, index) => {
                const rect = spine.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2) {
                    currentSpineIndex = index;
                }
            });

            const buttonsPerSpine = Math.floor(buttons.length / spines.length);
            const activeIndex = Math.min(
                currentSpineIndex * buttonsPerSpine,
                buttons.length - 1
            );

            buttons.forEach(btn => btn.classList.remove('active'));
            buttons[activeIndex].classList.add('active');
        }

        window.addEventListener('scroll', updateActiveButton);
        updateActiveButton();
    }
}

document.addEventListener('DOMContentLoaded', waveAnimation);