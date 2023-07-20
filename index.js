function addAlert() {
    alert("I've been clicked!");
}
function addingEventListener() {
    const input = document.getElementById("button");
    input.addEventListener("click", addAlert);
}

addingEventListener();