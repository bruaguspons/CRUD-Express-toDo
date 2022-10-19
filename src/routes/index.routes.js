import { Router } from "express";
import { getTasks, postTask, deleteTask, updateTaskGet, updateTaskPost } from "./task.controllers.js";
const router = Router();

router.get('/', getTasks)
router.post('/add/task', postTask)

router.get('/update/task/:id', updateTaskGet)
router.post('/update/task/:id', updateTaskPost)

router.get('/delete/task/:id', deleteTask)

export default router