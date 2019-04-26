(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(e,a,t){e.exports=t.p+"static/media/logo.b15ef947.jpg"},55:function(e,a,t){e.exports=t(80)},60:function(e,a,t){},75:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(45),r=t.n(l),s=(t(60),t(17)),m=t(18),u=t(22),i=t(19),o=t(23),h=t(53),p=t(21),E=t(20),b=t(14),d=t(29),g=t(16),f=t.n(g),_=t(32),y=t.n(_),N=t(46),v=t.n(N);function k(e){var a=e.launch,t=a.flight_number,n=a.mission_name,l=a.launch_date_local,r=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission:"," ",c.a.createElement("span",{className:y()({"text-success":r,"text-danger":!r})},n)),c.a.createElement("p",null,"Date: ",c.a.createElement(v.a,{format:"YYYY-MM-DD HH:mm"},l))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(E.b,{to:"/launch/".concat(t),className:"btn btn-secondary"},"Launch Details"))))}function j(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Fail"))}function O(){var e=Object(d.a)(["\n    query LaunchesQuery {\n        launches {\n            flight_number\n            mission_name\n            launch_date_local\n            launch_success\n        }\n    }\n"]);return O=function(){return e},e}var w=f()(O()),x=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("h1",{className:"display-4 my-3"},"Launches"),c.a.createElement(j,null),c.a.createElement(p.b,{query:w},function(e){var a=e.loading,t=e.error,l=e.data;return a?c.a.createElement("h4",null,"Loading..."):(t&&console.log(t),c.a.createElement(n.Fragment,null,l.launches.map(function(e){return c.a.createElement(k,{key:e.flight_number,launch:e})})))}))}}]),a}(n.Component);function L(){var e=Object(d.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return L=function(){return e},e}var D=f()(L()),F=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(n.Fragment,null,c.a.createElement(p.b,{query:D,variables:{flight_number:e}},function(e){var a=e.loading,t=e.error,n=e.data;if(a)return c.a.createElement("h4",null,"Loading...");t&&console.log(t);var l=n.launch,r=l.mission_name,s=l.flight_number,m=l.launch_year,u=l.launch_success,i=l.rocket,o=i.rocket_id,h=i.rocket_name,p=i.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission: "),r),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",s),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),c.a.createElement("li",{className:"list-group-item"},"Launch Successful:"," ",c.a.createElement("span",{className:y()({"text-success":u,"text-danger":!u})},u?"Yes":"No")),c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",s)),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",o),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",p)),c.a.createElement("hr",null),c.a.createElement(E.b,{to:"",className:"btn btn-secondary"},"Back"))}))}}]),a}(n.Component),Y=(t(75),t(52)),q=t.n(Y),I=new h.a({uri:"/graphql"}),M=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(p.a,{client:I},c.a.createElement(E.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:q.a,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}}),c.a.createElement(b.a,{exact:!0,path:"/",component:x}),c.a.createElement(b.a,{exact:!0,path:"/launch/:flight_number",component:F}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[55,1,2]]]);
//# sourceMappingURL=main.ce402232.chunk.js.map