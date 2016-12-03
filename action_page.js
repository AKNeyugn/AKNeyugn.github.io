/**
 * Created by anhkh_000 on 03-Dec-16.
 */
var UsernameDir ={};

function UsernameCheck() {
    var x= document.getElementById("Sign-Up").elements[0].value;
    var i;
    for(var i = 0 ; i < UsernameDir.length ; i++){
        var item = UsernameDir.item(i);
        if (x == item){
            return "Username already taken"
        }
        else {
            UsernameDir.push(x);
        }
    }
}