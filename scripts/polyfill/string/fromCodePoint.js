String.fromCodePoint||function(){var e=function(){try{var e={},t=Object.defineProperty,n=t(e,e,e)&&t}catch(r){}return n}(),t=String.fromCharCode,n=Math.floor,r=function(){var e=16384,r=[],i,s,o=-1,u=arguments.length;if(!u)return"";var a="";while(++o<u){var f=Number(arguments[o]);if(!isFinite(f)||f<0||f>1114111||n(f)!=f)throw RangeError("Invalid code point: "+f);f<=65535?r.push(f):(f-=65536,i=(f>>10)+55296,s=f%1024+56320,r.push(i,s));if(o+1==u||r.length>e)a+=t.apply(null,r),r.length=0}return a};e?e(String,"fromCodePoint",{value:r,configurable:!0,writable:!0}):String.fromCodePoint=r}();