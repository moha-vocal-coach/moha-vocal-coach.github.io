(function(){
var K="moha_consent",ID=document.currentScript.getAttribute("data-id"),b=document.getElementById("cb");
window.dataLayer=window.dataLayer||[];
function g(){dataLayer.push(arguments)}
function wipe(){
  window["ga-disable-"+ID]=true;
  if(window.__ga){g("consent","update",{analytics_storage:"denied"})}
  var host=location.hostname,parts=host.split("."),doms=[host,"."+host];
  if(parts.length>2)doms.push("."+parts.slice(-2).join("."),"."+parts.slice(-3).join("."));
  document.cookie.split(";").forEach(function(c){
    var n=c.split("=")[0].trim();
    if(n==="_ga"||n.indexOf("_ga_")===0){
      document.cookie=n+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      doms.forEach(function(d){document.cookie=n+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain="+d});
    }
  });
}
function load(){
  window["ga-disable-"+ID]=false;
  if(window.__ga){g("consent","update",{analytics_storage:"granted"});return}
  window.__ga=1;
  g("consent","default",{analytics_storage:"granted",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"});
  var s=document.createElement("script");s.async=1;s.src="https://www.googletagmanager.com/gtag/js?id="+ID;document.head.appendChild(s);
  g("js",new Date());
  g("config",ID,{allow_google_signals:false,allow_ad_personalization_signals:false});
}
var v=null;try{v=localStorage.getItem(K)}catch(e){}
if(v==="yes")load();else{window["ga-disable-"+ID]=true;if(v!=="no")b.hidden=false}
document.getElementById("cba").onclick=function(){try{localStorage.setItem(K,"yes")}catch(e){}b.hidden=true;load()};
document.getElementById("cbd").onclick=function(){try{localStorage.setItem(K,"no")}catch(e){}b.hidden=true;wipe()};
window.mohaCookieSettings=function(){try{localStorage.removeItem(K)}catch(e){}wipe();b.hidden=false};
})();
