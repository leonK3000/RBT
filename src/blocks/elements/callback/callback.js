var ZCallbackWidgetLinkId  = '5071f4604d095b21508a5120e78f7f04';
var ZCallbackWidgetDomain  = 'my.zadarma.com';
(function(){
    var lt = document.createElement('script');
    lt.type ='text/javascript';
    lt.charset = 'utf-8';
    lt.async = true;
    lt.src = 'https://' + ZCallbackWidgetDomain + '/callbackWidget/js/main.min.js';
    var sc = document.getElementsByTagName('script')[0];
    if (sc) sc.parentNode.insertBefore(lt, sc);
    else document.documentElement.firstChild.appendChild(lt);
})();
