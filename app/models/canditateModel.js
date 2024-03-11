import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Students from "./studentModel.js";
 
const { DataTypes } = Sequelize;
 
const Candidates = db.define('candidates',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    students_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    freezeTableName:true
});

Candidates.belongsTo(Students, { foreignKey: 'students_id' });
Candidates.hasMany(Students, { foreignKey: 'students_id' });
 
(async () => {
    await db.sync();
})();
 
export default Candidates;