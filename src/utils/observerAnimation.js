export function observeAnimations() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }else{
                entry.target.classList.remove("visible");
            }
        });
    }, observerOptions);

    const elementsLeft = document.querySelectorAll(".hidden-left");
    elementsLeft.forEach(element => {
        observer.observe(element);
    });

    const elementsRight = document.querySelectorAll(".hidden-right");
    elementsRight.forEach(element => {
        observer.observe(element);
    });

    const elementsUp = document.querySelectorAll(".hidden-up");
    elementsUp.forEach(element => {
        observer.observe(element);
    });
}
