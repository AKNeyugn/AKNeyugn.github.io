/**
 * Created by anhkh_000 on 03-Dec-16.
 */
(function() {

    var https = require('https');

    var data = JSON.stringify({
        api_key: 'API_KEY',
        api_secret: 'API_SECRET',
        to: '16047608577',
        from: '441632960961',
        text: 'Hello from Nexmo'
    });

    var options = {
        host: 'rest.nexmo.com',
        path: '/sms/json',
        port: 443,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data)
        }
    };

    var req = https.request(options);

    req.write(data);
    req.end();

    var responseData = '';
    req.on('response', function(res){
        res.on('data', function(chunk){
            responseData += chunk;
        });

        res.on('end', function(){
            console.log(JSON.parse(responseData));
        });
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
