Array.prototype.filter||(Array.prototype.filter=function(e){"use strict";if(this===void 0||this===null)throw new TypeError;var t=Object(this),n=t.length>>>0;if(typeof e!="function")throw new TypeError;var r=[],i=arguments.length>=2?arguments[1]:void 0;for(var s=0;s<n;s++)if(s in t){var o=t[s];e.call(i,o,s,t)&&r.push(o)}return r});