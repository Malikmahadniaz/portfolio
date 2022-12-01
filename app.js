var tablinks = document.getElementsByClassName("tabl");
var tabcontents = document.getElementsByClassName("tabc");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("activetab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("activetab")
}

const scriptURL =
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'post', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(Error => {
        msg.innerHTML = "Message not sent"
        msg.style.color = red
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
    })
})