# Feed Reader Testing Overview

This project includes a series of Jasmine test suites that test a web-based application that reads RSS feeds.

## Getting Started

Download the files and folders contained in this GitHub Repo and run locally from your computer.

To run locally from your computer, open the index.html file in your browser. The tests will be at the bottom of the page. Additionally, there is a Jasmine folder within the documents. Within that folder is a "spec" folder which holds the feedreader.js file, which contains all of the testing suites.


## What do the tests do?

The Feed Reader Test uses the Jasmine library to check for certain functionalities of the RSS feeds application. There are 6 included tests contained within 4 testing suites.

#### RSS Feeds Test Suite

Contains 3 tests that check the RSS feed has data in it.
* Test 1 checks that the feed is defined and not empty.
* Test 2 checks that every feed has a URL.
* Test 3 checks that every feed has a name.

#### The Menu Test Suite

Contains 3 tests that ensures the menu functions correctly.
* Test 4 ensures the menu is hidden by default
* Test 5 ensures that clicking on the menu icon makes the menu visible.
* Test 6 ensures another click once again hides the menu.

#### Initial Entries Test Suite

Contains 1 test that checks that there are entries in the feed after if loads.

#### New Feed Selection Suite

Contains 1 test that ensures selecting a different feed loads a different feed to the page.

## Credits

* Udacity Starter Code for the Front-End Nanodegree Project Feed Reader Testing Found here: https://github.com/udacity/frontend-nanodegree-feedreader

## Dependencies

* Google fonts
* IcoMoon icons
* handlebarsjs 2.0.0
* Google hosted jQuery 2.1.1 library
* Google JS API
* Jasmine 3.1.0 library
