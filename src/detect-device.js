module.exports = function() {
	if (!navgiator) {
		return null;
	}

  	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  	if (!userAgent) {
  		return null;
  	}

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "Desktop";
}