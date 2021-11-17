var apple = require('../models/apple'); 
 
// List of all apple 

exports.apple_list = async function(req, res) { 
    try{ 
        theapple = await apple.find(); 
        res.send(theapple); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

 
// for a specific apple. 
exports.apple_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await apple.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
};  
 
// Handle apple create on POST. 
// Handle apple create on POST. 
exports.apple_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new apple(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"apple_type":"goat", "cost":12, "size":"large"} 
    document.apple_type = req.body.apple_type; 
    document.cost = req.body.cost; 
    document.quantity = req.body.quantity; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.apple_view_all_Page = async function(req, res) { 
    try{ 
        theapple = await apple.find(); 
        res.render('apple', { title: 'apple Search Results', results: theapple }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// Handle apple delete on DELETE. 
exports.apple_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await apple.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};
 
// Handle apple update form on PUT. 
exports.apple_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await apple.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.apple_type)  
               toUpdate.apple_type = req.body.apple_type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.quantity) toUpdate.size = req.body.quantity; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle a show one view with id specified by query
exports.apple_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await apple.findById( req.query.id)
        res.render('appledetail', {
            title: 'apple Detail', 
            toShow: result
        });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a apple.
// No body, no in path parameter, no query.
// Does not need to be async
exports.apple_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('applecreate', { title: 'apple Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a apple. 
// query provides the id 
exports.apple_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await apple.findById(req.query.id) 
        res.render('appleupdate', { title: 'apple Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.apple_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await apple.findById(req.query.id) 
        res.render('appledelete', { title: 'apple Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
