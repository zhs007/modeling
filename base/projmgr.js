/**
 * Created by zhs007 on 15/10/13.
 */

// 使用了ES6特性

var fs = require('fs');
var ProjInfo = require('./projinfo').ProjInfo;

// 项目管理器
class ProjMgr {

    //--------------------------------------------
    // 属性

    // lstProj  -   项目队列


    //--------------------------------------------
    // 接口

    // 构造函数
    constructor() {
        this.lstProj = [];
    }

    // 查找项目
    findProj(projname) {
        for (let i = 0; i < this.lstProj.length; ++i) {
            if (this.lstProj[i].projname == projname) {
                return this.lstProj[i];
            }
        }

        return undefined;
    }

    // 增加项目
    addProj(proj) {
        if (findProj(proj.projname) != undefined) {
            return false;
        }

        this.lstProj.push(proj);

        return true;
    }

    // 新建项目
    newProj(projname, cname) {
        let proj = new ProjInfo(projname, cname);

        if (this.addProj(proj)) {
            return proj;
        }

        return undefined;
    }

    // 读取文件
    load(file) {
        if (fs.existsSync(file)) {
            let info = fs.readFileSync(file, 'utf8');
            this.lstProj = JSON.parse(info);
        }
    }

    // 保存文件
    save(file) {
        let info = JSON.stringify(this.lstProj);
        fs.writeFileSync(file, info, 'utf8');
    }
}

var mgrProj = new ProjMgr();

mgrProj.load('projlist.json');

exports.mgrProj = mgrProj;