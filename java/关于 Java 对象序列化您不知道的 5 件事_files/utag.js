//tealium universal tag - utag.44 ut4.0.201705260257, Copyright 2017 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1,'link':1};u.initialized=false;u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
function getUserIdWithCallback(callbackFunc){setTimeout(function(){cmRetrieveUserID(function(USER_ID){callbackFunc(USER_ID);})},100);}
function getOtherIdNamesAndValues(){var userIdNamesAndValues={};return userIdNamesAndValues;}
function getCookie(cname){var name=cname+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1);if(c.indexOf(name)==0)return c.substring(name.length,c.length);}
return"";}
function setCookieOnRootDomain(cookieName){var i=0;var domain=document.domain;var p=domain.split('.');var s=cookieName;while(i<(p.length-1)&&document.cookie.indexOf(s+'='+s)==-1){domain=p.slice(-1-(++i)).join('.');document.cookie=s+'='+s+';domain='+domain+';path=/;';}
return domain;}
function sendIdSyncEventInternal(USER_ID){var idSyncCookieName='com.ibm.commerce.ubx.idsync.'+encodeURIComponent('ubx_v2,1');var UBX_ID_SYNC_COOKIE=getCookie(idSyncCookieName);if(!UBX_ID_SYNC_COOKIE){if(USER_ID){var DSP_PIXEL_URL='https://match.adsrvr.org/track/cmf/generic?ttd_pid=ubx_v2&ttd_tpi=1&ttd_puid='+USER_ID;new Image().src=DSP_PIXEL_URL;setCookieOnRootDomain(idSyncCookieName);}}}
function sendIdSyncEvent(){try{getUserIdWithCallback(function(USER_ID){sendIdSyncEventInternal(USER_ID);});}catch(err){console.log('Error:'+err.message);}}
sendIdSyncEvent();}};utag.o[loader].loader.LOAD(id);})("44","ibm.web");}catch(error){utag.DB(error);}
