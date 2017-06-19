// https://github.com/kbjr/polyfill.js/blob/master/client/polyfills/localstorage.js
if(!window.localStorage){var storage,read,write,del,cookieStorageExpiration=31536e6;if(hasGlobalStorage=function(){try{return"globalStorage"in window&&window.globalStorage&&window.globalStorage[window.location.hostname]}catch(a){return!1}}(),hasUserData=function(){try{return"function"==typeof document.documentElement.addBehavior}catch(a){return!1}}(),encode=function(a,b){return a=JSON.stringify(a),b&&(a=a.replace(/[;\r\n= %]/g,function(a){return"%"+";\r\n= %".indexOf(a)})),a},decode=function(a,b){return b&&(a=a.replace(/%[0-5]/g,function(a){return";\r\n= %".charAt(parseFloat(a.slice(1)))})),a=JSON.parse(a)},window.Storage=function(a){var a=a,b=read(a);this.length=0,this.clear=function(){this.length=0,b={},del(a)},this.getItem=function(c){return b=read(a),b[c]},this.key=function(a){var c=0;for(var d in b){if(c===a)return a;c++}return null},this.removeItem=function(c){b=read(a),delete b[c],write(a,b)},this.setItem=function(c,d){b=read(a),b[c]=d,write(a,b)}},window.localStorage=new Storage("localStorage"),hasGlobalStorage)storage=window.globalStorage[window.location.hostname],write=function(a,b){storage[a]=encode(b)},read=function(a){var b=storage[a]&&storage[a].value;return b&&(b=b),decode(b)},del=function(a){delete storage[a]};else if(hasUserData){storage=document.createElement("div");var withStore=function(a){return function(){document.body.appendChild(storage),storage.addBehavior("#default#userData"),storage.load("Storage");var b=Array.prototype.slice.call(arguments,0);return b.unshift(storage),result=a.apply(win,b),storage.parentNode.removeChild(storage),result}};write=withStore(function(a,b,c){a.setAttribue(b,encode(c)),a.save("Storage")}),read=withStore(function(a,b){return decode(a.getAttribute(b))}),del=withStore(function(a,b){a.removeAttribute(b),a.save("Storage")})}else{var readCookie=function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0,e=c.length;e>d;d++){for(var f=c[d];" "==f.charAt(0);)f=f.substring(1,f.length);if(0==f.indexOf(b))return f.substring(b.length,f.length)}return null},writeCookie=function(a,b,c){if(c){var d=new Date;d.setTime(d.getTime()+c),c="; expires="+d.toGMTString()}else c="";document.cookie=a+"="+b+c+"; path=/"};write=function(a,b){b=encode(b,!0),writeCookie(a,b,cookieStorageExpiration)},read=function(a){var b=readCookie(a);return decode(b,!0)},del=function(a){writeCookie(a,"",-1)}}};