package;

#if js
import js.Browser;
import js.html.Element;
#end

import Random;
import personagifs.util.Macros;

class Main {

    public static var images:Array<String> = Macros.getImages();
    public static function main():Void {
        var containerElement:Element = cast Browser.document.querySelector(".personagif");

        containerElement.addEventListener("click", function () {
            randomizeImage(containerElement);
        });

        randomizeImage(containerElement);
    }

    private static function randomizeImage(gifcontainer:Element) {
        gifcontainer.style.backgroundImage = "url(\"img/" + Random.fromArray(images) + "\")";
    }
}