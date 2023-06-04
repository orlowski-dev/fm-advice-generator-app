$(document).ready(()=> {
    $('#roll-button').on('click', ()=> {
        $.getJSON('https://api.adviceslip.com/advice').done(function (json) {
            $('#slip-id').text(json.slip.id);
            $('#advice-content').html(`&ldquo;${json.slip.advice}&rdquo;`);
        }).fail(function (e) {
            console.log('Data getting error!');
            console.log(e)
        })
    })
});