/**
 * Created by anhkh_000 on 03-Dec-16.
 */
(function() {

    var accountSid = 'ACa2eec9bfe6e8ded4d8408d4358ecdd41';
    var authToken = '5a2293da8dde8768dc249527a9a9d62a';

//require the Twilio module and create a REST client
    var client = require('twilio')(accountSid, authToken);

    client.messages.create({
        to: "+17788363544",
        from: "+7782000457",
        body: "This is the ship that made the Kessel Run in fourteen parsecs?",
        mediaUrl: "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg",
    }, function(err, message) {
        console.log(message.sid);
    });


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
        try {
            auth.signInWithEmailAndPassword(email, pass);
            window.location.href = "logged_in.html";
        } catch(e) {
            console.log(e.message);
        }
    });

    // Add sign up event
    btnSignUp.addEventListener('click', function() {
        // Get email and pass
        const email = txtEmail.value;
        // TODO: Check if real email.
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Sign up
        try {
            auth.createUserWithEmailAndPassword(email, pass);
            firebase.database().ref().set({
                username: email,
                password: pass
            });
        } catch(e) {
            console.log(e.message);
        }
    });

    // Add a realtime listener
    /* TODO
    firebase.auth.onAuthStateChanged(function () {

    });
    */

    // Sends a text


}()());
