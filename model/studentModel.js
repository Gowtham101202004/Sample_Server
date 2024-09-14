import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rollNo: {
    type: Number,
    required: true
  },
  department: {
    type: String,
    required: true
  }
});

export default mongoose.model('Student',studentSchema);