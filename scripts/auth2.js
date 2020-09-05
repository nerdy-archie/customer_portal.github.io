const signout = document.querySelector('#signout');
signout.addEventListener('click', (e) => {
    console.log('loging out');
    e.preventDefault();
    auth.signOut().then(() => {

        console.log('loged out');
        window.location.replace("./index.html");
    })
})

auth.onAuthStateChanged(user => {
    if (user) {

    } else {
        console.log('not loged in');
        window.location.replace("./index.html");
    }
})