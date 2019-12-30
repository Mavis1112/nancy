import Vue from 'vue';
import axios from 'axios'


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
  var _this = Vue.prototype;
  // if (_this.$xiaozhu.sess.user) {//每次请求都带的参数放这里
  //   params.userId = _this.$xiaozhu.sess.user.userid;
  //   params.sessId = _this.$xiaozhu.sess.user.sessid;
  // }
  params.timestamp = new Date().getTime();
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err)
        })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err)
        })
  })
}

export function getParam(paramName) {
  var myUrl = decodeURI(window.document.URL);
  var sURL = myUrl.toString().replace(/#/, '&');
  if (sURL.indexOf("?") > 0) {
    var arrParams = sURL.split("?");
    var arrURLParams = arrParams[1].split("&");
    var arrParamNames = new Array(arrURLParams.length);
    var arrParamValues = new Array(arrURLParams.length);
    for (var i = 0; i < arrURLParams.length; i++) {
      var sParam = arrURLParams[i].split("=");
      arrParamNames[i] = sParam[0];
      if (sParam[1] != "") {
        arrParamValues[i] = unescape(sParam[1]);
      } else {
        arrParamValues[i] = "";
      }
    }
    for (i = 0; i < arrURLParams.length; i++) {
      if (arrParamNames[i] == paramName) {
        return arrParamValues[i] == 'undefined' ? '' : decodeURIComponent(arrParamValues[i]);
      }
    }
    return '';
  }
  return '';
}

//获取地址栏参数
function getParamCommon(paramName, url) {
  if (!url) {
    return
  };
  var sURL = url.replace(/#/, '&');
  if (sURL.indexOf("?") > 0) {
    var arrParams = sURL.split("?");
    var arrURLParams = arrParams[1].split("&");
    var arrParamNames = new Array(arrURLParams.length);
    var arrParamValues = new Array(arrURLParams.length);
    for (var i = 0; i < arrURLParams.length; i++) {
      var sParam = arrURLParams[i].split("=");
      arrParamNames[i] = sParam[0];
      if (sParam[1] != "") {
        arrParamValues[i] = unescape(sParam[1]);
      } else {
        arrParamValues[i] = "";
      }
    }
    for (i = 0; i < arrURLParams.length; i++) {
      if (arrParamNames[i] == paramName) {
        return arrParamValues[i] == 'undefined' ? '' : arrParamValues[i];
      }
    }
    return '';
  }
  return '';
}

//本地存储信息
export function setStore(key, val) {
  if (typeof (val) == 'object') {
    localStorage.setItem(key, JSON.stringify(val))
  } else {
    localStorage.setItem(key, val)
  }
}
//获取本地存储信息
export function getStore(key) {
  let val = localStorage.getItem(key)
  if (!val) {
    return null;
  } else if (val.indexOf('{') == 0 || val.indexOf('[') == 0) {
    return JSON.parse(val);
  } else {
    return val;
  }
}
