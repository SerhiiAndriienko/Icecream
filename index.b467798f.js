new Swiper(".swiper-reviews",{slidesPerView:1,spaceBetween:10,loop:!0,simulateTouch:!0,touchRatio:2,grabCursor:!0,breakpoints:{480:{spaceBetween:-95},610:{spaceBetween:-160},768:{spaceBetween:0},1200:{spaceBetween:-100},1440:{spaceBetween:-200,touchRatio:3}},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},scrollbar:{el:".swiper-scrollbar"},autoplay:{delay:4e3,stopOnLastSlide:!1,disableOnInteraction:!0}}),new Swiper(".swiper-gallery",{speed:750,slidesPerView:1,spaceBetween:10,loop:!0,effect:"fade",simulateTouch:!0,touchRatio:3,grabCursor:!0,scrollbar:{el:".swiper-scrollbar"},autoplay:{delay:4e3,stopOnLastSlide:!1,disableOnInteraction:!1}});var e;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(let t=this,s=(t.document||t.ownerDocument).querySelectorAll(e),i=0;s[i]&&s[i]!==t;)++i;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),s=document.querySelectorAll(".js-modal-close"),i=document.querySelector(".data-body-stop");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();let s=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+s+'"]').classList.add("active"),t.classList.add("active"),i.classList.add("active")}))})),s.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active"),i.classList.remove("active"),video.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"),document.querySelector(".stopBackground").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".data-body-stop.active").classList.remove("active"),this.classList.remove("active")}))}));const t=document.querySelector("#hamb"),s=document.querySelector("#popup"),i=document.body,a=document.querySelector("#menu").cloneNode(1);t.addEventListener("click",(function(e){e.preventDefault(),s.classList.toggle("open"),t.classList.toggle("active"),i.classList.toggle("noscroll"),s.appendChild(a)}));function c(){s.classList.remove("open"),t.classList.remove("active"),i.classList.remove("noscroll")}Array.from(a.children).forEach((e=>{e.addEventListener("click",c)}));let l=window.scrollY;const r=document.querySelector("#scroll-btn");window.addEventListener("scroll",(function(){l=window.scrollY,l>=1e3?r.classList.add("scroll-to-hero"):r.classList.remove("scroll-to-hero")}));let d=window.scrollY;const m=document.querySelector(".scroll-header");window.addEventListener("scroll",(function(){d=window.scrollY,d>=1?m.classList.add("scroll-to-header"):m.classList.remove("scroll-to-header")}));const u=document.forms.form1;u.addEventListener("change",(function(){this.btnSubmit.disabled=!this.checkValidity()})),Array.from(u.elements).forEach((e=>{e.required&&e.addEventListener("change",(()=>{e.checkValidity()?(e.classList.remove("invalid"),e.classList.add("valid")):(e.classList.remove("valid"),e.classList.add("invalid"),e.reportValidity())}))}));const v=document.forms.form2;v.addEventListener("change",(function(){this.btnSubmit.disabled=!this.checkValidity()})),Array.from(v.elements).forEach((e=>{e.required&&e.addEventListener("change",(()=>{e.checkValidity()?(e.classList.remove("invalid"),e.classList.add("valid")):(e.classList.remove("valid"),e.classList.add("invalid"),e.reportValidity())}))}));const L=document.forms.form3;L.addEventListener("change",(function(){this.btnSubmit.disabled=!this.checkValidity()})),Array.from(L.elements).forEach((e=>{e.required&&e.addEventListener("change",(()=>{e.checkValidity()?(e.classList.remove("invalid"),e.classList.add("valid")):(e.classList.remove("valid"),e.classList.add("invalid"),e.reportValidity())}))}));const h=document.forms.form4;h.addEventListener("change",(function(){this.btnSubmit.disabled=!this.checkValidity()})),Array.from(h.elements).forEach((e=>{e.required&&e.addEventListener("change",(()=>{e.checkValidity()?(e.classList.remove("invalid"),e.classList.add("valid")):(e.classList.remove("valid"),e.classList.add("invalid"),e.reportValidity())}))}));const f=document.forms.form5;f.addEventListener("change",(function(){this.btnSubmit.disabled=!this.checkValidity()})),Array.from(f.elements).forEach((e=>{e.required&&e.addEventListener("change",(()=>{e.checkValidity()?(e.classList.remove("invalid"),e.classList.add("valid")):(e.classList.remove("valid"),e.classList.add("invalid"),e.reportValidity())}))}));
//# sourceMappingURL=index.b467798f.js.map
