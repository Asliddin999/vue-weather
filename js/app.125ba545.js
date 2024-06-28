(function(){"use strict";var e={8804:function(e,t,n){var a=n(9242),o=n(3396),l=n(7139),r=n(4870);const i=(0,o.createElementVNode)("h3",null,"MyWeatherApp",-1),c=(0,o.createElementVNode)("p",null,"Loading, please be patient",-1),s=[i,c];function u(e,t,n,a,r,i){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{class:(0,l.C_)(["hello",{active:i.showHello}])},s,2)}var d={computed:{showHello(){return this.$store.state.showHello}}},p=n(89);const m=(0,p.Z)(d,[["render",u]]);var f=m,g=n(65),v=n(678),_=n.p+"img/location.e60e17a1.svg",h=n.p+"img/add.d234a2dc.svg",N=n.p+"img/weather.59d8fd6d.svg",V=n.p+"img/arrowup.63727310.svg",E=n.p+"img/arrowdown.e8709837.svg";const w=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];function y(e){let t=new Date,n=t.getHours()<10?`0${t.getHours()}`:t.getHours(),a=t.getMinutes()<10?`0${t.getMinutes()}`:t.getMinutes(),o=t.getSeconds()<10?`0${t.getSeconds()}`:t.getSeconds(),l=w[t.getDay()],r=n>12?"PM":"AM";e.textContent=`${l} ${n}:${a}:${o} ${r}`,setTimeout(y,1e3,e)}function k(){let e=(new Date).getDay(),t=w.slice(e),n=w.slice(0,e),a=t.concat(n);return a.length=5,a}const b={class:"app__location"},x=(0,o.createElementVNode)("img",{src:_,alt:""},null,-1),B=(0,o.createElementVNode)("img",{src:h,alt:""},null,-1),C={class:"app__forecast"},$=(0,o.createElementVNode)("img",{src:N,alt:""},null,-1),S={class:"app__temperature"},M={class:"app__changes"},O={class:"app__changes-max"},H=(0,o.createElementVNode)("img",{src:V,alt:""},null,-1),P={class:"app__changes-min"},F=(0,o.createElementVNode)("img",{src:E,alt:""},null,-1);var I={__name:"HomeBegin",props:{info:{type:Object,default:{}}},setup(e){const{onMounted:t,ref:a}=n(3396);let r=a(null);return t((()=>{y(r.value)})),(t,n)=>{const a=(0,o.resolveComponent)("router-link");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createElementVNode)("p",b,[x,(0,o.createElementVNode)("span",null,(0,l.zw)(e.info.name),1),(0,o.createVNode)(a,{to:"/favorite",class:"app__add"},{default:(0,o.withCtx)((()=>[B])),_:1})]),(0,o.createElementVNode)("div",{class:"app__city-time",ref_key:"clockData",ref:r},null,512),(0,o.createElementVNode)("div",C,[$,(0,o.createElementVNode)("span",null,(0,l.zw)(e.info.weather?e.info.weather[0].description:""),1)]),(0,o.createElementVNode)("div",S,(0,l.zw)(e.info.main?.temp)+"℃",1),(0,o.createElementVNode)("div",M,[(0,o.createElementVNode)("p",O,[H,(0,o.createElementVNode)("span",null,(0,l.zw)(e.info.main?.temp_max)+"℃",1)]),(0,o.createElementVNode)("p",P,[F,(0,o.createElementVNode)("span",null,(0,l.zw)(e.info.main?.temp_min)+"℃",1)])])],64)}}};const z=I;var j=z;const D={key:0,class:"app__dates"},T={class:"app__day"},A=(0,o.createElementVNode)("img",{src:N,alt:"",class:"app__weather-icon"},null,-1),L={class:"app__temp"};var W={__name:"HomeDates",props:{info:{type:Object,default:{}}},setup(e){const t=k();return(n,a)=>e.info.list?((0,o.openBlock)(),(0,o.createElementBlock)("div",D,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.info.list,((e,n)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",{class:"app__item",key:e},[(0,o.createElementVNode)("div",T,(0,l.zw)((0,r.unref)(t)[n]),1),A,(0,o.createElementVNode)("div",L,[(0,o.createElementVNode)("p",null,(0,l.zw)(e.main.temp_max)+"℃",1),(0,o.createElementVNode)("p",null,(0,l.zw)(e.main.temp_max)+"℃",1)])])))),128))])):(0,o.createCommentVNode)("",!0)}};const R=W;var U=R,q=n.p+"img/windspeed.79ff8fa6.svg",J=n.p+"img/temperature.84e92590.svg",K=n.p+"img/wet.47a2d8c8.svg",Y=n.p+"img/visibility.fddc50e3.svg";const Z={class:"app__grid"},G={class:"app__grid-item app__wind-speed"},Q=(0,o.createElementVNode)("img",{src:q,alt:""},null,-1),X=(0,o.createElementVNode)("p",null,"Скорость ветра",-1),ee={class:"app__grid-item app__temperature-feel"},te=(0,o.createElementVNode)("img",{src:J,alt:""},null,-1),ne=(0,o.createElementVNode)("p",null,"Ощущается",-1),ae={class:"app__grid-item app__humidity"},oe=(0,o.createElementVNode)("img",{src:K,alt:""},null,-1),le=(0,o.createElementVNode)("p",null,"Влажность",-1),re={class:"app__grid-item app__visibility"},ie=(0,o.createElementVNode)("img",{src:Y,alt:""},null,-1),ce=(0,o.createElementVNode)("p",null,"Видимость",-1);var se={__name:"HomeGrid",props:{info:{type:Object,default:{}}},setup(e){return(t,n)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",Z,[(0,o.createElementVNode)("div",G,[Q,(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("h3",null,(0,l.zw)(e.info.wind?.speed)+" км/ч",1),X])]),(0,o.createElementVNode)("div",ee,[te,(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("h3",null,(0,l.zw)(e.info.main?.feels_like)+"℃",1),ne])]),(0,o.createElementVNode)("div",ae,[oe,(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("h3",null,(0,l.zw)(e.info.main?.humidity)+"%",1),le])]),(0,o.createElementVNode)("div",re,[ie,(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("h3",null,(0,l.zw)(e.info.visibility/1e3)+" км",1),ce])])]))}};const ue=se;var de=ue,pe=n.p+"img/sunrise.eb3f72c7.svg",me=n.p+"img/sunset.7145af3b.svg";function fe(e){let t=new Date(1e3*e),n=t.getHours()<10?`0${t.getHours()}`:t.getHours(),a=t.getMinutes()<10?`0${t.getMinutes()}`:t.getMinutes();return`${n}:${a}`}const ge={class:"app__flex"},ve={class:"app__flex-item app__sunrise"},_e=(0,o.createElementVNode)("img",{src:pe,alt:""},null,-1),he=(0,o.createTextVNode)("Восход "),Ne={class:"app__flex-item app__sunset"},Ve=(0,o.createElementVNode)("img",{src:me,alt:""},null,-1),Ee=(0,o.createTextVNode)("Закат ");var we={__name:"HomeFlex",props:{info:{type:Object,default:{}}},setup(e){return(t,n)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",ge,[(0,o.createElementVNode)("div",ve,[_e,(0,o.createElementVNode)("p",null,[he,(0,o.createElementVNode)("span",null,(0,l.zw)((0,r.unref)(fe)(e.info.sys?.sunrise)),1)])]),(0,o.createElementVNode)("div",Ne,[Ve,(0,o.createElementVNode)("p",null,[Ee,(0,o.createElementVNode)("span",null,(0,l.zw)((0,r.unref)(fe)(e.info.sys?.sunset)),1)])])]))}};const ye=we;var ke=ye;const be={class:"app__content"};var xe={__name:"Home",setup(e){const t=(0,o.computed)((()=>(0,g.useStore)().state.data));return(e,n)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",be,[(0,o.createVNode)(j,{info:(0,r.unref)(t).daily},null,8,["info"]),(0,o.createVNode)(U,{info:(0,r.unref)(t).weekly},null,8,["info"]),(0,o.createVNode)(de,{info:(0,r.unref)(t).daily},null,8,["info"]),(0,o.createVNode)(ke,{info:(0,r.unref)(t).daily},null,8,["info"])]))}};const Be=xe;var Ce=Be,$e=n.p+"img/back.13644968.svg",Se=n.p+"img/search.2112072d.svg";const Me=["onSubmit"],Oe=(0,o.createElementVNode)("img",{src:$e,alt:""},null,-1),He=(0,o.createElementVNode)("button",{class:"app__btn"},[(0,o.createElementVNode)("img",{src:Se,alt:""})],-1);var Pe={__name:"FavoriteForm",setup(e){const{ref:t}=n(4870),{computed:l}=n(3396),{useStore:i}=n(65),c=i();let s=l({get:()=>c.state.search,set:e=>c.commit("setSearch",e)});function u(){c.dispatch("searchResult",s.value)}return(e,t)=>{const n=(0,o.resolveComponent)("router-link");return(0,o.openBlock)(),(0,o.createElementBlock)("form",{action:"",class:"app__form",onSubmit:(0,a.iM)(u,["prevent"])},[(0,o.createVNode)(n,{to:"/",class:"app__back"},{default:(0,o.withCtx)((()=>[Oe])),_:1}),(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",class:"app__input",placeholder:"Введите город/регион",required:"",minlength:"3","onUpdate:modelValue":t[0]||(t[0]=e=>(0,r.isRef)(s)?s.value=e:s=e)},null,512),[[a.nr,(0,r.unref)(s)]]),He],40,Me)}}};const Fe=Pe;var Ie=Fe;const ze={key:0,class:"app__list"};var je={__name:"FavoriteList",props:{list:{type:Array,default:[]}},setup(e){return(t,n)=>{const a=(0,o.resolveComponent)("router-link");return e.list.length>0?((0,o.openBlock)(),(0,o.createElementBlock)("ul",ze,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.list,(e=>((0,o.openBlock)(),(0,o.createElementBlock)("li",{key:e.id},[(0,o.createVNode)(a,{class:"app__list-link",to:`/favorite/${e.id}`},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,l.zw)(e.text),1)])),_:2},1032,["to"])])))),128))])):(0,o.createCommentVNode)("",!0)}}};const De=je;var Te=De;const Ae={class:"app__search"},Le={class:"undefined"},We=(0,o.createElementVNode)("h3",{class:"app__favorite"},"Избранное",-1);var Re={__name:"Favorite",setup(e){const t=(0,o.computed)((()=>(0,g.useStore)().state.undef)),n=(0,o.computed)((()=>(0,g.useStore)().state.foundCities));return(e,l)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",Ae,[(0,o.createVNode)(Ie),(0,o.withDirectives)((0,o.createElementVNode)("p",Le,"Ничего не найдено",512),[[a.F8,(0,r.unref)(t)]]),We,(0,o.createVNode)(Te,{list:(0,r.unref)(n)},null,8,["list"])]))}};const Ue=Re;var qe=Ue;const Je={class:"app__content"};var Ke={__name:"FavoriteId",setup(e){const t=(0,g.useStore)();(0,o.onMounted)((()=>{let e=+ct.currentRoute.value.params.id,n=t.state.foundCities.findIndex((t=>t.id==e));isNaN(e)&&ct.push("/"),-1==n&&ct.push("/");const a=t.state.foundCities[n].lat,o=t.state.foundCities[n].lon,l=t.state.APIKEY,r=t.state.host;let i=`${r}/data/2.5/weather?units=metric&lat=${a}&lon=${o}&lang=ru&APPID=${l}`,c=`${r}/data/2.5/forecast?lat=${a}&lon=${o}&cnt=5&lang=ru&units=metric&appid=${l}`;t.dispatch("getMainWeather",{url:i,url2:c})}));const n=(0,o.computed)((()=>t.state.dataPage));return(e,t)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",Je,[(0,o.createVNode)(j,{info:(0,r.unref)(n).daily},null,8,["info"]),(0,o.createVNode)(U,{info:(0,r.unref)(n).weekly},null,8,["info"]),(0,o.createVNode)(de,{info:(0,r.unref)(n).daily},null,8,["info"]),(0,o.createVNode)(ke,{info:(0,r.unref)(n).daily},null,8,["info"])]))}};const Ye=Ke;var Ze=Ye,Ge=n.p+"img/error.f5f21a5e.jpg";const Qe={class:"app__content"},Xe=(0,o.createElementVNode)("p",{class:"error"},[(0,o.createElementVNode)("span",{class:"glitch special1"},"404 Page Not Found"),(0,o.createElementVNode)("span",{class:"glitch special2"},"404 Page Not Found")],-1),et=(0,o.createElementVNode)("img",{src:Ge,alt:"",class:"error__image"},null,-1),tt=[Xe,et];function nt(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",Qe,tt)}const at={},ot=(0,p.Z)(at,[["render",nt]]);var lt=ot;const rt=[{path:"/",name:"home",component:Ce},{path:"/favorite",name:"favorite",component:qe},{path:"/favorite/:id",component:Ze},{path:"/:pathMatch(.*)*",component:lt}],it=(0,v.p7)({history:(0,v.PO)("/vue-weather/"),routes:rt});var ct=it;const st={class:"mobile"},ut={class:"app__navbar"},dt={class:"app__routes"};var pt={__name:"App",setup(e){const t=(0,g.useStore)(),n=t.state.imgs.imgs,i=(0,o.computed)((()=>t.state.indexImg)),c=(new Date).getHours(),s=(0,o.computed)((()=>c<19?n[i.value].bgday:n[i.value].bgnight)),u=ct.options.routes.filter((e=>!!e.name&&e));(0,r.ref)(null);return(0,o.onMounted)((()=>{t.dispatch("getMainWeather",{})})),(e,t)=>{const n=(0,o.resolveComponent)("router-link"),i=(0,o.resolveComponent)("router-view");return(0,o.openBlock)(),(0,o.createElementBlock)("div",st,[(0,o.createVNode)(f),(0,o.createElementVNode)("div",{class:(0,l.C_)(["app",{white:(0,r.unref)(c)>=19}]),style:(0,l.j5)(`background-image: url(${(0,r.unref)(s)})`)},[(0,o.createElementVNode)("div",ut,[(0,o.createElementVNode)("ul",dt,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)((0,r.unref)(u),(e=>((0,o.openBlock)(),(0,o.createElementBlock)("li",{key:e},[(0,o.createVNode)(n,{to:e.path},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)((0,l.zw)(e.name),1)])),_:2},1032,["to"])])))),128))])]),(0,o.createVNode)(i,null,{default:(0,o.withCtx)((({Component:t})=>[(0,o.createVNode)(a.uT,{name:"fade",mode:"out-in"},{default:(0,o.withCtx)((()=>[((0,o.openBlock)(),(0,o.createBlock)((0,o.resolveDynamicComponent)(t),{key:e.$route.path}))])),_:2},1024)])),_:1})],6)])}}};const mt=pt;var ft=mt,gt={state:{imgs:[{main:"clear",bgday:n(588),bgnight:n(7584)},{main:"rain",bgday:n(4950),bgnight:n(8237)},{main:"snow",bgday:n(4364),bgnight:n(6835)},{main:"clouds",bgday:n(3795),bgnight:n(1096)},{main:"fog",bgday:n(8054),bgnight:n(1178)}]}};n(1703);async function vt(e){let t=await fetch(e);if(t.ok)return t.json();throw alert("Oops something get wrong"),new Error(`Cannot connect to ${e}`)}async function _t(e,t){const[n,a]=await Promise.all([vt(e),vt(t)]);return{daily:n,weekly:a}}const ht="eca7e7cca0b2cd0c755f761a52e2d400",Nt="https://api.openweathermap.org",Vt=41.30108557176432,Et=69.26905977506551;let wt=localStorage.getItem("cities")?JSON.parse(localStorage.getItem("cities")):[];var yt=(0,g.createStore)({state:{data:{},dataPage:{},showHello:!0,indexImg:0,undef:!1,foundCities:wt,search:"",APIKEY:ht,host:Nt},mutations:{getMainWeather(e,t){"main"==t.page?e.data=t:e.dataPage=t},setHello(e,t){e.showHello=t},setIndexImg(e,t){e.indexImg=t},setUndef(e,t){e.undef=t},setFounds(e,t){e.foundCities.push(t),localStorage.setItem("cities",JSON.stringify(e.foundCities))},setSearch(e,t){e.search=t}},actions:{getMainWeather({state:e,commit:t},n){let a=`${Nt}/data/2.5/weather?units=metric&lat=${Vt}&lon=${Et}&lang=ru&APPID=${ht}`,o=`${Nt}/data/2.5/forecast?lat=${Vt}&lon=${Et}&cnt=5&lang=ru&units=metric&appid=${ht}`;_t(n.url||a,n.url2||o).then((a=>{const o=n.url?"other":"main";t("getMainWeather",{...a,page:o}),console.log(a),t("setHello",!1);let l=e.imgs.imgs.findIndex((e=>e.main==a.daily.weather[0].main.toLowerCase()));t("setIndexImg",l)})).catch((e=>{console.log(e),t("setHello",!1)}))},searchResult({state:e,commit:t},n){let a=`${Nt}/geo/1.0/direct?q=${n}&appid=${ht}`;vt(a).then((n=>{const a=e.foundCities.length,o=a>0?e.foundCities[e.foundCities.length-1].id+1:1;if(n.length>0){const a={id:o,lat:n[0].lat,lon:n[0].lon,text:n[0].name};e.foundCities.length>0?e.foundCities.every((e=>e.text.toLowerCase()!=n[0].name.toLowerCase()&&e))&&t("setFounds",a):t("setFounds",a),t("setUndef",!1),t("setSearch","")}else t("setUndef",!0)}))}},modules:{imgs:gt}});(0,a.ri)(ft).use(yt).use(ct).mount("#root")},3795:function(e,t,n){e.exports=n.p+"img/clouds-day.96429d4d.png"},1096:function(e,t,n){e.exports=n.p+"img/clouds-night.44a33cd8.png"},8054:function(e,t,n){e.exports=n.p+"img/fog-day.5d7a1af1.png"},1178:function(e,t,n){e.exports=n.p+"img/fog-night.280d6fca.png"},4950:function(e,t,n){e.exports=n.p+"img/rain-day.921e76c6.png"},8237:function(e,t,n){e.exports=n.p+"img/rain-night.e61f17bb.png"},4364:function(e,t,n){e.exports=n.p+"img/snow-day.cff87a9b.png"},6835:function(e,t,n){e.exports=n.p+"img/snow-night.032d3d92.png"},588:function(e,t,n){e.exports=n.p+"img/sunny-day.5c885fd9.png"},7584:function(e,t,n){e.exports=n.p+"img/sunny-night.c9cf81a6.png"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var l=t[a]={exports:{}};return e[a](l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,l){if(!a){var r=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],l=e[u][2];for(var i=!0,c=0;c<a.length;c++)(!1&l||r>=l)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(i=!1,l<r&&(r=l));if(i){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[a,o,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/vue-weather/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,l,r=a[0],i=a[1],c=a[2],s=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var u=c(n)}for(t&&t(a);s<r.length;s++)l=r[s],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},a=self["webpackChunkweather_app_vue"]=self["webpackChunkweather_app_vue"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(8804)}));a=n.O(a)})();
//# sourceMappingURL=app.125ba545.js.map