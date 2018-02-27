package tests.util;

import haxe.io.Path;
import sys.FileSystem;

class TestHelper {

    public static function getImageDirectory() {
        return Path.join(["public", "img"]);
    }

    public static function getFileSystemImageNames() {
        return [
            for (file in FileSystem.readDirectory(getImageDirectory()))
                Path.withoutExtension(file)
            ];
    }
}