// coding implementation
// var email = document.getElementById(email);
// var com = document.getElementById(com);
// var rate = document.getElementById(rate);
function checkEmail(email) {
    var x = /[a-zA-Z0-9_]+@[a-zA-Z0-9_]+(.[a-zA-Z]{2,})+$/;
    return x.test(email);
}
function checkRate(rate) {
    var x = /([0-9])+$/;
    return x.test(rate);
}
function checkComment(com) {
    if(com.length == 0) {
        return false;
    } else return true;
}

function check(email, com, rate) {
    if (!checkEmail(email)) {
        alert('Email không hợp lệ!');
    } else if (!checkComment(com)) {
        alert('Comment không được bỏ trống!');
    } else if (!checkRate(rate)) {
        alert('Rate phải là số!');
    } else {
        alert('OK bro!');
    }
}
function display() {
    var email = document.myform.email.value;
    var com = document.myform.com.value;
    var rate = document.myform.rate.value;
    check(email, com, rate);
}
// end coding implementation