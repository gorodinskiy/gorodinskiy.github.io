(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return A});var i=a(7),n=a.n(i),r=a(0),o=a.n(r),s=a(147),l=a(153),c=a(150),d=a(151),u=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata,a=t.title,i=t.keywords,n=e.posts.edges;return o.a.createElement(c.a,{location:this.props.location,title:a},o.a.createElement(d.a,{title:"Konstantin",keywords:i}),o.a.createElement(l.a,null),n.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h3",null,o.a.createElement(s.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(o.a.Component);t.default=u;var A="3386382699"},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return A}),a.d(t,"StaticQuery",function(){return f});var i=a(0),n=a.n(i),r=a(4),o=a.n(r),s=a(146),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(148),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var A=n.a.createContext({}),f=function(e){return n.a.createElement(A.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){var i;e.exports=(i=a(149))&&i.default||i},149:function(e,t,a){"use strict";a.r(t);a(33);var i=a(0),n=a.n(i),r=a(4),o=a.n(r),s=a(52),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},150:function(e,t,a){"use strict";var i=a(7),n=a.n(i),r=a(0),o=a.n(r),s=a(147),l=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,i=t.title,n=t.children;e="/"===a.pathname?o.a.createElement("h1",{style:{textAlign:"center"}},o.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},i)):o.a.createElement("h3",{className:"backLink"},o.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit",fontWeight:300},to:"/"},o.a.createElement("span",{className:"arrow"},"←")," ",i));var r=o.a.createElement("footer",null,"© 2018, ",o.a.createElement("a",{href:"mailto:hi@konstantin.io?subject=hello"},"Konstantin"));return o.a.createElement("div",null,e,n,r)},t}(o.a.Component);t.a=l},151:function(e,t,a){"use strict";var i=a(152),n=a(0),r=a.n(n),o=a(4),s=a.n(o),l=a(160),c=a.n(l),d=a(147);function u(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,s=e.title;return r.a.createElement(d.StaticQuery,{query:A,render:function(e){var i=t||e.site.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:""+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:s},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:i}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})},data:i})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var A="1025518380"},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Konstantin Gorodinskiy",description:"♥ I'm a web developer, based in Paris.",author:"Konstantin Gorodinskiy"}}}}},153:function(e,t,a){"use strict";a(154);var i=a(156),n=a(0),r=a.n(n),o=a(147),s=a(157),l=a.n(s);var c="3353874160";t.a=function(){return r.a.createElement(o.StaticQuery,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author,i=t.social;return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"1em"}},r.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{borderRadius:"15%"}}),r.a.createElement("p",null,r.a.createElement("a",{href:"https://twitter.com/"+i.twitter},"twitter")," • ",r.a.createElement("a",{href:"https://github.com/"+i.github},"github")," • ",r.a.createElement("a",{href:"https://fr.linkedin.com/in/"+i.linkedin},"linkedin")))},data:i})}},154:function(e,t,a){"use strict";a(155)("fixed",function(e){return function(){return e(this,"tt","","")}})},155:function(e,t,a){var i=a(11),n=a(24),r=a(16),o=/"/g,s=function(e,t,a,i){var n=String(r(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(i).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),i(i.P+i.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},156:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAgb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHCjXovSjztwZA//8QAGhAAAwEAAwAAAAAAAAAAAAAAAQIDABMhIv/aAAgBAQABBQJaMDOxQj1nadLWUBDZUY7karse/wD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAfEAABAwMFAAAAAAAAAAAAAAABACFBAgMQERIiYbH/2gAIAQEABj8C3BmZdSidFSHELk7gCER5i2K4GP/EAB4QAQADAAEFAQAAAAAAAAAAAAEAESExQVFhcYGx/9oACAEBAAE/ISddqW/ZblVPKIWgXHxUquGhvIcW4gi6D07ziNX1BsXZ9mmf/9oADAMBAAIAAwAAABDjCDz/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAdEAEBAAMAAwEBAAAAAAAAAAABEQAhMUFRkbHB/9oACAEBAAE/EBaBlKoXY9WYetEGx+8cZKISdMHKZgBApwCPqGRMQQBFFAhPNck+KgCBHkwWLIUmo9/mHpCqdWyvz9xgoaUO63n/2Q==",width:180,height:180,src:"/static/a29978521cbc986f9ac68e3413c35e47/e72f0/profile-pic.jpg",srcSet:"/static/a29978521cbc986f9ac68e3413c35e47/e72f0/profile-pic.jpg 1x,\n/static/a29978521cbc986f9ac68e3413c35e47/a0b5c/profile-pic.jpg 1.5x,\n/static/a29978521cbc986f9ac68e3413c35e47/90853/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Konstantin Gorodinskiy",social:{twitter:"konstantin",github:"gko",linkedin:"gorodinskiy"}}}}}},157:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var n,r=i(a(7)),o=i(a(51)),s=i(a(158)),l=i(a(159)),c=i(a(0)),d=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=[];var h=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+i+n+"<img "+s+l+t+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=c.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,n=e.onError,r=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},r,{onLoad:i,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});m.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,n=!1,r=t.fadeIn,s=f(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:n,fadeIn:r,hasNoScript:l,seenBefore:s},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:f(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,A=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,E=e.Tag,b="boolean"==typeof y?"lightgray":y,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,A),v=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),S={title:t,alt:this.state.isVisible?"":a,style:w,className:f};if(p){var x=p;return c.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),x.base64&&c.default.createElement(m,(0,l.default)({src:x.base64},S)),x.tracedSVG&&c.default.createElement(m,(0,l.default)({src:x.tracedSVG},S)),b&&c.default.createElement(E,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),c.default.createElement(m,{alt:a,title:t,src:x.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},x))}}))}if(h){var j=h,k=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},r);return"inherit"===r.display&&delete k.display,c.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},j.base64&&c.default.createElement(m,(0,l.default)({src:j.base64},S)),j.tracedSVG&&c.default.createElement(m,(0,l.default)({src:j.tracedSVG},S)),b&&c.default.createElement(E,{title:t,style:{backgroundColor:b,width:j.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:j.height}}),this.state.isVisible&&c.default.createElement("picture",null,j.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),c.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),c.default.createElement(m,{alt:a,title:t,width:j.width,height:j.height,src:j.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:j.width,height:j.height},j))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),b=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:E,sizes:b,fixed:E,fluid:b,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var w=y;t.default=w}}]);
//# sourceMappingURL=component---src-pages-index-js-fc75183bf11a1e9f9968.js.map