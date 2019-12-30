/* eslint-disable */
<template>
    <div class="goods">
        <van-sticky>
            <div class="title-bar">
                <img src="../assets/goods/jiantou_black.png">
                <img src="../assets/goods/fx_black.png">
            </div>
        </van-sticky>
        <van-tabs v-model="active" sticky scrollspy>
            <van-tab title="宝贝">
                <van-swipe class="banners-swipe" :autoplay="3000">
                    <van-swipe-item v-for="url  in bannerUrls" :key="url">
                        <img :src="url">
                    </van-swipe-item>
                </van-swipe>
                <div class="good-title-bar">
                    <span class="title">{{good.title}}</span>
                    <span class="description">赚¥{{good.earnMoney}}</span>
                </div>
                <div class="specification-bar">
                    <span>选择规格</span>
                    <span style="color: #999999">请选择></span>
                </div>
            </van-tab>
            <van-tab title="素材">
            </van-tab>
            <van-tab title="详情">
                <div class="introduction">
                    <div class="introduction-title">
                        <img src="../assets/goods/tiao的副本.png">
                        <span class="big-title topic-color-title">宝贝详情</span>
                        <img src="../assets/goods/tiao.png">
                    </div>
                    <img :src="good.url">
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
// @ is an alias to /src

//import { Swipe, SwipeItem, Tab, Tabs } from 'vant';


export default {
    name: 'goods',
    // components: {
    //     [Swipe.name]: Swipe,
    //     [SwipeItem.name]: SwipeItem,
    //     [Tab.name]: Tab,
    //     [Tabs.name]: Tabs,
    // },
    created: function() {
        this.axios.get('api/getNewsList')
            .then((res) => {
                this.newsList = res.data
            })
            .catch((err) => {
                console.log(err)
            })
    },
    data() {
        return {
            active: '',
            bannerUrls: ['/index/bj.png', '/index/bj2.png'],
            good: { id: 1, url: 'https://img.yzcdn.cn/vant/t-thirt.jpg', title: '商品名称这是一个神奇的商品商品名称这是一个神奇的商品商品名称这是一个神奇的商品', soldAmount: 110, price: 100.0, originPrice: 150.0, earnMoney: 1.80, },


        };
    },
    methods: {
        onSearch() {

        },
        onCancel() {

        },
        list(message) {
            alert(message)
        },
        onLoad() {
            var that = this;
            // 异步更新数据
            setTimeout(() => {
                for (let i = 0; i < 2; i++) {
                    that.showList.push(that.goodsList[that.showList.length]);
                }
                // 加载状态结束
                that.loading = false;

                // 数据全部加载完成
                if (that.showList.length >= that.goodsList.length) {
                    that.finished = true;
                }
            }, 500);
        },
    }
}
</script>
<style>
.van-tab {
    height: 100px;
    line-height: 100px;
}

.van-tabs--line .van-tabs__wrap {
    height: 100%;
    width: 60%;
    margin: 0 auto;
}

.title-bar {
    background-color: white;
    position: absolute;
    height: 11vw;
    width: 100%;
}

.title-bar img:nth-child(1) {
    height: 48px;
    width: 28px;
    position: absolute;
    left: 5%;
    top: 30px;

}

.title-bar img:nth-child(2) {
    height: 48px;
    width: 51px;
    position: absolute;
    right: 5%;
    top: 30px;
}

.van-swipe img {

    width: 1080px;
    height: 750px;
    display: block;

}

.good-title-bar {
    background-color: white;
    padding: 30px;
    text-align: left;
}

.good-title-bar .title {
    font-size: 45px;
}

.good-title-bar .description {
    font-size: 45px;
    color: #EB3953;
    position: absolute;
    right: 30px;
}

.specification-bar {
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    margin: 20px 0;
    font-size: 45px;


}

.introduction{
    background-color: white;
    padding-bottom: 40px;
}

.introduction-title{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-weight: 500;

}

.introduction .introduction-title img{
width: 90px;
margin: 30px;
}

.introduction>img{
    width: 100%
}


</style>