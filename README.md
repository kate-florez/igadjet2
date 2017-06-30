# Moovweb Project

Welcome to your Moovweb project! Moovweb is a great way to build a compelling new front-end presentation for an existing website. The files in this project describe the changes you want to make to the front end of a site. There are places in this project to add new images (assets/images/), styles (assets/stylesheets/) and even manipulate HTML (scripts/).

## Before Running This

To run this project, you must have the Moovweb SDK installed on your system. Installation is easy - just go to [the download page on the Moovweb site](http://developer.moovweb.com/download) to download and install the latest version.

## Getting Started

To easily develop multiple projects at a time, you can run the Moovweb Developer Dashboard, which will give you a graphical user interface (GUI) for the Moovweb SDK. You can start the Dashboard with the `moov start` command like so:

    sudo moov start

This will launch the local Moovweb Developer Dashboard interface in your favorite browser. By default, the Dashboard is viewable on your localhost via port 4002 (127.0.0.1:4002).

The Moovweb Developer Dashboard will let you generate, manage, start, debug, and track locally running projects as you develop.

## Domains

By default, the moov server manages host entries for you. This makes your local server transform traffic in real time based on your project code.

If running `sudo moov server` with the `-auto-hosts=false` option, remember to put all domains you're going to view in your /etc/hosts file like so:

    127.0.0.1   mlocal.igadgetcommerce.com


## Deploying Code

When you're ready to deploy your local project, you need to have a destination site on Moovweb.

If you don't already have a project namespace to deploy to, log in to the [Control Center](http://console.moovweb.com) and create a project, giving it a unique name.

To deploy, use the `moov deploy` command:

    moov deploy $ACCOUNTNAME/$SITENAME

## More Info

We have lots of informative guides, videos, live help, documentation, and even a book on how to use Moovweb. You should be able to get up and running in 30 minutes if you visit [developer.moovweb.com](http://developer.moovweb.com).

You might find [the page about the scripts folder](http://developer.moovweb.com/docs/local/project_files) useful for starting to write Tritium, and our [documents on the stylesheets folder](http://developer.moovweb.com/docs/local/project_files/stylesheet) for information on how we structure our stylesheets.
