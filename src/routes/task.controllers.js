import Task from "../models/task.model.js"

export const getTasks = async(req, res) => {
    const tasks = await Task.find().lean()
    res.send(tasks)
}

export const postTask = async(req, res) => {
    const newTask = Task(req.body)
    await newTask.save()
    res.send(newTask)
}

export const deleteTask = async(req, res) => {
    const {id} = req.params;
    const message = await Task.findByIdAndRemove(id)
    res.send(message)
}

export const updatePost = async(req, res) => {
    const {id} = req.params
    const upData = req.body
    const message = await Task.findByIdAndUpdate(id, upData)
    res.send(message)
}