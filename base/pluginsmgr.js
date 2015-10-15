/**
 * Created by zhs007 on 15/8/4.
 */

var lstPlugins = [
    {cname: "测试项目", name: 'slots', file: '../plugins/slots'},
    {cname: "女神联盟2", name: 'nslm2', file: '../plugins/nslm2'}
];

function requirePlugins(pluginsname) {
    for (var i = 0; i < lstPlugins.length; ++i) {
        if (lstPlugins[i].name == pluginsname) {
            require(lstPlugins[i].file);

            return ;
        }
    }
}

exports.lstPlugins = lstPlugins;

exports.requirePlugins = requirePlugins;