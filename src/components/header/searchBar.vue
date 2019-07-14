<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col class="left" :span="3">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团" />
      </el-col>
      <el-col class="center" :span="15">
        <div class="wrapper">
          <el-input v-model="searchWorld" placeholder="请输入内容" @blur="blur" @focus="focus"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd>
              <router-link to="/" v-for="(item,index) in hotPlaceList" :key="index">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd>
              <router-link to="/" v-for="(item,index) in searchWorldList" :key="index">{{item}}</router-link>
            </dd>
           
          </dl>
        </div>
        <p class="suggest">
          <a href="#">水立方嬉水乐园</a>
          <a href="#">北京欢乐谷</a>
          <a href="#">故宫博物院 故宫</a>
          <a href="#">北京动物园</a>
          <a href="#">八达岭长城</a>
          <a href="#">欢乐水魔方水上乐园</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      searchWorld: "",
      isFocus:false,
      hotPlaceList:['水立方嬉水乐园','北京欢乐谷','故宫博物院 故宫','北京动物园','八达岭长城'],
      searchWorldList:['火锅','火锅自助餐','火锅四川']
    };
  },
  computed:{
    isHotPlace:function(){
      return this.isFocus && !this.searchWorld
    },
    isSearchList:function(){
      return this.isFocus && this.searchWorld
    }
  },
  methods:{
    focus:function(){
      this.isFocus=true
    },
    blur:function(){
      const self =this
      setTimeout(function(){
        self.isFocus=false
      },200)
    }
  }
};
</script>
<style lang="scss" >
@import "@/assets/css/public/header/search.scss";
</style>

