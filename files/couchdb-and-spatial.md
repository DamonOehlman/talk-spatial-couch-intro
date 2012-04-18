# CouchDB and Location Based Services

---

## Why?

From my personal observations, __location based data__ (with particular reference to Point of Interest data) generally contains:

- Some core common attributes (title / name / etc)
- Some Geospatial information (be that points, lines, polygons, etc)
- And then a __whole pile__ of custom attributes.

Effectively storing these custom attributes in an RDBMS, is generally painful and ugly.

---

# CouchDB offers an alternative

---

# And you've got options!

---

## Option 1: Hybrid Stack

- Involves separating* data into relevant stores:
    - Geospatial data should be extracted and placed in a traditional GIS.
    - Extended attribute information should remain in Couch only.

---

## Hybrid Stack Pros & Cons
    
### PROS

- Access to more complicated geospatial operations through familiar tool.

### CONS

- Have to ensure mechanisms are in place to keep data in sync.

---

## Options 2: Pure Couch

- All data remains in CouchDB (as it does in Option 1)
- GeoSpatial data is indexed within Couch, courtesy of GeoCouch.

---

## Pure Couch Pros & Cons

### PROS

- Highly self contained, with options of deployment to mobile

### CONS

- Limited Geospatial operations available
- Geospatial operation speed
- Data size - see Todd Jackson's [post](http://boomphisto.blogspot.com.au/2011/10/serving-up-geojson-while-having-rest-on.html).
