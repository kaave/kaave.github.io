(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{422:function(t,e,n){var content=n(425);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("61f2564a",content,!0,{sourceMap:!1})},423:function(t,e,n){var content=n(429);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("02289434",content,!0,{sourceMap:!1})},424:function(t,e,n){"use strict";var r=n(422);n.n(r).a},425:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,".SectionBreak[data-v-0c123075]{border:0;padding:0;margin:15vw auto;width:30vw;height:1px;background:hsla(0,0%,94.1%,.8)}@media (min-width:768px){.SectionBreak[data-v-0c123075]{margin:50px auto;max-width:200px}}",""])},426:function(t,e,n){"use strict";n(424);var r=n(6),component=Object(r.a)({},function(t,e){return(0,e._c)("hr",{staticClass:"SectionBreak"})},[],!0,null,"0c123075",null);e.a=component.exports},428:function(t,e,n){"use strict";var r=n(423);n.n(r).a},429:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,'.Breadcrumb[data-v-af4b3490]{z-index:1;position:relative;width:100%;padding-top:5vw;font-size:3.75vw}@media (min-width:768px){.Breadcrumb[data-v-af4b3490]{font-size:1.5392vw;padding-top:5rem}}@media (min-width:1040px){.Breadcrumb[data-v-af4b3490]{font-size:1.6rem}}.Breadcrumb__inner[data-v-af4b3490]{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:100%;padding:0 4vw}@media (min-width:768px){.Breadcrumb__inner[data-v-af4b3490]{max-width:1040px;padding:0 20px;margin:auto}}.List[data-v-af4b3490]{width:100%;padding:.3em}.Cell[data-v-af4b3490],.List[data-v-af4b3490]{position:relative}.Cell[data-v-af4b3490]{color:#111}.Cell+.Cell[data-v-af4b3490]>:before{content:">";padding-right:.5em}.Cell>*[data-v-af4b3490]{position:relative;display:inline-block;padding:0 .5em;line-height:1;color:currentColor;background:hsla(0,0%,94.1%,.8)}.Cell[data-v-af4b3490]>:after{content:"";position:absolute;top:0;left:0;display:block;width:100%;height:100%;background:#111;transform-origin:right;transition:transform .2s cubic-bezier(.19,1,.22,1) .3s}.-visible .Cell[data-v-af4b3490]>:after{transform:scaleX(0)}.Cell:nth-child(2)>*[data-v-af4b3490]{margin-left:.5em}.Cell:nth-child(3)>*[data-v-af4b3490]{margin-left:1em}.Link[data-v-af4b3490]{font-style:italic}.Link[data-v-af4b3490],.Link[data-v-af4b3490]:active,.Link[data-v-af4b3490]:hover{text-decoration:none}',""])},430:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return f});var r=n(4),o=t.env.HOST||"localhost",d=parseInt(t.env.PORT||"3000",10),l=t.env.BASE_URL||"http://"+o+":"+d,c=["default","es2015","es2016","es2017","IntersectionObserver"],m={url:l,title:"kaave.github.io",description:"愛知県在住ソフトウェアエンジニアの@kaaveこと安部亨佑のWebサイトです。",image:l+"/images/ogp.jpg"};function h(t,e){void 0===e&&(e=!1);var meta=r.d([{hid:"description",name:"description",content:t.description},{hid:"itempropName",itemprop:"name",content:t.title},{hid:"itempropDesc",itemprop:"description",content:t.description},{hid:"itempropImage",itemprop:"image",content:t.image}],function(t,e){void 0===e&&(e=!1);var n=[{property:"og:title",content:t.title},{property:"og:description",content:t.description},{property:"og:image",content:t.image},{property:"og:url",content:t.url},{property:"og:site_name",content:t.title}];return e&&n.push({property:"og:type",content:"website"}),n}(t,e));return e&&(meta.push({charset:"utf-8"}),meta.push({name:"viewport",content:"width=device-width, initial-scale=1"}),meta.push({hid:"format-detection",name:"format-detection",content:"email=no,telephone=no,address=no"}),meta.push({property:"twitter:card",content:"summary_large_image"})),meta}function f(t,e){void 0===t&&(t={}),void 0===e&&(e=!1);var n,title,o,image,d,l,f=(title=(n=t).title,o=n.description,image=n.image,d=n.url,l=r.a({},m),title&&(l.title=title.force?title.content:""+title.content+m.title),o&&(l.description=o.force?o.content:""+m.description+o.content),image&&(l.image=image.force?image.content:""+m.image+image.content),d&&(l.url=d.force?d.content:""+m.url+d.content),l);return r.a({title:f.title},e?{htmlAttrs:{lang:"ja"},title:f.title,meta:h(f,!0),link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],script:[{src:"https://polyfill.io/v3/polyfill.min.js?features="+c.join("%2C")+"&flags=gated",type:"text/javascript",body:!0,defer:!0,crossorigin:"anonymous"}]}:{title:f.title,meta:h(f)})}}).call(this,n(43))},433:function(t,e,n){var content=n(444);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("7cbbb8bd",content,!0,{sourceMap:!1})},434:function(t,e,n){"use strict";n(83);var r=n(4),o=n(2),d={isVisible:!1},l=o.default.extend({components:{},props:{routes:{type:Array,default:function(){return[]}}},data:function(){return r.a({},d)},computed:{getVisibilityClass:function(){return this.isVisible?"-visible":""}},methods:{nl2br:function(s){return s.replace(/[\r\n|\r|\n]/g,"<br>$&")},visibilityChanged:function(t,e){t&&(this.isVisible=!0)}}}),c=(n(428),n(6)),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,intersection:{threshold:[.4]},once:!0},expression:"{ callback: visibilityChanged, intersection: { threshold: [0.4] }, once: true }"}],staticClass:"Breadcrumb"},[n("div",{staticClass:"Breadcrumb__inner",class:t.getVisibilityClass},[n("ol",{staticClass:"List"},t._l(t.routes||[],function(e){var r=e.to,desc=e.desc;return n("li",{key:r,staticClass:"Cell"},[r?n("nuxt-link",{staticClass:"Link",attrs:{to:r}},[t._v(t._s(desc))]):n("span",{staticClass:"Current"},[t._v(t._s(desc))])],1)}),0)])])},[],!1,null,"af4b3490",null);e.a=component.exports},443:function(t,e,n){"use strict";var r=n(433);n.n(r).a},444:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,'.LTs__lts[data-v-b7021284]{width:100%}.LTs__lts-cell[data-v-b7021284]:not(:first-child){margin-top:1em}.LTs__list[data-v-b7021284]{width:100%}@media (min-width:768px){.LTs__list[data-v-b7021284]{display:-ms-grid;display:grid;-ms-grid-rows:auto;-ms-grid-columns:1fr 3% 1fr 3% 1fr;grid-template:"cell1 cell2 cell3" auto/1fr 1fr 1fr;grid-gap:3%;gap:3%}}.LTs__cell[data-v-b7021284]{line-height:1.8;opacity:0;transition:opacity .3s ease-out}.-visible .LTs__cell[data-v-b7021284]{opacity:1}@media (max-width:767px){.LTs__cell[data-v-b7021284]:not(:first-child){margin-top:1em}}.LTs__cell[data-v-b7021284]:first-child{transition-delay:.5s}@media (min-width:768px){.LTs__cell[data-v-b7021284]:first-child{grid-area:cell1}}.LTs__cell[data-v-b7021284]:nth-child(2){transition-delay:.6s}@media (min-width:768px){.LTs__cell[data-v-b7021284]:nth-child(2){grid-area:cell2}}.LTs__cell[data-v-b7021284]:nth-child(3){transition-delay:.7s}@media (min-width:768px){.LTs__cell[data-v-b7021284]:nth-child(3){grid-area:cell3}}@media (min-width:768px){.LTs__cell[data-v-b7021284]:first-child{-ms-grid-row:1;-ms-grid-column:1}.LTs__cell[data-v-b7021284]:nth-child(2){-ms-grid-row:1;-ms-grid-column:3}.LTs__cell[data-v-b7021284]:nth-child(3){-ms-grid-row:1;-ms-grid-column:5}}.LTs__show[data-v-b7021284]{position:relative;display:block;width:100%;color:#fff;background-size:cover;background-position:50%;background-repeat:no-repeat}.LTs__show[data-v-b7021284],.LTs__show[data-v-b7021284]:active,.LTs__show[data-v-b7021284]:hover{text-decoration:none}@media (min-width:768px){.LTs__show[data-v-b7021284]{height:100%}}.LTs__show-border[data-v-b7021284]{position:absolute;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;transition:transform .2s cubic-bezier(.19,1,.22,1);background:currentColor}.LTs__show-border.-top[data-v-b7021284]{top:0;left:0;width:100%;height:1px;transform-origin:left center;transform:scaleX(0)}.LTs__show-border.-right[data-v-b7021284]{top:0;right:0;width:1px;height:100%;transform-origin:top center;transform:scaleY(0)}.LTs__show-border.-bottom[data-v-b7021284]{bottom:0;left:0;width:100%;height:1px;transform-origin:right center;transform:scaleX(0)}.LTs__show-border.-left[data-v-b7021284]{top:0;left:0;width:1px;height:100%;transform-origin:bottom center;transform:scaleY(0)}.LTs__show:hover .LTs__show-border[data-v-b7021284]{transform:scaleX(1)}.LTs__show-inner[data-v-b7021284]{display:-ms-grid;display:grid;-ms-grid-rows:auto 1fr;-ms-grid-columns:1fr;grid-template:"LTs__date" auto "LTs__title" 1fr/1fr;padding:0 1vw;width:100%;background-color:rgba(0,0,0,.4)}@media (min-width:768px){.LTs__show-inner[data-v-b7021284]{padding:1.2em 1.5em;height:100%}}.LTs__date[data-v-b7021284]{-ms-grid-row:1;-ms-grid-column:1;grid-area:LTs__date;width:100%;font-size:3.75vw;padding:.5em 0;line-height:1.2}@media (min-width:768px){.LTs__date[data-v-b7021284]{font-size:1.924vw;padding-top:0}}@media (min-width:1040px){.LTs__date[data-v-b7021284]{font-size:2rem}}.LTs__title[data-v-b7021284]{-ms-grid-row:2;-ms-grid-column:1;grid-area:LTs__title;width:100%}@media (min-width:768px){.LTs__title[data-v-b7021284]{font-size:2.3088vw;line-height:1.6}}@media (min-width:1040px){.LTs__title[data-v-b7021284]{font-size:2.4rem}}',""])},445:function(t,e,n){var content=n(475);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("4155d3b3",content,!0,{sourceMap:!1})},453:function(t,e,n){"use strict";var r=n(4),o=n(2),d=n(435),l=n.n(d),c={isVisible:!1},m=o.default.extend({components:{},props:{lts:{type:Array,default:function(){return[]}}},data:function(){return r.a({},c)},computed:{divideLTs:function(){var t=[];return this.lts.map(function(t,i){return{lt:t,index:Math.floor(i/3)}}).forEach(function(e){var n=e.lt,i=e.index;return t[i]=r.d(t[i]?t[i]:[],[n])}),t}},methods:{getDateString:function(t){return l()(t,"MMM, D YYYY")},getLink:function(t){return l()(t,"YYYY-MM-DD")}}}),h=(n(443),n(6)),component=Object(h.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"LTs__lts"},t._l(t.divideLTs,function(e,i){return n("li",{key:i,staticClass:"LTs__lts-cell"},[n("ul",{staticClass:"LTs__list"},t._l(e,function(e){var r=e.date,o=e.eventName,title=e.title,link=(e.description,e.link);return n("li",{key:title,staticClass:"LTs__cell"},[n("a",{staticClass:"LTs__show",attrs:{href:link,target:"_blank",rel:"noopener"}},[t._l(["top","right","bottom","left"],function(t){return n("span",{key:t,staticClass:"LTs__show-border",class:"-"+t,attrs:{role:"presentation"}})}),t._v(" "),n("div",{staticClass:"LTs__show-inner"},[n("div",{staticClass:"LTs__date"},[t._v(t._s(t.getDateString(r))+" @ "+t._s(o))]),t._v(" "),n("div",{staticClass:"LTs__title"},[t._v(t._s(title))])])],2)])}),0)])}),0)},[],!1,null,"b7021284",null);e.a=component.exports},474:function(t,e,n){"use strict";var r=n(445);n.n(r).a},475:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,'.Main[data-v-6cabdf28]{z-index:1;position:relative;padding-top:10vw}@media (min-width:768px){.Main[data-v-6cabdf28]{padding-top:5rem}}.Main__inner[data-v-6cabdf28]{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:100%;padding:0 4vw}@media (min-width:768px){.Main__inner[data-v-6cabdf28]{max-width:1040px;padding:0 20px;margin:auto}}.header[data-v-6cabdf28]{width:100%;font-size:7.5vw;line-height:1;margin-bottom:.5em;opacity:0;transition:opacity .3s ease-out}@media (min-width:768px){.header[data-v-6cabdf28]{font-size:3.848vw;margin-bottom:1.5em}}@media (min-width:1040px){.header[data-v-6cabdf28]{font-size:4rem}}.-visible .header[data-v-6cabdf28]{opacity:1;animation:show-header 1.2s cubic-bezier(.19,1,.22,1) forwards}.desc[data-v-6cabdf28]{line-height:1.6}@media (min-width:768px){.desc[data-v-6cabdf28]{font-size:1.5392vw}}@media (min-width:1040px){.desc[data-v-6cabdf28]{font-size:1.6rem}}.Year[data-v-6cabdf28]{width:100%;margin-top:20vw}@media (min-width:768px){.Year[data-v-6cabdf28]{margin-top:10rem}}.Year__header[data-v-6cabdf28]{position:relative;display:inline-block;font-size:5.357vw;padding:0 .5em;margin-bottom:.5em;background:rgba(0,221,102,.3)}@media (min-width:768px){.Year__header[data-v-6cabdf28]{font-size:2.6936vw}}@media (min-width:1040px){.Year__header[data-v-6cabdf28]{font-size:2.8rem}}.Year__header[data-v-6cabdf28]:before{content:"";position:absolute;top:-1em;left:0;display:block;width:1em;height:1px;background:currentColor}.Year__entry-list[data-v-6cabdf28]{width:100%}',""])},496:function(t,e,n){"use strict";n.r(e);var r=n(4),o=n(2),d=n(453),l=n(426),c=n(434),m=n(430),h={isVisible:!1},f={SectionBreak:l.a,LtList:d.a,Breadcrumb:c.a},v=o.default.extend({components:f,head:function(){return Object(m.a)({title:{content:"lts | "},description:{content:"過去に発表したLTの一覧です。"}})},data:function(){return r.a({},h)},computed:{lts:function(){var t=this.$store.state.lts.lts;return t.map(function(t){return{lt:t,year:t.date.getFullYear()}}).reduce(function(t,e){var n,o=e.year,d=e.lt;return r.a({},t,((n={})[o]=r.d(t[o]?t[o]:[],[d]),n))},{})},getVisibilityClass:function(){return this.isVisible?"-visible":""},routes:function(){return[{to:"/",desc:"Top"},{desc:"lts"}]}},methods:{visibilityChanged:function(t,e){t&&(this.isVisible=!0)}}}),_=(n(474),n(6)),component=Object(_.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("breadcrumb",{attrs:{routes:t.routes}}),t._v(" "),n("main",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,intersection:{threshold:[.4]},once:!0},expression:"{ callback: visibilityChanged, intersection: { threshold: [0.4] }, once: true }"}],staticClass:"Main",attrs:{id:"main",role:"main"}},[n("div",{staticClass:"Main__inner",class:t.getVisibilityClass},[n("h2",{staticClass:"header"},[t._v("lts")]),t._v(" "),n("p",{staticClass:"desc"},[t._v("過去にしゃべくり倒したLTです。情報が古いものも多々ありますのでご注意ください。")]),t._v(" "),t._l(Object.keys(t.lts).sort().reverse(),function(e){return n("section",{key:e,staticClass:"Year"},[n("h3",{staticClass:"Year__header"},[t._v(t._s(e))]),t._v(" "),n("lt-list",{staticClass:"Year__entry-list",attrs:{lts:t.lts[e]}})],1)})],2)])],1)},[],!1,null,"6cabdf28",null);e.default=component.exports}}]);