(function () {
    document.getElementById("sumar").addEventListener("click", () => {
        document.getElementById("contador").textContent = (parseInt(document.getElementById("contador").textContent) + 1);
    })
})()