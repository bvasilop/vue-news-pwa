webpackJsonp([1],[,,,,,,function(t,a,e){"use strict";var s=e(26);a.a={name:"app",components:{HeadNav:s.a}}},function(t,a,e){"use strict";a.a={name:"HeadNav"}},function(t,a,e){"use strict";var s=e(34),n=e(37),i=e(11);a.a={name:"app",components:{SourceSelection:s.a,Newslist:n.a,FootComp:i.a},data:function(){return{source:""}},methods:{sourceChanged:function(t){this.source=t}}}},function(t,a,e){"use strict";a.a={name:"SourceSelection",data:function(){return{sources:[],source:""}},methods:{sourceChanged:function(t){var a=this;this.sources.forEach(function(e){a.sources.id==t.target.value&&(a.source=a.sources)}),this.$emit("sourceChanged",t.target.value)}},created:function(){var t=this;this.axios.get("https://newsapi.org/v2/sources?language=en&apiKey=30fdd9c8493742eebe75a786fc36f1bd").then(function(a){t.sources=a.data.sources}).catch(function(a){t.errors.push(a)})}}},function(t,a,e){"use strict";a.a={name:"Newslist",props:["source"],data:function(){return{articles:[],errors:[]}},methods:{updateSource:function(t){var a=this;this.axios.get("https://newsapi.org/v2/top-headlines?sources="+t+"&apiKey=30fdd9c8493742eebe75a786fc36f1bd").then(function(t){console.log(t.data),a.articles=t.data.articles}).catch(function(t){})}},created:function(){this.updateSource(this.source)},watch:{source:function(t){this.updateSource(t)}}}},function(t,a,e){"use strict";function s(t){e(40)}var n=e(12),i=e(41),r=e(1),o=s,c=r(n.a,i.a,!1,o,"data-v-a0607a50",null);a.a=c.exports},function(t,a,e){"use strict";a.a={name:"FootComp"}},function(t,a,e){"use strict";a.a={name:"About",data:function(){return{msg:"This project is a responsive web application that leverages Vue JS, Axios, Node JS and News API. Hosted on a secure network to allow for service workers to cache content and allow resources to be available offline. It also provides up to the minute news content from over 50 news sources and access to the news organization's websites."}}}},function(t,a,e){"use strict";e(11);a.a={name:"Contact",components:{},data:function(){return{msg:"If you are interested in connecting with me about other web projects, I'd love to hear from you!"}}}},,,,,,function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(4),n=e(23),i=e(30),r=e(51),o=e.n(r),c=e(70),l=e.n(c);s.a.config.productionTip=!1,s.a.use(l.a,o.a),new s.a({el:"#app",router:i.a,template:"<App/>",components:{App:n.a}})},,,function(t,a,e){"use strict";function s(t){e(24)}var n=e(6),i=e(29),r=e(1),o=s,c=r(n.a,i.a,!1,o,null,null);a.a=c.exports},function(t,a){},,function(t,a,e){"use strict";function s(t){e(27)}var n=e(7),i=e(28),r=e(1),o=s,c=r(n.a,i.a,!1,o,"data-v-6581f1f8",null);a.a=c.exports},function(t,a){},function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-inverse"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"navbar-header"},[t._m(0),t._v(" "),e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),t._v(" Daily News and Weather")])],1),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[e("ul",{staticClass:"nav navbar-nav"},[e("li",[e("router-link",{attrs:{to:"/about"}},[t._v("About"),e("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/contact"}},[t._v("Contact"),e("span",{staticClass:"sr-only"},[t._v("(current)")])])],1)])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"}},[e("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),e("span",{staticClass:"icon-bar"}),t._v(" "),e("span",{staticClass:"icon-bar"}),t._v(" "),e("span",{staticClass:"icon-bar"})])}],i={render:s,staticRenderFns:n};a.a=i},function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"fadeInDownBig"}},[e("div",{staticClass:"animated fadeInDownBig"},[e("div",{staticClass:"container",attrs:{id:"app"}},[e("HeadNav"),t._v(" "),e("router-view")],1)])])},n=[],i={render:s,staticRenderFns:n};a.a=i},function(t,a,e){"use strict";var s=e(4),n=e(31),i=e(32),r=e(43),o=e(48);s.a.use(n.a),a.a=new n.a({routes:[{path:"/",name:"Home",component:i.a},{path:"/About",name:"About",component:r.a},{path:"/Contact",name:"Contact",component:o.a}]})},,function(t,a,e){"use strict";function s(t){e(33)}var n=e(8),i=e(42),r=e(1),o=s,c=r(n.a,i.a,!1,o,"data-v-228f56ca",null);a.a=c.exports},function(t,a){},function(t,a,e){"use strict";function s(t){e(35)}var n=e(9),i=e(36),r=e(1),o=s,c=r(n.a,i.a,!1,o,"data-v-04bfe6b9",null);a.a=c.exports},function(t,a){},function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sourceselection"},[e("div",{staticClass:"jumbotron"},[t._m(0),t._v(" "),e("h4",[t._v(" Select News Source")]),t._v(" "),e("meta",{attrs:{name:"description",content:""}}),t._v(" "),e("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1.0"}}),t._v(" "),e("select",{staticClass:"form-control",on:{change:t.sourceChanged}},t._l(t.sources,function(a){return e("option",{domProps:{value:a.id}},[t._v(t._s(a.name))])})),t._v(" "),t.source?e("div",[e("h6",[t._v(t._s(t.source.description))]),t._v(" "),e("a",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{href:t.source.url,target:"blank"}},[t._v("Go To "+t._s(t.source.name)+" Website")]),t._v(" "),t.errors&&t.errors.length?e("ul",t._l(t.errors,function(a){return e("li",[t._v("\n      "+t._s(a.message)+"\n    ")])})):t._e()]):t._e()])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h2",[e("span",{staticClass:"fa fa-newspaper-o"}),t._v("Daily News")])}],i={render:s,staticRenderFns:n};a.a=i},function(t,a,e){"use strict";function s(t){e(38)}var n=e(10),i=e(39),r=e(1),o=s,c=r(n.a,i.a,!1,o,"data-v-0bcca4f1",null);a.a=c.exports},function(t,a){},function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"newslist"},[e("div",{staticClass:"flex-container"},[e("ul",{staticClass:"media-list"},t._l(t.articles,function(a){return e("li",{staticClass:"media"},[e("div",{staticClass:"media-left"},[e("a",{attrs:{href:a.url,target:"_blank"}},[e("img",{staticClass:"media-object",attrs:{src:a.urlToImage}})])]),t._v(" "),e("div",{staticClass:"media-body"},[e("h4",{staticClass:"media-heading"},[e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.title))])]),t._v(" "),e("h5",[e("i",[t._v("by "+t._s(a.author))])]),t._v(" "),e("p",[t._v(t._s(a.description))])])])})),t._v(" "),t.errors&&t.errors.length?e("ul",t._l(t.errors,function(a){return e("li",[t._v("\n        "+t._s(a.message)+"\n      ")])})):t._e()])])},n=[],i={render:s,staticRenderFns:n};a.a=i},function(t,a){},function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container text-center"},[e("small",{staticClass:"copyright"},[e("i",{staticClass:"fa fa-newspaper-o",attrs:{"aria-hidden":"true"}}),t._v(" "),e("a",{attrs:{href:"https://www.billvas.com","data-toggle":"tooltip",title:"Visit my portfolio site at billvas.com"}},[t._v("   Made by Bill Vasilopoulos 2018")])])])])}],i={render:s,staticRenderFns:n};a.a=i},function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("SourceSelection",{on:{sourceChanged:t.sourceChanged}}),t._v(" "),e("Newslist",{attrs:{source:t.source}}),t._v(" "),e("FootComp")],1)},n=[],i={render:s,staticRenderFns:n};a.a=i},function(t,a,e){"use strict";function s(t){e(44)}var n=e(13),i=e(45),r=e(1),o=s,c=r(n.a,i.a,!1,o,"data-v-7010fe35",null);a.a=c.exports},function(t,a){},function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v(t._s(t.msg))])])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"primary col-md-12 col-sm-12 col-xs-12"},[s("img",{staticClass:"img-responsive",attrs:{src:e(46),id:"news-icon",height:"130",width:"127",alt:"Newspaper image"}}),t._v(" "),s("img",{staticClass:"img-responsive",attrs:{src:e(47),id:"weather-icon",height:"165",width:"155",alt:"Cloud image"}}),t._v(" "),s("h1",[t._v("Daily News and Weather")]),s("br")])}],i={render:s,staticRenderFns:n};a.a=i},function(t,a,e){t.exports=e.p+"static/img/news.7a568ec.png"},function(t,a,e){t.exports=e.p+"static/img/weather.9c7833f.png"},function(t,a,e){"use strict";function s(t){e(49)}var n=e(14),i=e(50),r=e(1),o=s,c=r(n.a,i.a,!1,o,"data-v-5548986a",null);a.a=c.exports},function(t,a){},function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"primary col-md-12 col-sm-12 col-xs-12"},[e("h1",[t._v("Contact Me")]),t._v(" "),e("div",{staticClass:"content"},[e("p",[t._v(t._s(t.msg))]),t._v(" "),t._m(0)])]),t._v(" "),t._m(1)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("ul",{staticClass:"social list-inline"},[e("li",[e("a",{attrs:{href:"https://www.facebook.com/facebook","data-toggle":"tooltip",title:"Visit me on Facebook",target:"_blank"}},[e("i",{staticClass:"fa fa-facebook",attrs:{"aria-hidden":"true"}})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.instagram.com/","data-toggle":"tooltip",title:"Visit me on Instagram",target:"_blank"}},[e("i",{staticClass:"fa fa-instagram",attrs:{"aria-hidden":"true"}})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.linkedin.com/","data-toggle":"tooltip",title:"Look me up on LinkedIn",target:"_blank"}},[e("i",{staticClass:"fa fa-linkedin",attrs:{"aria-hidden":"true"}})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/bvasilop","data-toggle":"tooltip",title:"Check out my projects on Github",target:"_blank"}},[e("i",{staticClass:"fa fa-github-alt",attrs:{"aria-hidden":"true"}})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://slack.com/","data-toggle":"tooltip",title:"Let's chat on Slack"}},[e("i",{staticClass:"fa fa-slack",attrs:{"aria-hidden":"true"}})])]),t._v(" "),e("li",{staticClass:"last-item"},[e("a",{attrs:{href:"mailto:bvasilop@gmail.com",target:"_blank","data-toggle":"tooltip",title:"Send me an Email"}},[e("i",{staticClass:"fa fa-envelope-o",attrs:{"aria-hidden":"true"}})])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("a",{staticClass:"btn btn-cta-primary",attrs:{a:"",href:"https://www.billvas.com","data-toggle":"tooltip",title:"Visit my portfolio site at billvas.com"}},[e("i",{staticClass:"fa fa-address-card",attrs:{"aria-hidden":"true"}}),t._v(" Bill Vasilopoulos")])])}],i={render:s,staticRenderFns:n};a.a=i}],[20]);
//# sourceMappingURL=app.b18c5ef125929ddb24f5.js.map