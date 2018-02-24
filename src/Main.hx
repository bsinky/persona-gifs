package;

#if js
import js.Browser;
import js.html.Element;
import js.html.ImageElement;
#end

import Random;
import personagifs.util.Macros;

class Main {

    public static var images:Array<String> = Macros.getImages();
    public static function main():Void {
        var containerElement:Element = cast Browser.document.querySelector(".personagif");
        var imageElement:ImageElement = cast containerElement.querySelector("img");

        containerElement.addEventListener("click", randomizeImage.bind(imageElement));

        randomizeImage(imageElement);
        resizeImage(imageElement);

        Browser.window.addEventListener("resize", resizeImage.bind(imageElement));
    }

    private static function randomizeImage(imageElement:ImageElement) {
        imageElement.src = "img/" + Random.fromArray(images);
    }

    private static function resizeImage(imageElement:ImageElement) {
        imageElement.style.height = "";
        imageElement.style.width = "";

        if (Browser.window.innerHeight < Browser.window.innerWidth) {
            imageElement.style.height = Browser.window.innerHeight + "px";
        }
        else {
            imageElement.style.width = Browser.window.innerWidth + "px";
        }
    }
}