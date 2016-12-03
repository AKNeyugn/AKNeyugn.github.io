/**
 * Created by anhkh_000 on 03-Dec-16.
 */
(function() {

// Initialize Firebase
    const config = {
        apiKey: "AIzaSyChbZiYz7onNOz55ZWA4S3XdUhKOUQW1W4",
        authDomain: "textme-a2a10.firebaseapp.com",
        databaseURL: "https://textme-a2a10.firebaseio.com",
        storageBucket: "textme-a2a10.appspot.com"
        //messagingSenderId: "220797746951"
    };
    firebase.initializeApp(config);

    //Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    //Add login event
    btnLogin.addEventListener('click', function() {
        // Get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(function(e) {console.log(e.message)});

    });

    // Add sign up event
    btnSignUp.addEventListener('click', function() {
        // Get email and pass
        const email = txtEmail.value;
        // TODO: Check if real email.
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Sign up
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(function(e) {console.log(e.message)});
    });

    // Add a realtime listener
    /* TODO
    firebase.auth.onAuthStateChanged(function () {

    });
    */
}());
