(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{17:function(e,t,a){e.exports=a(44)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),l=a(2),i=a(3),s=a(5),m=a(4),d=a(16),u=a.n(d),h=(a(39),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){window.onscroll=function(e){this.oldScroll<this.scrollY?document.getElementById("header__swipe").style.display="none":document.getElementById("header__swipe").style.display="block",this.oldScroll=this.scrollY};var e=window.innerWidth;document.getElementById("header__swipe--text").innerHTML=e<1200?"Swipe up to scroll":"Scroll down"}},{key:"render",value:function(){var e=this.props;return r.a.createElement("div",{className:"header totalCenter columnFlex"},r.a.createElement("div",{className:"header__details totalCenter"},r.a.createElement("h1",{className:"header__details--header"},e.name),r.a.createElement("p",{className:"header__details--job"},e.job),r.a.createElement("div",{className:"header__buttons"},r.a.createElement("a",{className:"header__details--contact-btn secondary-btn",href:"mailto:".concat(e.contact)},"CONTACT"),r.a.createElement("a",{className:"header__details--contact-btn primary-btn",href:e.resume,target:"_blank",rel:"noopener noreferrer"},"RESUME")),r.a.createElement("div",{className:"header__details--social"},r.a.createElement("ul",null,e.socials.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:e.link,target:e.newTab?"_blank":null},r.a.createElement("img",{src:e.icon,alt:"".concat(e.label)}),e.label))}))))),r.a.createElement("div",{className:"header__swipe",id:"header__swipe"},r.a.createElement("p",{className:"header__swipe--text",id:"header__swipe--text"}),r.a.createElement("div",{className:"header__swipe--bar"})))}}]),a}(n.Component)),p=(a(40),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props;return r.a.createElement("div",{className:"about-me totalCenter"},r.a.createElement("div",{className:"wrapper totalCenter"},r.a.createElement("img",{className:"about-me__image",alt:"about me",src:e.image}),r.a.createElement("div",{className:"about-me__details totalCenter"},r.a.createElement("p",{className:"about-me__details--text"},e.description))))}}]),a}(n.Component)),b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={data:{header:{name:"",job:"",contact:"",resume:"",social:[]},about:{description:"",image:""}}},e}return Object(i.a)(a,[{key:"getData",value:function(){var e=this;u.a.get("https://api.npoint.io/088987bfa1f605d108a5").then((function(t){var a=t.data;e.setState({data:a})}))}},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{name:e.header.name,job:e.header.job,socials:e.header.social,contact:e.header.contact,resume:e.header.resume}),r.a.createElement(p,{description:e.about.description,image:e.about.image}))}}]),a}(r.a.Component);a(41),a(42),a(43),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.7d610b53.chunk.js.map