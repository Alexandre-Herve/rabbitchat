$(document).ready(initialize);

function initialize() {
  var chatInput= $('#chatInput');
  var chat = $('#chat');
  var button = $('#validate');
  var socket = io.connect('http://localhost:3000');

  button.click(function() {
    var val = chatInput.val();
    socket.emit('newMessage', { message: val });
  });

  socket.on('newMessage', function(data) {
    var text = chat.text();
    var separator = text ? '\n' : '';
    chat.text(chat.text() + separator + data.message);
  })
}
