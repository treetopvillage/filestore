/*!
 * Responsive Switch 0.9.1 | @danielfilzhut | MIT/GPL2 Licensed
 */
;var responsiveSwitch=(function(){var h=parseInt(window.responsiveSwitchBreakpoint)||1024;var a="ResponsiveSwitch";var d="content";var l="data-rs";v
ar g="data-link-desktop";var e="data-link-responsive";var o="data-always-visible";var t="rs-link";var p="rs-link-to-desktop";var f="rs-link-to-respo
nsive";var b="rs-link-inactive";var u="rs-link-active";function s(){var v=document.querySelector('meta[name="viewport"]');if(v.getAttribute(l)==unde
fined){v.setAttribute(l,v.getAttribute(d))}if(v.getAttribute(d)==v.getAttribute(l)){document.cookie=a+"=true;path=/";if(document.documentElement.cli
entWidth!=window.innerWidth){document.location.href=i()}else{v.setAttribute(d,"width="+h+"px, initial-scale="+(document.documentElement.clientWidth/
h))}}else{document.cookie=a+"=false;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT";if(document.documentElement.clientWidth!=window.innerWidth){docume
nt.location.href=i()}else{v.setAttribute(d,v.getAttribute(l))}}return false}var c=false;function m(){var w=document.querySelectorAll("."+t);for(var 
x=0;x<w.length;x++){var v=w[x];if(v!=undefined){n(v,f);n(v,p);n(v,b);n(v,u);if(k()){j(v,f);j(v,u);v.innerHTML=v.getAttribute(e)}else{if(document.doc
umentElement&&(document.documentElement.clientWidth<h||v.getAttribute(o)=="true")){j(v,p);j(v,u);v.innerHTML=v.getAttribute(g)}else{j(v,b);v.innerHT
ML=""}}if(!c){v.addEventListener("click",function(y){y=y||window.event;y.preventDefault();q()},false)}}}c=true}function q(){s();m()}function r(){if(
k()){s()}if(document.addEventListener){document.addEventListener("DOMContentLoaded",m,false);document.addEventListener("orientationchange",m,false);
window.addEventListener("resize",m,false)}}function k(){return document.cookie.search(a+"=true")>-1}function j(w,v){w.className+=" "+v}function n(w,
v){w.className=" "+w.className+" ";w.className=w.className.replace(" "+v+" ","")}function i(){var v=new Date();var w=v.getTime();return document.loc
ation.protocol+"//"+document.location.host+document.location.pathname+(window.location.search?window.location.search+"&":"?")+"rsTimestamp="+w+docum
ent.location.hash}r();return{toggle:q}})();
