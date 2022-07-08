import mongoose from 'mongoose';

const connect_DB= async (data_url)=>{
    try{
        mongoose.connect(data_url);
        console.log('connected');
        
    }
    catch{
        console.log('not connected');
        
    }
}

export default connect_DB;