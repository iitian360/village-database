
const home_page= async (req,res)=>{
    await res.render('home',{'title':'welcome to home!'});
}

export default home_page;