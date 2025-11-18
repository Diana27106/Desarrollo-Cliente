const main = () => {
    document.body.onclick = function (event) {
        event.target.style.backgroundColor = 'yellow';

        setTimeout(() => {
            alert("target = " + event.target.tagName + ", this=" + this.tagName);
            event.target.style.backgroundColor = ''
        }, 0);
    }
}
document.addEventListener("DOMContentLoaded", main())