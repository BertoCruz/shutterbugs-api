# Shutterbugs API

This app is the back-end server for the Shutterbugs showcase project

## Getting started
Clone down this repo, and cd into it.

### Installation
Run
- `npm install` to download all dependencies
- `npm run dev`

### Usage
Once deployed, this API can be used to work with the front end of this project [`shutterbugs-ui`](https://github.com/BertoCruz/shutterbugs-ui). Just visit [thisdeployed site](https://shutterbugs.vercel.app/) when you done here. User will have full ability to send all HTTP requests listed below.

### Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/photographers` | GET | not needed | An array containing all existing Photographers: `{photographers:[{name:"Graciela Iturbide",birth_year:1942,death_year:"alive:,country_of_origin:"Mexico",based:"Coyoacan, Mexico",group_affiliations:"Mexican Council of Photography",bio:"bio info",photos: [{photo_path: "sample1.jpg",description:"description of photo"},{photo_path: "sample2.jpg",description: "description of photo"}],user_notes:"sample notes",is_favorite:true,id:1}]}`|
| `http://localhost:3001/api/v1/photographers/:id` | GET | not needed | The requested photographer object: `[{name:"Yael Martinez",birth_year:1984,death_year:"alive:,country_of_origin:"Mexico",based:"Taxco, Mexico",group_affiliations:"Magnum Photos",bio:"bio info",photos: [{photo_path: "sample1.jpg",description:"description of photo"},{photo_path: "sample2.jpg",description: "description of photo"}],user_notes:"sample notes",is_favorite:true,id:2}]` |
| `http://localhost:3001/api/v1/photographers` | POST | `{name: "Hiroji Kubota",birth_year:1939,death_year:"alive",country_of_origin:"Japan",based: "Tokyo, Japan",group_affiliations: "Magnum Photos",bio:"bio info", photos: [{photo_path:"sample1.jpg",description:"description of photo"},{photo_path:"sample2.jpg",description: "description of photo"}]}`| Created photographer object: `[{name: "Hiroji Kubota",birth_year:1939,death_year:"alive",country_of_origin:"Japan",based: "Tokyo, Japan",group_affiliations:"Magnum Photos",bio:"bio info",photos:[{photo_path:"sample1.jpg",description:"description of photo"},{photo_path:"sample2.jpg",description: "description of photo"}]},user_notes:"",is_favorite:false,id: 10}]` |
| `http://localhost:3001/api/v1/photographers/:id` | DELETE | not needed | The deleted photographer object: `[{name:"HirojiKubota",birth_year:1939,death_year:"alive",country_of_origin:"Japan",based:"Tokyo, Japan",group_affiliations:"Magnum Photos",bio:"bio info",photos:[{photo_path:"sample1.jpg",description:"description of photo"},{photo_path:"sample2.jpg",description: "description of photo"}],user_notes:"",is_favorite:false,id:10}]` |

* * *

### Future Features
| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/photographers/:id` | PUT | `{name:"HirojiKubota",birth_year:1939,death_year:"alive",country_of_origin:"Japan",based: "Tokyo, Japan",group_affiliations:"Magnum Photos",bio:"bio info",photos:[{photo_path:"sample1.jpg",description:"description of photo"},{photo_path:"sample2.jpg",description: "description of photo"}],user_notes:"One of my new favorite photographer",is_favorite:true,id:10}`| The updated photographer object: `[{name:"HirojiKubota",birth_year:1939,death_year:"alive",country_of_origin:"Japan",based: "Tokyo, Japan",group_affiliations:"Magnum Photos",bio:"bio info",photos:[{photo_path:"sample1.jpg",description:"description of photo"},{photo_path:"sample2.jpg",description: "description of photo"}],user_notes:"One of my new favorite photographer",is_favorite:true,id:10}]`|
