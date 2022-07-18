import village_model from "../model/village_data.js";
class villageController {

    // function for craeting a data//
    static craet_doc = async (req, res) => {
        try {
            const { village, district, post, code } = req.body;
            const doc = new village_model({
                village: village,
                district: district,
                post: post,
                code: code
            })

            const result = await doc.save();
            // console.log(result.name);
            // after inserting the data, page will be redirected//
            res.redirect('/village');
        }
        catch (err) {
            console.log(err);

        }
    }
    // function for showing all data ie for data page view
    static all_data = async (req, res) => {
        try {
            const result = await village_model.find();
            // console.log(result);
            
            res.render('vill_data', { 'title': 'library', data: result });
            // console.log(result);

        }

        catch (err) {
            console.log(err);

        }
    }
    // function for showing edit page and passing the previoue value to the form field
    static edic_page = async (req, res) => {
        try {
            const result = await village_model.findById(req.params.id);
            // console.log(result);
            res.render('update', { 'title': 'update data', data: result });
        }
        catch (err) {
            console.log(err);

        }

    }
    // updating the data
    // here req.body give the form field data and 
    // we can use it with urlencoded middleware//
    static update_doc = async (req, res) => {
        try {
            const result = await village_model.findByIdAndUpdate(req.params.id, req.body);
            // console.log(result);
            res.redirect('/village');

        }
        catch (err) {
            console.log(err);
        }
    }

    // function for deleting a data//
    static delete_doc = async (req, res) => {
        // console.log(req.params.id);
        try {
            const result = await village_model.findByIdAndDelete(req.params.id);
            res.redirect('/village');
        } catch (error) {
            console.log(error);

        }

    }



}

export default villageController;