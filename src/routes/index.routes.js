import { Router } from "express";
import { getTasks, postTask, deleteTask, updatePost } from "./task.controllers.js";
const router = Router();

router.get('/', getTasks)
router.post('/add/task', postTask)
router.patch('/update/task/:id', updatePost)
router.delete('/delete/task/:id', deleteTask)

export default router