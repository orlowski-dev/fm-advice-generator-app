$(document).ready(()=> {

    //get advice on document ready
    getAndDisplayAdvice();

    $('#roll-button').on('click', getAndDisplayAdvice);
});

function getAndDisplayAdvice() {
    $.getJSON('https://api.adviceslip.com/advice').done(function (json) {
        $('#slip-id').text(json.slip.id);
        $('#advice-content').html(`&ldquo;${json.slip.advice}&rdquo;`);
    }).fail(function (e) {
        console.log('Data getting error!');
        console.log(e)
    })
}