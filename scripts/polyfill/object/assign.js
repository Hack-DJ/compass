typeof Object.assign!="function"&&function(){Object.assign=function(e){"use strict";if(e===undefined||e===null)throw new TypeError("Cannot convert undefined or null to object");var t=Object(e);for(var n=1;n<arguments.length;n++){var r=arguments[n];if(r!==undefined&&r!==null)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}}();