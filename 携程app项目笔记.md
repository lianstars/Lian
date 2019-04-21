## 轮播图

使用VUE组件中插件

1. 安装插件：`npm install vue-awesome-swiper@2.6.7 --save`

2. 引用：(1)在main.js引入相关文件；(2)在组件中添加模板

3. 使用：

   更改组件分页器样式：

      1. 在参数swiperOption添加配置项：pagination，传进显示分页的div的class名
      2. 更改颜色：由于`style`标签使用了`scoped`属性，所以css样式只能作用于当前组件中，这样子的好处是使得组件的样式模块化，不会相互污染。但是如果引用了第三方组件，需要在组件中局部修改第三方组件的样式时候，就需要用到**“样式穿透”**，格式：<u>外层class名 >>> 第三方组件class名</u>

## 导航栏

设置div背景透明方法：

1. `opacity：0`:内容也会跟着透明
2. `background-color:rgba(0,0,0,0)`:只会设置div背景透明，而不会影响到div里的内容

使用`z-index`属性：

1. 需要对`position`属性设置`absolute`使内容脱离文档流

## Icon1

div使用了绝对定位后居中：

1. div使用了绝对定位之后单独使用`margin: 0 auto`已经不能使其居中了

   ```css
   left: 0
   right: 0
   margin: 0 auto
   ```

   

## 超值优惠

1. 设置12px一下大小的字体：

   谷歌以及谷歌内核的浏览器在中文语言下最小字体只能是12px，直接设置`font-size`小于12是无效的。

   解决：使用CSS3中的 `transform`属性，如下，此时文本大小实际为12px * 0.9（缩放比例） = 10.8px；对IE7和IE8的兼容可以再加一个样式font-size

```css
	 .small-font{
      	 font-size: 12px;
         -webkit-transform: scale(0.90);
      }
```

2. 图片渐变显示：

   在图片上面加一个蒙版，给蒙版设置渐变色到透明覆盖图片

```css
	 position: absolute
     z-index: 2
     background: linear-gradient(transparent, #fff)
```
## 热门活动

1. 表格无外边框的效果：`border: 0`表示不显示边框

```css
		tr td:first-child
       	  border-left: 0
    	tr td:last-child
       	  border-right: 0
    	tr:first-child td
       	  border-top: 0
    	tr:last-child td
       	  border-bottom: 0
```

2. 对绝对定位的图片进行居中：

​	  包裹图片的父元素：

```css
		position: relative
```

​	  对图片：

```css
		position: absolute
        left: 50%
        top: 50%
        margin-left: -14px
        margin-top: -16px
	 其中margin-left和margin-top为图片宽/高的一半，值为负数，表示左移/上移图片。
```







