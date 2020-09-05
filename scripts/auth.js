const signupForm = document.querySelector('#signupForm');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    auth.createUserWithEmailAndPassword(email, password).then(cred => {

        console.log(cred);
        window.location.replace("./signedupuser.html");
    })

})
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('loged in');
        window.location.replace("./signedupuser.html");
    } else {

    }
})