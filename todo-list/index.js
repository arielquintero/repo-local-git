const $div = document.createElement("div");
$div.className = "container";
const $sectionOne = document.createElement("section");
// document.body.insertAdjacentElement("afterbegin", $sectionOne);
document.body.insertAdjacentElement("beforebegin", $div);
$div.insertAdjacentElement("afterbegin", $sectionOne);

$sectionOne.insertAdjacentHTML("afterbegin", `<h1 class="title">Todo List</h1>`);
$sectionOne.insertAdjacentHTML(
    "beforeend",
    `<input type="text" id="input"><button id="btn-add">+</button></input>
    <ul id="ul"></ul>`
);
// $sectionOne.insertAdjacentHTML("beforeend", `<ul id="ul"></ul>`);
$sectionOne.insertAdjacentHTML(
    "afterend",
    `<section class="section-two"><p class="empty" >no has tasks</p></section>`
);

let $ul = document.getElementById("ul");
let $input = document.getElementById("input");
let $btnAdd = document.getElementById("btn-add");

$sectionOne.className = "section-one";
$input.className = "input-add";

$btnAdd.addEventListener("click", addValue);

function showHiden(set = false) {
    if (set) {
        document.querySelector(".empty").style = "visibility: visible";
    } else {
        document.querySelector(".empty").style = "visibility: hidden";
    }
}

function addValue() {
    if ($input.value !== "") {
        let $li = document.createElement("li");
        $li.textContent = $input.value;
        $li.append(removeValue());
        $ul.insertAdjacentElement("beforeend", $li);
        Toastify({
            text: "Agregaste la tarea correctamente!!!",
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            duration: 1500,
            style: {
                background: "linear-gradient(to right, rgba(131, 58, 180, 1), #96c93d)",
            },
        }).showToast();
        $input.value = "";
        showHiden(false);
    }
}

function removeValue() {
    let $button = document.createElement("button");
    $button.textContent = "-";
    $button.id = "btn-remove";
    $button.className = "btn-remove";
    $button.addEventListener("click", () => {
        $button.parentElement.remove($button);
        Toastify({
            text: "Eliminaste una tarea",
            duration: 3000,
            newWindow: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            style: {
                background: "linear-gradient(to right, rgba(131, 58, 180, 1), rgba(253, 29, 29, 1))",
            },
        }).showToast();
        let $list = document.querySelectorAll("li");
        $list.length === 0 ? showHiden(true) : showHiden();
    });
    return $button;
}
