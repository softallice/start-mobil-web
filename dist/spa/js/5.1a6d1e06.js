(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"57c6":function(t,e,a){},"58e3":function(t,e,a){"use strict";a("57c6")},dba1:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("q-stepper",{ref:"stepper",attrs:{color:"primary",animated:""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[a("q-step",{attrs:{name:1,title:"약관동의",icon:"settings",done:t.step>1,"header-nav":t.step>1}},[a("div",{staticClass:"text-h6 text-center"},[t._v("\n      약관 동의\n    ")]),a("br"),a("span",[a("q-checkbox",{attrs:{color:"red"},model:{value:t.red,callback:function(e){t.red=e},expression:"red"}}),t._v(" 전체 내용에 동의 합니다.\n    ")],1),a("q-separator"),a("br"),a("span",[a("q-checkbox",{attrs:{color:"red"},model:{value:t.red,callback:function(e){t.red=e},expression:"red"}}),a("span",{staticStyle:{background:"red",color:"white"}},[t._v("필수")]),t._v(" \n        서비스 약관 동의\n        "),a("q-btn",{staticStyle:{color:"#FF0080"},attrs:{flat:"",label:"보기"},on:{click:function(e){t.dialog=!0}}}),a("q-card",{staticClass:"bg-grey-8 my-card",attrs:{dark:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h9"},[a("q-icon",{staticStyle:{color:"#FF0080"},attrs:{size:"xs",name:"dvr"}}),t._v("\n              안심패스에서 제공하는 서비스정의")],1),a("div",{staticClass:"text-h9"},[a("q-icon",{staticStyle:{color:"#FF0080"},attrs:{size:"xs",name:"error_outline"}}),t._v("\n              회사와 회원의 의무 사항과 주의사항")],1)])],1)],1),a("br"),a("span",[a("q-checkbox",{attrs:{color:"red"},model:{value:t.red,callback:function(e){t.red=e},expression:"red"}}),a("span",{staticStyle:{background:"red",color:"white"}},[t._v("필수")]),t._v(" \n      개인정보 수집 및 이용 동의\n        "),a("q-btn",{staticStyle:{color:"#FF0080"},attrs:{flat:"",label:"보기"},on:{click:function(e){t.dialog=!0}}}),a("q-card",{staticClass:"bg-grey-8 my-card",attrs:{dark:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h9"},[a("q-icon",{staticStyle:{color:"#FF0080"},attrs:{size:"xs",name:"date_range"}}),t._v("\n                회원가입 및 관리를 위한 정보수집")],1),a("div",{staticClass:"text-h9"},[a("q-icon",{staticStyle:{color:"#FF0080"},attrs:{size:"xs",name:"perm_contact_calendar"}}),t._v("\n                수집을 원하는 종류 및 제공처 안내")],1),a("div",{staticClass:"text-h9"},[a("q-icon",{staticStyle:{color:"#FF0080"},attrs:{size:"xs",name:"vertical_split"}}),t._v("\n                수집한 정보의 보유, 이용기간 안내")],1)])],1)],1),a("br"),a("span",[a("q-checkbox",{attrs:{color:"red"},model:{value:t.red,callback:function(e){t.red=e},expression:"red"}}),a("span",{staticStyle:{background:"red",color:"white"}},[t._v("필수")]),t._v(" \n      개인정보처리 방침 및 서비스 약관\n      "),a("q-btn",{staticStyle:{color:"#FF0080"},attrs:{flat:"",label:"보기"},on:{click:function(e){t.dialog=!0}}}),a("q-card",{staticClass:"bg-grey-8 my-card",attrs:{dark:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h9"},[a("q-icon",{staticStyle:{color:"#FF0080"},attrs:{size:"xs",name:"insert_chart"}}),t._v("\n                개인정보 수집 및 제공을 위한 정보 수집")],1)])],1)],1),a("q-stepper-navigation",[a("q-btn",{staticClass:"full-width",attrs:{color:"primary",label:"계속"},on:{click:function(){t.done1=!0,t.step=2}}})],1)],1),a("q-step",{attrs:{name:2,title:"본인인증 및 완료",icon:"create_new_folder",done:t.step>2,"header-nav":t.step>2}},[t._v("\n      본인인증 및 완료(PASS 모듈과 연계)\n\n      "),a("q-stepper-navigation",[a("div",{staticClass:"row justify-between"},[a("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"뒤로"},on:{click:function(e){t.step=1}}}),a("q-btn",{attrs:{color:"primary",label:"완료",to:"/"},on:{click:function(){t.done2=!0}}})],1)])],1)],1),a("div",{staticClass:"q-pa-md q-gutter-sm"},[a("q-dialog",{attrs:{persistent:"",maximized:t.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("q-card",{staticClass:"bg-white text-black"},[a("q-bar",[a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Close")])],1)],1),a("q-card-section",{staticClass:"q-pt-none"}),a("q-bar",[a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"full-width",attrs:{dense:"",flat:"",label:"닫기"}},[a("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Close")])],1)],1)],1)],1)],1)],1)},r=[],c={name:"Consent",data(){return{step:1,red:!1,dialog:!1,maximizedToggle:!0}}},o=c,n=(a("58e3"),a("2877")),i=a("9c40"),l=a("f531"),d=a("87fe"),p=a("8f8e"),b=a("eb85"),v=a("f09f"),q=a("a370"),u=a("0016"),m=a("b19c"),f=a("24e8"),x=a("d847"),g=a("2c91"),h=a("05c0"),_=a("7f67"),k=a("eebe"),y=a.n(k),C=Object(n["a"])(o,s,r,!1,null,"2ece36f0",null);e["default"]=C.exports;y()(C,"components",{QBtn:i["a"],QStepper:l["a"],QStep:d["a"],QCheckbox:p["a"],QSeparator:b["a"],QCard:v["a"],QCardSection:q["a"],QIcon:u["a"],QStepperNavigation:m["a"],QDialog:f["a"],QBar:x["a"],QSpace:g["a"],QTooltip:h["a"]}),y()(C,"directives",{ClosePopup:_["a"]})}}]);