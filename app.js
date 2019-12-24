let search = document.getElementById('search');
search.addEventListener('keypress', (e)=>{
    // console.log(e.target.value);
    let searchUsers = e.target.value;
    username(searchUsers);
});

let Client_ID = 'Iv1.28ed2da86e0d394d';
let Client_secret = '81cc7e4aefaa59da43a9baef63a37c7bb4407393';

function username(searchUsers){
    window
    .fetch(`https://api.github.com/users/${searchUsers}?client_id=${Client_ID}&client_secret=${Client_secret}`)
    .then(data => {
        data.json()
        .then(user => {
            console.log(user);
         })
         .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};