(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{368:function(t,r,e){"use strict";var n=e(1),o=e(3),s=e(19),a=e(16),i=e(25),u=e(17),f=e(2),c=e(369),l=e(43),v=e(370),d=e(371),h=e(41),p=e(372),m=[],w=o(m.sort),g=o(m.push),_=f((function(){m.sort(void 0)})),b=f((function(){m.sort(null)})),C=l("sort"),x=!f((function(){if(h)return h<70;if(!(v&&v>3)){if(d)return!0;if(p)return p<603;var t,r,e,n,o="";for(t=65;t<76;t++){switch(r=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)m.push({k:r+n,v:e})}for(m.sort((function(t,r){return r.v-t.v})),n=0;n<m.length;n++)r=m[n].k.charAt(0),o.charAt(o.length-1)!==r&&(o+=r);return"DGBEFHACIJK"!==o}}));n({target:"Array",proto:!0,forced:_||!b||!C||!x},{sort:function(t){void 0!==t&&s(t);var r=a(this);if(x)return void 0===t?w(r):w(r,t);var e,n,o=[],f=i(r);for(n=0;n<f;n++)n in r&&g(o,r[n]);for(c(o,function(t){return function(r,e){return void 0===e?-1:void 0===r?1:void 0!==t?+t(r,e)||0:u(r)>u(e)?1:-1}}(t)),e=o.length,n=0;n<e;)r[n]=o[n++];for(;n<f;)delete r[n++];return r}})},369:function(t,r,e){var n=e(194),o=Math.floor,s=function(t,r){var e=t.length,u=o(e/2);return e<8?a(t,r):i(t,s(n(t,0,u),r),s(n(t,u),r),r)},a=function(t,r){for(var e,n,o=t.length,s=1;s<o;){for(n=s,e=t[s];n&&r(t[n-1],e)>0;)t[n]=t[--n];n!==s++&&(t[n]=e)}return t},i=function(t,r,e,n){for(var o=r.length,s=e.length,a=0,i=0;a<o||i<s;)t[a+i]=a<o&&i<s?n(r[a],e[i])<=0?r[a++]:e[i++]:a<o?r[a++]:e[i++];return t};t.exports=s},370:function(t,r,e){var n=e(63).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},371:function(t,r,e){var n=e(63);t.exports=/MSIE|Trident/.test(n)},372:function(t,r,e){var n=e(63).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},373:function(t,r,e){var n=e(3),o=e(15),s=Date.prototype,a=n(s.toString),i=n(s.getTime);"Invalid Date"!=String(new Date(NaN))&&o(s,"toString",(function(){var t=i(this);return t==t?a(this):"Invalid Date"}))},407:function(t,r,e){},487:function(t,r,e){"use strict";e(407)},510:function(t,r,e){"use strict";e.r(r);e(93),e(368),e(62),e(11),e(202),e(373);var n={computed:{posts:function(){return this.$site.pages.filter((function(t){return t.path.startsWith("/news/")&&!t.frontmatter.newsIndex})).sort((function(t,r){return new Date(r.frontmatter.date)-new Date(t.frontmatter.date)})).slice(0,3)}}},o=(e(487),e(61)),s=Object(o.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[t._l(t.posts,(function(r,n){return e("div",{staticClass:"post"},[e("Columns",[e("Column",{attrs:{side:"left"}},[e("h3",[t._v(t._s(r.frontmatter.title))]),t._v(" "),e("NewsPostMeta",{attrs:{date:r.frontmatter.date}})],1),t._v(" "),e("Column",{attrs:{side:"right"}},[e("div",{domProps:{innerHTML:t._s(r.excerpt)}}),t._v(" "),!1!==r.frontmatter.more?e("Button",{attrs:{link:r.path,cssClass:"read-more"}},[t._v("Read more")]):t._e()],1)],1)],1)})),t._v(" "),e("p",{staticClass:"subscribe"},[e("Subscribe"),t._v(" "),e("a",{staticClass:"all-news",attrs:{href:"/news/"}},[t._v("All news")])],1)],2)}),[],!1,null,"a228e400",null);r.default=s.exports}}]);