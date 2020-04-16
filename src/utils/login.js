import message from './toast.js'
import format from './timeFormat.js'
// import ECApplication from '../main/ECApp.js'

var errTime = 0;
var mUserName, mPassword, mServerUrl, mServerPort;
function failed() {
    if (errTime < 5) {
        errTime += 1;
        message.showMessage('密码错误!', '连续错误五次账户将被限制登录5分钟!当前第' + errTime + '次')
    }
    else if (errTime >= 5) {
        var date = new Date();
        var min = date.getMinutes();
        date.setMinutes(min + 5);
        console.log(format.Format(date, "yyyy-MM-dd HH:mm"));
        message.showMessage('错误', '密码错误五次，请' + format.Format(date, "yyyy-MM-dd HH:mm") + '后在登录')
    }
}

// function login1(iId, vcName, vcPassword, vcMobile, conferencesName,
//     conferencesPwd, conferencesServerAddress, conferencesServerPort) {
//     // Sinvieemt@123
//     var obj  = new ECApplication();
//     console.log('from login1')
//     console.log(obj)
//     //视频会议
//     if (conferencesName != null && conferencesName != ""
//         && conferencesPwd != null && conferencesPwd != ""
//         && conferencesServerAddress != null && conferencesServerAddress != ""
//         && conferencesServerPort != 0
//     ) {
//         obj.setmUserName(conferencesName);
//         obj.setmPassword(conferencesPwd);
//         obj.setServerUrl(conferencesServerAddress);
//         obj.setServerPort(conferencesServerPort);
//         // obj.setMac(Mac);

//         // mUserName = conferencesName;
//         // mPassword = conferencesPwd;
//         // mServerUrl = conferencesServerAddress;
//         // mServerPort = conferencesServerPort;
//         //new Thread(runnable).start();
//     } else {
//         mUserName = obj.getmUserName();
//         mPassword = obj.getmPassword();
//         mServerUrl = obj.getServerUrl();
//         mServerPort = obj.getServerPort();
//         //new Thread(runnable).start();
//     }

//     obj.setiId(iId);
//     obj.setVcName(vcName);
//     obj.setVcPassword(vcPassword);
//     obj.setVcMobile(vcMobile);
//     obj.setCleanToken(0);
// }

module.exports = {
    failed: failed
}
