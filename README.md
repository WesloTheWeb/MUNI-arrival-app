# SF Muni Upcoming Arrivals App

## Requirements
This is a small basic project for practice with API, and with React. Used as a drill.

### Getting Data
We’ll be using the [Restbus API](http://restbus.info/) to get data about MUNI, which is a transit agency in San Francisco, CA.

**Core Restbus Concepts**
- Since we only care about the "sf-muni" agency, that id will be the same in all API calls
- Routes are identified by the case-sensitive route ID (e.g. `F`)
- Stops are associated with a route and are identified by a numeric stop ID (e.g. `4534`)
- Stops do not always have multiple predictions.  Sometimes they only have one and, in rare cases, they may have none.

**Example API Endpoints**
- **All SF Muni Routes** — http://restbus.info/api/agencies/sf-muni/routes
  + For all routes, get the IDs (`F`) and titles (`F-Market & Wharves`)
- **Individual Route** — http://restbus.info/api/agencies/sf-muni/routes/F
  + For a given route ID (`F`), get a list of all stop IDs (`5184`) and titles (`Jones St & Beach St`)
- **Predictions for a combination of a route and stop** - http://restbus.info/api/agencies/sf-muni/routes/F/stops/5184/predictions
  + For a given route ID (`F`) and stop ID (`5184`), get arrival times of approaching buses


## Example starting points
There are several paths we can take to kick this project off:
- **Getting real arrival times for a set route and stop**
Replace the hardcoded arrival times with real predictions for a set route and stop. For example, route `F` and stop `5184`.
- **getting a list of all SF Muni routes**
Use the RestBus API to replace the truncated, hardcoded list of routes with all the available SF Muni routes
