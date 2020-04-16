
class ECApplication {

    constructor() {
        //this.expected_file_length = 7;
        this.mIdoProtocol = 0;
        // private SharedPreferences mSharedPreferences;
        // private LoginModel mSettingPresenter;
        // private Timestamp startTime;//会议开始时间

        this.exit_type = "";//直播进入类型

        //已登录的用户信息
        this.iId = 0;
        this.vcName = "";
        this.vcPassword = "";
        this.vcMobile = "";

        //事件id
        this.eventId = 0;
        //事件事发地经度
        this.eventLon = 200.00;
        //事件事发地纬度
        this.eventLat = 200.00;
        //快报id
        this.bullitinId;

        //未登录赋予随机id
        this.uuid = 0;

        //位置共享有关
        this.exit = 0;
        this.type = "";

        //短视频名称
        this.shortVideoName = "";
        this.videoSure = 0;

        this.isHttps = false;
        this.isICPLogin = false;

        //清除token
        this.cleanToken = 0;

        //手机MAC地址
        this.Mac = "";

        //读取存储服务器ip状态 若读取完整则外部调用+1 当status为1则跳过设置直接进入登录界面 此情况只存在于打开应用的时候 退出账号重新登录进入设置则为status不为1 不强制跳过设置界面
        this.Status = 0;

         //视频会议
      this.mUserName = '755009',
      this.mPassword = '123456aA',
      //    serverUrl  = "203.91.57.83",
      this.serverUrl = '113.98.246.184',
      //省厅
      //    serverUrl  = "19.15.54.109",
      this.serverPort = 5060 //兰州
      //    serverPort  = 5061,
      //    mUserName = "0931005",
      //    mPassword = "Huawei123",
      //    serverUrl = "124.152.210.159",
      //    serverPort = 5061,
    }

     getExit = function () {
        return this.exit;
    }
     setExit = function (exit) {
        this.exit = exit;
    }

     getBullitinId = function () {
        return this.bullitinId;
    }

     setBullitinId = function (bullitinId) {
        this.bullitinId = bullitinId;
    }

     getAppIp = function () {
        return this.appIp;
    }

     setAppIp = function (appIp) {
        this.appIp = appIp;
    }

     getSocketPort = function () {
        return this.socketPort;
    }

     setSocketPort = function (socketPort) {
        this.socketPort = socketPort;
    }

     getAppSocket = function () {
        return this.appSocket;
    }

     setAppSocket = function (appSocket) {
        this.appSocket = appSocket;
    }

     getApatchUrl = function () {
        return this.apatchUrl;
    }

     setApatchUrl = function (apatchUrl) {
        this.apatchUrl = apatchUrl;
    }

     getUpLoadFilePath = function () {
        return this.upLoadFilePath;
    }

     setUpLoadFilePath = function (upLoadFilePath) {
        this.upLoadFilePath = upLoadFilePath;
    }

     getAppUrl = function () {
        return this.appUrl;
    }

     setAppUrl = function (appUrl) {
        this.appUrl = appUrl;
    }

     getHttpsAppUrl = function () {
        return this.httpsAppUrl;
    }

     setHttpsAppUrl = function (httpsAppUrl) {
        this.httpsAppUrl = httpsAppUrl;
    }

     getiId = function () {
        return this.iId;
    }

     setiId = function (iId) {
        this.iId = iId;
    }

     getVcName = function () {
        return this.vcName;
    }

     setVcName = function (vcName) {
        this.vcName = vcName;
    }

     getVcMobile = function () {
        return this.vcMobile;
    }

     setVcMobile = function (vcMobile) {
        this.vcMobile = vcMobile;
    }

     getEventId = function () {
        return this.eventId;
    }

     setEventId = function (eventId) {
        this.eventId = eventId;
    }

     getEventLon = function () {
        return this.eventLon;
    }

     setEventLon = function (eventLon) {
        this.eventLon = eventLon;
    }

     getEventLat = function () {
        return this.eventLat;
    }

     setEventLat = function (eventLat) {
        this.eventLat = eventLat;
    }

    //指挥端地址端口
     getServiceUrl = function () {
        return this.serviceUrl;
    }

     setServiceUrl = function (serviceUrl) {
        this.serviceUrl = serviceUrl;
    }

    //会议端口
     setServerPort = function (serverPort) {
        this.serverPort = serverPort;
    }
    //会议地址
     setServerUrl = function (serverUrl) {
        this.serverUrl = serverUrl;
    }

    //会议地址
     getServerUrl = function () {
        return this.serverUrl;
    }

    //会议端口
     getServerPort = function () {
        return this.serverPort;
    }

    //会议账号
     setmUserName = function (mUserName) {
        this.mUserName = mUserName;
    }
     getmUserName = function () {
        return this.mUserName;
    }

    //会议密码
     setmPassword = function (mPassword) {
        this.mPassword = mPassword;
    }
     getmPassword = function () {
        return this.mPassword;
    }

    //会议开始时间
     setmStartTime = function (startTime) {
        this.startTime = startTime;
    }
    // public Timestamp getStartTime(){
    //     return this.startTime;
    // }

    //直播进入类型
     getExit_type = function () {
        return this.exit_type;
    }

     setExit_type = function (exit_type) {
        this.exit_type = exit_type;
    }

     setMac = function (Mac) {
        this.Mac = Mac;
    }

     getMac = function () {
        return this.Mac;
    }

    //获取未登录时随机id
     setUuid = function (uuid) {
        this.uuid = uuid;
    }

     getUuid = function () {
        return this.uuid;
    }

    //位置共享隐藏判断退出类型

     setType = function (type) {
        this.type = type;
    }

     getType = function () {
        return this.type;
    }

     setShortVideoName = function (shortVideoName) {
        this.shortVideoName = shortVideoName;
    }

     getShortVideoName = function () {
        return this.shortVideoName;
    }

     setVideoSure = function (videoSure) {
        this.videoSure = videoSure;
    }

     getVideoSure = function () {
        return this.videoSure;
    }

     setCleanToken = function (cleanToken) {
        this.cleanToken = cleanToken;
    }

     getCleanToken = function () {
        return this.cleanToken;
    }

     getStatus = function () {
        return this.Status;
    }

     setStatus = function (Status) {
        this.Status = Status;
    }

     isHttps = function () {
        return this.isHttps;
    }

     setHttps = function (https) {
        this.isHttps = https;
    }

     setVcPassword = function (vcPassword) {
        this.vcPassword = vcPassword;
    }

     getVcPassword = function () {
        return this.vcPassword;
    }

     setICPLogin = function (ICPLogin) {
        this.isICPLogin = ICPLogin;
    }

     getICPLogin = function () {
        return this.isICPLogin;
    }

}
export default ECApplication;
// module.exports = {
//     ECApplication: ECApplication
// }


