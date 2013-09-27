# CouchDB + Spatial = Awesome

This is a presentation given at the first [GeoRabble](http://georabble.org/) Brisbane meetup. It's a high level introduction into [CouchDB](http://couchdb.apache.org/) and it's relevance to the spatial industry.

When I first started on the presentation I intended it be almost purely on the topic of [GeoCouch](https://github.com/couchbase/geocouch), however, I also decided to cover Couch in more general terms and other options for being able to incorporate CouchDB into a Geospatial solution.

If you have any feedback or questions, feel free to raise an issue :)

## Demo

A very rough demo related to the presentation is available online at the following location:

<http://sidelab.iriscouch.com/parking/_design/spatial-demo/index.html>

And the source is available here:

<https://github.com/DamonOehlman/demo-kanso-geocouch>

## Building the Presentation

This is a [deck.js](http://imakewebthings.com/deck.js/) presentation that has been put together with a tool I am working on called [boxit](https://github.com/DamonOehlman/boxit).  I find boxit really useful, and while there is still a lot to do on the project you could use this repo as a great starting point for writing your own presentation using boxit.

To install boxit, you will need to have node.js and npm installed on your machine.  Once you do, you install box it using the following command:

```
npm install -g boxit
```

If you see a permission error, then run the command using `sudo`.  Once installed, you can rebuild the presentation (to the output folder) by running `boxit` from within the root presentation directory (i.e. the folder in which this README document resides).

## License

This work is licensed under a [Creative Commons Attribution 3.0 Unported License](http://creativecommons.org/licenses/by/3.0/).