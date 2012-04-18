# Importing Data

---

## Many Options

- Scripting and interaction with the HTTP API.

    _Check out [Todd Jackson](https://twitter.com/#!/stoolrossa)'s post at:_
    
    _<http://boomphisto.blogspot.com.au/2011/10/serving-up-geojson-while-having-rest-on.html>_

- Tools such as `shp2geocouch` (ruby): <https://github.com/maxogden/shp2geocouch> (_Not sure if this is still activately maintained_).

- GDAL >= 1.9.0 support for CouchDB

---

## GDAL Example

Given you lot are spatial types, I'm going to recommend using GDAL (>= 1.9.0), and in particular the `ogr2ogr` tool.

[[code code/ogr2ogr/import-shapefile.bash]]

Credentials can be passed in using the `COUCHDB_USERPWD` environment variable:

[[code code/ogr2ogr/userpass-env.bash]]

More info: <http://www.gdal.org/ogr/drv_couchdb.html>

---

## NOTE: Use the HTTP API for Updates!

- Performing full imports using the either the `shp2geocouch` or `ogr2ogr` tools would not be encouraged in a production situation, as it will impact CouchDB replication and the `_changes` feed.
