
//判断PC还是手机
function IsPC(){
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
    }
    return flag;
}

if(!IsPC()){
    var baseurl = ''//手机端地址
}
else {
    var baseurl='' //pc端请求地址
}
export const baseURL = baseurl;