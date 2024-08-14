let class1 = document.getElementsByClassName('navbar-burger')[0];
let class2 = document.getElementsByClassName('navbar-menu')[0];
let openTab = false;

const onClicking = () => {
    if (openTab === false) {
        class1.classList.add("is-active");
        class2.classList.add("is-active");
        openTab = !openTab;
    } else {
        class1.classList.remove("is-active");
        class2.classList.remove("is-active");
        openTab = !openTab;
    }
};