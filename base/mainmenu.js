/**
 * Created by zhs007 on 15/8/4.
 */

var lstMainMenu = [
    {cname: '长消息测试', name: 'longmsg', script: 'longmsg.js'},
    {cname: '错误消息体', name: 'errmsg', script: 'longmsg.js'},
    {cname: '错误消息头', name: 'errmsghead', script: 'longmsg.js'},
    {cname: '消息长度错误（负数或0）', name: 'errbuflen', script: 'longmsg.js'},
    {cname: '空连接', name: 'nullsocket', script: 'nullsocket.js'},
];

function getScript(name) {
    for (var i = 0; i < lstMainMenu.length; ++i) {
        if (name == lstMainMenu[i].name) {
            return lstMainMenu[i].script;
        }
    }

    return undefined;
}

exports.lstMainMenu = lstMainMenu;

exports.getScript = getScript;