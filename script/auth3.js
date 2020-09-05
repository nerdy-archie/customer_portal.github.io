const signinForm = document.querySelector('#signinForm');
signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const signinemail = signinForm['email'].value;
    const signinpassword = signinForm['password'].value;
    // console.log(signinemail, signinpassword);
    // auth.createUserWithEmailAndPassword(email, password).then(cred => {
    //     console.log(cred);
    //     window.location.replace("./signedupuser.html");
    // })
    auth.signInWithEmailAndPassword(signinemail, signinpassword).then(cred => {

        console.log(cred);
        window.location.replace("./signedupuser.html");
    })



})

auth.onAuthStateChanged(user => {
    if (user) {
        console.log('loged in');
        window.location.replace("./signedupuser.html");
    } else {
        console.log('No user signed in');
    }
})