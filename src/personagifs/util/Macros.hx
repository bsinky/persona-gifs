package personagifs.util;

#if macro
import haxe.macro.Context;
import haxe.macro.Expr;
import haxe.macro.Type;
import haxe.io.Path;
import sys.FileSystem;
#end

class Macros {
    public static macro function getImages() {
        var imageDirectory = "img";

        if (!FileSystem.isDirectory(imageDirectory))
        {
            throw 'Yikes! Couldn\'t find directory ${imageDirectory}';
        }

        // make array of image names and convert to expressions
        var exprs = [for(value in FileSystem.readDirectory(imageDirectory)) macro $v{value}];

        return macro $a{exprs};
  }
}