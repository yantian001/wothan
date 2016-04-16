


var AdsUtil ={
    appid:'5705196a0d602570744db4c7',
    appSignature:'499a7f5ddc74114fbe72c2e696492478b9ca304c',
    
    iOSAppID:'',
    iOSSignature:'',

    setup:function(){
        var pf = device.platform;
        if(pf='Android')
        {
         window.chartboost.setUp(this.appid,this.appSignature);  
        }
        else if(pf = 'iOS')
        {
            window.chartboost.setUp(this.iOSAppID,this.iOSSignature);
        }
        window.chartboost.onInterstitialAdPreloaded = function()
        {
          alert('preload');  
        };
        window.chartboost.onInterstitialAdLoaded = function(){
            alert('loaded!');
            window.chartboost.showInterstitialAd('Default');
        };
        this.preload();
    },
    preload:function(){
        window.chartboost.preloadInterstitialAd('Default');
        window.chartboost.preloadMoreAppsAd('Default');
    },
    showIntersitial:function(location){
//        if(window.chartboost.loadedInterstitialAd())
//            {
//                window.chartboost.showInterstitialAd(location);
//            }
        window.chartboost.showInterstitialAd('Default');
    },
    showMoreApps:function(location)
    {
        window.chartboost.showMoreApps(location);
    }
}


document.addEventListener("deviceready",function(){
    alert('deviceready');
    AdsUtil.setup();
},false);