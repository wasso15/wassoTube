const db=require('../config/dbConfig')


exports.addComment = (comment) => {
  db.insert(
    {table: 'commentaire', records: [{ commentaire:comment }]
    },
    (err, res) => {
      if (err){console.log(err)}
      else{
          console.log(res.statusCode)
      }
    }
  );
};

exports.addSubComment = (comment) => {
  db.insert(
    {table: 'subComment', records: [{ Subcomment:comment }]
    },
    (err, res) => {
      if (err){console.log(err)}
      else{
          console.log(res.statusCode)
      }
    }
  );
};


exports.getVideo =(id)=>
{
  db.query(
    {
      "operation": "sql",
      "sql": "SELECT * FROM comment_youtube.video"
      
    },
  
    (err, res) => 
    {
      if (err){console.log(err)}
      else{
           console.log(res)
      }
    }
  );
  
}


 


  exports.searchVideo = function(id){
    
    db.searchByValue(
      {
        table: 'video',
        searchAttribute: 'idYoutube',
        searchValue: id,
        attributes: ['*']
      },

      (err, res) => 
      {
        if (err){console.log(e)}
        else{
             
            exports.result= res.data
        }
      }
    );  
      
  }




