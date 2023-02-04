const fromm = document.forms["from"]
fromm.addEventListener("submit", e => {
    e.preventDefault()
    const nama = document.forms["from"]["Nama"].value;

    alert(`Selamat ${nama} terima di lab Chevalier`);
    fromm.reset()
})