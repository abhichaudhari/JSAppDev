let required = ['name', 'email', 'phone']

$(document).ready(function () {
    $("input#submit").on('click', validateForm)
})
function validateForm(event) {
    event.preventDefault()
    let message = $("p#message")
    let invalid = false
    required.forEach(function (id) {
        let input = $(`input#${id}`)
        let label = input.prev("label")
        if (input.val() == "") {
            label.addClass("warning")
            invalid = true
        } else {
            label.removeClass("warning")
        }
    })
    if (invalid) {
        message.html("Please Fill Out Required Fields")
    } else {
        $("#pre-form h2").html("Thanks for your feedback!")
    }
}