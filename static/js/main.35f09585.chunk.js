(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{34:function(e,t,a){e.exports=a(67)},39:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),l=a.n(i),c=(a(39),a(4)),o=a(5),s=a(11),u=a(7),d=a(6),p=a(33),m=a(12),v=a.n(m),f=function(e,t){return{type:"SET_SELECTED",payload:{selectedItem:e,controlName:t}}};function h(e,t){return v()({method:"get",url:e,callTime:t.params.callTime}).then((function(e){return e})).catch((function(e){console.log(e)}))}v.a.interceptors.request.use((function(e){return e})),v.a.interceptors.response.use((function(e){return e}));var E=a(8),b=(a(9),a(1)),y=a.n(b),g=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"onSelectItem",value:function(e,t,a){this.props.onClickItem(e,t)}},{key:"renderItems",value:function(e){var t=this;if(y.a.isEmpty(e)||y.a.isEmpty(e.data)||e.data.length<=0)return"";var a=this;return e.data.map((function(e){var n,i=null===e||void 0===e||null===(n=e.attributes)||void 0===n?void 0:n.name;return r.a.createElement("li",{key:e.id,className:"controls-items"+(e.Selected?" active":""),onClick:a.onSelectItem.bind(t,e.id,i)},i)}))}},{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("h3",null,"Controls"),r.a.createElement("ul",{className:"container"},this.renderItems(this.props.controlsData)))}}]),a}(n.Component),D=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e,t,a,n=this.props.profileData,i=null===n||void 0===n?void 0:n.attributes["card-image"];if(y.a.isEmpty(i))return"";var l=null===n||void 0===n||null===(e=n.attributes)||void 0===e?void 0:e.subspecialties.join(", ");return r.a.createElement("div",{style:{padding:"10px",marginTop:"10px",width:"100%",maxWidth:500,height:"120px"}},r.a.createElement("div",{style:{float:"left",width:"20%"}},r.a.createElement("img",{className:"profile-image",src:i,alt:null===n||void 0===n||null===(t=n.attributes)||void 0===t?void 0:t.name})),r.a.createElement("div",{style:{float:"left",width:"80%"}},r.a.createElement("span",{className:"profile-name"},null===n||void 0===n||null===(a=n.attributes)||void 0===a?void 0:a.name),r.a.createElement("br",null),r.a.createElement("span",{className:"profile-subspcl"},l)))}}]),a}(n.Component),O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"renderItems",value:function(e){return y.a.isEmpty(e)||y.a.isEmpty(e)||e.length<=0?"":e.map((function(e){return r.a.createElement("li",{key:e.id,className:"results-items"},r.a.createElement(D,{profileData:e}))}))}},{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:"10px",width:"100%",height:"100%"}},r.a.createElement("h3",null,"Results"),r.a.createElement(D,null),r.a.createElement("ul",{className:"container"},this.renderItems(this.props.resultsData)))}}]),a}(n.Component),j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onClickItem=e.onClickItem.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"onClickItem",value:function(e,t,a){this.props.setSelectedItem(e,t)}},{key:"getFilteredResult",value:function(){var e,t=this.props.resultsData,a=null===(e=this.props.filterData)||void 0===e?void 0:e.controlName;return y.a.isEmpty(t)?[]:y.a.filter(t.data,(function(e){var t;return(null===e||void 0===e||null===(t=e.attributes)||void 0===t?void 0:t.subspecialties).join("").toLowerCase().indexOf(a.toLowerCase())>-1}))}},{key:"render",value:function(){var e=this.getFilteredResult();return r.a.createElement("div",{className:"App"},r.a.createElement(g,{controlsData:this.props.controlsData,onClickItem:this.onClickItem}),r.a.createElement("hr",{className:"separator"}),r.a.createElement(O,{resultsData:e}))}}]),a}(n.Component);var k=Object(p.a)((function(e){return{controlsData:e.controlsData,resultsData:e.resultsData,filterData:e.filterData}}),(function(e){return Object(E.b)({setSelectedItem:f},e)}))(j),I=a(28),S=a(29),C=a.n(S),T=a(30),w=a.n(T),N=a(31),L=a(32),x=a.n(L),R=a(17),_=a(3),$=a.n(_),q=function(){var e,t,a,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"GET_CONTROLS":return a=null===(e=r.payload)||void 0===e?void 0:e.data,$()(n,{$set:a});case"SET_SELECTED":var i=null===(t=r.payload)||void 0===t?void 0:t.selectedItem,l=y.a.cloneDeep(n.data),c=y.a.findIndex(l,{Selected:!0});c>-1&&(l=$()(l,Object(R.a)({},c,{Selected:{$set:!1}})));var o=y.a.findIndex(l,{id:i});return o>-1&&(l=$()(l,Object(R.a)({},o,{Selected:{$set:!0}}))),$()(n,{data:{$set:l}});default:return n}},G=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_RESULTS":return t=null===(e=n.payload)||void 0===e?void 0:e.data,$()(a,{$set:t});default:return a}},B=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_SELECTED":return e=a.payload?a.payload:{selectedItem:"",controlName:""},$()(t,{$set:e});default:return t}},F=x()({controlsData:q,resultsData:G,filterData:B}),J={controlsData:{},resultsData:{},filterData:{selectedItem:"",controlName:""}},U=Object(I.createLogger)({}),z=function(){var e=Object(E.a)(N.a,C.a,U,w.a),t=Object(E.c)(F,J,e);return t.dispatch({type:"GET_CONTROLS",payload:h("http://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services",{params:{params:{callTime:new Date}}})}),t.dispatch({type:"GET_RESULTS",payload:h("http://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10",{params:{params:{callTime:new Date}}})}),t};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,{store:z()})),document.getElementById("root"))},9:function(e,t,a){}},[[34,1,2]]]);
//# sourceMappingURL=main.35f09585.chunk.js.map