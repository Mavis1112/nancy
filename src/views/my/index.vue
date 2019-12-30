<template>
  <div class="my">
    <div class="header">
      <img src="" class="bg">
      <div class="right row">
        <img src="../../assets/icon/icondianpu.png" alt="">
        <img src="../../assets/icon/icondianpu.png" alt="">
      </div>
      <div class="info row">
        <img src="../../assets/icon/icondianpu.png" class="nick">
        <div class="detail col">
          <h2>xx美妆小店</h2>
          <p>手机号码:<span>150xx1049258</span></p>
        </div>
      </div>
    </div>
    <div class="myList zindex" id="myList">
      <div class="title row">
        <p>我的订单</p>
        <p>查看全部</p>
      </div>
      <div class="iconList row">
        <div class="col iconItem">
          <img src="../../assets/icon/icondianpu.png" alt="">
          <span>代付款</span>
        </div>
        <div class="col iconItem">
          <img src="../../assets/icon/icondianpu.png" alt="">
          <span>代付款</span>
        </div>
        <div class="col iconItem">
          <img src="../../assets/icon/icondianpu.png" alt="">
          <span>代付款</span>
        </div>
        <div class="col iconItem">
          <img src="../../assets/icon/icondianpu.png" alt="">
          <span>代付款</span>
        </div>
        <div class="col iconItem">
          <img src="../../assets/icon/icondianpu.png" alt="">
          <span>代付款</span>
        </div>
      </div>
    </div>
    <div class="chooseList col">
      <div class="chooseItem row">
        <p class="coupon">
          <img src="../../assets/icon/icondianpu.png" alt="">
          <span>我的优惠券</span>
        </p>
          <p class="more">3张</p>
      </div>
      <div class="chooseItem row">
        <p class="coupon">
          <img src="../../assets/icon/icondianpu.png" alt="">
          <span>我的优惠券</span>
        </p>
        <p class="more">3张</p>
      </div>
      <div class="chooseItem row">
        <p class="coupon">
          <img src="../../assets/icon/icondianpu.png" alt="">
          <span>我的优惠券</span>
        </p>
        <p class="more">3张</p>
      </div>
      <div class="chooseItem row">
        <p class="coupon">
          <img src="../../assets/icon/icondianpu.png" alt="">
          <span>我的优惠券</span>
        </p>
        <p class="more">3张</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    created() {
      var _this = this;
      _this.$get('https://wirelesspub-operations.xiaozhu.com/activity/detail/get', {
        activityName: "feizhuLodgeUnit2019",
      }).then(response => {
        if (response.status == '200') {
          console.log(response)
        } else {
          // _this.$toast(response.errorMsg)
        }
      })
      // this.axios.get('api/getNewsList')
      //     .then((res) => {
      //       this.newsList = res.data
      //     })
      //     .catch((err) => {
      //       console.log(err)
      //     })
    },
    mounted() {
      // var _this = this;

    },
    methods: {},
  };
</script>
<style scoped lang="scss">
  .row {
    display: flex;
    flex-direction: row;
  }

  .col {
    display: flex;
    flex-direction: column;
  }

  .my {
    width: 100%;
    background-color: #ccc;
    .header {
      position: relative;
      width: 100%;
      height: 519px;
      background-color: yellow;
      .bg {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }
      .right {
        position: absolute;
        right: 0;
        top: 0;
        height: 105px;
        align-items: center;
        img {
          margin-right: 40px;
          &:first-child {
            width: 53px;
            height: 76px;
          }
          &:nth-child(2) {
            width: 53px;
            height: 76px;
          }
          &:last-child {
            margin-right: 30px;
          }

        }
      }
      .info {
        position: absolute;
        left: 85px;
        top: 105px;
        height: 135px;
        .nick {
          width: 135px;
          height: 135px;
          border-radius: 50%;
          margin-right: 19px;
        }
        .detail {
          justify-content: space-between;
          height: 135px;
          align-items: flex-start;
          h2 {
            line-height: 60px;
            font-size: 45px;
          }
          p {
            font-size: 35px;
            line-height: 40px;
            span {
              font-size: 35px;
              line-height: 40px;
            }
          }
        }

      }
    }
    .myList {
      position: relative;
      margin: -254px auto 20px;
      padding: 0 36px;
      width: 1019px;
      /*height: 345px;*/
      background-color: #fff;
      border-radius: 15px;
      box-sizing: border-box;
      overflow: hidden;
      .title{
        height: 106px;
        border-bottom: 1px solid #bdbdbd;
        align-items: center;
        justify-content: space-between;
      }
      .iconList{
        justify-content: space-between;
        align-items:center;
        margin: 43px 0 60px;
        .iconItem{
          justify-content: space-between;
          align-items: center;
          img{
            width: 100px;
            height: 100px;
            margin-bottom: 36px;
          }
          span{
            font-size: 54px;
            font-weight: bold;
          }
        }
      }

    }
    .chooseList{
      .chooseItem{
        justify-content: space-between;
        align-items: center;
        padding: 0 102px;
        height: 150px;
        border-bottom: 1px solid #ccc;
        background-color: #fff;
        .coupon{
          img{
            width: 64px;
            height: 50px;
            margin-right: 33px;
          }
          span{
            font-size: 45px;
          }
        }
        .more{
          font-size: 32px;
          color: #bdbdbd;
        }
        &:last-child{
          border-bottom:none;
        }
      }
    }

  }

</style>
