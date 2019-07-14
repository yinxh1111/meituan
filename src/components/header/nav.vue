<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <routerLink to="/">我的美团</routerLink>
        <dl>
          <dt>
            <routerLink to="/">我的订单</routerLink>
          </dt>
          <dt>
            <routerLink to="/">我的收藏</routerLink>
          </dt>
          <dt>
            <routerLink to="/">抵用券</routerLink>
          </dt>
          <dt>
            <routerLink to="/">账户设置</routerLink>
          </dt>
        </dl>
      </li>
      <li>
        <routerLink to="/">手机APP</routerLink>
      </li>
      <li class="list bd">
        <routerLink to="/">商家中心</routerLink>
        <dl>
          <dd>
            <routerLink to="/">登录商家中心</routerLink>
          </dd>
          <dd>
            <routerLink to="/">美团智能收银</routerLink>
          </dd>
          <dd>
            <routerLink to="/">我想合作</routerLink>
          </dd>
          <dd>
            <routerLink to="/">手机免费开店</routerLink>
          </dd>
          <dd>
            <routerLink to="/">商家申请开票</routerLink>
          </dd>
          <dd>
            <routerLink to="/">免费合作美团排队</routerLink>
          </dd>
        </dl>
      </li>
      <li class="list site">
        <routerLink to="/">网站导航</routerLink>
        <div class="subContainer">
          <dl class="hotel">
            <dt>
              <router-link to="/">酒店旅游</router-link>
            </dt>
            <dd>
              <router-link to="/">国际机票</router-link>
            </dd>
            <dd>
              <router-link to="/">火车票</router-link>
            </dd>
            <dd>
              <router-link to="/">榛果民宿</router-link>
            </dd>
            <dd>
              <router-link to="/">经济型酒店</router-link>
            </dd>
            <dd>
              <router-link to="/">主题酒店</router-link>
            </dd>
            <dd>
              <router-link to="/">商务酒店</router-link>
            </dd>
            <dd>
              <router-link to="/">公寓</router-link>
            </dd>
            <dd>
              <router-link to="/">豪华酒店</router-link>
            </dd>
            <dd>
              <router-link to="/">客栈</router-link>
            </dd>
            <dd>
              <router-link to="/">青年旅社</router-link>
            </dd>
            <dd>
              <router-link to="/">度假酒店</router-link>
            </dd>
            <dd>
              <router-link to="/">公别墅</router-link>
            </dd>
            <dd>
              <router-link to="/">农家院</router-link>
            </dd>
          </dl>
          <dl class="food">
            <dt>
              吃美食
            </dt>
            <dd>
              <router-link to="/">烤鱼</router-link>
            </dd>
            <dd>
              <router-link to="/">特色小吃</router-link>
            </dd>
            <dd>
              <router-link to="/">烧烤</router-link>
            </dd>
            <dd>
              <router-link to="/">自助餐</router-link>
            </dd>
            <dd>
              <router-link to="/">火锅</router-link>
            </dd>
            <dd>
              <router-link to="/">代金券</router-link>
            </dd>
          </dl>
          <dl class="movie">
            <dt>
              <router-link to="/">看电影</router-link>
            </dt>
            <dd>
              <router-link to="/">热映电影</router-link>
            </dd>
            <dd>
              <router-link to="/">热门影院</router-link>
            </dd>
            <dd>
              <router-link to="/">热映电影口碑榜</router-link>
            </dd>
            <dd>
              <router-link to="/">最受期待电影</router-link>
            </dd>
            <dd>
              <router-link to="/">国内票房榜</router-link>
            </dd>
            <dd>
              <router-link to="/">北美票房榜</router-link>
            </dd>
            <dd>
              <router-link to="/">电影排行榜</router-link>
            </dd>
          </dl>
          <dl class="app">
            <dt>
              <router-link to="/">手机应用</router-link>
            </dt>
            <dd>
              <router-link to="/"><img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" title="美团app" alt="美团app"></router-link>
            </dd>
            <dd>
              <router-link to="/"><img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" title="外卖app" alt="外卖app"></router-link>
            </dd>
            <dd>
              <router-link to="/"><img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png" title="榛果app" alt="榛果app"></router-link>
            </dd>
            <dd>
              <router-link to="/"><img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" title="点评app" alt="点评app"></router-link>
            </dd>
            <dd>
              <router-link to="/"><img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" title="猫眼app" alt="猫眼app"></router-link>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>
