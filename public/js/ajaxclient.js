/**
 * Created by zhs007 on 15/7/3.
 */

var lstChart = {};

function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
}

function onRet(str) {
    var obj = JSON.parse(str);

    if (obj.hasOwnProperty('newurl')) {
        window.location.href = obj.newurl;

        return ;
    }

    if (obj.hasOwnProperty('navsidebar')) {
        $('#navsidebar').html(obj.navsidebar);
    }
    if (obj.hasOwnProperty('mainworkspace')) {
        $('#mainworkspace').html(obj.mainworkspace);
    }

    if (obj.hasOwnProperty('si_clientnums')) {
        refurbishChart('clientnumsChart', obj.si_clientnums, obj.si_clientnums);
    }

    if (obj.hasOwnProperty('si_heaptotal')) {
        refurbishChart('heaptotalChart', obj.si_heaptotal, obj.si_heaptotal);
    }

    if (obj.hasOwnProperty('si_heapused')) {
        refurbishChart('heapusedChart', obj.si_heapused, obj.si_heapused);
    }

    if (obj.hasOwnProperty('si_totalclientnums')) {
        refurbishChart('totalclientnumsChart', obj.si_totalclientnums, obj.si_totalclientnums);
    }
}

function newproj() {
    var projname = $("#inputProj").val();
    var cname = $("#inputCName").val();

    $.post('/projctrl/newproj/', {projname: projname, projcname: cname}, function (data, status) {
        onRet(data);
    });
}

function chgproj(projname) {
    $.post('/projctrl/chgproj/', {projname: projname}, function (data, status) {
        onRet(data);
    });
}