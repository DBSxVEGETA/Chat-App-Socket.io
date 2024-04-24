const socket = io();

$('#chat-section').hide();

$('#form').submit((e) => {
    e.preventDefault();
})

$('#send-btn').click(() => {
    const msgText = $('#text-message').val()

    socket.emit('send-msg', {
        msg: msgText
    })

    $('#text-message').val("");
})

socket.on('received-msg', (data) => {
    $('.list-group').append(`<li class="border p-2 rounded-pill mb-2"><span class="fw-bold">${data.username}</span> - <span>${data.msg}</span></li>`)
    $('#chat-section').scrollTop($('#chat-section').outerHeight());
})

$('#login-btn').click(() => {
    const username = $('#username').val();

    socket.emit('login', {
        username: username
    })

    $('#login-section').hide();
    $('#chat-section').show();

    $('#username').val("");

})