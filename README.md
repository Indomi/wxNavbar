# wx-navbar

小程序顶部导航栏自定义组件
A navbar component for wechar miniprogram.

## 使用

### 1. app.json设置

``` #json
{
    "window": {
        "navigationStyle": "custom"
    }
}
```

设置后所有页面都会失去顶部导航栏（右上角胶囊除外）

### 2. 在需要使用的页面 xxx.json中设置

``` #json
{
  "usingComponents": {
    "navbar": "xxx/components/navbar/navbar"
  }
}
```

### 3. 页面wxml中使用

```#html
<navbar options="{{options}}" />
```

其中

```#javascript
options = {
    title: '示例',                  //正中央显示标题，必填
    showCapsule: true,              //是否显示左上角胶囊，必填
    back: {
        isShow: true,               //左上角是否显示返回按钮，必填
        path: '/pages/index/index'  //返回到的页面路径，非必填，不填默认返回上一层
    },
    home: {
        isShow: true,               //左上角是否显示主页按钮，必填
        path: ''                    //返回到的页面路径，必填
    }
}
```

### 声明：

    图标来源于 [阿里巴巴图标库](https://www.iconfont.cn/)
