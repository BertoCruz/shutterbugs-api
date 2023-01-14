# Comic-Can API

This app is the back-end server for the Shutterbugs showcase project

## Getting started
**Warning**: Use of this API & backend server will require the user to download PostgreSQL and PG Admin 4. Creating a matching database `showcase_project` and data table `shutterbugs` will also be required.

Clone down this repo, and cd into it.

### Installation
Run
- `npm install` to download all dependencies
- `npm run dev`

### Usage
Once deployed, this API and database can be used to work with the front end of this project [`shutterbugs-ui`](https://github.com/BertoCruz/shutterbugs-ui). User will have full ability to send all HTTP requests listed below.

### Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/photographers` | GET | not needed | An array containing all existing Photographers: `{photographers:[{name:"Graciela Iturbide",birth_year:1942,death_year:"alive:,country_of_origin:"Mexico",based:"Coyoacan, Mexico",group_affiliations:"Mexican Council of Photography",bio:"bio info",photos: [{photo_path: "sample1.jpg",description:"description of photo"},{photo_path: "sample2.jpg",description: "description of photo"}],user_notes:"sample notes",is_favorite:true,id:1}]}`|
| `http://localhost:3001/api/v1/photographers/:id` | GET | not needed | Array of the requested photographer: `[{name:"Yael Martinez",birth_year:1984,death_year:"alive:,country_of_origin:"Mexico",based:"Taxco, Mexico",group_affiliations:"Magnum Photos",bio:"bio info",photos: [{photo_path: "sample1.jpg",description:"description of photo"},{photo_path: "sample2.jpg",description: "description of photo"}],user_notes:"sample notes",is_favorite:true,id:2}]` |
| `http://localhost:3001/api/v1/photographers` | POST | `{name: "Hiroji Kubota",birth_year:1939,death_year:"alive",country_of_origin:"Japan",based: "Tokyo, Japan",group_affiliations: "Magnum Photos",bio:"bio info", photos: [{photo_path:"sample1.jpg",description:"description of photo"},{photo_path:"sample2.jpg",description: "description of photo"}]}`| Array of created photographer object: `[{name: "Hiroji Kubota",birth_year:1939,death_year:"alive",country_of_origin:"Japan",based: "Tokyo, Japan",group_affiliations:"Magnum Photos",bio:"bio info",photos:[{photo_path:"sample1.jpg",description:"description of photo"},{photo_path:"sample2.jpg",description: "description of photo"}]},user_notes:"",is_favorite:false,id: 10}]` |
| `http://localhost:3001/api/v1/photographers/:id` | DELETE | not needed | Array of the deleted photographer object: `[{name:"HirojiKubota",birth_year:1939,death_year:"alive",country_of_origin:"Japan",based:"Tokyo, Japan",group_affiliations:"Magnum Photos",bio:"bio info",photos:[{photo_path:"sample1.jpg",description:"description of photo"},{photo_path:"sample2.jpg",description: "description of photo"}],user_notes:"",is_favorite:false,id:10}]` |
| `http://localhost:3001/api/v1/photographers/:id` | PUT | `{name:"HirojiKubota",birth_year:1939,death_year:"alive",country_of_origin:"Japan",based: "Tokyo, Japan",group_affiliations:"Magnum Photos",bio:"bio info",photos:[{photo_path:"sample1.jpg",description:"description of photo"},{photo_path:"sample2.jpg",description: "description of photo"}],user_notes:"One of my new favorite photographer",is_favorite:true,id:10}`| Array of the updated photographer object: `[{name:"HirojiKubota",birth_year:1939,death_year:"alive",country_of_origin:"Japan",based: "Tokyo, Japan",group_affiliations:"Magnum Photos",bio:"bio info",photos:[{photo_path:"sample1.jpg",description:"description of photo"},{photo_path:"sample2.jpg",description: "description of photo"}],user_notes:"One of my new favorite photographer",is_favorite:true,id:10}]`|