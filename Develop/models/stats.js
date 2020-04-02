const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatsSchema = new Schema({
    exerciseName: {
      type: String,
      unique: true
    },
    exerciseName: {
      type: String,
      unique: true
    },
    stats: [
        {
          type: Schema.Types.ObjectId,
          ref: "Stats"
        }
      ]
});

const Stats = mongoose.model("Stats", StatsSchema);

module.exports = Stats;