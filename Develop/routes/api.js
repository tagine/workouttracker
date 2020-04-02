const express = require("express");
const router = require("express").Router();

router.post("/submit", ({ body }, res) => {
    User.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

router.get("/api/workout", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.get("/");

router.delete("/");

module.exports = router;

