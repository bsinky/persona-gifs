package;

import js.Browser;
import js.html.Element;
import js.html.ImageElement;

import Random;
import personagifs.util.Macros;

class Main {

    public static var images:Array<String> = Macros.getImages();
    public static function main():Void {
        var containerElement:Element = cast Browser.document.querySelector(".personagif");
        var imageElement:ImageElement = cast containerElement.querySelector("img");

        containerElement.addEventListener("click", randomizeImage);

        Browser.window.addEventListener("resize", resizeImage.bind(imageElement));

        var processRequestedImage = function() {
            var requestedImage = getImageFromHash();

            if (requestedImage != null) {
                setImage(imageElement, requestedImage);
                resizeImage(imageElement);
            }
        };

        Browser.window.addEventListener("hashchange", processRequestedImage);

        if (getImageFromHash() == null) {
            randomizeImage();
        }
        else {
            processRequestedImage();
        }
    }

    private static function getImageFromHash() {
        var requestedImage = Browser.location.hash;

        return
            if (requestedImage != null && requestedImage.length > 0)
                requestedImage.substr(1)
            else
                null;
    }

    private static function randomizeImage() {
        Browser.location.hash = Random.fromArray(images);
    }

    private static function setImage(imageElement:ImageElement, image:String) {
        imageElement.src = "img/" + image + ".gif";
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