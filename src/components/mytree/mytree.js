Component({
  properties: {
    model: Object,
  },

  data: {
    open: false,
    isBranch: false,
  },

  methods: {
    toggle: function (e) {
      if (this.data.isBranch) {
        this.setData({
          open: !this.data.open,
        })
      }
    },
    tapItem: function (e) {
      var itemid = e.currentTarget.dataset.itemid;
      console.log('组件里点击的id: ' + itemid);
      // this.triggerEvent('tapitem', { itemid: itemid }, { bubbles: true, composed: true });
    },
    btnFunc: function () {
      console.log('The model is: ')
      console.log(this.data.model)
    }
  },

  ready: function (e) {
    setTimeout(() => {
      this.setData({
        isBranch: Boolean(this.data.model && this.data.model.children.length),
      });
      console.log('from ready')
      console.log(this.data);
    }, 5000);
  }
})