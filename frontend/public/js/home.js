const modal = document.getElementById("create-family-modal");
const create_family_btn = document.getElementById("create-family-btn");
const close_btn = document.getElementById("close");

const s3 = new AWS.S3({
    accessKeyId: 'AKIAUQRGPCYN6E2K4P63',
    secretAccessKey: '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'
  });

create_family_btn.addEventListener("click", () => {
    modal.style.display = "block";
})

close_btn.addEventListener("click", () => {
    modal.style.display = "none";
})

window.addEventListener("click", (e) => {
    if(e.target == modal){
        modal.style.display = "none";
    }
})

document.getElementById("logout-btn").addEventListener("click", (e) => {
    e.preventDefault();
    window.localStorage.removeItem("uid");
    window.location.replace('/');
})

