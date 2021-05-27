function IMEIPlugin() {
	this.getImei = function(returnCallback,errCallback) {
		if (Object.prototype.toString.call(errCallback) != '[object Function]')
				errCallback = function(){};
		cordova.exec(returnCallback, errCallback, "imeiplugin", "getImei", []);
	}
}

if(!window.plugins) {
	window.plugins = {}
}

window.plugins.imeiplugin = new IMEIPlugin();
