import client_model from "../model/client_data.js";
class home_action {
    static home_page = async (req, res) => {
        await res.render('home', { 'title': 'welcome to home!' });
    }

    static register_page = async (req, res) => {
        await res.render('register', { 'title': 'Register here' })

    }
    static client_data=async (req,res)=>{
        try{
            const {name,email,phone,password}=req.body;
            const cl_doc= new client_model({
                name:name,
                email:email,
                phone:phone,
                password:password
            })
    
            const  result=await cl_doc.save();
            // console.log(result.email);
            
            res.redirect('/');
        }catch(err){
                console.log(err);
                
        }
    }

}

 

export default home_action;