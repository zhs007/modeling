/**
 * Created by zhs007 on 15/10/19.
 */

class CtrlMgr {

    constructor() {
        this.mapCtrl = {};
    }

    addCtrl(ctrl) {
        if (this.mapCtrl.hasOwnProperty(ctrl.ctrlname)) {
            return false;
        }

        this.mapCtrl[ctrl.ctrlname] = ctrl;

        return true;
    }
}

var mgrCtrl = new CtrlMgr();

exports.mgrCtrl = mgrCtrl;