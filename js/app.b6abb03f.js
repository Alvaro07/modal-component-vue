(function(t){function e(e){for(var n,i,a=e[0],c=e[1],s=e[2],d=0,p=[];d<a.length;d++)i=a[d],r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return l.push.apply(l,s||[]),o()}function o(){for(var t,e=0;e<l.length;e++){for(var o=l[e],n=!0,a=1;a<o.length;a++){var c=o[a];0!==r[c]&&(n=!1)}n&&(l.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},l=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/modal-component-vue/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var u=c;l.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"30db":function(t,e,o){"use strict";var n=o("a4c0"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app",attrs:{id:"app"}},[t.modalShow&&"modal-test"===t.modal?o("modal",{attrs:{title:"Modal with title"},on:{close:t.closeModal}},[o("p",[t._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dignissim fermentum. Vestibulum ac rutrum elit,\n      "),o("br"),o("br"),t._v("dignissim vulputate massa. Donec nunc mi, condimentum at scelerisque et, cursus pretium sapien. Proin viverra interdum eleifend. Sed fermentum felis augue, id porttitor ante imperdiet sed.\n    ")])]):t._e(),t.modalShow&&"modal-test-two"===t.modal?o("modal",{on:{close:t.closeModal},scopedSlots:t._u([{key:"footer",fn:function(){return[o("v-button",{attrs:{text:"Accept",onButtonClick:t.closeModal,extraClass:"margin-right-10",color:"green"}}),o("v-button",{attrs:{text:"Close",onButtonClick:t.closeModal,color:"red"}})]},proxy:!0}],null,!1,775825919)},[o("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dignissim fermentum. Vestibulum ac rutrum elit,")])]):t._e(),o("v-button",{attrs:{text:"Open modal with title",onButtonClick:function(){return t.openModal("modal-test")},extraClass:"margin-right-20"}},[t._v("Open modal-test!")]),o("v-button",{attrs:{text:"Open modal with footer",onButtonClick:function(){return t.openModal("modal-test-two")}}},[t._v("Open modal-test-two!")])],1)},l=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"c-modal"},[o("section",{staticClass:"c-modal__wrap"},[o("font-awesome-icon",{staticClass:"c-modal__wrap__close",attrs:{icon:"times-circle"},on:{click:t.closeModal}}),t.title?o("header",{staticClass:"c-modal__header"},[o("h2",{staticClass:"c-modal__header__title"},[t._v(t._s(t.title))])]):t._e(),o("main",{staticClass:"c-modal__content"},[t._t("default")],2),t.hasFooterSlot?o("footer",{staticClass:"c-modal__footer"},[t._t("footer")],2):t._e()],1)])},a=[],c={name:"Modal",props:{title:{type:String,required:!1}},created:function(){this.$slots.default||console.error("Modal component requires content be provided in the slot.")},methods:{closeModal:function(){this.$emit("close")}},computed:{hasFooterSlot:function(){return!!this.$slots.footer}}},s=c,u=(o("30db"),o("2877")),d=Object(u["a"])(s,i,a,!1,null,null,null),p=d.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{staticClass:"c-button",class:[t.colorClass,t.extraClass],on:{click:function(e){return e.preventDefault(),t.onClick(e)}}},[t._v(t._s(t.text))])},f=[],h={name:"Button",props:{text:{type:String,required:!0},onButtonClick:{type:Function,required:!1},color:{type:String,required:!1},extraClass:{type:String,required:!1}},methods:{onClick:function(){this.onButtonClick()}},computed:{colorClass:function(){return"green"===this.color?"c-button--green":"red"===this.color?"c-button--red":void 0}}},v=h,_=(o("ef55"),Object(u["a"])(v,m,f,!1,null,null,null)),b=_.exports,g={name:"app",components:{Modal:p,"v-button":b},data:function(){return{modalShow:!1,modal:null}},methods:{openModal:function(t){this.modalShow=!0,this.modal=t},closeModal:function(){this.modalShow=!1,this.modal=null}}},w=g,C=(o("5c0b"),Object(u["a"])(w,r,l,!1,null,null,null)),y=C.exports,x=o("ecee"),S=o("c074"),M=o("ad3d");x["c"].add(S["a"]),n["a"].component("font-awesome-icon",M["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var n=o("5e27"),r=o.n(n);r.a},"5e27":function(t,e,o){},a4c0:function(t,e,o){},c76d:function(t,e,o){},ef55:function(t,e,o){"use strict";var n=o("c76d"),r=o.n(n);r.a}});
//# sourceMappingURL=app.b6abb03f.js.map