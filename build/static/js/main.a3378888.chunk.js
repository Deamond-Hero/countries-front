(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,n){e.exports={PaginatedContainer:"Paginated_PaginatedContainer__3A_GD",active:"Paginated_active__1nE9u",prev:"Paginated_prev__M2XF3",Pages:"Paginated_Pages__VwCts"}},31:function(e,t,n){e.exports={cardConteiner:"Card_cardConteiner__e04UT",info:"Card_info__3BLwW",conteinerImg:"Card_conteinerImg__2HPgU"}},35:function(e,t,n){e.exports={FilterBarContainer:"FilterBar_FilterBarContainer__2ljzM",SearchBar:"FilterBar_SearchBar__2zfWc"}},36:function(e,t,n){e.exports={landing:"Landing_landing__204oq"}},37:function(e,t,n){e.exports={background:"Detail_background__-IVL6",detailContainer:"Detail_detailContainer__2JyjG"}},38:function(e,t,n){e.exports={NavContainer:"NavBar_NavContainer__2BBDY",active:"NavBar_active__2oEX1",routes:"NavBar_routes__2DDvu"}},42:function(e,t,n){e.exports={cards:"CardsContainer_cards__3fqHl"}},43:function(e,t,n){e.exports={Home:"Home_Home__1zzLM"}},44:function(e,t,n){e.exports={Footer:"Footer_Footer__P209l"}},64:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(25),r=n.n(a),i=n(12),o=n(7),s=n(30),l=n(3),u=n(16),j=n(19),d=n(65),b="GET_ALL_COUNTRIES",O="COUNTRY_BY_ID",p="COUNTRY_BY_NAME",h="GET_ALL_ACTIVITIES",f="FILTER_BY_CONTINENT",v="FILTER_BY_ACTIVITIES",x="SORT",m=function(){return function(){var e=Object(j.a)(Object(u.a)().mark((function e(t){var n,c;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/countries");case 2:n=e.sent,c=n.data,console.log(c),t({type:b,payload:c});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(){return function(){var e=Object(j.a)(Object(u.a)().mark((function e(t){var n,c;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/activities");case 2:n=e.sent,c=n.data,t({type:h,payload:c});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_={countries:[],detail:[],activities:[],countriesFilter:[]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(l.a)(Object(l.a)({},e),{},{countries:t.payload,countriesFilter:t.payload});case O:return Object(l.a)(Object(l.a)({},e),{},{detail:t.payload});case h:return Object(l.a)(Object(l.a)({},e),{},{activities:t.payload});case p:return Object(l.a)(Object(l.a)({},e),{},{countriesFilter:t.payload});case f:var n="All"===t.payload?e.countries:e.countries.filter((function(e){return e.continent===t.payload}));return Object(l.a)(Object(l.a)({},e),{},{countriesFilter:n});case v:var c="All"===t.payload?e.countries:e.countriesFilter.filter((function(e){return e.Activities&&e.Activities.filter((function(e){return t.payload.includes(e.name)})).length}));return Object(l.a)(Object(l.a)({},e),{},{countriesFilter:c});case x:var a;return"selectFilter"===t.payload&&(a=e.countries),2===t.payload.length?(a="AZ"===t.payload?e.countries.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})):e.countries.sort((function(e,t){return e.name>t.name?-1:e.name<t.name?1:0})),console.log(e.countries),console.log(t.payload)):(a="populationAsc"===t.payload?e.countries.sort((function(e,t){return e.population-t.population})):e.countries.sort((function(e,t){return t.population-e.population})),console.log(a)),Object(l.a)(Object(l.a)({},e),{},{countriesFilter:a});default:return Object(l.a)({},e)}},y=n(41),N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.b,A=Object(s.c)(C,N(Object(s.a)(y.a))),S=n(9),E=n(31),F=n.n(E),I=n(0),P=function(e){return Object(I.jsx)("div",{className:F.a.cardConteiner,children:Object(I.jsx)("div",{className:F.a.info,children:Object(I.jsxs)(i.b,{to:"/country/".concat(e.id),children:[Object(I.jsx)("h1",{children:e.name}),Object(I.jsx)("div",{className:F.a.conteinerImg,children:Object(I.jsx)("img",{src:e.imageFlag,alt:"no disponible"})}),Object(I.jsxs)("p",{children:["Continent: ",e.continent]})]})})})},k=n(23),B=n.n(k),D=function(e){Object(o.c)((function(e){return e.countriesFilter}));return Object(I.jsxs)("div",{className:B.a.PaginatedContainer,children:[Object(I.jsx)("div",{children:Object(I.jsx)("h1",{children:e.currentPage})}),Object(I.jsxs)("div",{className:B.a.Pages,children:[Object(I.jsx)("button",{onClick:e.prevHandler,className:B.a.prev,children:"Prev"}),console.log(e.pageCountries),e.totalPages.map((function(t){return Object(I.jsx)("button",{onClick:e.actualPage,value:e.totalPages.indexOf(t)+1,children:e.totalPages.indexOf(t)+1})})),Object(I.jsx)("button",{onClick:e.nextHandler,className:B.a.prev,children:"Next"})]})]})},T=n(35),R=n.n(T),H=function(){var e=Object(o.b)(),t=Object(c.useState)(""),n=Object(S.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){e(function(e){return function(){var t=Object(j.a)(Object(u.a)().mark((function t(n){var c,a;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("/countries?name=".concat(e));case 2:c=t.sent,a=c.data,n({type:p,payload:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(a))}),[a,e]),Object(I.jsx)("div",{children:Object(I.jsx)("input",{onChange:function(e){r(e.target.value)},type:"text",placeholder:"Search Countries.."})})},w=function(e){var t=Object(o.b)(),n=Object(o.c)((function(e){return e.activities}));Object(c.useEffect)((function(){t(g())}),[t]);var a=Object(c.useRef)(null),r=Object(c.useRef)(null),i=Object(c.useRef)(null);return Object(c.useEffect)((function(){t(m())}),[t]),Object(I.jsx)("div",{children:Object(I.jsxs)("div",{className:R.a.FilterBarContainer,children:[Object(I.jsx)("div",{className:R.a.SearchBar,children:Object(I.jsx)(H,{})}),Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{children:"Order:  "}),Object(I.jsxs)("select",{onChange:e.orderHandler,name:"order",ref:a,children:[Object(I.jsx)("option",{value:"selectFilter",children:"Select Filter"}),Object(I.jsx)("option",{value:"AZ",children:"Name A-Z"}),Object(I.jsx)("option",{value:"ZA",children:"Name Z-A"}),Object(I.jsx)("option",{value:"populationAsc",children:"Population Asc"}),Object(I.jsx)("option",{value:"populationDesc",children:"Population Desc"})]})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{children:"Filter by Continent:  "}),Object(I.jsxs)("select",{onChange:e.continentHandler,name:"continents",ref:r,children:[Object(I.jsx)("option",{value:"All",children:"All Continents"}),Object(I.jsx)("option",{value:"Africa",children:"Africa"}),Object(I.jsx)("option",{value:"South America",children:"South America"}),Object(I.jsx)("option",{value:"Antarctica",children:"Antarctica"}),Object(I.jsx)("option",{value:"Asia",children:"Asia"}),Object(I.jsx)("option",{value:"Europe",children:"Europe"}),Object(I.jsx)("option",{value:"North America",children:"North America"}),Object(I.jsx)("option",{value:"Oceania",children:"Oceania"})]})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("label",{children:"Filter by Activity:  "}),Object(I.jsxs)("select",{onChange:e.activitiesHandler,name:"activities",ref:i,children:[Object(I.jsx)("option",{value:"All",children:"All"}),n.map((function(e){return Object(I.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]}),Object(I.jsx)("div",{children:Object(I.jsx)("button",{onClick:function(e){e.preventDefault(),a.current.value="selectFilter",r.current.value="All",i.current.value="All",t(m())},children:"Reload"})})]})})},L=n(42),M=n.n(L),Y=function(e){var t=Object(o.b)(),n=Object(o.c)((function(e){return e.countriesFilter}));Object(c.useEffect)((function(){t(m())}),[t]);for(var a=Object(c.useState)(0),r=Object(S.a)(a,2),i=r[0],s=r[1],l=Object(c.useState)(10),u=Object(S.a)(l,2),j=u[0],d=u[1],b=n.length,O=[],p=1;p<=Math.ceil(b/10);p++)O.push(p);var h=Object(c.useState)(1),g=Object(S.a)(h,2),_=g[0],C=g[1],y=n.slice(i,j);console.log(y);console.log(i),console.log(j),console.log(_),Object(c.useEffect)((function(){s(i),d(j)}),[_]);var N=Object(c.useState)(""),A=Object(S.a)(N,2),E=A[0],F=A[1];return console.log(E),Object(c.useEffect)((function(){t({type:x,payload:E})}),[E,t]),Object(I.jsxs)("div",{children:[Object(I.jsx)("div",{children:Object(I.jsx)(w,{currentPage:_,nameHandler:function(e){t({type:"FILTER_BY_NAME",payload:e.target.value}),C(1),s(0),d(10),console.log(e.target.value)},activitiesHandler:function(e){var n;t((n=e.target.value,{type:v,payload:n})),C(1),s(0),d(10),console.log(e.target.value)},continentHandler:function(e){var n;t((n=e.target.value,{type:f,payload:n})),C(1),s(0),d(10),console.log(e.target.value)},orderHandler:function(e){F(e.target.value),C(1),s(0),d(10)}})}),Object(I.jsx)("div",{className:M.a.cards,children:y.map((function(e){return Object(I.jsx)(P,{name:e.name,id:e.id,imageFlag:e.imageFlag,continent:e.continent,capital:e.capital,subRegion:e.subRegion,area:e.area,population:e.population,activities:e.Activities},e.id)}))}),Object(I.jsx)("div",{children:Object(I.jsx)(D,{totalPages:O,actualPage:function(e){e.preventDefault(),C(parseInt(e.target.value)),console.log(e.target.value);var t=10*parseInt(e.target.value)-10,n=t+10;console.log(_),console.log(t),console.log(n),s(t),d(n),console.log(_)},pageCountries:y,currentPage:_,nextHandler:function(){var e=_+1,t=i+10,n=j+10;console.log(t),console.log(n),y.length<10||t!==b&&(s(t),d(n),C(parseInt(e)),console.log(_))},prevHandler:function(){var e=j-10;1!==_&&(s(i-10),d(e),C(parseInt(_)-1),console.log(_))}})})]})},q=n(43),G=n.n(q),U=function(){var e=Object(o.b)();return Object(c.useEffect)((function(){e(m())}),[e]),Object(I.jsx)("div",{className:G.a.Home,children:Object(I.jsx)(Y,{})})},Z=n(36),X=n.n(Z),z=function(){return Object(I.jsx)("div",{className:X.a.landing,children:Object(I.jsx)("a",{href:"/countries",children:Object(I.jsx)("button",{className:X.a.button,children:"Welcome"})})})},V=n(45),W=n(15),J=n(8),K=n.n(J),Q=n(6),$=function(){var e=Object(c.useState)({name:"",dificulty:"",duration:"",season:"",countries:[]}),t=Object(S.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({name:"",dificulty:"",duration:"",season:"",countries:""}),s=Object(S.a)(r,2),b=s[0],O=s[1],p=[],h=Object(c.useState)({countries:[]}),f=Object(S.a)(h,2),v=f[0],x=f[1],_=Object(o.c)((function(e){return e.countries})),C=Object(o.b)(),y=Object(Q.e)();Object(c.useEffect)((function(){C(g())}),[C]),Object(c.useEffect)((function(){C(m())}),[C]);console.log(v);var N=function(e){v.length&&e.preventDefault();var t=v.countries.filter((function(t){return t.id!==e.target.value}));x({countries:t}),a(Object(l.a)(Object(l.a)({},n),{},{countries:t.map((function(e){return e.id}))})),console.log(e.target.value),console.log(v)};function A(e,t){e.preventDefault(),n.name||p.push("Request Name"),n.dificulty||p.push("Request Dificulty"),n.season||p.push("Request Season"),n.duration||p.push("Request Duration"),"0"===n.duration&&p.push("Choose value greater than 0 hours"),n.countries[0]||p.push("Request Country/Countries"),p.length?(alert("Missing data to create activity: ".concat(p.join(", "))),p=[]):(C(function(e){return function(){var t=Object(j.a)(Object(u.a)().mark((function t(n){var c;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.post("/activities",e);case 2:return c=t.sent,console.log(c),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n)),a({name:"",difficulty:"",duration:"",season:"",countries:[]}),y.push("./countries"),alert("activity Created!"))}return Object(I.jsxs)("div",{className:K.a.background,children:[Object(I.jsx)("div",{className:K.a.title,children:Object(I.jsx)("h1",{children:"Create Activity"})}),Object(I.jsx)("div",{className:K.a.createCountainer,children:Object(I.jsxs)("form",{onSubmit:function(e){return A(e)},className:K.a.create,children:[Object(I.jsxs)("div",{children:[Object(I.jsxs)("div",{className:K.a.component,children:[Object(I.jsx)("label",{children:"Name: "}),Object(I.jsx)("input",{type:"text",value:n.name,name:"name",onChange:function(e){var t=e.target.name,c=e.target.value;a(Object(l.a)(Object(l.a)({},n),{},Object(W.a)({},t,c))),function(e){""===e.name?O(Object(l.a)(Object(l.a)({},b),{},{name:"This field can not be blank"}))&&p.push(b.name):O(Object(l.a)(Object(l.a)({},b),{},{name:""}))}(Object(l.a)(Object(l.a)({},n),{},Object(W.a)({},t,c)))}}),b.name&&Object(I.jsx)("span",{children:b.name})]}),Object(I.jsxs)("div",{className:K.a.component,children:[Object(I.jsx)("label",{children:"Dificulty: "}),b.dificulty&&Object(I.jsx)("span",{children:b.dificulty}),Object(I.jsx)("input",{id:"dificultActivitie",type:"range",value:n.dificulty,name:"dificulty",min:"1",max:"5",onChange:function(e){var t=e.target.name,c=e.target.value;a(Object(l.a)(Object(l.a)({},n),{},Object(W.a)({},t,c))),function(e){""===e.dificulty?O(Object(l.a)(Object(l.a)({},b),{},{dificulty:p.push(b.dificulty)})):O(Object(l.a)(Object(l.a)({},b),{},{dificulty:""}))}(Object(l.a)(Object(l.a)({},n),{},Object(W.a)({},t,c)))}}),Object(I.jsx)("p",{id:"dificulty",children:n.dificulty})]}),Object(I.jsxs)("div",{className:K.a.component,children:[Object(I.jsx)("label",{children:"Duration: "}),b.duration&&Object(I.jsx)("span",{children:b.duration}),Object(I.jsx)("br",{}),Object(I.jsx)("input",{type:"range",value:n.duration,name:"duration",min:"0",max:"24",onChange:function(e){var t=e.target.name,c=e.target.value;a(Object(l.a)(Object(l.a)({},n),{},Object(W.a)({},t,c))),function(e){""===e.duration?O(Object(l.a)(Object(l.a)({},b),{},{duration:"It is necessary to add duration"})):O(Object(l.a)(Object(l.a)({},b),{},{duration:""}))}(Object(l.a)(Object(l.a)({},n),{},Object(W.a)({},t,c)))}}),Object(I.jsxs)("p",{id:"duration",children:[n.duration," hs"]})]}),Object(I.jsxs)("div",{className:K.a.component,children:[Object(I.jsx)("label",{children:"Season: "}),Object(I.jsxs)("select",{type:"checkbox",checked:"checked",value:n.season,name:"season",onChange:function(e){var t=e.target.name,c=e.target.value;a(Object(l.a)(Object(l.a)({},n),{},Object(W.a)({},t,c))),function(e){"Select Season"===e.season||""===e.season?O(Object(l.a)(Object(l.a)({},b),{},{season:"Need to add season"})):O(Object(l.a)(Object(l.a)({},b),{},{season:""}))}(Object(l.a)(Object(l.a)({},n),{},Object(W.a)({},t,c)))},children:[Object(I.jsx)("option",{children:"Select Season"}),Object(I.jsx)("option",{children:"Winter"}),Object(I.jsx)("option",{children:"Summer"}),Object(I.jsx)("option",{children:"Fall"}),Object(I.jsx)("option",{children:"Spring"})]}),b.season&&Object(I.jsx)("span",{children:b.season})]}),Object(I.jsxs)("div",{className:K.a.component,children:[Object(I.jsx)("label",{children:"Countries: "}),Object(I.jsx)("br",{}),Object(I.jsxs)("select",{id:"countries",name:"countries",children:[Object(I.jsx)("option",{children:"Select Countries"}),_.map((function(e){return Object(I.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(I.jsx)("button",{type:"button",onClick:function(e){x({countries:v.countries.concat(_.filter((function(e){return e.id.includes(document.getElementById("countries").value)})))}),a(Object(l.a)(Object(l.a)({},n),{},{countries:[].concat(Object(V.a)(n.countries),[document.getElementById("countries").value])}))},name:"addCountry",value:"add",children:"Add"})]})]}),Object(I.jsxs)("div",{className:K.a.component,children:[Object(I.jsx)("label",{children:"Countries Add: "}),Object(I.jsxs)("div",{id:"countries",children:[v.countries.map((function(e){return Object(I.jsx)("div",{className:K.a.cardsAdds,children:Object(I.jsx)("div",{id:e.id,value:e.id,className:K.a.cardConteiner,children:Object(I.jsxs)("div",{className:K.a.info,children:[Object(I.jsx)("h1",{children:e.name}),Object(I.jsx)("div",{className:K.a.conteinerImg,children:Object(I.jsx)("img",{src:e.imageFlag,alt:"flag"})}),b.countries&&Object(I.jsx)("span",{children:b.countries}),Object(I.jsx)("div",{children:Object(I.jsx)("button",{name:"adds",value:e.id,type:"button",onClick:N,className:K.a.x,children:"X"})})]})},e.id)})})),Object(I.jsx)("div",{className:K.a.submit,children:Object(I.jsx)("button",{type:"Submit",children:"Create activity!"})})]})]})]})}),Object(I.jsx)(i.b,{to:"/countries",children:Object(I.jsx)("button",{className:K.a.componentbutton,value:"Go to Countries",type:"button",children:"Go to Countries"})})]})},ee=n(37),te=n.n(ee),ne=function(){var e=Object(o.c)((function(e){return e.detail})),t=Object(o.b)(),n=Object(Q.g)();return console.log(n),Object(c.useEffect)((function(){var e;t((e=n.id,function(){var t=Object(j.a)(Object(u.a)().mark((function t(n){var c,a;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("/countries/".concat(e));case 2:c=t.sent,a=c.data,n({type:O,payload:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[n.id,t]),console.log(e),Object(I.jsx)("div",{className:te.a.background,children:Object(I.jsxs)("div",{className:te.a.detailContainer,children:[Object(I.jsxs)("div",{children:[Object(I.jsxs)("h1",{children:["Name: ",e.name]}),Object(I.jsxs)("h2",{children:["ID: ",e.id]}),Object(I.jsx)("img",{src:e.imageFlag,alt:"No found"}),Object(I.jsxs)("p",{children:["Continent: ",e.continent]}),Object(I.jsxs)("p",{children:["Capital: ",e.capital]}),e.Subregion&&Object(I.jsxs)("p",{children:["Subregion: ",e.Subregion]}),Object(I.jsxs)("p",{children:["Area: ",e.area]}),Object(I.jsxs)("p",{children:["Population: ",e.population]})]}),Object(I.jsx)("div",{children:Object(I.jsx)(i.b,{to:"/countries",children:Object(I.jsx)("button",{type:"button",children:"Go to Countries"})})})]})})},ce=n(38),ae=n.n(ce),re=function(){return Object(I.jsx)("div",{className:ae.a.NavContainer,children:Object(I.jsxs)("div",{className:ae.a.routes,children:[Object(I.jsx)(i.b,{to:"/",children:"Landing"}),Object(I.jsx)(i.b,{to:"/countries",children:"Countries"}),Object(I.jsx)(i.b,{to:"/Create",children:"Create Activity"})]})})},ie=n(44),oe=n.n(ie),se=function(){return Object(I.jsx)("p",{className:oe.a.Footer,children:"SPA desarrollada por Leandro Brangi durante Proyecto Individual de Henry aplicando conocimientos adquiridos durante el bootcamp."})};var le=function(){var e=Object(Q.f)();return Object(I.jsxs)("div",{className:"App",children:["/"!==e.pathname&&Object(I.jsx)(re,{}),Object(I.jsx)(Q.a,{exact:!0,path:"/",component:z}),Object(I.jsx)(Q.a,{path:"/countries",render:function(){return Object(I.jsx)(U,{})}}),Object(I.jsx)(Q.a,{path:"/country/:id",render:function(){return Object(I.jsx)(ne,{})}}),Object(I.jsx)(Q.a,{path:"/create",component:$}),"/"!==e.pathname&&Object(I.jsx)(se,{})]})};d.a.defaults.baseURL="https://countries-back-production-a139.up.railway.app/",r.a.render(Object(I.jsx)(o.a,{store:A,children:Object(I.jsx)(i.a,{children:Object(I.jsx)(le,{})})}),document.getElementById("root"))},8:function(e,t,n){e.exports={background:"Create_background__3MnuY",createCountainer:"Create_createCountainer__3MBTs",create:"Create_create__oPE-I",title:"Create_title__EXg7n",component:"Create_component__12nTs",componentbutton:"Create_componentbutton__YizHj",submit:"Create_submit__33KDj",cardConteiner:"Create_cardConteiner__33idZ",info:"Create_info__2n4ap",cardsAdds:"Create_cardsAdds__33LAY",conteinerImg:"Create_conteinerImg__2lx84",card:"Create_card__15PFm",x:"Create_x__ZMxue"}}},[[64,1,2]]]);
//# sourceMappingURL=main.a3378888.chunk.js.map