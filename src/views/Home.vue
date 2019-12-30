/* eslint-disable */
<template>
    <div class="home">
        <van-sticky>
            <div class="search">
                <router-link to="/">
                    <img src="../assets/index/xiaoxi.png"> <span>消息</span>
                </router-link>
                <form action="/">
                    <van-search v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch" @cancel="onCancel" />
                </form>
                <router-link to="/">
                    <img src="../assets/index/gouwuche.png"> <span>购物车</span>
                </router-link>
                <router-link to="/">
                    <img src="../assets/index/分类.png"> <span>分类</span>
                </router-link>
            </div>
        </van-sticky>
        <van-swipe class="banners-swipe" :autoplay="3000">
            <van-swipe-item v-for="url in bannerUrls" :key="url">
                <img :src="url">
            </van-swipe-item>
        </van-swipe>
        <van-grid class="classify-icon" :border="false" :column-num="4">
            <van-grid-item @click="list('all')">
                <van-image src="/index/tubiao1.png" />
                <div class="classify-icon-text">全部分类</div>
            </van-grid-item>
            <van-grid-item @click="list('other')">
                <van-image src="/index/tubiao2.png" />
                <div class="classify-icon-text">其他</div>
            </van-grid-item>
            <van-grid-item @click="list('skin-care')">
                <van-image src="/index/tubiao3.png" />
                <div class="classify-icon-text">护肤</div>
            </van-grid-item>
            <van-grid-item>
                <van-image src="/index/tubiao4.png" />
                <div class="classify-icon-text">彩妆</div>
            </van-grid-item>
            <van-grid-item>
                <van-image src="/index/tubiao5.png" />
                <div class="classify-icon-text">香水</div>
            </van-grid-item>
            <van-grid-item>
                <van-image src="/index/tubiao6.png" />
                <div class="classify-icon-text">个护母婴</div>
            </van-grid-item>
            <van-grid-item>
                <van-image src="/index/tubiao7.png" />
                <div class="classify-icon-text">美妆工具</div>
            </van-grid-item>
            <van-grid-item>
                <van-image src="/index/tubiao8.png" />
                <div class="classify-icon-text">食品</div>
            </van-grid-item>
        </van-grid>
        <van-list class="goods-list" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="goods-item" v-for="item in goodsList" :key="item.id">
                <router-link :to="{ name: 'goods', params: { goodsId: item.id }}">
                    <img :src="item.url">
                    <div class="goods-item-title">{{item.title}}</div>
                    <div class="goods-item-describe">热销{{item.soldAmount}}件</div>
                    <div>
                        <div class="goods-item-price">¥{{item.price}}</div>
                        <div class="goods-item-origin-price">¥{{item.originPrice}}</div>
                    </div>
                    <div class="good-item-button-block">
                        <div class="good-item-button">上架店铺</div>
                        <div class="good-item-button">分享购买</div>
                    </div>
                </router-link>
            </div>
        </van-list>
    </div>
</template>
<script>
// @ is an alias to /src

//import { Swipe, SwipeItem, Search, Grid, GridItem, Image, List, Cell, Sticky } from 'vant';


export default {
    name: 'home',
    // components: {

    //     [Swipe.name]: Swipe,
    //     [SwipeItem.name]: SwipeItem,
    //     [Search.name]: Search,
    //     [Grid.name]: Grid,
    //     [GridItem.name]: GridItem,
    //     [Image.name]: Image,
    //     [List.name]: List,
    //     [Cell.name]: Cell,
    //     [Sticky.name]: Sticky,
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
            value: '',
            bannerUrls: ['/index/bj.png', '/index/bj2.png'],
            goodsList: [
                { id: 1, url: 'https://img.yzcdn.cn/vant/t-thirt.jpg', title: '商品名称这是一个神奇的商品', soldAmount: 110, price: 100.0, originPrice: 150.0 },
                { id: 2, url: 'https://img.yzcdn.cn/vant/t-thirt.jpg', title: '商品名称这是一个神奇的商品', soldAmount: 110, price: 100.0, originPrice: 150.0 },
                { id: 3, url: 'https://img.yzcdn.cn/vant/t-thirt.jpg', title: '商品名称这是一个神奇的商品', soldAmount: 110, price: 100.0, originPrice: 150.0 },
                { id: 4, url: 'https://img.yzcdn.cn/vant/t-thirt.jpg', title: '商品名称这是一个神奇的商品', soldAmount: 110, price: 100.0, originPrice: 150.0 },
                { id: 5, url: 'https://img.yzcdn.cn/vant/t-thirt.jpg', title: '商品名称这是一个神奇的商品', soldAmount: 110, price: 100.0, originPrice: 150.0 },
                { id: 6, url: 'https://img.yzcdn.cn/vant/t-thirt.jpg', title: '商品名称这是一个神奇的商品', soldAmount: 110, price: 100.0, originPrice: 150.0 },
            ],
            showList: [],
            loading: false,
            finished: false,
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

.search {
    display: flex;
    justify-content: space-around;

    background: #821710;
    align-items: center;
    padding: 40px 0;

}

.search a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 30px;
    color: white;
}

.search a img:nth-child(1) {
    height: 46px;
    width: 53px;
}

.search a img:nth-child(2) {
    height: 46px;
    width: 42px;
}

.search a img:nth-child(3) {
    height: 46px;
    width: 37px;
}

.van-search {
    border-radius: 60px;
    width: 720px;
    height: 76px;

}

i {
    font-size: 40px;
}

.van-swipe img {

    width: 1080px;
    height: 392px;
    display: block;

}

.classify-icon {
    width: 90%;
    margin: 40px auto;

}

.classify-icon .van-grid-item__content {
    background-color: #F0F0F0;

}

.van-image img {
    width: 166px;
    height: 167px;
}

.classify-icon-text {
    font-size: 40px;
}

.goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 25px;
}

.goods-item {
    width: 460px;
    border-radius: 20px;
    background-color: white;
    padding: 25px 20px;
    margin: 10px 0;
    text-align: start;
}

.goods-item a{
	color: #333333;
}

.goods-item img {
    width: 460px;
    height: 417px;
    border-top-left-radius: 20px;
    border-top-rigth-radius: 20px;
}

.goods-item-title {
    font-size: 40px;
    font-weight: 500;
}

.goods-item-describe {
    font-size: 30px;

}

.goods-item-price {
    color: red;
    font-size: 40px;
    font-weight: 700;
    display: inline-block;
}

.goods-item-origin-price {
    font-size: 30px;
    display: inline-block;
    text-decoration: line-through;
    margin-left: 10px;
}

.good-item-button-block {
    display: flex;
    justify-content: space-between;
}

.good-item-button {
    border-radius: 60px;
    background-color: #FCEFEE;
    color: red;
    font-size: 40px;
    text-align: center;
    display: inline-block;
    width: 210px;

}

.van-list__error-text,
.van-list__finished-text,
.van-list__loading {
    width: 100%;
    font-size: 40px;
}
</style>