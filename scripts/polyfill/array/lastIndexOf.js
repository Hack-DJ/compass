Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(e){"use strict";if(this===void 0||this===null)throw new TypeError;var t,n,r=Object(this),i=r.length>>>0;if(i===0)return-1;t=i-1,arguments.length>1&&(t=Number(arguments[1]),t!=t?t=0:t!=0&&t!=1/0&&t!=-(1/0)&&(t=(t>0||-1)*Math.floor(Math.abs(t))));for(n=t>=0?Math.min(t,i-1):i-Math.abs(t);n>=0;n--)if(n in r&&r[n]===e)return n;return-1});