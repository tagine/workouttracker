const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanSchema = new Schema({
    exerciseName: {
      type: String,
      unique: true
    },
    exerciseName: {
      type: String,
      unique: true
    },
    plan: [
        {
          type: Schema.Types.ObjectId,
          ref: "Plan"
        }
      ]
});

const Plan = mongoose.model("Plan", PlanSchema);

module.exports = Plan;