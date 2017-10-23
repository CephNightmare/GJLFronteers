(function (window, document, $) {

    "use strict";

    var
        blis = window.blis || {}
        ;

    function init() {

        blis.behaviors = {};

        blis.LoadBehavior = function (context) {

            if (context === undefined) {
                context = $(document);
            }

            context.find("*[data-behavior]").each(function () {
                var that = $(this),
                    behaviors = that.attr('data-behavior');

                $.each(behaviors.split(" "), function (index, behaviorName) {
                    var BehaviorClass = blis.behaviors[behaviorName];
                    var initializedBehavior = new BehaviorClass(that);
                });
            });

        };

        blis.onReady = function () {
            blis.LoadBehavior();
        };

        $(document).ready(setup);
    }

    init();

    function setup() {
        blis.onReady();
        blis.LoadBehavior();
    }

})(window, window.document, jQuery);