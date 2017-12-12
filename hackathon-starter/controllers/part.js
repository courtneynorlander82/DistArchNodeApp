
const Part = require('../models/Part');

exports.getParts = (req, res) => {
  Part.find().then(function(parts) {
      res.render('part/partsList', {
        partsList: parts
      });
  });
  
};

exports.getAddParts = (req, res) => {
  console.log("here");
      res.render('part/addPart', {
      }); 
};

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

exports.deletePart = (req, res, next) => {
  console.log("req.body: ", req.body);

  if(req.body._id){
    Part.remove({ _id: req.body._id }, (err) => {
      if (err) { console.log('error: ', err); return next(err); }
      res.redirect('/parts');
    });
  }
}

exports.postPart = (req, res, next) => {
    console.log("PartName: ", req.body.partName);
    console.log("Quantity: ", req.body.quantity);
    var part = new Part({_id: guid() , partName: req.body.partName, quantity: req.body.quantity, description: req.body.description, price: req.body.price, location: req.body.location });
      part.save((err) => {
      if (err) { 
          console.log("Error: ", err);
          return next(err);
         }
        res.redirect('/parts');
    });
}

