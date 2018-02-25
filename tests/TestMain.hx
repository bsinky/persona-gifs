package tests;

import sys.FileSystem;
using buddy.Should;

class TestMain extends buddy.SingleSuite {
    public function new() {
        describe("Macros.getImages", {
            var macroImages:Array<String> = personagifs.util.Macros.getImages();
            var filesystemImages = FileSystem.readDirectory("img");

            it("should contain all files from image directory", {
                macroImages.should.containAll(filesystemImages);
            });

            it("should contain the same number of images as the image directory", {
                macroImages.length.should.be(filesystemImages.length);
            });
        });
    }
}