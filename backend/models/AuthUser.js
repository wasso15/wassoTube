const db= require('../config/dbConfig'); 
exports.searchUser = function(id){
    
    db.searchByValue(
      {
        table: 'user',
        searchAttribute: 'idYoutube',
        searchValue: id,
        attributes: ['*']
      },

      (err, res) => 
      {
        if (err){console.log(err)}
        
        else{
             
             console.log(res.status)
        }
      }
    );  
      
  }


  exports.addUser = (id, name, email, picture  ) => {
    db.insert(
      {table: 'user', records: [{ idYoutube:id, name:name, email:email, urlPic:picture  }]
      },

      (err, res) => {
        if (err){console.log(err)}
        else{
            console.log(res.statusCode)
        }
      }
    );
  };
