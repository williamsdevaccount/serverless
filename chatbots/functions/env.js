


module.exports.handler = (event,context,callback)=>{
    console.log(process.env.AWS_ACCESS);
    console.log(process.env.AWS_SECRET);
};