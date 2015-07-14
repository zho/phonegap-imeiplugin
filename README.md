phonegap-imeiplugin
===================

Get The Real IMEI Number on Android Device

Install:

    phonegap plugin add https://github.com/zho/phonegap-imeiplugin.git
    -- OR --
    cordova plugin add imeiplugin

Example Usage:

    window.plugins.imeiplugin.getImei(callback);

    function callback(imei) {
        console.log("My Android IMEI :" + imei);
    }
