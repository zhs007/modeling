/**
 * Created by zhs007 on 2014/12/9.
 */

function isEMail(str) {
    var max = str.length;
    var hasAt = false;
    for (var i = 0; i < max; ++i) {
        if (str[i] == '@') {
            if (hasAt)
                return false;

            hasAt = true;
        }
        else if (hasAt && str[i] == '.' && i < max - 1) {
            return true;
        }
    }

    return false;
}

function onCheckLoginBtn(objCheck) {
    if (objCheck.uname && objCheck.pwd) {
        $("#loginbtn").removeAttr("disabled");
    }
    else {
        $("#loginbtn").attr("disabled", "true");
    }
}

$(document).ready(function () {
    $("#loginbtn").attr("disabled", "true");

    var objCheck = { uname: false, pwd: false };

    $("#uname").on("blur", function (event) {
        var uname = $("#uname").val();

        if (isEMail(uname)) {
            objCheck.uname = true;
        }
        else {
            objCheck.uname = false;
        }

        onCheckLoginBtn(objCheck);
    });

    $("#passwd").on("blur", function (event) {
        var pwd = $("#passwd").val();

        if (pwd.length < 6) {
            objCheck.pwd = false;
        }
        else {
            objCheck.pwd = true;
        }

        onCheckLoginBtn(objCheck);
    });
});