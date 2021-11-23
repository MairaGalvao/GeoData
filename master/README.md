# NETLUME

## TAKE HOME PROJECT

### FRONT-END ENGINEER

---

## INSTRUCTIONS

This is a simple Flask API that you can run on your machine to get the JSON files that you need to build the Front-end Engineer take home project.

Read this entire document to know the requirements, how to setup the API and the UI/UX specification.

If you have doubts or face any issues, please send an email to marcos.medeiros@netlume.io with details of your situation so we can try and help you get through these problems.

---

## REQUIREMENTS

### PYTHON 3
In case you don't have python 3 already installed, refer to their [official guide](https://wiki.python.org/moin/BeginnersGuide/Download).

### PIP
After installing python you can install pip following their [official getting started guide](https://pip.pypa.io/en/stable/getting-started/).

---

## SETUP

To get the API up and running, clone this repository and run from the root directory 

```
pip install -r requirements.txt
```

After pip finishes installing the required packages, start the API running

```
python3 endpoints.py
```

The API provides you with 3 endpoints and all of them will respond with static JSON files:

### 1. `/`

The home endpoint wich will send you a standard success response to confirm that the API is working.

```
    // API response
    {
        status: 'success',
        data: {
            message: 'Netlume's take home project API is up and running.'
        }
    }
```

### 2. `/treeview`

The tree view endpoint will return you a nested object in a tree structure.

```
    // PhysicalComponent
    {
        children: {
            1: PhysicalComponent,
            2: PhysicalComponent
            3: PhysicalComponent
            ...
        };
        connection: string;
        is_a: string;
        name: string;
        uuid: string;
    }

    // API response
    {
      data: {
        1: PhysicalComponent,
      status: "success"
    }
```

### 3. `/mapview`

The map view endpoint will return you a collection of GeoJSON features.

```
    // GeoJSONFeature
    {
        geometry: {
            coordinates: [number, number][];
            type: 'LineString';
        };
        properties: {
            color: string;
            info: {
                diameter: number;
                length: number;
            };
            parent_uuid: string;
            uuid: string;s
        },
        type: 'Feature';
    }

    // API response
    {
      features: GeoJSONFeature[];
      type: 'FeatureCollection';
    }
```

*The API will be exposed on http://localhost:5000/*

---

## UI/UX SPECIFICATION

There are two project features for this take home project: Tree View and Map View. You can choose to submit any of the two or both as long as you are still inside the deadline.

**IMPORTANT: All submissions should be developed in React and Typescript.**

### Tree view

Given the nested `PhysicalComponent` object that you'll retrieve from the `/treeview` endpoint of this API, build an user interface in which all of the tree nodes are displayed in a tree-like structure.

#### Requirements

- You should use D3 and/or React D3 libraries to build the tree visualization.

- The nodes should be connected by a line/link and the user should be able to see the parent/child connection type in a clear way.

- Nodes should display data that easily identifies the class they belong to and their name.

- User should be able to remove existing connections/nodes and also add new connections/nodes.

- All data should be fetched from the API. No hard-coded data.


### Map view

Given the GeoJSON Feature Collection that you'll retrieve from the `/mapview` endpoint of this API, build an user interface in which all of GeoJSON features are displayed on an interactive map.

#### Requirements

- You should use Leaflet.js and/or React Leaflet libraries to build the map component.

- User should be able to see all map elements in a default color.

- User should be able to toggle a switch/click a button to see all map elements with the custom color defined in the `color` property of each GeoJSONFeature properties object.

- When a given map element is hovered, the map element should be highlighted so the user can identify an individual map element.

- When a given map element is clicked, a popup displays the data inside the `info` property of each GeoJSONFeature and the its `uuid`.

- The map should automatically center on the map elements upon initialization.

- All data should be fetched from the API. No hard-coded data.

---

## NICE-TO-HAVE'S

If you're commited and want to achieve high marks, be mindful to:

- Write clean and readable code.

- Use a linter and code formatter.

- Create type and interface definitions for functions, arguments and components.

- Write comments **ONLY** where the code is complex enough to make it necessary.

- Write tests for the component.

---

## SUBMISSION

After receiving access tho this repository, You'll have 3 days to submit your take home project.

Any reference or snippet of code that's not owned by the submitter should be referenced and indexed. No plagiarism is accepted.

To submit the project, create a git repository and provide us with the access link via email at marcos.medeiros@netlume.io. The subject of the email should be "Front-End Engineer Project Submission". Any notes or additional information that you find relevant is also welcome.

### The 3 days deadline for this project starts once the email with access to this repository is send.


Thanks for your time and energy,

We're looking forward to your submission!
