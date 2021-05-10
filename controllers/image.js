const Clarifai = require('clarifai') ;

const app = new Clarifai.App({
    apiKey: process.env.API_CLARIFAI
  });

const handleApiCall = (req, res) => {
   app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)   
    .then(data => {
        res.json(data);
    }) 
  }

const handleImage = (req, res, db) => {
    console.log(req.body.id);
    const  id = req.body.id;
    db('users').where('id','=', id)
    .increment('entries',1) 
    .returning('entries')
    .then(entries => {
        res.json(entries[0]);
    })
    .catch(err => res.status(400).json('unable to update'))
}

module.exports = {
    handleImage,
    handleApiCall
}