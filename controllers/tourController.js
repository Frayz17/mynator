const fs = require('fs');
const Tour = require('./../models/tourModel');

exports.checkBody = (req, res, next) => {
  const { name } = req.body;
  const { price } = req.body;
  if (!name || !price) {
    return res.status(400).json({
      status: 'fail',
      message: 'you must enter name and price'
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success'
    // results: tours.length,
    // requstedAt: req.requestTime,
    // data: {
    //   tours
    // }
  });
};

exports.getTour = (req, res) => {
  // const id = req.params.id * 1;
  // const tour = tours.find(item => item.id === id);

  res.status(200).json({
    status: 'success'
    // data: {
    // tour
    // }
  });
};

exports.createTour = (req, res) => {
  // fs.writeFile(pathToursSimple, JSON.stringify(tours), err => {
  //   res.status(201).json({
  //     status: 'success'
  //     // data: {
  //     //   tour: newTour
  //     // }
  //   });
  // });
};

exports.updateTour = (req, res) => {
  // const tour = tours.find(item => item.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>'
    }
  });
};

exports.deleteTour = (req, res) => {
  // const tour = tours.find(item => item.id === id);

  res.status(204).json({
    status: 'success',
    data: null
  });
};
