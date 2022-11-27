const {addVideo, addComment, addSubComment} = require('../models/CommentVideo')

 const getVideoComment= (data)=>
{
    const {id,titleVideo,descVideo}=data;

    addVideo(id, titleVideo); 
}



const getUserComment = (data)=>{
    const {termComment}= data; 
    addComment(termComment)
    console.log(termComment)
}

const getUserSubComment = (data)=>{
    const {termComment}= data; 
    addSubComment(termComment)
    console.log(termComment)
}




module.exports= {getVideoComment,getUserComment, getUserSubComment}