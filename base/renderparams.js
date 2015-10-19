/**
 * Created by zhs007 on 15/8/3.
 */

var config = require('../config');

// renderparam属性声明
// title    -   标题，config里面的配置
// curpage  -   当前页面名称，对应BasePage的pagename

// renderparam下面的模块属性，这里仅列出模块名，具体模块参数，见模块文件
// modProj  -   项目模块

// 每个请求产生的时候，都会生成一个新的renderparam
function getDefaultParam(req) {
    return {
        title: config.title
    };
}

// 导出接口
exports.getDefaultParam = getDefaultParam;