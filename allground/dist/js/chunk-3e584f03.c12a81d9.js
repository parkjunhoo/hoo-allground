(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e584f03"],{"01e8":function(t,e,s){t.exports=s.p+"img/대표님.b6c5bb9f.png"},"1e6c":function(t,e,s){"use strict";var i=s("9d65"),r=s("4e82"),n=s("c3f0"),a=s("80d2"),o=s("58df"),l=Object(o["a"])(i["a"],Object(r["a"])("windowGroup","v-window-item","v-window"));e["a"]=l.extend().extend().extend({name:"v-window-item",directives:{Touch:n["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(a["f"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(a["f"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},3518:function(t,e,s){t.exports=s.p+"img/4.b8498152.jpg"},"3e35":function(t,e,s){"use strict";var i=s("1e6c"),r=s("adda"),n=s("58df"),a=s("80d2"),o=s("1c87");function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(Object(s),!0).forEach((function(e){u(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function u(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var d=Object(n["a"])(i["a"],o["a"]);e["a"]=d.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(r["a"],{staticClass:"v-carousel__item",props:c(c({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(a["n"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,s=t.data;return s.staticClass="v-window-item",s.directives.push({name:"show",value:this.isActive}),this.$createElement(e,s,this.genDefaultSlot())}}})},"5e66":function(t,e,s){"use strict";s("63b7");var i=s("f665"),r=s("afdd"),n=s("9d26"),a=s("37c6"),o=s("604c"),l=o["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return o["a"].options.computed.classes.call(this)}},methods:{genData:o["a"].options.methods.genData}}),c=s("80d2"),u=s("d9bd");function d(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function h(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?d(Object(s),!0).forEach((function(e){v(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):d(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function v(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}e["a"]=i["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return h(h({},i["a"].options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(u["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:i["a"].options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,s=[],i=0;i<e;i++){var a=this.$createElement(r["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(n["a"],{props:{size:18}},this.delimiterIcon)]);s.push(a)}return this.$createElement(l,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},s)},genProgress:function(){return this.$createElement(a["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=i["a"].options.render.call(this,t);return e.data.style="height: ".concat(Object(c["f"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},"63b7":function(t,e,s){},"7d75":function(t,e,s){t.exports=s.p+"img/2.5615524b.png"},"80d1":function(t,e,s){"use strict";s("e86b")},a895:function(t,e,s){t.exports=s.p+"img/3.708cea4d.jpg"},da68:function(t,e,s){t.exports=s.p+"img/sign.152d17d1.png"},e200:function(t,e,s){t.exports=s.p+"img/5.75fa260d.jpg"},e408:function(t,e,s){t.exports=s.p+"img/1.1831f01b.png"},e86b:function(t,e,s){},f820:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about overflow-hidden",staticStyle:{"background-color":"black",position:"absolute"}},[i("v-carousel",{staticClass:"custumCarousel",attrs:{height:"100vh","show-arrows":!1,"hide-delimiter-background":"","delimiter-icon":"mdi-soccer",touch:{down:this.carouselTouchDown,up:this.carouselTouchUp},"vertical-delimiters":t.delimitersLocation},model:{value:t.carouselIndex,callback:function(e){t.carouselIndex=e},expression:"carouselIndex"}},[i("v-carousel-item",{attrs:{"reverse-transition":t.reverseTransition,transition:t.Transition},on:{mousewheel:t.carouselScroll}},[i("v-img",{attrs:{gradient:"to bottom, rgba(0,0,0,1),rgba(0,0,0,.5), rgba(0,0,0,1)",width:"100%",height:"100%",cover:"",src:s("e408")}},[i("v-container",{staticClass:"d-flex align-center viewContainer"},[i("v-row",{staticClass:"align-center",attrs:{justify:"center"}},[i("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[i("p",{staticClass:"titleText",staticStyle:{"text-align":"center"}},[i("span",{staticClass:"t",staticStyle:{position:"absolute"}}),t._v("About Us")])]),i("v-col",{staticClass:"d-flex justify-center",staticStyle:{"border-radius":"25px 25px 25px 25px","background-color":"rgba(25,25,25,.5)"},attrs:{cols:"12"}},[i("p",{staticClass:"subText"},[t._v("스포츠의 모든 순간과 함께 하는 올그라운드 입니다. "),i("br"),i("br"),t._v("올그라운드는 혁신적은 스포츠 패러다임이라는 명목으로 스포츠 산업을 선도하며 가슴 뛰는 목표를 가지고 있습니다. "),this.$vuetify.breakpoint.smAndDown?t._e():i("br"),t._v("프로와 아마추어의 벽을 허물어 누구나 동등한 기회를 제공 받을 수 있고, 투명하고 공정한 평가를 위해 서비스를 공급하는 것이 올그라운드의 존재 이유입니다. "),i("br"),i("br"),t._v("노력과 실력을 있는 그대로 평가받을 수 있다는 것은 축복이자 행복입니다. "),this.$vuetify.breakpoint.smAndDown?t._e():i("br"),t._v("올그라운드는 바로 그 행복한 순간들을 만들어가는 회사입니다. "),i("br"),i("br"),t._v("스포츠가 있는 곳이라면 어디든 함께하겠습니다. 스포츠가 있는 곳에는 도전과 열정 그리고 시작이 있기 때문입니다. "),this.$vuetify.breakpoint.smAndDown?t._e():i("br"),t._v("올그라운드는 육하원칙을 따지지 않고 ‘누구든, 언제든, 어디서든, 무엇이든, 어떻게든, 어떤 이유에서든’ "),i("br"),i("br"),t._v("스포츠를 사랑하는 당신을 위해 끝까지 동행하겠습니다. "),i("br"),i("br"),t._v("앞으로도 올그라운드는 ‘스포츠계의 선한 영향력’ 이라는 비전을 실현하기 위해 불철주야 달려가겠습니다. ")])])],1)],1)],1)],1),i("v-carousel-item",{attrs:{"reverse-transition":t.reverseTransition,transition:t.Transition},on:{mousewheel:t.carouselScroll}},[i("v-img",{attrs:{gradient:"to bottom, rgba(0,0,0,1),rgba(0,0,0,.5), rgba(0,0,0,1)",width:"100%",height:"100%",position:"left top",src:s("7d75")}},[i("v-container",{staticClass:"d-flex align-center viewContainer"},[i("v-row",{staticClass:"d-flex align-center justify-center",attrs:{"no-gutters":""}},[i("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[i("p",{staticClass:"titleText"},[t._v("CEO Greeting")])]),i("v-col",{staticClass:"d-flex align-center",attrs:{cols:"auto"}},[i("v-img",{attrs:{width:t.photoBreakPoint,height:t.photoBreakPoint,contain:"",src:s("01e8")}})],1),i("v-col",{staticClass:"d-flex justify-center mt-6 removeMargin",attrs:{cols:"12",sm:"12",lg:"8",xl:"auto"}},[this.$vuetify.breakpoint.xs?t._e():i("v-card",{attrs:{elevation:"0",color:"rgba(0,0,0,.0"}},[i("p",{staticClass:"subText",staticStyle:{"text-align":"left"}},[t._v(" 현 시대의 선수들은 좋은팀에서 운동할 권리가 있습니다. "),i("br"),t._v("하지만, 많은 선수들이 다양한 사회적요소에 의해 입단이 어려운 실정입니다. "),this.$vuetify.breakpoint.smAndDown?t._e():i("br"),i("br"),t._v("특히 미디어의 상용화가 되지 않은 국내 하부리그의 선수들은 좋은 선수임에도 "),i("br"),t._v("불구하고 단지 검증되지 않았다는 이유 하나로 좋은팀으로 갈 수 있는 "),this.$vuetify.breakpoint.smAndDown?t._e():i("br"),i("br"),t._v("기회를 박탈당하고 있습니다. 이런 어려움을 조금이나마 해결해 주고자 "),i("br"),t._v("올그라운드는 구단과 선수를 최적으로 해결해 주는 플랫폼을 개발, "),this.$vuetify.breakpoint.smAndDown?t._e():i("br"),i("br"),t._v("지속적으로 서비스를 제공하고 있습니다. "),this.$vuetify.breakpoint.smAndDown?t._e():i("br"),i("br"),t._v('첫 시작 아래 결심한 신념은 "선수들의 의한 선수들을 위한 일"입니다. '),i("br"),t._v("여러분, 설레는 마음으로 올그라운드를 방문해 주십시오. "),this.$vuetify.breakpoint.smAndDown?t._e():i("br"),i("br"),t._v("여러분이 어떤 구단을 원하던 그 구단을 올그라운드에서 "),i("br"),t._v("쉽고, 즐겁게 찾을 수 있도록 다양한 서비스를 선보이겠습니다. "),this.$vuetify.breakpoint.smAndDown?t._e():i("br"),i("br"),t._v("여러분이 찾는 구단을 올그라운드에서 기다리고 있습니다. "),i("br"),i("span",[i("p",{staticClass:"signText"},[t._v("CEO 이학진")])])])]),this.$vuetify.breakpoint.xs?i("div",{staticClass:"scrollDiv",staticStyle:{height:"50vh",width:"88%"},attrs:{elevation:"0",color:"rgba(0,0,0,.0"},on:{touchend:t.moveOk,touchstart:t.moveNo}},[i("p",{staticClass:"subText",staticStyle:{"text-align":"left"}},[t._v(" 현 시대의 선수들은 좋은팀에서 "),i("br"),t._v("운동할 권리가 있습니다. "),i("br"),t._v("하지만, 많은 선수들이 다양한 사회적요소에 의해 "),i("br"),t._v("입단이 어려운 실정입니다. "),i("br"),i("br"),t._v("특히 미디어의 상용화가 되지 않은 "),i("br"),t._v("국내 하부리그의 선수들은 좋은 선수임에도 불구하고 "),i("br"),t._v("단지 검증되지 않았다는 이유 하나로 "),i("br"),t._v("좋은팀으로 갈 수 있는기회를 박탈당하고 있습니다. "),i("br"),i("br"),t._v("이런 어려움을 조금이나마 해결해 주고자 "),i("br"),t._v("올그라운드는 구단과 선수를 최적으로 "),i("br"),t._v("해결해 주는 플랫폼을 개발하고, "),i("br"),t._v("지속적으로 서비스를 제공하고 있습니다. "),i("br"),i("br"),i("br"),t._v("첫 시작 아래 결심한 신념은 "),i("br"),t._v('"선수들의 의한 선수들을 위한 일"입니다. '),i("br"),t._v("여러분, 설레는 마음으로 올그라운드를 "),i("br"),t._v("방문해 주십시오. "),i("br"),i("br"),t._v("여러분이 어떤 구단을 원하던 그 구단을 "),i("br"),t._v("올그라운드에서 쉽고, 즐겁게 "),i("br"),t._v("찾을 수 있도록 다양한 서비스를 선보이겠습니다. "),i("br"),i("br"),t._v("여러분이 찾는 구단을 올그라운드에서 "),i("br"),t._v("기다리고 있습니다. "),i("br"),i("span",[i("p",{staticClass:"signText"},[t._v("CEO 이학진")])])])]):t._e()],1)],1)],1)],1)],1),i("v-carousel-item",{attrs:{"reverse-transition":t.reverseTransition,transition:t.Transition},on:{mousewheel:t.carouselScroll}},[i("v-img",{attrs:{gradient:"to bottom, rgba(0,0,0,1),rgba(0,0,0,.5), rgba(0,0,0,1)",width:"100%",height:"100%",cover:"",src:s("a895")}},[i("v-container",{staticClass:"d-flex align-center viewContainer"},[i("v-row",{staticClass:"d-flex align-center justify-center",attrs:{"no-gutters":""}},[i("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[i("p",{staticClass:"titleText",staticStyle:{"text-align":"center"}},[t._v("Mission & Vision")])]),i("v-col",{attrs:{cols:"10"}},[i("v-card",{staticClass:"pa-5 mb-3",attrs:{color:"rgba(55,55,55,.4)"}},[i("p",{staticClass:"haedText mb-3",staticStyle:{"text-align":"center"}},[t._v("VISION")]),i("v-row",[i("v-col",{attrs:{xl:"6",md:"6",lg:"6",sm:"12",cols:"12"}},[i("p",{staticClass:"titleSubText",staticStyle:{"text-align":"center"}},[t._v("선수와 구단이 함께 발전하는 시장의 선순환")])]),i("v-col",{attrs:{xl:"6",md:"6",lg:"6",sm:"12",cols:"12"}},[i("p",{staticClass:"titleSubText",staticStyle:{"text-align":"center"}},[t._v("축구계의 선한 영향력으로 한국 축구의 발전")])])],1)],1)],1),i("v-col",{attrs:{cols:"10"}},[i("v-card",{staticClass:"pa-5",attrs:{color:"rgba(55,55,55,.4)"}},[i("p",{staticClass:"haedText mb-3",staticStyle:{"text-align":"center"}},[t._v("MISSION")]),i("v-row",[i("v-col",{staticClass:"mb",attrs:{cols:"6"}},[i("p",{staticClass:"titleSubText",staticStyle:{"text-align":"center"}},[t._v("우리의 일")]),i("p",{staticClass:"subText",staticStyle:{"text-align":"center"}},[t._v("‘선수의 꿈을 일이 되게하고 구단의 일이 꿈이 되게 하는 것’")])]),i("v-col",{staticClass:"mb-3",attrs:{cols:"6"}},[i("p",{staticClass:"titleSubText",staticStyle:{"text-align":"center"}},[t._v("우리의 사명")]),i("p",{staticClass:"subText",staticStyle:{"text-align":"center"}},[t._v("‘좋은 선수와 구단의 연결이며 선수와 구단의 잠재력 개발’")])]),i("v-col",{staticClass:"mb-3",attrs:{cols:"6"}},[i("p",{staticClass:"titleSubText",staticStyle:{"text-align":"center"}},[t._v("우리의 자산")]),i("p",{staticClass:"subText",staticStyle:{"text-align":"center"}},[t._v("‘선수, 구단, 기업, 사회에 대한 진정성이며 현재에 대한 집요한 혁신’")])]),i("v-col",{staticClass:"mb-3",attrs:{cols:"6"}},[i("p",{staticClass:"titleSubText",staticStyle:{"text-align":"center"}},[t._v("우리의 목표")]),i("p",{staticClass:"subText",staticStyle:{"text-align":"center"}},[t._v("‘누구나 새로운 기회를 창조할 수 있는 최고의 플랫폼’")])])],1)],1)],1)],1)],1)],1)],1),i("v-carousel-item",{attrs:{"reverse-transition":t.reverseTransition,transition:t.Transition},on:{mousewheel:t.carouselScroll}},[i("v-img",{attrs:{gradient:"to bottom, rgba(0,0,0,1),rgba(0,0,0,.5), rgba(0,0,0,1)",width:"100%",height:"100%",cover:"",src:s("3518")}},[i("v-container",{staticClass:"d-flex align-center viewContainer"},[i("v-row",{staticClass:"align-center"},[i("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[i("p",{staticClass:"titleText",staticStyle:{"text-align":"center"}},[i("span",{staticClass:"t",staticStyle:{position:"absolute"}}),t._v("Four Core Values")])]),i("v-col",{attrs:{xl:"6",md:"6",lg:"6",sm:"12",cols:"12"}},[i("v-card",{staticClass:"d-flex justify-center align-center",attrs:{height:t.fourCoreValuesHeight,color:"rgba(0,0,0,.4)"}},[i("p",{staticClass:"subText",staticStyle:{"text-align":"center"}},[i("span",{staticClass:" titleSubText"},[t._v("규율위의 자유")]),i("br"),i("br"),t._v("우리는 규율 위에 세운 자율적인 문화를 지향합니다.")])])],1),i("v-col",{attrs:{xl:"6",md:"6",lg:"6",sm:"12",cols:"12"}},[i("v-card",{staticClass:"d-flex justify-center align-center",attrs:{height:t.fourCoreValuesHeight,color:"rgba(0,0,0,.4)"}},[i("p",{staticClass:"subText",staticStyle:{"text-align":"center"}},[i("span",{staticClass:" titleSubText"},[t._v("스타보다 팀웍")]),i("br"),i("br"),t._v("회사란 평범한 사람들이 모여 비범한 성과를 내는 곳!"),i("br"),t._v(" 천재 한 사람에 의지한 조직이 아닌, 팀웍을 통해 성과를 내는 조직을 지향합니다.")])])],1),i("v-col",{attrs:{xl:"6",md:"6",lg:"6",sm:"12",cols:"12"}},[i("v-card",{staticClass:"d-flex justify-center align-center",attrs:{height:t.fourCoreValuesHeight,color:"rgba(0,0,0,.4)"}},[i("p",{staticClass:"subText",staticStyle:{"text-align":"center"}},[i("span",{staticClass:" titleSubText"},[t._v("진지함과 위로")]),i("br"),i("br"),t._v("일에 대한 진지함을 잃지 않으면서도, 쉽고 명확하고 위트있게 문제를 풀어나갑니다.")])])],1),i("v-col",{attrs:{xl:"6",md:"6",lg:"6",sm:"12",cols:"12"}},[i("v-card",{staticClass:"d-flex justify-center align-center",attrs:{height:t.fourCoreValuesHeight,color:"rgba(0,0,0,.4)"}},[i("p",{staticClass:"subText",staticStyle:{"text-align":"center"}},[i("span",{staticClass:" titleSubText"},[t._v("열심만큼 성과")]),i("br"),i("br"),t._v("열심히 하는 것은 중요합니다. 하지만, 성과를내는 것은 더욱 중요합니다."),i("br"),t._v(" 과정과 결과는 둘 중 어느 하나만 선택하거나, 우선시할 수 없는 문제입니다.")])])],1)],1)],1)],1)],1)],1)],1)},r=[],n=s("d8ad"),a={data:function(){return{dontMove:!1,carouselIndex:0,scrollReady:2,preloadImg:[s("e408"),s("7d75"),s("a895"),s("3518"),s("e200"),s("01e8"),s("da68")]}},created:function(){this.preload()},mounted:function(){this.$store.commit("set_showTipMessage",!0),this.$nextTick((function(){setTimeout((function(){n["a"].$emit("end:loading")}),1e3)}))},methods:{moveNo:function(){this.areaFocus=!0},moveOk:function(){var t=this;setTimeout((function(){t.areaFocus=!1}),0)},preload:function(){for(var t=0;t<this.preloadImg.length;t++){var e=new Image;e.src=this.preloadImg[t]}},carouselTouchDown:function(){this.areaFocus||0!==this.carouselIndex&&this.carouselIndex<=3&&(this.carouselIndex--,this.$store.commit("set_showTipMessage",!1))},carouselTouchUp:function(){this.areaFocus||3!==this.carouselIndex&&this.carouselIndex>=0&&(this.carouselIndex++,this.$store.commit("set_showTipMessage",!1))},carouselScroll:function(t){this.scrollReady>0?(this.$store.commit("set_showTipMessage",!1),t.wheelDelta>0?(this.carouselIndex--,this.scrollReady=0):3!=this.carouselIndex&&(this.carouselIndex++,this.scrollReady=0)):this.scrollReady++}},computed:{Transition:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"slide-y-transition";case"sm":return"slide-x-transition";case"md":return"slide-x-transition";case"lg":return"slide-x-transition";case"xl":return"slide-x-transition";default:return"slide-x-transition"}},reverseTransition:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"slide-y-reverse-transition";case"sm":return"slide-x-reverse-transition";case"md":return"slide-x-reverse-transition";case"lg":return"slide-x-reverse-transition";case"xl":return"slide-x-reverse-transition";default:return"slide-x-reverse-transition"}},photoBreakPoint:function(){switch(this.$vuetify.breakpoint.name){case"xl":return 400;case"lg":return 330;case"md":return 270;case"sm":return 180;case"xs":return 180;default:return 180}},pWitdh:function(){switch(this.$vuetify.breakpoint.name){case"xl":return"70%";case"lg":return"70%";case"md":return"70%";case"sm":return"95%";case"xs":return"95%";default:return"70%"}},delimitersLocation:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"right";case"sm":return"right";case"md":return null;case"lg":return null;case"xl":return null;default:return null}},fourCoreValuesHeight:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"12vh";case"sm":return"13vh";case"md":return"20vh";case"lg":return"20vh";case"xl":return"20vh";default:return"20vh"}}}},o=a,l=(s("80d1"),s("2877")),c=s("6544"),u=s.n(c),d=s("b0af"),h=s("5e66"),v=s("3e35"),b=s("62ad"),f=s("a523"),p=s("adda"),g=s("0fd9"),m=Object(l["a"])(o,i,r,!1,null,"4f1a90ca",null);e["default"]=m.exports;u()(m,{VCard:d["a"],VCarousel:h["a"],VCarouselItem:v["a"],VCol:b["a"],VContainer:f["a"],VImg:p["a"],VRow:g["a"]})}}]);
//# sourceMappingURL=chunk-3e584f03.c12a81d9.js.map