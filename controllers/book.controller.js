const Book = require("../Models/Book");

const index = (req,res) => {

       Book.findAll({
              attributes: ["id", "title","author","subject"],
           })
       .then((result) => {
              return res.json(result);
       })
       .catch((error) => {
              console.log(error);
              return res.json({
              message: "Unable to fetch records!",
              });
       });
}

const store = (req,res) => {

       Book.create({
              title: req.body.title,
              author: req.body.author,

              release_date: "2024-02-05",
           })
       .then((result) => {
              return res.json(result);
       })
       .catch((error) => {
              return res.json(req.body);
       });
}

const update = (req,res) => {

       Book.findOne(
           {
              where: {
                     id: req.params.bookId,
              },
           })
       .then((result) => {
              if(result){
                     Book.update({
                            title: req.body.title,
                            author: req.body.author,
                         },
                         {
                            where: {
                               id: req.params.bookId,
                            },
                         })
                     .then((result) => {
                            Book.findOne(
                                   {
                                      where: {
                                             id: req.params.bookId,
                                      },
                                   })
                               .then((result) => {

                                   return res.json(result);
                               });
                     })
                     .catch((error) => {
                            return res.json({
                                   message: "cannot update",
                            });
                     });
              }else{
                     return res.json({
                            message: "book not found",
                     });
              }
       })
       .catch((error) => {
              return res.json({
              message: "book not found",
              });
       });
}

const destroy = (req,res) => {

       Book.findOne(
           {
              where: {
                     id: req.params.bookId,
              },
           })
       .then((result) => {
              if(result){
                     Book.destroy(
                         {
                            where: {
                                   id: req.params.bookId,
                            },
                         })
                     .then((result) => {
                            return res.json(result);
                     })
                     .catch((error) => {
                            return res.json({
                                   message: "cannot delete",
                            });
                     });
              }else{
                     return res.json({
                            message: "book not found",
                     });
              }
       })
       .catch((error) => {
              return res.json({
              message: "book not found",
              });
       });
}

module.exports = {index,store,update,destroy};