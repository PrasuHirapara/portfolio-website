export default function toggle_bgColor() {
    let root = document.documentElement;
    let bgColor = getComputedStyle(root).getPropertyValue('--bg-color').trim();
    let color = getComputedStyle(root).getPropertyValue('--color').trim();
    let navbarMenu = document.querySelector('.navbar--menu');

    if (bgColor === 'white' && color === 'black') {
        root.style.setProperty('--bg-color', 'black');
        root.style.setProperty('--color', 'white');
        root.setAttribute('data-theme', 'dark');
    } else {
        root.style.setProperty('--bg-color', 'white');
        root.style.setProperty('--color', 'black');
        root.setAttribute('data-theme', 'light');
    }
}
