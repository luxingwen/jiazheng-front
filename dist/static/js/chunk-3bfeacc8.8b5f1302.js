(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bfeacc8"],{6664:function(t,e,a){"use strict";a.d(e,"g",(function(){return o})),a.d(e,"b",(function(){return r})),a.d(e,"k",(function(){return i})),a.d(e,"i",(function(){return l})),a.d(e,"d",(function(){return c})),a.d(e,"h",(function(){return s})),a.d(e,"c",(function(){return u})),a.d(e,"l",(function(){return m})),a.d(e,"f",(function(){return f})),a.d(e,"a",(function(){return d})),a.d(e,"j",(function(){return p})),a.d(e,"e",(function(){return h}));var n=a("b775");function o(t){return Object(n["a"])({url:"/v1/category",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/v1/category",method:"post",data:t})}function i(t,e){return Object(n["a"])({url:"/v1/category/"+t,method:"put",data:e})}function l(t){return Object(n["a"])({url:"/v1/typ",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/v1/typ",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/v1/shifu",method:"get",params:t})}function u(t){return Object(n["a"])({url:"/v1/shifu",method:"post",data:t})}function m(t){return Object(n["a"])({url:"/v1/upload/image",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}})}function f(t){return Object(n["a"])({url:"/v1/brand",method:"get",params:t})}function d(t){return Object(n["a"])({url:"/v1/brand",method:"post",data:t})}function p(t,e){return Object(n["a"])({url:"/v1/brand/"+t,method:"put",data:e})}function h(t){return Object(n["a"])({url:"/v1/arean",method:"get",data:t})}},"9f8f":function(t,e,a){},a4c4:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"大类"}},[a("el-select",{attrs:{placeholder:"大类"},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}},t._l(t.categoryList,(function(t){return a("el-option",{attrs:{label:t.name,value:t.ID}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"小类"}},[a("el-select",{attrs:{placeholder:"小类"},model:{value:t.form.typ,callback:function(e){t.$set(t.form,"typ",e)},expression:"form.typ"}},t._l(t.typList,(function(t){return a("el-option",{attrs:{label:t.name,value:t.ID}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"联系方式"}},[a("el-input",{model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"区域"}},[a("el-select",{attrs:{placeholder:"区域"},model:{value:t.form.arean,callback:function(e){t.$set(t.form,"arean",e)},expression:"form.arean"}},t._l(t.areanList,(function(t){return a("el-option",{attrs:{label:t.name,value:t.ID}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{model:{value:t.form.location,callback:function(e){t.$set(t.form,"location",e)},expression:"form.location"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"图片","label-width":"120px"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/v1/upload/image","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.imgUrl?a("img",{staticClass:"avatar",attrs:{src:t.imgUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),a("div",{staticClass:"editor-container"},[a("el-tag",{staticClass:"tag-title"},[t._v("描述:")]),t._v(" "),a("mavon-editor",{ref:"md",staticStyle:{"min-height":"600px"},on:{imgAdd:t.$imgAdd,change:t.change},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("立即创建")])],1)],1)},o=[],r=a("b2d8"),i=(a("64e1"),a("6664")),l={components:{mavonEditor:r["mavonEditor"]},data:function(){return{form:{name:"",category:"",typ:"",phone:"",img:"",location:"",desc:"",arean:""},html:"",content:"",categoryList:[],listLoading:!1,typList:[],areanList:[],imgUrl:""}},created:function(){var t=this;this.fetchData(),Object(i["e"])().then((function(e){t.areanList=e.data,console.log(e)}))},methods:{onSubmit:function(){this.$message("submit!"),this.form.desc=this.html,console.log(this.form),Object(i["c"])(this.form).then((function(t){console.log("res:",t)}))},onCancel:function(){this.$message({message:"cancel!",type:"warning"})},getHtml:function(){this.html=this.$refs.markdownEditor.getHtml(),console.log(this.html)},fetchData:function(){var t=this;this.listLoading=!0,Object(i["g"])().then((function(e){t.categoryList=e.data.list,t.listLoading=!1})),Object(i["i"])().then((function(e){t.typList=e.data.list}))},$imgAdd:function(t,e){var a=this,n=new FormData;n.append("file",e),Object(i["l"])(n).then((function(e){console.log(e);var n=e.path+e.filename;console.log(n),a.$refs.md.$img2Url(t,n)}))},change:function(t,e){this.html=e},handleAvatarSuccess:function(t,e){this.imgUrl=t.path+t.filename,this.form.img=t.filename},beforeAvatarUpload:function(t){var e=t.size/1024/1024<2;return e||this.$message.error("上传头像图片大小不能超过 2MB!"),e}}},c=l,s=(a("f55a"),a("2877")),u=Object(s["a"])(c,n,o,!1,null,"14911aa1",null);e["default"]=u.exports},f55a:function(t,e,a){"use strict";var n=a("9f8f"),o=a.n(n);o.a}}]);