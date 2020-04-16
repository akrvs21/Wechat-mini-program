import {ECApplication} from '../main/ECApp.js';
// import ECApplication from '../main/ECApp'

function detail (eventId, eventLon, eventLat) {
    let obj = new ECApplication();
    obj.setEventId(eventId);
    obj.setEventLat(eventLat);
    obj.setEventLon(eventLon);
}

module.exports = {
    detail: detail
}
// function notification(eventId, eventTitle, eventLon, eventLat) {

//     Intent intent = new Intent(getActivity(), EventDalActivity.class);
//     Bundle bundle = new Bundle();
//     bundle.putString("eventId", eventId);
//     if (eventLat != null) {
//         bundle.putString("eventLon", eventLon);
//     } else {
//         bundle.putString("eventLon", "");
//     }
//     if (eventLon != null) {
//         bundle.putString("eventLat", eventLat);
//     } else {
//         bundle.putString("eventLat", "");
//     }
//     intent.putExtras(bundle);
//     intent.setFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP | Intent.FLAG_ACTIVITY_CLEAR_TOP);

//     PendingIntent pi = PendingIntent.getActivity(getActivity(), Integer.parseInt(eventId), intent, PendingIntent.FLAG_UPDATE_CURRENT);
//     NotificationManager manager = (NotificationManager) getActivity().getSystemService(NOTIFICATION_SERVICE);
//     Notification notification = new NotificationCompat.Builder(getActivity())
//         //通知的标题
//         .setContentTitle(eventTitle)
//         //通知的内容
//         .setContentText("您收到了应急指令,请点击查看")
//         //通知的时间--当前系统时间
//         .setWhen(System.currentTimeMillis())
//         //通知的小图标
//         .setSmallIcon(R.mipmap.emplus2)
//         //通知的大图标
//         .setLargeIcon(BitmapFactory.decodeResource(getResources(), R.mipmap.emplus2))
//         //通知的延迟执行的Intent
//         .setContentIntent(pi)
//         //通知点击后自动消失
//         .setAutoCancel(true)
//         //                .setVibrate(new long[]{0,1000,1000,1000})
//         //                .setLights(Color.GREEN,1000,1000)
//         //通知的默认铃声、振动、LED灯
//         .setDefaults(NotificationCompat.DEFAULT_ALL)
//         //通知的重要程度
//         .setDefaults(NotificationCompat.PRIORITY_HIGH)
//         .setPriority(NotificationCompat.PRIORITY_HIGH)
//         .build();
//     //id必须唯一
//     manager.notify(Integer.parseInt(eventId), notification);

//     //        Fragment_Board board = (Fragment_Board) getActivity().getSupportFragmentManager().findFragmentByTag(Fragment_Board.class.getName());
//     //        board.test();
// }