package;

#if js
import js.Browser;
import js.html.ImageElement;
#end

import Random;
import personagifs.util.Macros;

class Main {

    public static var images:Array<String> = Macros.getImages();
    public static function main():Void {
        var containerElement = cast Browser.document.querySelector('.container');
        var gifElement = cast containerElement.querySelector('.personagif');

        containerElement.addEventListener("click", function () {
            randomizeImage(gifElement);
        });

        randomizeImage(gifElement);
    }

    private static function randomizeImage(gifcontainer:ImageElement) {
        gifcontainer.src = "img/" + Random.fromArray(images);
    }
}