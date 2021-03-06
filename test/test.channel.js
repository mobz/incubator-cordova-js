describe("channel", function () {
    var channel = require('cordova/channel');

    describe("when subscribing", function() {
        it("should not change number of handlers if no function is provided", function() {
            var c = channel.create('heydawg');
            var initialLength = c.numHandlers;

            c.subscribe();

            expect(c.numHandlers).toEqual(initialLength);

            c.subscribe(null);

            expect(c.numHandlers).toEqual(initialLength);
        });
    });

    describe("when unsubscribing", function() {
        it("should change the handlers length appropriately", function() {
            var c = channel.create('test');
            var firstHandler = function() {};
            var secondHandler = function() {};
            var thirdHandler = function() {};

            c.subscribe(firstHandler);
            c.subscribe(secondHandler);
            c.subscribe(thirdHandler);

            var initialLength = c.numHandlers;

            c.unsubscribe(thirdHandler);

            expect(c.numHandlers).toEqual(initialLength - 1);
        });
    });
});
