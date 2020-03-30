const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exerciseType: {
    type: String,
    unique: true
  },
  exerciseName: {
    type: String,
    unique: true
  },
  weight: {
    type: String,
    unique: true
  },
  sets: {
    type: String,
    unique: true
  },
  reps: {
    type: String,
    unique: true
  },
  duration: {
    type: String,
    unique: true
  },
  workouts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Workout"
    }
  ]
});

const Library = mongoose.model("Exercise", WorkoutSchema);

module.exports = Library;