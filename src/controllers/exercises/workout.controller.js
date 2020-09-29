const httpStatus = require("http-status");

const catchAsync = require("../../utils/catchAsync");
const workoutService = require("../../services/exercises/workout.service");
const statusService = require("../../services/exercises/status.service");

const addWorkout = catchAsync(async (req, res) => {
  const wod = await workoutService.addWODs(req.body);
  res.status(httpStatus.OK).send(wod);
});

const updateWOD = catchAsync(() => {
  /**
   * No controller for Workout, use #addWorkout controller
   */
});

const getWOD = catchAsync(async (req, res) => {
  const wod = await workoutService.getWOD(req.query);
  if (!wod) {
    res.status(httpStatus.NOT_FOUND);
  }
  res.status(httpStatus.OK).send(wod);
});

const getWODById = catchAsync(async (req, res) => {
  const wod = await workoutService.getWODById(req.params);
  if (!wod) {
    res.status(httpStatus.NOT_FOUND);
  }
  res.status(httpStatus.OK).send(wod);
});

// const deleteExercise = catchAsync(async (req, res) => {
//   const exercise = await exercisesService.deleteExercise(req.params);
//   res.status(httpStatus.OK).send(exercise);
// });

const getStatus = catchAsync(async (req, res) => {
  const wod = await statusService.getStatus(req.query);
  // wod.map((entry) => {
  //   return {
  //     _id: entry._id,
  //     status: entry.status,
  //     date: moment(entry.date).format("DD-MMM"),
  //   };
  // })
  res.status(httpStatus.OK).send(wod);
  // .send({
  //   id: wod._id,
  //   status: wod.status,
  //   date: moment(wod.date).format("DD-mm"),
  // });
});

const updateStatus = catchAsync(async (req, res) => {
  const wod = await statusService.updateStatus(req.body);
  res.status(httpStatus.OK).send(wod);
});

const deleteWOD = catchAsync(async (req, res) => {
  const wod = await workoutService.deleteWOD(req.params);
  res.status(httpStatus.OK).send(wod);
});

module.exports = {
  addWorkout,
  getWOD,
  updateWOD,
  getStatus,
  updateStatus,
  getWODById,
  // getExercises,
  deleteWOD,
};
