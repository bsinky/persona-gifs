// Generated by Haxe 3.4.2
(function () { "use strict";
var Lambda = function() { };
Lambda.__name__ = true;
Lambda.array = function(it) {
	var a = [];
	var i = it.iterator();
	while(i.hasNext()) {
		var i1 = i.next();
		a.push(i1);
	}
	return a;
};
var Main = function() { };
Main.__name__ = true;
Main.main = function() {
	var containerElement = window.document.querySelector(".personagif");
	var imageElement = containerElement.querySelector("img");
	var a1 = imageElement;
	containerElement.addEventListener("click",function() {
		Main.randomizeImage(a1);
	});
	Main.randomizeImage(imageElement);
	Main.resizeImage(imageElement);
	var a11 = imageElement;
	window.addEventListener("resize",function() {
		Main.resizeImage(a11);
	});
};
Main.randomizeImage = function(imageElement) {
	var arr = Main.images;
	imageElement.src = "img/" + (arr != null && arr.length > 0 ? arr[Math.floor((arr.length - 1 + 1) * Math.random())] : null);
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
var Random = function() { };
Random.__name__ = true;
Random.bool = function() {
	return Math.random() < 0.5;
};
Random["int"] = function(from,to) {
	return from + Math.floor((to - from + 1) * Math.random());
};
Random["float"] = function(from,to) {
	return from + (to - from) * Math.random();
};
Random.string = function(length,charactersToUse) {
	if(charactersToUse == null) {
		charactersToUse = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	}
	var str = "";
	var _g1 = 0;
	var _g = length;
	while(_g1 < _g) {
		var i = _g1++;
		str += charactersToUse.charAt(Math.floor((charactersToUse.length - 1 + 1) * Math.random()));
	}
	return str;
};
Random.date = function(earliest,latest) {
	var from = earliest.getTime();
	var t = from + (latest.getTime() - from) * Math.random();
	return new Date(t);
};
Random.fromArray = function(arr) {
	if(arr != null && arr.length > 0) {
		return arr[Math.floor((arr.length - 1 + 1) * Math.random())];
	} else {
		return null;
	}
};
Random.shuffle = function(arr) {
	if(arr != null) {
		var _g1 = 0;
		var _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			var j = Math.floor((arr.length - 1 + 1) * Math.random());
			var a = arr[i];
			var b = arr[j];
			arr[i] = b;
			arr[j] = a;
		}
	}
	return arr;
};
Random.fromIterable = function(it) {
	if(it != null) {
		var arr = Lambda.array(it);
		if(arr != null && arr.length > 0) {
			return arr[Math.floor((arr.length - 1 + 1) * Math.random())];
		} else {
			return null;
		}
	} else {
		return null;
	}
};
Random.enumConstructor = function(e) {
	if(e != null) {
		var arr = e.__empty_constructs__;
		if(arr != null && arr.length > 0) {
			return arr[Math.floor((arr.length - 1 + 1) * Math.random())];
		} else {
			return null;
		}
	} else {
		return null;
	}
};
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
var personagifs_util_Macros = function() { };
personagifs_util_Macros.__name__ = true;
String.__name__ = true;
Array.__name__ = true;
Date.__name__ = ["Date"];
Main.images = ["TakeYourTime.gif","chalkthrow.gif","chidorilaugh.gif","chie.gif","dealwithit.gif","futabakeyboard.gif","fuukabooks.gif","jackfrost.gif","kimonos.gif","morganabathe.gif","p3dancingfuukaken.gif","p3protagevoker.gif","p3trippy.gif","p4teddie.gif","p5logo.gif","p5protagcoffee.gif","p5protaggrin.gif","pqdrink.gif","tatsuyafighterjet.gif","yusukeflourish.gif"];
Main.main();
})();
