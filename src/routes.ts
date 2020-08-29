import express from 'express';
import ClassesController from './controllers/ClassesController';
import UserController from './controllers/UserController';
import ConnectionsController from './controllers/ConnectionsController';
import login from './middleware/login';

const classesController = new ClassesController()
const userController = new UserController()
const connectionsController = new ConnectionsController()

const routes = express();

//classes
routes.post('/classes', login, classesController.createClasses);
routes.post('/classes/update', login, classesController.updateClasses);
routes.delete('/classes/:id', login, classesController.deleteClasses);
routes.get('/classes', classesController.index);

//Rota de usuários
routes.post('/user', userController.createUser);
routes.post('/user/update', login, userController.updateUser);
routes.post('/user/auth', userController.authUser);

//Conexões de usuarios com as classes  
routes.post('/connections', login, connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;