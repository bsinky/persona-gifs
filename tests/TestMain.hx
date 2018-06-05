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

            it("should only contain GIFs that are under 1 megabyte", {
                var tooLargeImages = "";
                for (image in filesystemImages) {
                    var relativeImagePath = Path.join([TestHelper.getImageDirectory(), image]);
                    var fileStat = FileSystem.stat(relativeImagePath);
                    if (fileStat.size > 1000000) {
                        tooLargeImages += '    - ${image} (${fileStat.size / 1000000} MB)\n';
                    }
                }

                if (tooLargeImages.length > 0) {
                    tooLargeImages = "The following images are too large (should be 1MB or less):\n" + tooLargeImages;
                    fail(tooLargeImages);
                }
            });
        });
    }
}
