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

## Simple GET

[[code code/couch/sample-get.bash]]

[[code code/couch/sample-get-output.js]]

__NOTE:__ While this data has lat/lng data it is not in an ideal form, for GeoCouch to use.

---

## Simple PUT

New data can be added through use of the HTTP PUT method:

[[code code/couch/sample-put.bash]]
[[code code/couch/sample-put-output.js]]

---

## So much more

- I consider CouchDB to be quite a deep product, that is easy to get started with but a while to master.

- We will touch on other aspects of CouchDB as relevant to this talk.
