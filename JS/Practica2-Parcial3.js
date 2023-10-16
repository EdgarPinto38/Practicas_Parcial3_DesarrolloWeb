document.addEventListener("click", (e) => {
    if (e.target.matches("button[id = lighttheme]")) {
        document.body.classList.remove("dark-mode");
        document.body.classList.remove("sandia-mode");   
        alert(`Has cambiado al Tema ${e.target.dataset.name}`);
    }
    if (e.target.matches("button[id = darktheme]")) {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        document.body.classList.remove("sandia-mode");
        alert(`Has cambiado al Tema ${e.target.dataset.name}`);
    }
    if (e.target.matches("button[id = sandiatheme]")) {
        document.body.classList.add("sandia-mode");
        document.body.classList.remove("dark-mode");
        document.body.classList.remove("light-mode");
        alert(`Has cambiado al Tema ${e.target.dataset.name}`);
    }
})

document.addEventListener("dblclick", (e) =>
{
    if(e.target.matches("img[id = EdgarImg]"))
    {
        e.target.style.width = "auto"
    }
})