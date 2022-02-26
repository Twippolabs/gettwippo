const $2 = document.querySelector.bind(document);
const $$2 = document.querySelectorAll.bind(document);

const tabs2 = $$2(".tab-item2");
const panes2 = $$2(".tab-pane2");

tabs2.forEach((tabs2, index) => {
    const pane2 = panes2[index];
    tabs2.onclick = function() {
        $2(".tab-item2.active").classList.remove("active");
        $2(".tab-pane2.active").classList.remove("active");
        this.classList.add("active");
        pane2.classList.add("active");
    };
});