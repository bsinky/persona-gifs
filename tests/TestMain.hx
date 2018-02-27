package tests;

import haxe.io.Path;
import sys.FileSystem;
import tests.util.TestHelper;

using buddy.Should;

class TestMain extends buddy.SingleSuite {
    public function new() {
        describe("Macros.getImages", {
            var macroImageNames:Array<String> = personagifs.util.Macros.getImages();
            var filesystemImageNames = TestHelper.getFileSystemImageNames();

            it("should contain all file names from image directory", {
                macroImageNames.should.containAll(filesystemImageNames);
            });

            it("should contain the same number of images as the image directory", {
                macroImageNames.length.should.be(filesystemImageNames.length);
            });
        });

        describe("Image folder", {
            var filesystemImages = FileSystem.readDirectory(TestHelper.getImageDirectory());

            it("should contain only GIFs", {
                for (image in filesystemImages) {
                    Path.extension(image).should.be("gif");
                }
            });
        });
    }
}