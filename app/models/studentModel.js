import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Users from "./userModel.js";
 
const { DataTypes } = Sequelize;
 
const Students = db.define('students',{
    nim:{
        type: DataTypes.INTEGER
    },
    fullname:{
        type: DataTypes.STRING
    },
    photo:{
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.ENUM('male', 'female')
    },
    phone: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    batch_year:{
        type: DataTypes.YEAR,
        validate: {
            isDate: true,
            notEmpty: true,
            len: [4, 4]
          }
    },
    address:{
        type: DataTypes.TEXT
    },
    users_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    freezeTableName:true
});

Students.belongsTo(Users, { foreignKey: 'users_id' });
Users.hasOne(Students, { foreignKey: 'users_id' });
 
(async () => {
    await db.sync();
})();
 
export default Students;