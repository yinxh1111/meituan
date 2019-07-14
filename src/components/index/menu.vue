<template>
  <div class="m-menu"  @mouseleave="menuLeave">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd
        v-for=" curDetail in menuList"
        :key="curDetail.icon"
        @mouseenter="menuEnter(curDetail)"
       
      >
        <i class="food"></i>
        {{curDetail.title}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="curDetail" class="detail">
      <template v-for=" (item) in curDetail.children">
        <h4 :key="item.title">{{item.title}}</h4>
        <span :key="v+'_'+i" v-for="(v,i) in item.children">{{v}}</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      curDetail: null,
      menuList: [
        {
          title: "美食",
          icon: "food",
          children: [
            {
              title: "美食",
              children: [
                "代金券",
                "甜点饮料",
                "火锅自助餐",
                "小吃快餐",
                "日韩料理",
                "西餐",
                "聚餐宴请",
                "烧烤烤肉"
              ]
            }
          ]
        },
        {
          title: "外卖",
          icon: "takeout",
          children: [
            {
              title: "外卖",
              children: ["美团外卖"]
            }
          ]
        },
        {
          title: "酒店",
          icon: "hotel",
          children: [
            {
              title: "酒店星级",
              children: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"]
            }
          ]
        }
      ]
    };
  },
  methods: {
    menuEnter(curDetail) {
      this.curDetail = curDetail;
    },
    menuLeave() {
      this.curDetail = null;
    }
  }
};
</script>