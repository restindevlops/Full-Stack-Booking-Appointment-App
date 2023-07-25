const User= require('../models/user');


exports.postAddUser = async (req,res,next) => {

    try{
        if(!req.body.number){
            throw new Error('Phone number is mandatory')
        }
        
        const name=req.body.name;
        const email=req.body.email;
        const phoneno=req.body.number;

        const data= await User.create({name:name, email:email, phoneno:phoneno});
        res.status(201).json({newUserDetail : data});
    } catch(err){
        res.status(500).json({
            error:err
        })
    }
}


exports.getUsers = async (req,res,next)=>{

    try{
        const users = await User.findAll();
        res.status(201).json({allUsers : users});
    } catch(err){
        console.log('GET User is failing', JSON.stringify(err));
        res.status(500).json({error:err})
    }
}


exports.deleteUser = (req,res,next)=>{
    
    try{
        if(req.params.id=='undefined'){
            console.log('Id is missing')
            return res.status(400).json({err: 'Id is missing'});
        }
        
        const uId = req.params.id;
         User.destroy({where: {id:uId}});
        res.status(200);

    } catch(err){
        console.log(err);
        res.status(500).json({error:err})
    }
}