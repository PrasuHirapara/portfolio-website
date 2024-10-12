// gyroscope.js
export default function initializeGyroscope(tiltRefs) {
    const handleOrientation = (event) => {
        const beta = event.beta;
        const gamma = event.gamma;

        // Apply rotation based on gyroscope data
        tiltRefs.current.forEach((card) => {
            if (card) {
                card.style.transform = `rotateY(${gamma}deg) rotateX(${-beta}deg)`;
            }
        });
    };

    // Check if Device Orientation is supported
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', handleOrientation);
    } else {
        console.warn('Device Orientation not supported');
    }

    // Cleanup function
    return () => {
        window.removeEventListener('deviceorientation', handleOrientation);
    };
};
