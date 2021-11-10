var apple = require('../models/apple'); 
 
// List of all apples 
exports.apple_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: apple list'); 
}; 
 
// for a specific apple. 
exports.apple_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: apple detail: ' + req.params.id); 
}; 
 
// Handle apple create on POST. 
exports.apple_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: apple create POST'); 
}; 
 
// Handle apple delete form on DELETE. 
exports.apple_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: apple delete DELETE ' + req.params.id); 
}; 
 
// Handle apple update form on PUT. 
exports.apple_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: apple update PUT' + req.params.id); 
}; 