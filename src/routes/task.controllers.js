import Task from "../models/task.model.js"

export const getTasks = async(req, res) => {
    const tasks = await Task.find().lean()
    res.render('pages/index.ejs', {tasks})
}

export const postTask = async(req, res) => {
    const newTask = Task(req.body)
    await newTask.save()
    res.redirect('/')
}

export const updateTaskGet = async(req, res) => {
    const data = await Task.findById(req.params.id)
    console.log(data)
    res.render('partials/formUpDate.ejs', {data})
}

export const updateTaskPost = async(req, res) => {
    const {id} = req.params
    const upData = req.body
    await Task.findByIdAndUpdate(id, upData)
    res.redirect('/')
}

export const deleteTask = async(req, res) => {
    const {id} = req.params;
    await Task.findByIdAndRemove(id)
    res.redirect('/')
}
