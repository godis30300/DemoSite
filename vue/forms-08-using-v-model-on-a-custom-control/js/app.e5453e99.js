(function(e){function t(t){for(var n,a,i=t[0],c=t[1],u=t[2],b=0,d=[];b<i.length;b++)a=i[b],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(t);while(d.length)d.shift()();return l.push.apply(l,u||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],n=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(n=!1)}n&&(l.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},l=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=c;l.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0d2e":function(e,t,o){"use strict";o("cc7e")},"40f8":function(e,t,o){"use strict";o("b1e4")},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("7a23");function r(e,t,o,r,l,a){const i=Object(n["i"])("the-form");return Object(n["h"])(),Object(n["b"])(i)}const l={key:0},a={class:"form-control"},i={class:"form-control"},c={class:"form-control"},u={class:"form-control"},s={class:"form-control"},b={class:"form-control"};function d(e,t,o,r,d,m){const p=Object(n["i"])("rating-control");return Object(n["h"])(),Object(n["d"])("form",{onSubmit:t[12]||(t[12]=Object(n["o"])((...e)=>m.submitForm&&m.submitForm(...e),["prevent"]))},[Object(n["e"])("div",{class:Object(n["g"])(["form-control",{invalid:"invalid"===d.userNameValidity}])},[t[13]||(t[13]=Object(n["e"])("label",{for:"user-name"},"Your Name",-1)),Object(n["n"])(Object(n["e"])("input",{id:"user-name",name:"user-name",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>d.userName=e),onBlur:t[1]||(t[1]=(...e)=>m.validateInput&&m.validateInput(...e))},null,544),[[n["m"],d.userName,void 0,{trim:!0}]]),"invalid"===d.userNameValidity?(Object(n["h"])(),Object(n["d"])("p",l,"Please enter a valid name!")):Object(n["c"])("",!0)],2),Object(n["e"])("div",a,[t[14]||(t[14]=Object(n["e"])("label",{for:"age"},"Your Age (Years)",-1)),Object(n["n"])(Object(n["e"])("input",{id:"age",name:"age",type:"number","onUpdate:modelValue":t[2]||(t[2]=e=>d.userAge=e),ref:"ageInput"},null,512),[[n["m"],d.userAge]])]),Object(n["e"])("div",i,[t[16]||(t[16]=Object(n["e"])("label",{for:"referrer"},"How did you hear about us?",-1)),Object(n["n"])(Object(n["e"])("select",{id:"referrer",name:"referrer","onUpdate:modelValue":t[3]||(t[3]=e=>d.referrer=e)},t[15]||(t[15]=[Object(n["e"])("option",{value:"google"},"Google",-1),Object(n["e"])("option",{value:"wom"},"Word of mouth",-1),Object(n["e"])("option",{value:"newspaper"},"Newspaper",-1)]),512),[[n["l"],d.referrer]])]),Object(n["e"])("div",c,[t[20]||(t[20]=Object(n["e"])("h2",null,"What are you interested in?",-1)),Object(n["e"])("div",null,[Object(n["n"])(Object(n["e"])("input",{id:"interest-news",name:"interest",type:"checkbox",value:"news","onUpdate:modelValue":t[4]||(t[4]=e=>d.interest=e)},null,512),[[n["j"],d.interest]]),t[17]||(t[17]=Object(n["e"])("label",{for:"interest-news"},"News",-1))]),Object(n["e"])("div",null,[Object(n["n"])(Object(n["e"])("input",{id:"interest-tutorials",name:"interest",type:"checkbox",value:"tutorials","onUpdate:modelValue":t[5]||(t[5]=e=>d.interest=e)},null,512),[[n["j"],d.interest]]),t[18]||(t[18]=Object(n["e"])("label",{for:"interest-tutorials"},"Tutorials",-1))]),Object(n["e"])("div",null,[Object(n["n"])(Object(n["e"])("input",{id:"interest-nothing",name:"interest",type:"checkbox",value:"nothing","onUpdate:modelValue":t[6]||(t[6]=e=>d.interest=e)},null,512),[[n["j"],d.interest]]),t[19]||(t[19]=Object(n["e"])("label",{for:"interest-nothing"},"Nothing",-1))])]),Object(n["e"])("div",u,[t[24]||(t[24]=Object(n["e"])("h2",null,"How do you learn?",-1)),Object(n["e"])("div",null,[Object(n["n"])(Object(n["e"])("input",{id:"how-video",name:"how",type:"radio",value:"video","onUpdate:modelValue":t[7]||(t[7]=e=>d.how=e)},null,512),[[n["k"],d.how]]),t[21]||(t[21]=Object(n["e"])("label",{for:"how-video"},"Video Courses",-1))]),Object(n["e"])("div",null,[Object(n["n"])(Object(n["e"])("input",{id:"how-blogs",name:"how",type:"radio",value:"blogs","onUpdate:modelValue":t[8]||(t[8]=e=>d.how=e)},null,512),[[n["k"],d.how]]),t[22]||(t[22]=Object(n["e"])("label",{for:"how-blogs"},"Blogs",-1))]),Object(n["e"])("div",null,[Object(n["n"])(Object(n["e"])("input",{id:"how-other",name:"how",type:"radio",value:"other","onUpdate:modelValue":t[9]||(t[9]=e=>d.how=e)},null,512),[[n["k"],d.how]]),t[23]||(t[23]=Object(n["e"])("label",{for:"how-other"},"Other",-1))])]),Object(n["e"])("div",s,[Object(n["f"])(p,{modelValue:d.rating,"onUpdate:modelValue":t[10]||(t[10]=e=>d.rating=e)},null,8,["modelValue"])]),Object(n["e"])("div",b,[Object(n["n"])(Object(n["e"])("input",{type:"checkbox",id:"confirm-terms",name:"confirm-terms","onUpdate:modelValue":t[11]||(t[11]=e=>d.confirm=e)},null,512),[[n["j"],d.confirm]]),t[25]||(t[25]=Object(n["e"])("label",{for:"confirm-terms"},"Agree to terms of use?",-1))]),t[26]||(t[26]=Object(n["e"])("div",null,[Object(n["e"])("button",null,"Save Data")],-1))],32)}function m(e,t,o,r,l,a){return Object(n["h"])(),Object(n["d"])("ul",null,[Object(n["e"])("li",{class:Object(n["g"])({active:"poor"===o.modelValue})},[Object(n["e"])("button",{type:"button",onClick:t[0]||(t[0]=e=>a.activate("poor"))},"Poor")],2),Object(n["e"])("li",{class:Object(n["g"])({active:"average"===o.modelValue})},[Object(n["e"])("button",{type:"button",onClick:t[1]||(t[1]=e=>a.activate("average"))},"Average")],2),Object(n["e"])("li",{class:Object(n["g"])({active:"great"===o.modelValue})},[Object(n["e"])("button",{type:"button",onClick:t[2]||(t[2]=e=>a.activate("great"))},"Great")],2)])}var p={props:["modelValue"],emits:["update:modelValue"],methods:{activate(e){this.$emit("update:modelValue",e)}}},f=(o("40f8"),o("6b0d")),j=o.n(f);const O=j()(p,[["render",m],["__scopeId","data-v-46d22b2f"]]);var h=O,v={components:{RatingControl:h},data(){return{userName:"",userAge:null,referrer:"wom",interest:[],how:null,confirm:!1,rating:null,userNameValidity:"pending"}},methods:{submitForm(){console.log("Username: "+this.userName),this.userName="",console.log("User age:"),console.log(this.userAge+5),console.log(this.$refs.ageInput.value+5),console.log(31),this.userAge=null,console.log("Referrer: "+this.referrer),this.referrer="wom",console.log("Checkboxes"),console.log(this.interest),console.log("Radio buttons"),console.log(this.how),this.interest=[],this.how=null,console.log("Confirm?"),console.log(this.confirm),this.confirm=!1,console.log("Rating"),console.log(this.rating),this.rating=null},validateInput(){""===this.userName?this.userNameValidity="invalid":this.userNameValidity="valid"}}};o("0d2e");const g=j()(v,[["render",d],["__scopeId","data-v-f96c37ca"]]);var w=g,y={components:{TheForm:w}};o("ba90");const V=j()(y,[["render",r]]);var k=V;Object(n["a"])(k).mount("#app")},a9f6:function(e,t,o){},b1e4:function(e,t,o){},ba90:function(e,t,o){"use strict";o("a9f6")},cc7e:function(e,t,o){}});
//# sourceMappingURL=app.e5453e99.js.map