const models = require("../models/index");

exports.setAccessMenu = async (req, res, next) => {
  try {

    const roleExists = await models.Role.findOne({
      where: {
        name: req.body.role,
      }, order: [["id", "DESC"]],
    });
    console.log(roleExists)
    if(roleExists){
      const error = new Error("มี role นี้ในระบบแล้ว");
      error.statusCode = 400;
      throw error;
    }else{
      let getMenu = JSON.parse(req.body.menu)
    for(let i = 0; i < getMenu.length; i++){
      console.log(getMenu[i].name)
      const setMenu = await models.Menu.create({
        name: getMenu[i].name,
        type: getMenu[i].type,
        // group: 0,
        role: req.body.role,
        status: true,
      });
    }
      await models.Role.create({
        name: req.body.role,
        by: req.body.role,
      });
      res.status(200).json({
        message: 'Success',
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.updateAccessMenu = async (req, res, next) => {
  try {
    if(req.body.menu != '[]'){
      let getMenu = JSON.parse(req.body.menu)
      for(let i = 0; i < getMenu.length; i++){
        console.log("teste: ",getMenu[i].status, req.body.role, getMenu[i].name, getMenu[i].type)

    //   await models.Menu.update({
    //     status: getMenu[i].status,
    //     updatedAt: new Date()
    //  },{
    //    where: {
    //     role: req.body.role,
    //     name: getMenu[i].name
    //    }
    //   });

      const menuExists = await models.Menu.findOne({
        where: {
          name: getMenu[i].status,
          role: req.body.role,
        }, order: [["id", "DESC"]],
      });
      const getDatas = JSON.stringify(menuExists)
      const obj = JSON.parse(getDatas)
      console.log("wwww:",obj)
      if(obj != null){
        console.log("update:",obj)
        await models.Menu.update({
          status: getMenu[i].status,
          updatedAt: new Date()
       },{
         where: {
          role: req.body.role,
          name: getMenu[i].name
         }
        });
      }else{
        console.log("insert:",obj)
         await models.Menu.create({
          name: getMenu[i].name,
          type: getMenu[i].type,
          role: req.body.role,
          status: getMenu[i].status,
        });
      }

    }
    res.status(200).json({
      message: 'Success',
    });
  }else{
    res.status(400).json({
      message: 'Failure',
    });
  }
    
  } catch (error) {
    next(error);
  }
};
// exports.getAccessMenu = async (req, res, next) => {
//   try {
//     const data = await models.Menu.find({
//       where: {
//         name: req.body.name,
//         role: req.body.role,
//         status: true
//       }, order: [["id", "DESC"]],
//     });

//     res.status(200).json({
//       message: 'Success',
//       data: data
//     });
//   } catch (error) {
//     next(error);
//   }
// };
exports.getAccessMenu = async (req, res, next) => {
  try {
    
    const data = await models.Menu.findAll({
      where: {
        role: req.query.role,
        // role: req.body.role,
      }, 
    });
    const getDatas = JSON.stringify(data)
    const obj = JSON.parse(getDatas)

    if(obj.length > 0){
      res.status(200).json({
        message: 'Success',
        data: obj
      });
    }else{
      res.status(200).json({
        message: 'Success'
      });
    }
  } catch (error) {
    next(error);
  }
};
exports.getAllRole = async (req ,res, next) => {
  try {
    const data = await models.Role.findAll({ 
    });
    const getDatas = JSON.stringify(data)
    const obj = JSON.parse(getDatas)
    res.status(200).json({
      message: 'Success',
      data: obj
    });
  } catch (error) {
    next(error);
  }
};