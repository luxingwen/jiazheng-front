(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4be7eea6"],{6664:function(t,e,n){"use strict";n.d(e,"g",(function(){return a})),n.d(e,"b",(function(){return u})),n.d(e,"k",(function(){return o})),n.d(e,"i",(function(){return l})),n.d(e,"d",(function(){return i})),n.d(e,"h",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"l",(function(){return d})),n.d(e,"f",(function(){return f})),n.d(e,"a",(function(){return p})),n.d(e,"j",(function(){return b})),n.d(e,"e",(function(){return h}));var r=n("b775");function a(t){return Object(r["a"])({url:"/v1/category",method:"get",params:t})}function u(t){return Object(r["a"])({url:"/v1/category",method:"post",data:t})}function o(t,e){return Object(r["a"])({url:"/v1/category/"+t,method:"put",data:e})}function l(t){return Object(r["a"])({url:"/v1/typ",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/v1/typ",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/v1/shifu",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/v1/shifu",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/v1/upload/image",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}})}function f(t){return Object(r["a"])({url:"/v1/brand",method:"get",params:t})}function p(t){return Object(r["a"])({url:"/v1/brand",method:"post",data:t})}function b(t,e){return Object(r["a"])({url:"/v1/brand/"+t,method:"put",data:e})}function h(t){return Object(r["a"])({url:"/v1/arean",method:"get",data:t})}},8343:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("router-link",{attrs:{to:"/shifu-add"}},[n("el-button",{attrs:{type:"primary"}},[t._v("添加")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.$index))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"类别",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.typName))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"电话",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.phone))]}}])}),t._v(" "),n("el-table-column",{attrs:{"class-name":"status-col",label:"照片",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("img",{attrs:{src:t.row.img,width:"40px",height:"40px"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{"class-name":"status-col",label:"地址",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.location))]}}])})],1)],1)},a=[],u=n("6664"),o={filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{list:null,listLoading:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(u["h"])().then((function(e){t.list=e.data.list,t.listLoading=!1}))}}},l=o,i=n("2877"),c=Object(i["a"])(l,r,a,!1,null,null,null);e["default"]=c.exports}}]);