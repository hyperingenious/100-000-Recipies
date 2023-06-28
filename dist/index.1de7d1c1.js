function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},a=n.parcelRequireca88;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},n.parcelRequireca88=a),a.register("27Lyk",function(t,r){"use strict";e(t.exports,"register",()=>n,e=>n=e),e(t.exports,"resolve",()=>i,e=>i=e);var n,i,o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a("27Lyk").register(JSON.parse('{"f9fpV":"index.1de7d1c1.js","eyyUD":"icons.c14567a0.svg"}'));var s=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof m?r:m).prototype);return i(c,"_invoke",{value:(a=new S(o||[]),s=h,function(r,i){if(s===p)throw Error("Generator is already running");if(s===f){if("throw"===r)throw i;return M()}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===h)throw s=f,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=p;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?f:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=f,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var h="suspendedStart",p="executing",f="completed",g={};function m(){}function v(){}function _(){}var y={};u(y,a,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(F([])));w&&w!==r&&n.call(w,a)&&(y=w);var k=_.prototype=m.prototype=Object.create(y);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function $(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function F(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:M}}function M(){return{value:t,done:!0}}return v.prototype=_,i(k,"constructor",{value:_,configurable:!0}),i(_,"constructor",{value:v,configurable:!0}),v.displayName=u(_,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E($.prototype),u($.prototype,s,function(){return this}),e.AsyncIterator=$,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new $(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=F,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=s}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=s:Function("r","regeneratorRuntime = r")(s)}const c="https://forkify-api.herokuapp.com/api/v2/recipes/",u="757ac58c-9020-472f-97b9-a7f553500647",l=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},d={recipe:{},search:{query:"",results:[],page:1},bookmarks:[]},h=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},p=async function(e){try{let t=await l(`${c}${e}?key=${u}`);d.recipe=h(t),d.bookmarks.some(t=>t.id===e)?d.recipe.bookmarked=!0:d.recipe.bookmarked=!1}catch(e){throw console.error(`${e}, hamara Error 💣`),e}},f=async function(e){try{let t=await l(`${c}?search=${e}&key=${u}`);d.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),console.log(d.search.results)}catch(e){console.error(e)}},g=function(e){return d.search.page=e,d.search.results.slice((e-1)*13,13*e)},m=function(){localStorage.setItem("bookmark",JSON.stringify(d.bookmarks))},v=function(e){d.bookmarks.push(e),e.id===d.recipe.id&&(d.recipe.bookmarked=!0),m()},_=function(e){let t=d.bookmarks.findIndex(t=>t.id===e);d.bookmarks.splice(t,1),e===d.recipe.id&&(d.recipe.bookmarked=!1),m()},y=function(e){d.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/d.recipe.servings}),d.recipe.servings=e},b=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredients Format, try the right one with CSV");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,publisher:e.publisher,source_url:e.sourceUrl,image_url:e.image,servings:e.servings,cooking_time:e.cookingTime,ingredients:t},n=await l(`${c}?key=${u}`,r);d.recipe=h(n),v(d.recipe)}catch(e){throw e}};!function(){let e=JSON.parse(localStorage.getItem("bookmark"));e&&(d.bookmarks=e)}();var w={};w=new URL(a("27Lyk").resolve("eyyUD"),import.meta.url).toString(),(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=function(){var e=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},t=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r};return function(){if(e(this.denominator)){var r=t(this.denominator,9),n=Math.pow(10,r.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(e(this.numerator)){var r=t(this.numerator,9),n=Math.pow(10,r.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}}(),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},r=Fraction;class k{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup(this._data);if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(e),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||""===e.firstChild?.nodeValue.trim()||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}renderSpinner(){this._clear();let e=`<div class="spinner">
          <svg>
            <use href="${t(w)}#icon-loader"></use>
          </svg>
        </div> `;this._parentElement.insertAdjacentHTML("afterbegin",e)}_clear(){this._parentElement.innerHTML=""}renderError(e=this._message){let r=`
      <div class="error">
              <div>
                <svg>
                  <use href="${t(w)}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${e}</p>
            </div>
          `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(e=this._message){let r=`
      <div class="message">
              <div>
                <svg>
                  <use href="${t(w)}#icon-smile"></use>
                </svg>
              </div>
              <p>${e}</p>
            </div>
          `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}}class E extends k{_parentElement=document.querySelector(".recipe");_message="Recipe does not found, Please try another one";_errorMessage="We could not find that recipe. Please try another one";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{upTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(e){return`
    <figure class="recipe__fig">
            <img src="${e.image}" alt="Tomato" class="recipe__img" />
            <h1 class="recipe__title">
              <span>${e.title}</span>
            </h1>
          </figure>
          <div class="recipe__details">
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="${t(w)}#icon-clock"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--minutes">${e.cookingTime}</span>
              <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
                  <svg class="recipe__info-icon">
                    <use href="${t(w)}#icon-users"></use>
                  </svg>
                  <span class="recipe__info-data recipe__info-data--people">${e.servings}</span>
                  <span class="recipe__info-text">servings</span>

                  <div class="recipe__info-buttons">
                    <button class="btn--tiny btn--update-servings" data-up-to="${this._data.servings-1}">
                      <svg>
                        <use href="${t(w)}#icon-minus-circle"></use>
                      </svg>
                    </button>
                    <button class="btn--tiny btn--update-servings" data-up-to="${this._data.servings+1}">
                      <svg>
                        <use href="${t(w)}#icon-plus-circle"></use>
                      </svg>
                    </button>
                  </div>
            </div>
            <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
              <svg>
                <use href="${t(w)}#icon-user"></use>
              </svg>
            </div>
            <button class="btn--round btn--bookmark">
              <svg class="">
                <use href="${t(w)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
              </svg>
            </button>
          </div>

          <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
            ${e.ingredients.map(this._generateMarkupIngredients).join("")}
            </ul>
          </div>

          <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
              This recipe was carefully designed and tested by
              <span class="recipe__publisher">
              ${e.publisher}
              </span>
              Please check out directions at their website.
            </p>
            <a class="btn--small recipe__btn" href="${e.sourceUrl}" target="_blank">
              <span>Directions</span>
              <svg class="search__icon">
                <use href="${t(w)}#icon-arrow-right"></use>
              </svg>
            </a>
          </div>
    `}_generateMarkupIngredients(e){return` <li class="recipe__ingredient">
                <svg class="recipe__icon">
                  <use href="${t(w)}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${e.quantity?new r(e.quantity).toString():""}
                </div>
                <div class="recipe__description">
                ${e.quantity?`<span class="recipe__unit">${e.unit}</span>`:""}
                ${e.description}
                </div>
              </li>`}}var $=new E;class x extends k{_parentElement=document.querySelector(".search");_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var L=new x,S=new class extends k{_parentElement="";_message="recipe does not found, Please try another one";_errorMessage="recipe does not found, Please try another one";_generateMarkup(){let e=window.location.hash.slice(1);return` 
        <li class="preview">
            <a class="preview__link ${this._data.id==e?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                 <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
                    <svg>
                      <use href="${t(w)}#icon-user"></use>
                    </svg>
                  </div>
               </div>
              
            </a>
          </li>`}};class F extends k{_parentElement=document.querySelector(".results");_message="recipe does not found, Please try another one";_errorMessage="recipe does not found, Please try another one";_generateMarkup(){return this._data.map(e=>S.render(e,!1)).join("")}}var M=new F;class O extends k{_nextPage;_parentElement=document.querySelector(".pagination");addClickHandler(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){let e=this._data.page,r=Math.ceil(this._data.results.length/13);return 1===e&&r>1?`
      <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>
            Page ${e+1}
          </span>
          <svg class="search__icon">
            <use href="${t(w)}#icon-arrow-right"></use>
          </svg>
    </button>
      `:e===r&&r>1?`
      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
      <use href="${t(w)}#icon-arrow-left"></use>
      </svg>
      <span>
        Page ${e-1}
      </span>
    </button>
      `:e>1&&e<r?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${t(w)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
    </button>
    <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>
            Page ${e+1}
          </span>
          <svg class="search__icon">
            <use href="${t(w)}#icon-arrow-right"></use>
          </svg>
    </button>
      `:""}}var j=new O;class T extends k{_parentElement=document.querySelector(".bookmarks__list");_message="recipe does not found, Please try another one";_errorMessage="No bookmarks yet find a new recipe and bookmark it ;)";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>S.render(e,!1)).join("")}}var q=new T;class P extends k{_parentElement=document.querySelector(".upload");_message="Recipe was succesfully uploaded";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);console.log(n),e(n)})}}var H=new P;window.addEventListener("load",function(){let e=(()=>{let e=navigator.userAgent;return[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/IEMobile/i,/Opera Mini/i].some(t=>e.match(t))})();e&&alert("The App is not build for small screens, switch to DESKTOP MODE for better experience")});const N=async function(){try{let e=window.location.hash.slice(1);if(!e)return;$.renderSpinner(),M.update(g()),q.update(d.bookmarks),await p(e),$.render(d.recipe)}catch(e){console.error(e),$.renderError()}},A=async function(){try{let e=L.getQuery();if(!e)return;M.renderSpinner(),await f(e),M.render(g(1)),j.render(d.search)}catch(e){console.error(e)}},R=async function(e){try{H.renderSpinner(),await b(e),$.render(d.recipe),H.renderMessage(),q.render(d.bookmarks),window.history.pushState(null,"",`#${d.recipe.id}`),setTimeout(function(){H.toggleWindow()},2500)}catch(e){console.error(e),H.renderError(e.message)}};q.addHandlerRender(function(){q.render(d.bookmarks)}),$.addHandlerRender(N),$.addHandlerUpdateServings(function(e){y(e),$.update(d.recipe)}),$.addHandlerBookmark(function(){d.recipe.bookmarked?_(d.recipe.id):v(d.recipe),$.update(d.recipe),q.render(d.bookmarks)}),L.addHandlerSearch(A),j.addClickHandler(function(e){M.render(g(e)),j.render(d.search)}),H.addHandlerUpload(R);
//# sourceMappingURL=index.1de7d1c1.js.map
