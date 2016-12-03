/**
 * Created by anhkh_000 on 03-Dec-16.
 */
(function() {

    /*
// Initialize Firebase
    var config = {
        apiKey: "AIzaSyChbZiYz7onNOz55ZWA4S3XdUhKOUQW1W4",
        authDomain: "textme-a2a10.firebaseapp.com",
        databaseURL: "https://textme-a2a10.firebaseio.com",
        storageBucket: "textme-a2a10.appspot.com",
        messagingSenderId: "220797746951"
    };
    firebase.initializeApp(config);
    */

    // Get elements
    const pre0Object = document.getElementById('object');
    const ulList =  document.getElementById('list');

    // Create references
    const dbRefObject = firebase.database().ref().child('object');
    //const dbRefList = dbRefObject.child('user2');

    // Sync object changes
    dbRefObject.on('value', function(){
        pre0Object.innerText = JSON.stringify(snap.val(), null, 3);
    });

    // Sync list changes
    //dbRefList.on('child_added', function() {
    //    console.log(snap.val())
    //});


}()());