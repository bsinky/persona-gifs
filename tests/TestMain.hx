package tests;

import sys.FileSystem;
using buddy.Should;

class TestMain extends buddy.SingleSuite {
    public function new() {
        describe("Utils", {
            var macroImages:Array<String> = personagifs.util.Macros.getImages();

            it("getImages macro should contain all files from image directory", {
                macroImages.should.containAll(FileSystem.readDirectory("img"));
            });
        });
    }
}