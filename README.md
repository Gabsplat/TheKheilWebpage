# The Kheil - Website 
Proyecto de página web hecha para 'The Kheil'

## Frontend
### *Stack*:
 - Framework -> **React** made with CRA (Create React App)
	 - Styling -> **[TailwindCSS](https://tailwindcss.com/)**
	 - Dropdown (Select) -> **[React-Select](https://react-select.com/)** 

### *Usage*:
**React start commands**

*Start Project* -> `npm run start-craco`

*Build Project* -> `npm run build-craco` 

**Config files and information**

*Styling Config* -> `tailwind.config.css` 

*Package Config* -> `https://thekheil.com` homepage and proxy 
	 
## Backend
### *Stack*:
**PHP** and **MySQL**

### *API Endpoints*:
**Cards**:

*All* cards -> `/api?cards=1`

Cards by *character* -> `/api?cards=1&character=X`

Cards by *type* -> `/api?cards=1&tipocarta=X`

Cards by *character and type* -> `/api?cards=1&character=X&tipocarta=Y`

**Chapters**:

*All* chapters -> `/api?chapters=1`

Chapters by *character* -> `/api?chapters=1&character=X`

Chapters by *book* -> `/api?chapters=1&libro=X`

Chapters by *character and book* -> `/api?chapters=1&character=X&libro=Y`