(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return h});var n=a(0),r=a.n(n),c=a(4),i=a.n(c),o=a(164),l=a(170);function s(e){var t=e.data,a=e.location,n=t.site.siteMetadata.title;return r.a.createElement(o.a,{location:a,title:n},r.a.createElement(l.a,{title:"404: Not Found"}),r.a.createElement("h1",null,"Not Found"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}s.propTypes={data:i.a.object.isRequired,location:i.a.object.isRequired},t.default=s;var h="1097489062"},161:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return s});var n=a(175),r=a.n(n),c=a(176),i=a.n(c);a(149);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var o=new r.a(i.a);var l=o.rhythm,s=o.scale},162:function(e,t,a){"use strict";a.d(t,"b",function(){return h});var n=a(0),r=a.n(n),c=a(4),i=a.n(c),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(163);var s=r.a.createContext({}),h=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},163:function(e,t,a){var n;e.exports=(n=a(166))&&n.default||n},164:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(4),i=a.n(c),o=(a(34),a(162)),l=a(161);function s(e){var t=e.location,a=e.title;return"/gatsby-simple-blog/"===t.pathname?r.a.createElement("h1",{style:Object.assign({},Object(l.b)(.75),{marginBottom:0,marginTop:0})},r.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"var(--textTitle)"},to:"/"},a)):r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:0,height:42,lineHeight:"2.625rem"}},r.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"rgb(255, 167, 196)"},to:"/"},a))}s.propTypes={location:i.a.oneOfType([i.a.string,i.a.object]).isRequired,title:i.a.string},s.defaultProps={title:null};var h=s,u=a(7),d=a.n(u),m=a(165),g=a.n(m),A=a(74),p=a.n(A),b=a(35),v=a.n(b);a(150);function y(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}var f=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleClick=a.handleClick.bind(v()(a)),a.handleTouchStart=a.handleTouchStart.bind(v()(a)),a.handleTouchMove=a.handleTouchMove.bind(v()(a)),a.handleTouchEnd=a.handleTouchEnd.bind(v()(a)),a.handleTouchCancel=a.handleTouchCancel.bind(v()(a)),a.handleFocus=a.handleFocus.bind(v()(a)),a.handleBlur=a.handleBlur.bind(v()(a)),a.previouslyChecked=!(!t.checked&&!t.defaultChecked),a.state={checked:!(!t.checked&&!t.defaultChecked),hasFocus:!1},a}d()(t,e);var a=t.prototype;return a.componentWillReceiveProps=function(e){"checked"in e&&(this.setState({checked:!!e.checked}),this.previouslyChecked=!!e.checked)},a.handleClick=function(e){var t=this.input;if(this.previouslyChecked=t.checked,e.target!==t&&!this.moved)return e.preventDefault(),t.focus(),void t.click();this.setState({checked:t.checked})},a.handleTouchStart=function(e){this.startX=y(e).x,this.touchStarted=!0,this.hadFocusAtTouchStart=this.state.hasFocus,this.setState({hasFocus:!0})},a.handleTouchMove=function(e){if(this.touchStarted&&(this.touchMoved=!0,null!=this.startX)){var t=y(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t):!this.state.checked&&t-15>this.startX&&(this.setState({checked:!0}),this.startX=t)}},a.handleTouchEnd=function(e){if(this.touchMoved){var t=this.input;e.preventDefault(),null!=this.startX&&(this.previouslyChecked!==this.state.checked&&t.click(),this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})}},a.handleTouchCancel=function(e){null!=this.startX&&(this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})},a.handleFocus=function(e){var t=this.props.onFocus;t&&t(e),this.hadFocusAtTouchStart=!0,this.setState({hasFocus:!0})},a.handleBlur=function(e){var t=this.props.onBlur;t&&t(e),this.hadFocusAtTouchStart=!1,this.setState({hasFocus:!1})},a.getIcon=function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null},a.render=function(){var e=this,t=this.props,a=t.className,n=(t.icons,p()(t,["className","icons"])),c="react-toggle"+(this.state.checked?" react-toggle--checked":"")+(this.state.hasFocus?" react-toggle--focus":"")+(this.props.disabled?" react-toggle--disabled":"")+(a?" "+a:"");return r.a.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,onTouchCancel:this.handleTouchCancel},r.a.createElement("div",{className:"react-toggle-track"},r.a.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),r.a.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),r.a.createElement("div",{className:"react-toggle-thumb"}),r.a.createElement("input",Object.assign({},n,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox","aria-label":"Switch between Dark and Light mode"})))},t}(n.PureComponent),k=a(168),S=a.n(k),j=a(169),C=a.n(j),E=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={theme:null},t}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.setState({theme:window.__theme}),window.__onThemeChange=function(){e.setState({theme:window.__theme})}},a.render=function(){var e=this.state.theme;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{meta:[{name:"theme-color",content:"light"===e?"#ffa8c5":"#282c35"}]}),null!==e?r.a.createElement(f,{icons:{checked:r.a.createElement("img",{src:C.a,alt:"night",width:"16",height:"16",role:"presentation",style:{pointerEvents:"none"}}),unchecked:r.a.createElement("img",{src:S.a,alt:"day",width:"16",height:"16",role:"presentation",style:{pointerEvents:"none"}})},checked:"dark"===e,onChange:function(e){return window.__setPreferredTheme(e.target.checked?"dark":"light")}}):r.a.createElement("div",{style:{height:"24px"}}))},t}(r.a.Component);var T=function(){return r.a.createElement("footer",{style:{marginTop:Object(l.a)(2.5),paddingTop:Object(l.a)(1)}},r.a.createElement("a",{href:"https://github.com/thundermiracle",target:"_blank",rel:"noopener noreferrer"},"github")," ","•"," ",r.a.createElement("a",{href:"https://medium.com/thundermiracle",target:"_blank",rel:"noopener noreferrer"},"medium"))};a(151);function I(e){var t,a=e.data,n=e.showTop,c=p()(e,["data","showTop"]);return null==a?null:(n&&(t=r.a.createElement("li",{className:"breadcrumbs-item"},r.a.createElement(o.a,{to:"/",className:"breadcrumbs-element"},"Home"))),r.a.createElement("ul",Object.assign({className:"breadcrumbs breadcrumbs-ul"},c),t,a.map(function(e){var t=e.text,a=e.url;return null!=a?r.a.createElement("li",{className:"breadcrumbs-item",key:t},r.a.createElement(o.a,{to:a,className:"breadcrumbs-element"},t)):r.a.createElement("li",{className:"breadcrumbs-item_active",key:t},r.a.createElement("span",{className:"breadcrumbs-element"},t))})))}I.propTypes={data:i.a.arrayOf(i.a.shape({text:i.a.string.isRequired,url:i.a.string})),showTop:i.a.bool},I.defaultProps={data:null,showTop:!1};var F=I;function G(e){var t=e.children,a=e.location,n=e.title,c=e.breadcrumbs;return r.a.createElement("div",{style:{color:"var(--textNormal)",background:"var(--bg)",transition:"color 0.2s ease-out, background 0.2s ease-out",minHeight:"100vh"}},r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:"2.625rem "+Object(l.a)(.75)}},r.a.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2.625rem"}},r.a.createElement(h,{location:a,title:n}),r.a.createElement(E,null)),r.a.createElement(F,{data:c,showTop:!0,style:{marginTop:"-1.5rem"}}),t,r.a.createElement(T,null)))}G.propTypes={children:i.a.any,location:i.a.oneOfType([i.a.string,i.a.object]).isRequired,title:i.a.string,breadcrumbs:i.a.array},G.defaultProps={children:null,title:null,breadcrumbs:null};var R=G;a.d(t,"a",function(){return R})},166:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),o=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},168:function(e,t){e.exports="data:image/png;base64,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"},169:function(e,t){e.exports="data:image/png;base64,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"},170:function(e,t,a){"use strict";var n=a(177),r=a(0),c=a.n(r),i=a(4),o=a.n(i),l=a(165),s=a.n(l);function h(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title,l=n.data.site,h=t||l.siteMetadata.description;return c.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:h},{property:"og:title",content:o},{property:"og:description",content:h},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:h}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}h.defaultProps={lang:"en",meta:[],keywords:[],description:""},h.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=h},177:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter Blog",description:"A starter blog demonstrating what Gatsby can do.",author:"Kyle Mathews"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-a7f1d13eba38f56ddc95.js.map