# Getting Started with CouchDB

---

## Not Installing CouchDB

- By far the easiest way to get started with CouchDB, is to __not__ install it.
- One of the best ways to do this is to use IrisCouch: <http://www.iriscouch.com/>.
- If you do need to install it, then I'd recommend looking at <http://refuge.io> - the guys there are doing some great work making the install easier.

---

## Interacting with CouchDB

- All interaction with CouchDB is done through a sensible, RESTful API.
- There are also many libraries for working with the API. 
- My preference is for those which provide an interface as close to the actual HTTP API as possible.
- And, there is a pretty friendly web admin utility called Futon.

---

## Getting Data into Couch

Given you lot are spatial types, I'm going to recommend using GDAL, and in particular the `ogr2ogr` tool.

[[code code/ogr2ogr/import-shapefile.bash]]

Credentials can be passed in using the `COUCHDB_USERPWD` environment variable:

[[code code/ogr2ogr/userpass-env.bash]]

