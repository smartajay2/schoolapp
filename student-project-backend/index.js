const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/student')
  .then(() => {
    console.log('Connection Successful');
  })
  .catch((err) => {
    console.error('Connection Error:', err);
  });

// Define Schema
const StudentSchema = new mongoose.Schema({
  newTitle: String,
  newDesc: String,
  date: String,
  likes: Number,
});

const Student = mongoose.model('Student', StudentSchema);

// Get all students
app.get('/api/student-dashboard', async (req, res) => {
  try {
    const students = await Student.find({});
    console.log(students);
    res.send(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Increment likes
app.patch('/api/student-dashboard/like/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Increment the likes of the student post
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true } // This option returns the modified document rather than the original
    );

    res.json(updatedStudent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE endpoint to handle deleting a student by ID
app.delete('/api/student-dashboard/:id', async (req, res) => {
  try {
      const studentId = req.params.id;
      const result = await Student.findByIdAndDelete(studentId);
      if (result) {
          res.sendStatus(204); // No Content
      } else {
          res.status(404).json({ error: 'Student not found' });
      }
  } catch (error) {
      console.error('Error deleting student:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a new student
app.post('/api/student-dashboard', async (req, res) => {
  const student = new Student({
    newTitle: req.body.newTitle,
    newDesc: req.body.newDesc,
    date: req.body.date,
    likes: req.body.likes,
  });

  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent); 
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start server
app.listen(5000, () => console.log('Server running on port 5000'));
