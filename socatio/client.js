


// var socket = io('http://localhost:3000');
// var messages = document.getElementById('messages');
// var form = document.getElementById('form');
// var input = document.getElementById('input');
// var insert = document.getElementById('insert');

// insert.addEventListener('click', function (e) {
//     e.preventDefault();
//     if (input.value) {

//         socket.emit('chat message', input.value);
//         input.value = '';
//     }
// });


// socket.on('deletemsg', data => {
//     deletemsg(msg)
//     window.scrollTo(0, document.body.scrollHeight);
// })
// socket.on('message', data => {
//     console.log(data)
//     appendMessages(data)
// })

// socket.on('output-messages', data => {
//     console.log(data)
//     if (data.length) {
//         data.forEach(message => {
//             appendMessages(message.message)
//         });
//     }
// })
// function deletemsg(data) {
//     var myquery = { '_id': 'del' }
//     mess.deleteOne(myquery, function (err, obj) {
//         if (err) throw err;
//         console.log(" document deleted");

//     });
// }
// socket.on('chat message', function (msg) {
//     appendMessages(msg)
//     window.scrollTo(0, document.body.scrollHeight);
// });
// function appendMessages(data) {
//     const html = `<li>${data}</li>`
//     messages.innerHTML += html

// }

