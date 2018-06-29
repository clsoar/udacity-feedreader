/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* #1 This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
      it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* #2 Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
      function urlLoop(index) {
        it('URL defined and not empty', function() {
          expect(allFeeds[index].url).toBeDefined();
          expect(allFeeds[index].url).not.toBe('');
        });
      }

        /* #3 Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
      function nameLoop(index) {
        it('Name defined and not empty', function() {
          expect(allFeeds[index].name).toBeDefined();
          expect(allFeeds[index].name).not.toBe('');
        })
      }
      //Loop for tests 2 and 3
      for (var i = 0; i < allFeeds.length; i++){
        urlLoop(i);
        nameLoop(i);
      }
    });


    // Suite to test the menu functionality
    describe('The menu', function() {
      var el = document.querySelector('body'),
          menuIcon = $('.menu-icon-link');

        /* #4 Test that ensures the menu element is
         * hidden by default.
         */
         it('Menu element is hidden by default', function() {
           expect(el).toHaveClass('menu-hidden');
         });
         /* #5 & 6 Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('Menu becomes visible when icon is clicked', function() {
            (menuIcon).trigger("click");
            expect(el).not.toHaveClass('menu-item');
          });
          it('Menu hides when icon is clicked again', function() {
            (menuIcon).trigger("click");
            expect(el).not.toHaveClass('menu-item');
          });
    });
    // Test suite for checking entries in feed after feed loads
    describe('Initial Entries', function() {
        var entry;
        //loads feed
        beforeEach(function(done) {
          loadFeed(0, function() {
            done();
          });
        });
        /* #7 Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         it('There is an entry in the feed after it loads', function(done) {
           entry = document.getElementsByClassName('entry');
           expect(entry.length).toBeGreaterThan(0);
           done();
         });
    });
    // Test suite that checks that the feed changes
    describe('New Feed Selection', function() {
      var entry1,
          entry2;
      //Loads two different feeds
      beforeEach(function(done) {
        loadFeed(0, function() {
          entry1 = document.getElementsByClassName('entry');
          done();
        });
        loadFeed(1, function() {
          entry2 = document.getElementsByClassName('entry');
          done();
        });
      });

        /* #8 Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
         it('Content in feed changes after it loads a new selection', function(done) {
           expect(entry1).not.toBe(entry2);
           done();
         });
      });
}());
