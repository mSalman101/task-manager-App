// const createTask=async(req,res)=>{

// }

// const TaskModel = require("../Models/TaskModel");

const createTask = async (req, res) => {
  const data = req.body;

  try {
    const TaskModel = require("../Models/TaskModel");
    const model = new TaskModel(data);
    await model.save();
    res.status(201).json({ message: "Task is created", success: true });
  } catch (err) {
    res.status(500).json({ message: "Failed to create taskc", success: false });
  }
};

const fetchAllTasks = async (req, res) => {
  try {
    const TaskModel = require("../Models/TaskModel");
    const data = await TaskModel.find({});
    res
      .status(200)
      .json({ message: "Task fetched succes", success: true, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch taskf", success: false });
  }
};

const updateTaskById = async (req, res) => {
  try {
    const TaskModel = require("../Models/TaskModel");
    const id = req.params.id;
    const body = req.body;
    const obj = { $set: { ...body } };
    const data = await TaskModel.findByIdAndUpdate(id, obj);
    res
      .status(200)
      .json({ message: "Task update succes", success: true, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update task", success: false });
  }
};

const deleteTaskById = async (req, res) => {
  try {
    const TaskModel = require("../Models/TaskModel");
    const id = req.params.id;
    const data = await TaskModel.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Task delete succes", success: true, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete task", success: false });
  }
};

module.exports = {
  createTask,
  fetchAllTasks,
  updateTaskById,
  deleteTaskById,
};
