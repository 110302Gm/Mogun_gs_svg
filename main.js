console.log("JS file connected");

const badge = document.querySelector("#badge");
// console.log(badge);

function logId() {
    console.log(this.id);
}


badge.addEventListener("click", logId);