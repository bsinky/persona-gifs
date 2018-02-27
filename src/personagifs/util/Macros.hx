package personagifs.util;

#if macro
import haxe.macro.Context;
import haxe.macro.Expr;
import haxe.io.Path;
import sys.FileSystem;
#end

class Macros {
    public static macro function getImages() {
        var imageDirectory = Path.join(["public", "img"]);
        var absImageDir = Path.join([FileSystem.absolutePath("."), imageDirectory]);

        if (!FileSystem.exists(absImageDir) || !FileSystem.isDirectory(absImageDir))
        {
            Context.fatalError('Couldn\'t find directory ${absImageDir}', Context.currentPos());
        }

        // make array of image names and convert to expressions
        var exprs = [
            for(value in FileSystem.readDirectory(absImageDir))
                macro $v{Path.withoutExtension(value)}
            ];

        return macro $a{exprs};
  }
}