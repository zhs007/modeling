/**
 * Created by zhs007 on 15/7/3.
 */

var lstChart = {};

function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
}

function onRet(str) {
    var obj = JSON.parse(str);
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

function chg2test(curtest) {
    $.post('/test/view_start', {curtest: curtest}, function (data, status) {
        onRet(data);
    });
}

function starttest(curtest) {
    lstChart = {};

    var param = {
        curtest: curtest,
        addr: $('#inputServAddr').val(),
        port: $('#inputServPort').val(),
        clientnums: $('#inputClientNums').val(),
        plugins: $("#inputPlugins").find("option:selected").attr("typename"),
        proto: $("#inputProto").find("option:selected").attr("typename")
    };

    $.post('/test/ctrl_start', param, function (data, status) {
        onRet(data);
    });
}
