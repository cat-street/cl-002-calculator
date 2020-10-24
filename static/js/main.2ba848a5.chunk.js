(this["webpackJsonpcalculator-react"]=this["webpackJsonpcalculator-react"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(4),c=t.n(n),u=(t(11),t(5));t(12);function i(e){var a=e.value,t=e.mem;return l.a.createElement("div",{className:"calculator__screen-container"},l.a.createElement("p",{className:"calculator__screen-mem ".concat("0"!==t&&"calculator__screen-mem_visible")},"M"),l.a.createElement("input",{id:"display",type:"text",className:"calculator__screen",name:"screen",value:a.slice(0,10),maxLength:"10",disabled:!0}))}t(13);var d={CLEAR:{id:"clear",dataType:"clear",value:"C",children:"C"},MRC:{id:"mrc",dataType:"memory",value:"MRC",children:"MRC"},MMINUS:{id:"mminus",dataType:"memory",value:"MMINUS",children:"M-"},MPLUS:{id:"mplus",dataType:"memory",value:"MPLUS",children:"M+"},NEGATE:{id:"negate",dataType:"advanced",value:"NEGATE",children:"+/-"},PERCENT:{id:"percent",dataType:"advanced",value:"PERCENT",children:"%"},SQUARE:{id:"square",dataType:"advanced",value:"SQUARE",children:l.a.createElement("svg",{className:"square-symbol",viewBox:"0 0 33 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M2 10l5 11h2.5l6-19H33",stroke:"#fff",strokeWidth:"3"}))},BACKSPACE:{id:"backspace",dataType:"advanced",value:"BACKSPACE",children:l.a.createElement("svg",{className:"backspace-symbol",viewBox:"0 0 27 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M12 2l-9 9 9 9M3 11h24",stroke:"#fff",strokeWidth:"3"}))},SEVEN:{id:"seven",dataType:"number",value:7,children:7},EIGHT:{id:"eight",dataType:"number",value:8,children:8},NINE:{id:"nine",dataType:"number",value:9,children:9},DIVIDE:{id:"divide",dataType:"operation",value:"DIVIDE",children:"\xf7"},FOUR:{id:"four",dataType:"number",value:4,children:4},FIVE:{id:"five",dataType:"number",value:5,children:5},SIX:{id:"six",dataType:"number",value:6,children:6},MULTIPLY:{id:"multiply",dataType:"operation",value:"MULTIPLY",children:"\xd7"},ONE:{id:"one",dataType:"number",value:1,children:1},TWO:{id:"two",dataType:"number",value:2,children:2},THREE:{id:"three",dataType:"number",value:3,children:3},SUBTRACT:{id:"subtract",dataType:"operation",value:"SUBTRACT",children:"-"},ZERO:{id:"zero",dataType:"number",value:0,children:0},DECIMAL:{id:"decimal",dataType:"number",value:".",children:"."},EQUALS:{id:"equals",dataType:"equals",value:"EQUALS",children:"="},ADD:{id:"add",dataType:"operation",value:"ADD",children:"+"}},s={number:"number",operation:"operation",advanced:"advanced",memory:"memory",equals:"equals",clear:"clear"};t(14);function o(e){var a=e.id,t=e.dataType,r=e.value,n=e.children,c=e.onClick;return l.a.createElement("button",{id:a,type:"button","data-type":t,className:"button button_type_".concat(t),value:r,onClick:c},n)}function m(e){var a=e.handleChange,t=function(e,t){a({dataType:e,value:t})};return l.a.createElement("div",{className:"calculator__keyboard"},Object.values(d).map((function(e){return l.a.createElement(o,{key:e.id,id:e.id,dataType:e.dataType,value:e.value,children:e.children,onClick:t.bind(null,e.dataType,e.value)})})))}t(15);function v(e){return l.a.createElement("div",{className:"calculator__top"},l.a.createElement("div",{className:"calculator__heading"},l.a.createElement("h1",{className:"calculator__title"},"CATLOGIC"),l.a.createElement("h2",{className:"calculator__subtitle"},"CL-002")),l.a.createElement("div",{className:"calculator__sun-battery-container"},l.a.createElement("div",{className:"calculator__sun-battery"})))}var p=t(1),y=t(2),T=t.n(y);var b=function(e,a){return function(e,a,t,r){var l=r.ADD,n=r.SUBTRACT,c=r.MULTIPLY,u=r.DIVIDE,i=T()(e),d=T()(t);switch(a){case l.value:return i.plus(d).toString();case n.value:return i.minus(d).toString();case c.value:return i.times(d).toString();case u.value:return"0"===t?"Error":i.div(d).toString();default:return}}(e.memValue,e.operator,e.tempValue||e.screenValue,a)},E=function(e,a,t,r,l){var n=e.dataType,c=e.value;if(!r(a.screenValue)&&(a.lastClicked.dataType!==l.operation&&a.screenValue||c!==t.BACKSPACE.value)){var u=function(e,a,t){var r=t.BACKSPACE,l=t.NEGATE,n=t.PERCENT,c=t.SQUARE,u=T()(e);switch(a){case l.value:return(-u).toString();case n.value:return(.01*u).toString();case c.value:return u<0?"Error":u.sqrt().toString();case r.value:return e.length>1?u.toString().slice(0,-1):"";default:return}}(a.screenValue,c,t);return Object(p.a)(Object(p.a)({},a),{},{screenValue:u,lastClicked:{dataType:n,value:c}})}},h=function(e,a,t,r){var l=e.dataType,n=e.value,c=t.MPLUS,u=t.MMINUS,i=t.MRC;if(!r(a.screenValue)){if(n===c.value||n===u.value){var d=function(e,a,t,r){var l=r.MMINUS,n=r.MPLUS,c=T()(e),u=T()(t);switch(a){case l.value:return c.minus(u).toString();case n.value:return c.plus(u).toString();default:return}}(a.memory,n,a.screenValue,{MMINUS:u,MPLUS:c});return Object(p.a)(Object(p.a)({},a),{},{memory:d,lastClicked:{dataType:l,value:n}})}return n===i.value?a.lastClicked.value===i.value?Object(p.a)(Object(p.a)({},a),{},{memory:"0"}):Object(p.a)(Object(p.a)({},a),{},{screenValue:a.memory,memValue:a.screenValue,lastClicked:{dataType:l,value:n}}):void 0}},f=function(e){return"Error"===e};function C(e,a){switch(e.dataType){case s.number:return function(e,a,t,r){var l=e.dataType,n=e.value;if(!t(a.screenValue)){var c=n.toString();if("0"!==a.screenValue||"0"!==c){if("."===n){if(-1!==a.screenValue.indexOf(".")&&a.lastClicked.dataType!==r.operation)return;a.screenValue&&a.lastClicked.dataType!==r.operation||(c="0.")}return a.lastClicked.dataType===r.operation?(a.negate&&(c=-c),Object(p.a)(Object(p.a)({},a),{},{screenValue:c.toString(),memValue:a.screenValue,lastClicked:{dataType:l,value:n},negate:!1})):a.lastClicked.dataType===r.equals||a.lastClicked.dataType===r.memory?Object(p.a)(Object(p.a)({},a),{},{screenValue:c.toString(),operator:"",memValue:"",tempValue:"",lastClicked:{dataType:l,value:n},negate:!1}):Object(p.a)(Object(p.a)({},a),{},{screenValue:a.screenValue+=c,lastClicked:{dataType:l,value:n}})}}}(e,a,f,s);case s.operation:return function(e,a,t,r,l){var n=e.dataType,c=e.value;if(!r(a.screenValue)){if(a.lastClicked.dataType===l.number&&a.memValue){var u=b(a,t);return Object(p.a)(Object(p.a)({},a),{},{screenValue:u,operator:c,memValue:u,tempValue:"",lastClicked:{dataType:n,value:c}})}return a.lastClicked.dataType===l.operation&&c===t.SUBTRACT.value?Object(p.a)(Object(p.a)({},a),{},{negate:!0}):Object(p.a)(Object(p.a)({},a),{},{screenValue:a.screenValue||"0",operator:c,tempValue:"",lastClicked:{dataType:n,value:c},negate:!1})}}(e,a,d,f,s);case s.advanced:return E(e,a,d,f,s);case s.memory:return h(e,a,d,f);case s.equals:return a.memValue?function(e,a,t,r){var l=e.dataType,n=e.value;if(!r(a.screenValue)){var c=b(a,t);return Object(p.a)(Object(p.a)({},a),{},{screenValue:c,memValue:c,tempValue:a.tempValue||a.screenValue,lastClicked:{dataType:l,value:n}})}}(e,a,d,f):void 0;case s.clear:return Object(p.a)(Object(p.a)({},a),{},{screenValue:"",operator:"",memValue:"",tempValue:"",lastClicked:{},negate:!1});default:return}}t(16),t(17);var V=function(){var e=Object(r.useState)({screenValue:"",operator:"",memValue:"",tempValue:"",lastClicked:{},negate:!1,memory:"0"}),a=Object(u.a)(e,2),t=a[0],n=a[1],c=Object(r.useCallback)((function(e){var a=C(e,t);a&&n(a)}),[t]);return l.a.createElement("div",{className:"calculator"},l.a.createElement(v,null),l.a.createElement(i,{value:t.screenValue||"0",mem:t.memory}),l.a.createElement(m,{handleChange:c}))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(V,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.2ba848a5.chunk.js.map