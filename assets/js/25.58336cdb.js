(window.webpackJsonp=window.webpackJsonp||[]).push([[25,30],{325:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));n(132);var r=n(0);function o(){const t=Object(r.d)();if(!t)throw new Error("must be called in setup");return(null==t?void 0:t.proxy)||{}}function s(){const t=Object(r.h)(!1);return Object(r.e)(()=>{t.value=!0}),Object(r.f)(()=>{t.value=!1,setTimeout(()=>{t.value=!0},100)}),{recoShowModule:t}}},326:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return y}));var r=n(328),o=n.n(r),s=(n(327),n(0)),a=n(2),i=function(t,e,n,r){var o,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(a=(s<3?o(a):s>3?o(e,n,a):o(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a};const l=/^(\w+)\-/,c=s.b.extend({props:{icon:{type:String,default:""},link:{type:String,default:""}}});let u=class extends c{getClass(t){return l.test(t)?t.replace(l,(...t)=>"reco"===t[1]?"iconfont "+t[0]:`${t[1]} ${t[0]}`):t}go(t){""!==t&&window.open(t)}render(){return(0,arguments[0])("i",o()([{},{class:this.getClass(this.icon),on:{click:this.go.bind(this,this.link)}}]),[this.$slots.default])}};u=i([a.b],u);var f=u,d=function(t,e,n,r){var o,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(a=(s<3?o(a):s>3?o(e,n,a):o(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a};const p=s.b.extend({props:{delay:{type:String,default:"0"},duration:{type:String,default:".25"},transform:{type:Array,default:()=>["translateY(-20px)","translateY(0)"]}}});let h=class extends p{setStyle(t){t.style.transition=`transform ${this.duration}s ease-in-out ${this.delay}s, opacity ${this.duration}s ease-in-out ${this.delay}s`,t.style.transform=this.transform[0],t.style.opacity=0}unsetStyle(t){t.style.transform=this.transform[1],t.style.opacity=1}render(){return(0,arguments[0])("transition",{attrs:{name:"module"},on:{enter:this.setStyle,appear:this.setStyle,"before-leave":this.setStyle,"after-appear":this.unsetStyle,"after-enter":this.unsetStyle}},[this.$slots.default])}};h=d([a.b],h);var y=h},327:function(t,e,n){"use strict";var r=n(21),o=n(5),s=n(329);r({global:!0},{Reflect:{}}),s(o.Reflect,"Reflect",!0)},328:function(t,e,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(t){for(var e,n=1;n<arguments.length;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)}var o=["attrs","props","domProps"],s=["class","style","directives"],a=["on","nativeOn"],i=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=function(t){return t.reduce((function(t,e){for(var n in e)if(t[n])if(-1!==o.indexOf(n))t[n]=r({},t[n],e[n]);else if(-1!==s.indexOf(n)){var l=t[n]instanceof Array?t[n]:[t[n]],c=e[n]instanceof Array?e[n]:[e[n]];t[n]=[].concat(l,c)}else if(-1!==a.indexOf(n))for(var u in e[n])if(t[n][u]){var f=t[n][u]instanceof Array?t[n][u]:[t[n][u]],d=e[n][u]instanceof Array?e[n][u]:[e[n][u]];t[n][u]=[].concat(f,d)}else t[n][u]=e[n][u];else if("hook"===n)for(var p in e[n])t[n][p]=t[n][p]?i(t[n][p],e[n][p]):e[n][p];else t[n]=e[n];else t[n]=e[n];return t}),{})}},329:function(t,e,n){"use strict";var r=n(18).f,o=n(12),s=n(27)("toStringTag");t.exports=function(t,e,n){t&&!n&&(t=t.prototype),t&&!o(t,s)&&r(t,s,{configurable:!0,value:e})}},337:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(17),s=n(326),a=n(325),i=Object(r.c)({components:{RecoIcon:s.b},props:{item:{required:!0}},setup(t,e){const n=Object(a.a)(),{item:s}=Object(r.i)(t),i=Object(r.a)(()=>Object(o.d)(s.value.link)),l=Object(r.a)(()=>n.$site.locales?Object.keys(n.$site.locales).some(t=>t===i.value):"/"===i.value);return{link:i,exact:l,isExternal:o.f,isMailto:o.g,isTel:o.h}}}),l=n(1),c=Object(l.a)(i,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[e("reco-icon",{attrs:{icon:""+t.item.icon}}),t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[e("reco-icon",{attrs:{icon:""+t.item.icon}}),t._v("\n  "+t._s(t.item.text)+"\n")],1)}),[],!1,null,null,null);e.default=c.exports},377:function(t,e,n){},396:function(t,e,n){"use strict";n(377)},419:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(337),s=n(326),a=n(325),i=Object(r.c)({components:{NavLink:o.default,ModuleTransition:s.a},setup(t,e){const n=Object(a.a)();return{recoShowModule:Object(a.b)(),actionLink:Object(r.a)(()=>n&&{link:n.$frontmatter.actionLink,text:n.$frontmatter.actionText}),heroImageStyle:Object(r.a)(()=>n.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"})}}}),l=(n(396),n(1)),c=Object(l.a)(i,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"home"},[e("div",{staticClass:"hero"},[e("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?e("img",{style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.04"}},[t.recoShowModule&&null!==t.$frontmatter.heroText?e("h1",{style:{marginTop:t.$frontmatter.heroImage?"0px":"140px"}},[t._v("\n        "+t._s(t.$frontmatter.heroText||t.$title||"vuePress-theme-reco")+"\n      ")]):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule&&null!==t.$frontmatter.tagline?e("p",{staticClass:"description"},[t._v("\n        "+t._s(t.$frontmatter.tagline||t.$description||"Welcome to your vuePress-theme-reco site")+"\n      ")]):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.16"}},[t.recoShowModule&&t.$frontmatter.actionText&&t.$frontmatter.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])],1),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.24"}},[t.recoShowModule&&t.$frontmatter.features&&t.$frontmatter.features.length?e("div",{staticClass:"features"},t._l(t.$frontmatter.features,(function(n,r){return e("div",{key:r,staticClass:"feature"},[e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.details))])])})),0):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.32"}},[e("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null);e.default=c.exports}}]);