import wepy from 'wepy'

function showMessage (title, content) {
wepy.showModal({
  title: title, //提示的标题,
  content: content, //提示的内容,
  showCancel: false, //是否显示取消按钮,
  cancelColor: '#000000', //取消按钮的文字颜色,
  confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
  confirmColor: '#3CC51F', //确定按钮的文字颜色,
//   success: res => {}
});
}

module.exports = {
    showMessage: showMessage
}
