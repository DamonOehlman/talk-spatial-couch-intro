# GeoCouch

---

## What is GeoCouch

- GeoCouch (see <https://github.com/couchbase/geocouch>) is a set of spatial extensions for CouchDB.

- Given CouchDB's capabilities as a webserver this opens up opportunities for much lighter weight, but still very capable geospatial web apps.

- Checkout a great talk from [Volker Mische](http://twitter.com/vmx), GeoCouch's creator here: <http://www.couchbase.com/slides/geocouch/CCSF>

---

## Using GeoCouch

- The simplest way to get started with GeoCouch is through using a free couch instance at <http://iriscouch.com/>.

- Uploading design docs into CouchDB is the hardest part.

    _This generally true of CouchDB, but CouchApps can help_
    
---

## Using GeoCouch - Writing a CouchApp

- Some clever individuals came up with the concept of a CouchApp (see <http://couchapp.org/>).

- Writing a CouchApp means you are deploying both your application and data into couch, and serving it using the internal webserver.

---

## CouchApp Uploaders

There are a number of tool available to help with the process of deploying a CouchApp into a CouchDB instance (including [IrisCouch](http://iriscouch.com/), [CloudAnt](http://cloudant.com), etc):

- CouchApp (Python): <https://github.com/couchapp/couchapp>
- CouchApp (Node.js): <https://github.com/mikeal/node.couchapp.js>
- Kanso (Node.js): <http://kan.so/>

---

# Demo