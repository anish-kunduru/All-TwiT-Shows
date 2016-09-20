﻿/*!
  Copyright (C) Microsoft. All rights reserved.
  This library is supported for use in Windows Store apps only.
*/
function setScreenSize(n,t){var r=parseInt(n),i;r=r===NaN?-1:r,i=parseInt(t),i=i===NaN?-1:i,Ormma._setScreenSize(r,i)}function invokeInit(){Ormma._init()}function reportError(n,t){Ormma._throwError(n,t)}function setOrmmaState(n){Ormma._setState(n)}function setOrmmaLocale(n){Ormma._setLocale(n)}function setSize(n,t){var r=parseInt(n),i;r=r===NaN?-1:r,i=parseInt(t),i=i===NaN?-1:i,Ormma._setSize(r,i)}function setMaxSize(n,t){var r=parseInt(n),i;r=r===NaN?-1:r,i=parseInt(t),i=i===NaN?-1:i,Ormma._setMaxSize(r,i)}function setOrientation(n){var t=parseInt(n);t=t===NaN?-1:t,Ormma._setOrientation(t)}function fireShake(){Ormma._shake()}function updateTiltCoords(n,t,i){Ormma._tiltChange({x:n,y:t,z:i})}function fireViewable(n){var t=stringToBoolean(n);Ormma._viewableChange(t)}function setCapability(n,t){Ormma._setCapability(n,stringToBoolean(t))}function stringToBoolean(n){return n.toLowerCase()==="true"?!0:!1}function fireResponse(n,t){var i={url:escape(n),response:escape(t)};Ormma._sendResponse(i)}function setNetwork(n){Ormma._setNetwork(n)}function setSdkVersion(n,t,i){Ormma._setSdkVersion(n,t,i)}function setAdInstanceState(n){Ormma._setAdInstanceState(n)}function fireClickEvent(){Ormma._clicked()}var ORMMA_STATE_UNKNOWN="unknown",ORMMA_STATE_HIDDEN="hidden",ORMMA_STATE_DEFAULT="default",ORMMA_STATE_EXPANDED="expanded",ORMMA_STATE_RESIZED="resized",ORMMA_STATE_SUSPENDED="suspended",ORMMA_EVENT_ERROR="error",ORMMA_EVENT_HEADING_CHANGE="headingChange",ORMMA_EVENT_KEYBOARD_CHANGE="keyboardChange",ORMMA_EVENT_LOCATION_CHANGE="locationChange",ORMMA_EVENT_NETWORK_CHANGE="networkChange",ORMMA_EVENT_ORIENTATION_CHANGE="orientationChange",ORMMA_EVENT_VIEWABLE_CHANGE="viewableChange",ORMMA_EVENT_READY="ready",ORMMA_EVENT_RESPONSE="response",ORMMA_EVENT_SCREEN_CHANGE="screenChange",ORMMA_EVENT_SHAKE="shake",ORMMA_EVENT_SIZE_CHANGE="sizeChange",ORMMA_EVENT_STATE_CHANGE="stateChange",ORMMA_EVENT_TILT_CHANGE="tiltChange",MAPLE_EVENT_CLICK="click",ORMMA_FEATURE_SCREEN="screen",ORMMA_FEATURE_ORIENTATION="orientation",ORMMA_FEATURE_LOCATION="location",ORMMA_FEATURE_SMS="sms",ORMMA_FEATURE_PHONE="phone",ORMMA_FEATURE_EMAIL="email",ORMMA_FEATURE_HEADING="heading",ORMMA_FEATURE_SHAKE="shake",ORMMA_FEATURE_TILT="tilt",ORMMA_FEATURE_NETWORK="network",ORMMA_FEATURE_CALENDAR="calendar",ORMMA_FEATURE_CAMERA="camera",ORMMA_FEATURE_MAP="map",ORMMA_FEATURE_AUDIO="audio",ORMMA_FEATURE_VIDEO="video",ORMMA_FEATURE_LEVEL1="level-1",ORMMA_FEATURE_LEVEL2="level-2",ORMMA_FEATURE_LEVEL3="level-3",ORMMA_API_VERSION="1.1.0",MRAID_API_VERSION="1.0",MAPLE_MAX_STATE_DATA_SIZE=65536;(function(){function e(){this.listeners=[]}function n(){}function f(n){return typeof n=="undefined"||n===null||n<=0?!1:!0}function u(){return typeof window.external=="object"&&typeof window.external.notify!="undefined"}function t(n){u()?window.external.notify(n):postToLocal(n)}function r(t,r){if(n("raising event "+t+" with data "+r),i.listeners[t]!==null&&typeof i.listeners[t]!="undefined")try{var f=i.listeners[t].slice(),u;switch(t){case ORMMA_EVENT_ERROR:for(u=0;u<f.length;u++)f[u](r.message,r.action);break;case ORMMA_EVENT_NETWORK_CHANGE:for(u=0;u<f.length;u++)f[u](r.online,r.connection);break;case ORMMA_EVENT_ORIENTATION_CHANGE:for(u=0;u<f.length;u++)f[u](r);break;case ORMMA_EVENT_READY:for(u=0;u<f.length;u++)f[u]();break;case ORMMA_EVENT_SCREEN_CHANGE:for(u=0;u<f.length;u++)f[u](r.width,r.height);break;case ORMMA_EVENT_SHAKE:for(u=0;u<f.length;u++)f[u]();break;case ORMMA_EVENT_SIZE_CHANGE:for(u=0;u<f.length;u++)f[u](r.width,r.height);break;case ORMMA_EVENT_STATE_CHANGE:for(u=0;u<f.length;u++)f[u](r);break;case ORMMA_EVENT_TILT_CHANGE:for(u=0;u<f.length;u++)f[u](r.x,r.y,r.z);break;case ORMMA_EVENT_VIEWABLE_CHANGE:for(u=0;u<f.length;u++)f[u](r);break;case ORMMA_EVENT_RESPONSE:for(u=0;u<f.length;u++)f[u](unescape(r.url),unescape(r.response));break;case MAPLE_EVENT_CLICK:for(u=0;u<f.length;u++)f[u]();break;case ORMMA_EVENT_HEADING_CHANGE:case ORMMA_EVENT_KEYBOARD_CHANGE:case ORMMA_EVENT_LOCATION_CHANGE:default:return!1}}catch(e){n("exception thrown while firing event: "+e.message)}else n("no listeners for event "+t)}var i=new e;window.ORMMA=window.ormma=window.Ormma=window.MAPLE=window.maple=window.Maple={_maxSize:{},_dimensions:{},_defaultDimensions:{},_screenSize:null,_tiltCapability:!1,_shakeCapability:!1,_expandProperties:{width:480,height:800,useCustomClose:!1,lockOrientation:!1,isModal:!0},_shakeProperties:{},_resizeProperties:{transition:"none"},_state:ORMMA_STATE_DEFAULT,_locale:null,_location:null,_orientation:-1,_lastTiltCoords:{x:0,y:0,z:0},_lastNetworkState:ORMMA_STATE_UNKNOWN,_sdkInfo:null,_adInstanceState:null,adAnchorReady:function(){t("rendered")},adError:function(n,i){var r,u;r=typeof n=="string"&&n!==null?n:"unknown action",u=typeof i=="string"&&i!==null?i:"an unknown error occurred.",t("aderror:action="+r+"&msg="+u)},storeAdInstanceState:function(n){typeof n=="string"?n.length<=MAPLE_MAX_STATE_DATA_SIZE?(this._adInstanceState=n,t("storeadinstancestate:"+this._adInstanceState)):this._throwError("storeAdInstanceState","attempting to store state data greater than allowed length of "+MAPLE_MAX_STATE_DATA_SIZE+", attempted store length "+n.length):this._throwError("storeAdInstanceState","attempting to store state data that is not a string")},getAdInstanceState:function(){if(this._adInstanceState!==null)return this._adInstanceState},addEventListener:function(r,u){if((i.listeners[r]===null||typeof i.listeners[r]=="undefined")&&(i.listeners[r]=[]),r!==ORMMA_EVENT_TILT_CHANGE||this._tiltCapability){if(r===ORMMA_EVENT_SHAKE&&!this._shakeCapability){this._throwError("shake","shake capability is not supported, event listener not added");return}}else{this._throwError("tilt","tilt capability is not supported, event listener not added");return}n("adding listener for "+r),i.listeners[r].push(u),r===ORMMA_EVENT_TILT_CHANGE?t("tilt:listener=start"):r===ORMMA_EVENT_SHAKE?t("shake:listener=start"):r===ORMMA_EVENT_ORIENTATION_CHANGE?t("getorientation:listener=start"):r===ORMMA_EVENT_VIEWABLE_CHANGE&&t("viewableChange:listener=start")},hasListenerForClickEvent:function(){return typeof i.listeners[MAPLE_EVENT_CLICK]!="undefined"&&i.listeners[MAPLE_EVENT_CLICK]!==null&&i.listeners[MAPLE_EVENT_CLICK].length>0?!0:!1},close:function(){n("sending close request"),t("close")},createEvent:function(t,i,r){n("[not impl] createEvent called: "+t+", "+i+", "+r)},expand:function(i){var r,f;if(!(this.getState()===ORMMA_STATE_DEFAULT||this.getState()===ORMMA_STATE_RESIZED)){reportError("expand","can only expand from resized or default states");return}(typeof i=="undefined"||i===null)&&(i=""),typeof this._expandProperties=="object"&&(u()||(r=JSON.stringify(this._expandProperties),t("setexpandproperties:"+r))),n("sending expand request"),u()?t("expand:url="+encodeURIComponent(i)):(f={url:i},t("expand:"+JSON.stringify(f)))},getDefaultPosition:function(){return this._defaultDimensions},getExpandProperties:function(){return this._expandProperties},getHeading:function(){return n("[not impl] getHeading called"),-1},getKeyboard:function(){return n("[not impl] getKeyboard called"),!1},getLocation:function(){return n("[not impl] getKeyboard called"),this._location},getMaxSize:function(){return this._maxSize},getNetwork:function(){return this._lastNetworkState},getOrientation:function(){return t("getorientation"),this._orientation},getPlacementType:function(){return n("[not impl] getPlacementType called"),"unknown"},getScreenSize:function(){return this._screenSize===null&&(this._screenSize={width:screen.availWidth,height:screen.availHeight-100}),this._screenSize},getShakeProperties:function(){return this._shakeProperties},getSize:function(){return typeof this._dimensions=="undefined"&&(this._dimensions={}),this._dimensions},getState:function(){return this._state},getLocale:function(){if(this._locale!==null)return this._locale},getTilt:function(){if(n("calling getTilt"),!this._tiltCapability){this._throwError("tilt","tilt capability is not supported");return}return t("tilt:gettilt=refresh"),this._lastTiltCoords},getViewable:function(){n("[not impl] getViewable called")},hide:function(){n("calling hide"),t("hide")},isViewable:function(){n("[not impl] isViewable called")},makeCall:function(i){n("sending call request: "+i),t("call:recipient="+i)},open:function(i){n("sending website request: "+i);var f;f=u()?"url="+encodeURIComponent(i):JSON.stringify({url:i}),t("web:"+f)},openMap:function(t){n("[not impl] openMap called: "+t)},removeEventListener:function(r,u){var e,f,o;if(n("removing listener for "+r),i.listeners[r]!==null&&typeof i.listeners[r]!="undefined"){for(e=i.listeners[r],f=0;f<e.length;f++)if(e[f]===u){o=e.splice(f,1);break}if(i.listeners[r]===null||typeof i.listeners[r]=="undefined"||i.listeners[r].length===0)if(r===ORMMA_EVENT_TILT_CHANGE){if(!this._tiltCapability){this._throwError("tilt","tilt capability is not supported, no event listener");return}n("stopping tilt device for event: "+r+" (no more client listeners)"),t("tilt:listener=stop")}else if(r===ORMMA_EVENT_SHAKE){if(!this._shakeCapability){this._throwError("shake","shake capability is not supported, no event listener");return}n("stopping shake device for event: "+r+" (no more client listeners)"),t("shake:listener=stop")}else r===ORMMA_EVENT_ORIENTATION_CHANGE?(n("stopping orientation changed event: "+r+" (no more client listeners)"),t("getorientation:listener=stop")):r===ORMMA_EVENT_VIEWABLE_CHANGE?(n("stopping viewable changed event: "+r+" (no more client listeners)"),t("viewableChange:listener=stop")):r===MAPLE_EVENT_CLICK&&n("stopping clickEvent : "+r+" (no more client listeners)")}},request:function(n,i){var r={url:n,display:typeof i!="undefined"&&i!==null?i:"ignore"};return t("request:"+JSON.stringify(r)),!1},resize:function(i,r){if(i>this._maxSize.width||i<0){this._throwError("resize","width is greater than max allowed width ("+this._maxSize.width+") or less than zero.");return}if(r>this._maxSize.height||i<0){this._throwError("resize","height is greater than max allowed height  ("+this._maxSize.height+") or less than zero.");return}if(n("calling resize:width="+i+"&height="+r),u())t("resize:width="+i+"&height="+r);else{var f={width:i,height:r};t("resize:"+JSON.stringify(f))}},sendMail:function(i,r,u){n("sending mail request: "+i),t("mail:recipient="+i+"&subject="+r+"&body="+u)},sendSMS:function(i,r){n("sending sms request: "+i),t("sms:recipient="+i+"&body="+r)},setExpandProperties:function(i){var r,e;this._expandProperties=typeof i!="object"?{}:i,r=typeof this.getScreenSize=="function"?this.getScreenSize():window.ormma.getScreenSize(),this._expandProperties.width=f(this._expandProperties.width)?this._expandProperties.width:r.width,this._expandProperties.height=f(this._expandProperties.height)?this._expandProperties.height:r.height,this._expandProperties.useCustomClose=typeof this._expandProperties.useCustomClose=="undefined"?!1:this._expandProperties.useCustomClose,this._expandProperties.lockOrientation=typeof this._expandProperties.lockOrientation=="undefined"?!1:this._expandProperties.lockOrientation,this._expandProperties.isModal=!0,u()?(n("setting expand properties: width="+this._expandProperties.width+"&height="+this._expandProperties.height+"&usecustomclose="+this._expandProperties.useCustomClose+"&lockorientation="+this._expandProperties.lockOrientation),t("setexpandproperties:width="+this._expandProperties.width+"&height="+this._expandProperties.height+"&usecustomclose="+this._expandProperties.useCustomClose+"&lockorientation="+this._expandProperties.lockOrientation)):(e=JSON.stringify(this._expandProperties),n("setting expand properties: "+e),t("setexpandproperties:"+e))},setResizeProperties:function(t){this._resizeProperties=typeof t!="object"?{}:t,n("setting resize properties: "+JSON.stringify(this._resizeProperties))},setShakeProperties:function(t){this._shakeProperties=typeof t!="object"?{}:t,n("setting shake properties: "+JSON.stringify(this._shakeProperties))},setUserEngaged:function(i){this._isUserEngaged=typeof i=="boolean"?i:!1,n("setting user engaged: "+this._isUserEngaged),t("setuserengaged:engaged="+this._isUserEngaged)},show:function(){n("calling show"),t("show")},storePicture:function(i){n("sending storePicture request: "+i),t("storePicture:url="+encodeURIComponent(i))},supports:function(n){switch(n){case ORMMA_FEATURE_SCREEN:case ORMMA_FEATURE_ORIENTATION:case ORMMA_FEATURE_LEVEL1:case ORMMA_FEATURE_LEVEL2:case ORMMA_FEATURE_NETWORK:return!0;case ORMMA_FEATURE_SHAKE:return this._shakeCapability;case ORMMA_FEATURE_TILT:return this._tiltCapability;case ORMMA_FEATURE_PHONE:case ORMMA_FEATURE_SMS:case ORMMA_FEATURE_EMAIL:case ORMMA_FEATURE_LOCATION:case ORMMA_FEATURE_HEADING:case ORMMA_FEATURE_CALENDAR:case ORMMA_FEATURE_AUDIO:case ORMMA_FEATURE_VIDEO:case ORMMA_FEATURE_LEVEL3:default:return!1}},useCustomClose:function(i){typeof i=="boolean"?(n("calling usecustomclose:"+i),t("usecustomclose:"+i)):reportError("useCustomClose","parameter 'flag' is not a boolean value")},playVideo:function(){},playAudio:function(){},addPhoneContact:function(i){n("adding phone contact : "+i),t("addphonecontact:phonenumber="+i)},addEmailContact:function(i){n("adding email contact : "+i),t("addemailcontact:email="+i)},fanOnFacebook:function(t){n("sending fanOnFacebook request: "+t),this.open(t)},fanOnTwitter:function(t){n("sending fanOnTwitter request: "+t),this.open(t)},openMarketplace:function(i){n("opening marketplace appId: "+i),t("marketplace:appid="+i)},getVersion:function(){return ORMMA_API_VERSION},getSdkVersion:function(){if(this._sdkInfo!==null)return this._sdkInfo},_clicked:function(){r(MAPLE_EVENT_CLICK,null)},_tiltChange:function(n){this._lastTiltCoords=n,r(ORMMA_EVENT_TILT_CHANGE,n)},_shake:function(){r(ORMMA_EVENT_SHAKE)},_viewableChange:function(n){r(ORMMA_EVENT_VIEWABLE_CHANGE,n)},_orientationChange:function(){},_networkChange:function(){},_headingChange:function(){},_locationChanged:function(){},_sendResponse:function(n){r(ORMMA_EVENT_RESPONSE,n)},_throwError:function(n,t){var i={message:t,action:n};r(ORMMA_EVENT_ERROR,i)},_init:function(){n("Ormma is ready"),r(ORMMA_EVENT_READY,null),typeof window.ORMMAReady=="function"&&(n("Ormma calling ORMMAReady()"),window.ORMMAReady())},_setOrientation:function(n){var t=this._orientation;this._orientation=n,t!==this._orientation&&r(ORMMA_EVENT_ORIENTATION_CHANGE,this._orientation)},_setState:function(n){var t=this._state;this._state=n,t!==n&&r(ORMMA_EVENT_STATE_CHANGE,this._state)},_setLocale:function(n){this._locale=n},_setSize:function(n,t){typeof this._dimensions=="undefined"&&(this._dimensions={});var i=typeof this._dimensions.width=="undefined"?0:this._dimensions.width,u=typeof this._dimensions.height=="undefined"?0:this._dimensions.height;this._dimensions.width=n,this._dimensions.height=t,(i!==n||u!==t)&&r(ORMMA_EVENT_SIZE_CHANGE,this._dimensions)},_setSdkVersion:function(n,t,i){this._sdkInfo={sdkVersion:n,client:t,runtimeType:i,appName:navigator.appName,appVersion:navigator.appVersion,userAgent:navigator.userAgent,platform:navigator.platform}},_setCapability:function(n,t){typeof t=="boolean"&&(n===ORMMA_FEATURE_TILT?this._tiltCapability=t:n===ORMMA_FEATURE_SHAKE&&(this._shakeCapability=t))},_setMaxSize:function(n,t){typeof this._maxSize=="undefined"&&(this._maxSize={}),this._maxSize.width=n,this._maxSize.height=t},_setScreenSize:function(n,t){(this._screenSize===null||typeof this._screenSize=="undefined")&&(this._screenSize={});var i=typeof this._screenSize.width=="undefined"?0:this._screenSize.width,u=typeof this._screenSize.height=="undefined"?0:this._screenSize.height;this._screenSize.width=n,this._screenSize.height=t,(i!==this._screenSize.width||u!==this._screenSize.height)&&r(ORMMA_EVENT_SCREEN_CHANGE,this._screenSize)},_setNetwork:function(t){n("setting network state: "+t),typeof this._lastNetworkState=="undefined"&&(this._lastNetworkState=""),t!==this._lastNetworkState&&(this._lastNetworkState=t,r(ORMMA_EVENT_NETWORK_CHANGE,{online:t!=="offline",connection:t}))},_setAdInstanceState:function(n){this._adInstanceState=n}},window.mraid=window.MRAID={addEventListener:function(n,t){this._mraidSupportedEvts===null&&(this._mraidSupportedEvts=this._initEventList()),this._mraidSupportedEvts[n]&&window.ormma.addEventListener(n,t)},close:window.ormma.close,expand:window.ormma.expand,getExpandProperties:window.ormma.getExpandProperties,getPlacementType:window.ormma.getPlacementType,getState:function(){return window.ormma._state},getVersion:function(){return MRAID_API_VERSION},isViewable:window.ormma.isViewable,open:window.ormma.open,removeEventListener:function(n,t){this._mraidSupportedEvts===null&&(this._mraidSupportedEvts=this._initEventList()),this._mraidSupportedEvts[n]&&window.ormma.removeEventListener(n,t)},setExpandProperties:window.ormma.setExpandProperties,useCustomClose:window.ormma.useCustomClose,_mraidSupportedEvts:null,_initEventList:function(){var n=[];return n[ORMMA_EVENT_ERROR]=n[ORMMA_EVENT_READY]=n[ORMMA_EVENT_STATE_CHANGE]=n[ORMMA_EVENT_VIEWABLE_CHANGE]=!0,n}}})();