(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{212:function(e,a){},218:function(e,a,t){"use strict";t.r(a);var s=t(0),c=t.n(s),r=t(10),n=t(14),l=t(15),m=t(3),i=t(185),u=t.n(i);a.default=function(){const e=Object(s.useRef)(null),a=Object(s.useRef)(null),t=Object(s.useRef)(null),i=Object(s.useContext)(r.a),o=Object(s.useContext)(n.a),[h,f]=Object(l.a)({fieldValue:"",chatMessages:[]});return Object(s.useEffect)(()=>{i.isChatOpen&&(a.current.focus(),o({type:"clearUnreadChatCount"}))},[i.isChatOpen]),Object(s.useEffect)(()=>(e.current=u()("http://localhost:8080"),e.current.on("chatFromServer",e=>{f(a=>{a.chatMessages.push(e)})}),()=>e.current.disconnect()),[]),Object(s.useEffect)(()=>{t.current.scrollTop=t.current.scrollHeight,h.chatMessages.length&&!i.isChatOpen&&o({type:"incrementUnreadChatCount"})},[h.chatMessages]),c.a.createElement("div",{id:"chat-wrapper",className:"chat-wrapper shadow border-top border-left border-right "+(i.isChatOpen?"chat-wrapper--is-visible":"")},c.a.createElement("div",{className:"chat-title-bar bg-primary"},"Chat",c.a.createElement("span",{onClick:()=>o({type:"closeChat"}),className:"chat-title-bar-close"},c.a.createElement("i",{className:"fas fa-times-circle"}))),c.a.createElement("div",{id:"chat",className:"chat-log",ref:t},h.chatMessages.map((e,a)=>e.username==i.user.username?c.a.createElement("div",{key:a,className:"chat-self"},c.a.createElement("div",{className:"chat-message"},c.a.createElement("div",{className:"chat-message-inner"},e.message)),c.a.createElement("img",{className:"chat-avatar avatar-tiny",src:e.avatar})):c.a.createElement("div",{key:a,className:"chat-other"},c.a.createElement(m.b,{to:"/profile/"+e.username},c.a.createElement("img",{className:"avatar-tiny",src:e.avatar})),c.a.createElement("div",{className:"chat-message"},c.a.createElement("div",{className:"chat-message-inner"},c.a.createElement(m.b,{to:"/profile/"+e.username},c.a.createElement("strong",null,e.username,": ")),e.message))))),c.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e.current.emit("chatFromBrowser",{message:h.fieldValue,token:i.user.token}),f(e=>{e.chatMessages.push({message:e.fieldValue,username:i.user.username,avatar:i.user.avatar}),e.fieldValue=""})},id:"chatForm",className:"chat-form border-top"},c.a.createElement("input",{value:h.fieldValue,onChange:function(e){const a=e.target.value;f(e=>{e.fieldValue=a})},ref:a,type:"text",className:"chat-field",id:"chatField",placeholder:"Type a message…",autoComplete:"off"})))}}}]);