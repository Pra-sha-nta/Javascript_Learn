let textarea = document.querySelector("textarea");
let p = document.querySelector("p");
textarea.addEventListener("input", () => {
    const length = textarea.value.length;


    if (length > 100) {
        p.style.color = "red";
        p.innerText = "Max limit reached";
        textarea.value = textarea.value.slice(0, 100);
    }
    else {
        p.style.color = "black";
        p.innerText = length + "/100";
    }
});