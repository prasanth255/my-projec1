const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecommerce',{
useNewUrlParse:true,
//useUnifiedTopology=true,
//useCreateindex=true,
useFindAndModify:false
});

module.exports=mongo