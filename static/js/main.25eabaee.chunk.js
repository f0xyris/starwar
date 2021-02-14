(this["webpackJsonpreact-starwars"]=this["webpackJsonpreact-starwars"]||[]).push([[0],{42:function(e,t,r){},44:function(e,t,r){},45:function(e,t,r){},46:function(e,t,r){},47:function(e,t,r){},48:function(e,t,r){},50:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(1),c=r.n(a),s=r(21),i=r.n(s),o=r(8),u=r(12),l=(r(42),function(){return Object(n.jsx)("div",{className:"header container-fluid",children:Object(n.jsxs)("div",{className:"container d-flex align-items-center header-wrapper",children:[Object(n.jsx)("h4",{className:"header-logo flex-grow-1",children:Object(n.jsx)(u.b,{to:"/starwar",children:"Star Wars"})}),Object(n.jsxs)("ul",{className:"d-flex header-nav",children:[Object(n.jsx)("li",{children:Object(n.jsx)(u.b,{to:"/favorites",children:"Favorite"})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.b,{to:"/peoples",children:"People"})})]})]})})}),p=r(4),j=r(5),d=r(7),f=r(10),b=r(9),O=function(e){Object(f.a)(r,e);var t=Object(b.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){var e=this.props.favoriteItems.map((function(e){return Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("i",{className:"fa fa-".concat(e.gender," fa-cog"),"aria-hidden":"true"}),Object(n.jsx)("span",{className:"people-list-item_name",children:e.name})]},e.id)}));return Object(n.jsx)("div",{className:"container-fluid flex-grow-1 page favorite-page",children:Object(n.jsx)("div",{className:"container default-page",children:Object(n.jsx)("ul",{className:"people-list list-group",children:e})})})}}]),r}(a.Component),m=Object(o.b)((function(e){return{favoriteItems:e.favoriteItems}}))(O),h=r(32),v=r(2),x=c.a.createContext(),E=x.Provider,g=x.Consumer,I=function(){return function(e){return function(t){return Object(n.jsx)(g,{children:function(r){return Object(n.jsx)(e,Object(v.a)(Object(v.a)({},t),{},{starwarService:r}))}})}}},_=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},S=function(e){var t=e.item,r=e.value,a=e.idx;return Object(n.jsxs)("li",{className:"list-group-item",children:[t,Object(n.jsx)("span",{children:r})]},a)},y=function(e,t){return function(){t({type:"FETCH_PEOPLE_REQUEST"}),e.getAllPeopleData().then((function(e){return t({type:"FETCH_PEOPLE_SUCCESS",payload:e})})).catch((function(e){return t({type:"FETCH_PEOPLE_FAILURE",payload:e})}))}},C=function(e,t){return function(){t({type:"FETCH_PEOPLE_REQUEST"}),e.getAllFilmsData().then((function(e){return t({type:"FETCH_FILMS_SUCCESS",payload:e})})).catch((function(e){return t({type:"FETCH_FILMS_FAILURE",payload:e})}))}},N=function(e,t){return function(){t({type:"FETCH_PEOPLE_REQUEST"}),e.getAllStarshipsData().then((function(e){return t({type:"FETCH_STARSHIPS_SUCCESS",payload:e})})).catch((function(e){return t({type:"FETCH_STARSHIPS_FAILURE",payload:e})}))}},w=function(e,t){return function(){t({type:"FETCH_PEOPLE_REQUEST"}),e.getAllSpeciesData().then((function(e){return t({type:"FETCH_SPECIES_SUCCESS",payload:e})})).catch((function(e){return t({type:"FETCH_SPECIES_FAILURE",payload:e})}))}},F=function(e){Object(f.a)(r,e);var t=Object(b.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){var e=this.props,t=e.selectedItem,r=e.onAddToFavorite,a=e.favoriteItems,c=e.onRemoveFromFavorite,s=t.name,i=t.height,o=t.mass,u=t.hair_color,l=t.skin_color,p=t.eye_color,j=t.birth_year,d=t.gender,f=a.findIndex((function(e){return e.id===t.id})),b={height:i,mass:o,hair_color:u,skin_color:l,eye_color:p,birth_year:j,gender:d},O=Object.entries(b).map((function(e){var t=Object(h.a)(e,3),r=t[0],a=t[1],c=t[2];return r=(r=r.charAt(0).toUpperCase()+r.slice(1)).split("_").join(" "),"n/a"!==a&&"unknown"!==a||(a="-"),Object(n.jsx)(S,{item:r,value:a,idx:c})}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"d-flex flex-grow-1 justify-content-between",children:[Object(n.jsx)("h3",{className:"active-item__name",children:s}),f<0?Object(n.jsx)("button",{onClick:function(){return r()},className:"btn btn-secondary",children:"Add to favorite"}):Object(n.jsx)("button",{onClick:function(){return c()},className:"btn btn-danger",children:"Remove item from favorite"})]}),Object(n.jsx)("ul",{className:"list-group",children:O})]})}}]),r}(a.Component),T=_(I(),Object(o.b)((function(e){return{selectedItem:e.selectedItem,favoriteItems:e.favoriteItems}}),(function(e){return{onAddToFavorite:function(){return e({type:"ON_ADD_TO_FAVORITE"})},onRemoveFromFavorite:function(){return e({type:"ON_REMOVE_FROM_FAVORITE"})}}})))(F),P=function(e){var t=e.item,r=e.idx;return Object(n.jsx)("li",{className:"list-group-item",children:t.title},r)},A=(r(44),function(){return Object(n.jsx)("div",{className:"spinner",children:Object(n.jsx)("div",{className:"atom-spinner",children:Object(n.jsxs)("div",{className:"spinner-inner",children:[Object(n.jsx)("div",{className:"spinner-line"}),Object(n.jsx)("div",{className:"spinner-line"}),Object(n.jsx)("div",{className:"spinner-line"}),Object(n.jsx)("div",{className:"spinner-circle",children:"\u25cf"})]})})})}),R=function(e){Object(f.a)(r,e);var t=Object(b.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"componentDidMount",value:function(){this.props.fetchFilms()}},{key:"render",value:function(){var e=this.props,t=e.filmsItem;return e.loading?Object(n.jsx)(A,{}):Object(n.jsx)("ul",{className:"list-group",children:t.map((function(e,t){return Object(n.jsx)(P,{item:e,idx:t})}))})}}]),r}(a.Component),k=_(I(),Object(o.b)((function(e){return{filmsItem:e.filmsItem,loading:e.loading}}),(function(e,t){var r=t.starwarService;return{fetchFilms:C(r,e)}})))(R),H=function(e){var t=e.item,r=e.idx;return Object(n.jsx)("li",{className:"list-group-item",children:t.name},r)},U=function(e){Object(f.a)(r,e);var t=Object(b.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"componentDidMount",value:function(){this.props.fetchSpecies()}},{key:"render",value:function(){var e=this.props,t=e.speciesItem;return e.loading?Object(n.jsx)(A,{}):Object(n.jsx)("ul",{className:"list-group",children:t.map((function(e,t){return Object(n.jsx)(H,{item:e,idx:t})}))})}}]),r}(a.Component),L=_(I(),Object(o.b)((function(e){return{speciesItem:e.speciesItem,loading:e.loading}}),(function(e,t){var r=t.starwarService;return{fetchSpecies:w(r,e)}})))(U),D=function(e){var t=e.item,r=e.idx;return Object(n.jsx)("li",{className:"list-group-item",children:t.model},r)},M=function(e){Object(f.a)(r,e);var t=Object(b.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"componentDidMount",value:function(){this.props.fetchStarships()}},{key:"render",value:function(){var e=this.props,t=e.starshipsItem;return e.loading?Object(n.jsx)(A,{}):Object(n.jsx)("ul",{className:"list-group",children:t.map((function(e,t){return Object(n.jsx)(D,{item:e,idx:t})}))})}}]),r}(a.Component),Q=_(I(),Object(o.b)((function(e){return{starshipsItem:e.starshipsItem,loading:e.loading}}),(function(e,t){var r=t.starwarService;return{fetchStarships:N(r,e)}})))(M),V=function(e){switch(e.itemId){case"films":return Object(n.jsx)(k,{});case"starships":return Object(n.jsx)(Q,{});case"species":return Object(n.jsx)(L,{});default:return!1}},J=function(e){var t=e.match;return Object(n.jsx)("div",{className:"container-fluid flex-grow-1 page",children:Object(n.jsxs)("div",{className:"container default-page",children:[Object(n.jsx)(T,{}),Object(n.jsxs)("div",{className:"btn-group",role:"group",children:[Object(n.jsx)(u.b,{className:"btn btn-secondary",to:"".concat(t.url,"/films"),children:"Films"}),Object(n.jsx)(u.b,{className:"btn btn-secondary",to:"".concat(t.url,"/starships"),children:"Starships"}),Object(n.jsx)(u.b,{className:"btn btn-secondary",to:"".concat(t.url,"/species"),children:"Species"})]}),Object(n.jsx)(p.a,{path:"".concat(t.url,"/:id"),render:function(e){var t=e.match.params.id;return Object(n.jsx)(V,{itemId:t})}})]})})},X=(r(45),function(e){var t=e.item,r=t.name,a=t.gender;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("i",{className:"fa fa-".concat(a," fa-cog"),"aria-hidden":"true"}),Object(n.jsx)("span",{className:"people-list-item_name",children:r})]})}),B=(r(46),function(e){var t=e.onItemSelected,r=e.filteredProducts,a=e.onIncreaseCount;return e.loading?Object(n.jsx)(A,{}):Object(n.jsxs)("div",{className:"",children:[Object(n.jsx)("ul",{className:"people-list list-group",children:r&&r.map((function(e,r){return Object(n.jsx)(u.b,{to:"/details",onClick:function(){return t(e.id)},className:"list-group-item",children:Object(n.jsx)(X,{item:e})},r)}))}),Object(n.jsx)("div",{className:"pagination",children:Object(n.jsx)("button",{className:"btn btn-secondary",onClick:function(){return a()},children:"More people"})})]})}),G=function(e){Object(f.a)(r,e);var t=Object(b.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"componentDidMount",value:function(){this.props.fetchPeople()}},{key:"render",value:function(){var e=this.props,t=e.onItemSelected,r=e.onIncreaseCount,a=e.filteredProducts,c=e.loading;return Object(n.jsx)(B,{onItemSelected:t,onIncreaseCount:r,filteredProducts:a,loading:c})}}]),r}(a.Component),$=_(I(),Object(o.b)((function(e){return{filteredProducts:e.filteredProducts,loading:e.loading}}),(function(e,t){var r=t.starwarService;return{fetchPeople:y(r,e),onItemSelected:function(t){return e({type:"ON_ITEM_SELECTED",payload:t})},onIncreaseCount:function(){return e({type:"ON_INCREASE_COUNT"})}}})))(G),W=function(e){Object(f.a)(r,e);var t=Object(b.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){var e=this.props.onInputChange;return Object(n.jsx)("div",{className:"d-flex flex-grow-1",children:Object(n.jsx)("input",{className:"flex-grow-1 searchField",onChange:function(t){return e(t.target.value)},type:"text",placeholder:"Try to search any hero..."})})}}]),r}(a.Component),q=Object(o.b)(null,(function(e){return{onInputChange:function(t){return e(function(e){return{type:"ON_INPUT_CHANGE",payload:e}}(t))}}}))(W),z=(r(47),function(e){Object(f.a)(r,e);var t=Object(b.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"container-fluid flex-grow-1 page",children:Object(n.jsxs)("div",{className:"container default-page",children:[Object(n.jsx)(q,{}),Object(n.jsx)($,{})]})})}}]),r}(a.Component)),K=Object(o.b)((function(e){return{loading:e.loading}}))(z),Y=(r(48),r.p+"static/media/starwar-bg.79db3e4a.jpg"),Z=function(){return Object(n.jsxs)("main",{role:"main",className:"starwars-app",children:[Object(n.jsx)(l,{}),Object(n.jsxs)(p.c,{children:[Object(n.jsx)(p.a,{path:"/starwar/",render:function(){return Object(n.jsx)("img",{className:"flex-grow-1",src:Y,alt:"starwar-background"})}}),Object(n.jsx)(p.a,{path:"/favorites/",component:m}),Object(n.jsx)(p.a,{path:"/peoples/",component:K}),Object(n.jsx)(p.a,{path:"/details/",component:J})]})]})},ee=function(){return Object(n.jsx)("div",{children:"Error!"})},te=function(e){Object(f.a)(r,e);var t=Object(b.a)(r);function r(){var e;Object(j.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(d.a)(r,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(n.jsx)(ee,{}):this.props.children}}]),r}(a.Component),re=r(6),ne=r.n(re),ae=r(17),ce=r(16),se=r(23),ie={people:[],loading:!1,error:null,selectedItem:[],filmsItem:[],filmsItemId:[],starshipsItem:[],starshipsItemId:[],speciesItem:[],speciesItemId:[],filteredProducts:[],allPeople:[],favoriteItems:[]},oe=10,ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.type),t.type){case"FETCH_PEOPLE_REQUEST":return Object(v.a)(Object(v.a)({},e),{},{people:[],loading:!0,error:null});case"FETCH_PEOPLE_SUCCESS":var r=t.payload,n=r.slice(0,oe);return Object(v.a)(Object(v.a)({},e),{},{people:n,allPeople:r,filteredProducts:n,loading:!1,error:null});case"FETCH_PEOPLE_FAILURE":return Object(v.a)(Object(v.a)({},e),{},{people:[],loading:!1,error:t.payload});case"FETCH_FILMS_REQUEST":return Object(v.a)(Object(v.a)({},e),{},{filmsItem:[],loading:!0,error:null});case"FETCH_FILMS_SUCCESS":var a=t.payload,c=e.filmsItemId.map((function(e){return a[e-1]}));return Object(v.a)(Object(v.a)({},e),{},{filmsItem:c,loading:!1,error:null});case"FETCH_FILMS_FAILURE":return Object(v.a)(Object(v.a)({},e),{},{filmsItem:[],loading:!1,error:t.payload});case"FETCH_STARSHIPS_REQUEST":return Object(v.a)(Object(v.a)({},e),{},{starshipsItem:[],loading:!0,error:null});case"FETCH_STARSHIPS_SUCCESS":var s=t.payload,i=s.filter((function(t){return-1!==e.starshipsItemId.indexOf(t.id)}));return Object(v.a)(Object(v.a)({},e),{},{starshipsItem:i,loading:!1,error:null});case"FETCH_STARSHIPS_FAILURE":return Object(v.a)(Object(v.a)({},e),{},{starshipsItem:[],loading:!1,error:t.payload});case"FETCH_SPECIES_REQUEST":return Object(v.a)(Object(v.a)({},e),{},{speciesItem:[],loading:!0,error:null});case"FETCH_SPECIES_SUCCESS":var o=t.payload,u=e.allSpecies.map((function(e){return o[e-1]}));return Object(v.a)(Object(v.a)({},e),{},{speciesItem:u,loading:!1,error:null});case"FETCH_SPECIES_FAILURE":return Object(v.a)(Object(v.a)({},e),{},{speciesItem:[],loading:!1,error:t.payload});case"ON_ITEM_SELECTED":var l=t.payload,p=e.people.find((function(e){return e.id===l})),j=p.films,d=p.starships,f=p.species,b=/\/([0-9]*)\/$/,O=j.map((function(e){return e.match(b)[1]})),m=d.map((function(e){return e.match(b)[1]})),h=f.map((function(e){return e.match(b)[1]}));return Object(v.a)(Object(v.a)({},e),{},{selectedItem:p,filmsItemId:O,starshipsItemId:m,speciesItemId:h});case"ON_INPUT_CHANGE":var x=t.payload,E=Object.assign({},e),g=e.people,I=g.filter((function(e){return e.name.toLowerCase().includes(x.toLowerCase())}));return E.filteredProducts=""!==x?I:E.people,E;case"ON_INCREASE_COUNT":oe+=10;var _=Object.assign({},e);return _.filteredProducts=e.allPeople.slice(0,oe),_.people=_.filteredProducts,_;case"ON_ADD_TO_FAVORITE":var S=e.favoriteItems,y=e.selectedItem,C=S.findIndex((function(e){return e.id===y.id}));return C<0?Object(v.a)(Object(v.a)({},e),{},{favoriteItems:[].concat(Object(ae.a)(S),[y])}):Object(v.a)(Object(v.a)({},e),{},{favoriteItems:[].concat(Object(ae.a)(S.slice(0,C)),[y],Object(ae.a)(S.slice(C+1)))});case"ON_REMOVE_FROM_FAVORITE":var N=e.favoriteItems.findIndex((function(t){return t.id===e.selectedItem.id}));return N<0?Object(v.a)({},e):Object(v.a)(Object(v.a)({},e),{},{favoriteItems:[].concat(Object(ae.a)(e.favoriteItems.slice(0,N)),Object(ae.a)(e.favoriteItems.slice(N+1)))});default:return e}},le=Object(se.b)(ue,function(){try{var e=localStorage.getItem("persistantState");if(null===e)return;return JSON.parse(e)}catch(t){return void console.warn(t)}}(),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());le.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("persistantState",t)}catch(r){console.warn(r)}}(le.getState())}));var pe=le,je=new function e(){var t=this;Object(j.a)(this,e),this._apiBase="https://swapi.dev/api",this._extractId=function(e){return e.url.match(/\/([0-9]*)\/$/)[1]},this._transformPerson=function(e){return Object(v.a)(Object(v.a)({},e),{},{id:t._extractId(e)})},this._transformStarship=function(e){return Object(v.a)(Object(v.a)({},e),{},{id:t._extractId(e)})},this.getResource=function(){var e=Object(ce.a)(ne.a.mark((function e(r){var n,a,c,s;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],a="".concat(t._apiBase).concat(r);case 2:return e.next=4,fetch(a);case 4:return c=e.sent,e.next=7,c.json();case 7:s=e.sent,a=s.next,n.push.apply(n,Object(ae.a)(s.results));case 10:if(a){e.next=2;break}case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPeople=Object(ce.a)(ne.a.mark((function e(){var r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/");case 2:return r=e.sent,e.abrupt("return",r.map(t._transformPerson));case 4:case"end":return e.stop()}}),e)}))),this.getAllPeopleData=Object(ce.a)(ne.a.mark((function e(){var r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.getAllPeople(),e.abrupt("return",new Promise((function(e){e(r)})));case 2:case"end":return e.stop()}}),e)}))),this.getAllFilms=Object(ce.a)(ne.a.mark((function e(){var r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/films/");case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),this.getAllFilmsData=Object(ce.a)(ne.a.mark((function e(){var r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.getAllFilms(),e.abrupt("return",new Promise((function(e){e(r)})));case 2:case"end":return e.stop()}}),e)}))),this.getAllStarships=Object(ce.a)(ne.a.mark((function e(){var r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/");case 2:return r=e.sent,e.abrupt("return",r.map(t._transformStarship));case 4:case"end":return e.stop()}}),e)}))),this.getAllStarshipsData=Object(ce.a)(ne.a.mark((function e(){var r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.getAllStarships(),e.abrupt("return",new Promise((function(e){e(r)})));case 2:case"end":return e.stop()}}),e)}))),this.getAllSpecies=Object(ce.a)(ne.a.mark((function e(){var r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/species/");case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),this.getAllSpeciesData=Object(ce.a)(ne.a.mark((function e(){var r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.getAllSpecies(),e.abrupt("return",new Promise((function(e){e(r)})));case 2:case"end":return e.stop()}}),e)})))};i.a.render(Object(n.jsx)(o.a,{store:pe,children:Object(n.jsx)(te,{children:Object(n.jsx)(E,{value:je,children:Object(n.jsx)(u.a,{children:Object(n.jsx)(Z,{})})})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.25eabaee.chunk.js.map