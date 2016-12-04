/**
 * Created by anhkh_000 on 03-Dec-16.
 */
function writeUserData(){

    //Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');

    firebase.database().ref().set({
        username: txtEmail,
        password: txtPassword
    });

};