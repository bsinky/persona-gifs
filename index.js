// Generated by Haxe 3.4.7
(function () { "use strict";
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
var Main = function() { };
Main.__name__ = true;
Main.main = function() {
	var containerElement = window.document.querySelector(".personagif");
	var imageElement = containerElement.querySelector("img");
	containerElement.addEventListener("click",Main.randomizeImage);
	var a1 = imageElement;
	window.addEventListener("resize",function() {
		Main.resizeImage(a1);
	});
	var processRequestedImage = function() {
		var requestedImage = Main.getImageFromHash();
		if(requestedImage != null) {
			Main.setImage(imageElement,requestedImage);
			Main.resizeImage(imageElement);
		}
	};
	window.addEventListener("hashchange",processRequestedImage);
	if(Main.getImageFromHash() == null) {
		Main.randomizeImage();
	} else {
		processRequestedImage();
	}
};
Main.getImageFromHash = function() {
	var requestedImage = window.location.hash;
	if(requestedImage != null && requestedImage.length > 0) {
		return HxOverrides.substr(requestedImage,1,null);
	} else {
		return null;
	}
};
Main.randomizeImage = function() {
	var arr = Main.images;
	var tmp = arr != null && arr.length > 0 ? arr[Math.floor((arr.length - 1 + 1) * Math.random())] : null;
	window.location.hash = tmp;
};
Main.setImage = function(imageElement,image) {
	imageElement.src = "img/" + image + ".gif";
};
Main.resizeImage = function(imageElement) {
	imageElement.style.height = "";
	imageElement.style.width = "";
	if(window.innerHeight < window.innerWidth) {
		imageElement.style.height = Std.string(window.innerHeight) + "px";
	} else {
		imageElement.style.width = Std.string(window.innerWidth) + "px";
	}
};
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + js_Boot.__string_rec(o[i],s);
					} else {
						str += js_Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0 ? "," : "") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
};
String.__name__ = true;
Array.__name__ = true;
Main.images = ["TakeYourTime","chalkthrow","chidorilaugh","chie","dealwithit","futabakeyboard","fuukabooks","jackfrost","kimonos","morganabathe","p3dancingfuukaken","p3protagevoker","p3thanatos","p3trippy","p4teddie","p5dfistbumping","p5jailzoom","p5kamoshidadestroys","p5logo","p5morganathrow","p5protagcoffee","p5protaggrin","p5ryujibeach","p5timetobuttonmash","pqdrink","tatsuyafighterjet","yusukeflourish"];
Main.main();
})();
