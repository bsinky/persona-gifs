(
    function () {
        "use strict";

        var LOW_IMAGE_INDEX = 0;
        var HIGH_IMAGE_INDEX = 11;

        window.personaGifs = {
            randomize: function (imageElement) {
                var newImageIndex = Math.floor(Math.random() * HIGH_IMAGE_INDEX) + LOW_IMAGE_INDEX;

                imageElement.src = "img/" + newImageIndex + ".gif";
            }
        };

        window.onload = function() {
            var container = document.getElementById("gifcontainer");

            container.addEventListener("click", function() {
                personaGifs.randomize(this);
            });

            personaGifs.randomize(container);
        }
    }
)();