const { Router } = require('express');
const { getPlaces, postPlaces } = require('../controllers/Places');
const { getUsers, postUsers } = require('../controllers/Users');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//root user
router.get('/users', getUsers);
router.post('/users', postUsers)

//root places
router.get('/places', getPlaces);
router.post('/places', postPlaces)

module.exports = router;
