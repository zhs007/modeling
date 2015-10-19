/**
 * Created by zhs007 on 15/10/13.
 */

// 使用了ES6特性

// 项目信息
class ProjInfo {

    //--------------------------------------------
    // 属性

    // projname     -   项目名
    // projcname    -   中文名


    //--------------------------------------------
    // 接口

    // 构造函数
    constructor(name, cname) {
        this.projname = name;
        this.projcname = cname;
    }
}

exports.ProjInfo = ProjInfo;