const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

const project = [
  { id: 1, name: 'Reactive Tailwind Project', image: '../images/Carousel1.png', description: 'Tailwind Css Integration through Installs, Imports and Hooks', category: 'web', sourceUrl: 'https://github.com/RutledgeRyan/Reactive-Feast-Fleet'},
  { id: 2, name: 'CRUD Project', image: '../images/CrudProj.png', description: 'Create Read Update and Delete usage for modifying data being displayed on a webpage', category: 'web', sourceUrl: 'https://github.com/RutledgeRyan/CRUD-Project' },
  { id: 3, name: 'API Integration', image: '../images/APIcreate.png', description: 'Utilization of importing data sets from other applications to bring the data to the current application', category: 'web', sourceUrl: 'https://github.com/RutledgeRyan/Disney-Characters' },
  { id: 3, name: 'Feast Fleets Branding', image: '../images/FeastFleetLogo.png', description: 'Feast Fleets Food Truck Catering  Brand Guide', category: 'branding' },
  { id: 4, name: 'RayneBowTech Branding', image: '../images/Brand Logo Design 2.0.png', description: 'Ryan Rutledge Personal Brand, Branding Guide', category: 'branding' },
  { id: 5, name: 'Adobe Creations', image: '../images/Adobe.png', description: 'Integration of Adobe Products into the projects I create', category: 'branding' },
  // Add more characters as needed
];

app.get('/api/project', (req, res) => {
  res.json(project);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});