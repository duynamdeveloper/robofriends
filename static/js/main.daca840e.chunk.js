(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,n,t){e.exports=t(31)},28:function(e,n,t){},30:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(9),i=t.n(a),c=t(2),s=t(3),l=t(5),u=t(4),d=t(6),h=t(10),f=function(e){var n=e.name,t=e.email,o=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null," ",n," "),r.a.createElement("p",null," ",t," ")))},p=function(e){var n=e.robots;return n.map(function(e,t){return r.a.createElement(f,{key:n[t].id,name:n[t].name,email:n[t].email,id:n[t].id})})},b=function(e){var n=e.searchChange;return r.a.createElement("div",{className:"pa3"},r.a.createElement("label",{className:"pr3 color--primary-blue f4"},"SEARCH ROBO: "),r.a.createElement("input",{placeholder:"search robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",onChange:n}))},g=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"600px",border:"2px solid #333"}},e.children)},E=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).state={hasError:!1},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null," SOMETHING WENT WRONG "):this.props.children}}]),n}(o.Component),m=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(s.a)(n,[{key:"shouldComponentUpdate",value:function(e,n){return e.isPending!==this.props.isPending}},{key:"render",value:function(){return console.log("Header"),this.props.isPending?r.a.createElement("h1",null,"Loading"):r.a.createElement("h1",{className:"f1"}," Robo Friends ")}}]),n}(r.a.Component),v=(t(28),function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,o=e.robots,a=e.isPending,i=o.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement(m,{isPending:a}),r.a.createElement(b,{searchChange:t}),r.a.createElement(g,null,r.a.createElement(E,null,r.a.createElement(p,{robots:i}))))}}]),n}(o.Component)),O=Object(h.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}},function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})}).catch(function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})})})}}})(v),w=t(7),y=t(17),R=t(18),j=(t(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function S(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(30);var C={searchField:""},k={isPending:!1,robots:[]},N=Object(R.createLogger)(),T=Object(w.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:n.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}}}),_=Object(w.d)(T,Object(w.a)(y.a,N));i.a.render(r.a.createElement(h.a,{store:_},r.a.createElement(O,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/robofriends","/service-worker.js");j?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):S(n,e)})}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.daca840e.chunk.js.map