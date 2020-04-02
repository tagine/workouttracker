const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exerciseType: {
    type: String,
    unique: true,
    required: "Please enter the type of exercise"
  },
  exerciseName: {
    type: String,
    unique: true,
    required:  "Please enter the name of exercise"
  },
  weight: {
    type: Number,
    required:  "Please enter a weight"
  },
  sets: {
    type: Number
  },
  reps: {
    type: Number
  },
  duration: {
    type: Number
  },
  distance: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
  workouts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Workout"
    }
  ]
});

const Workouts = mongoose.model("Exercise", WorkoutSchema);

module.exports = Workouts;