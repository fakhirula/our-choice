import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Candidates from "./canditateModel.js";
import Organizations from "./organizationModel.js";
import Students from "./studentModel.js";
 
const { DataTypes } = Sequelize;
 
const Votes = db.define('votes',{
    candidates_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    organizations_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    timestamp: {
        type: DataTypes.TIMESTAMP
    },
    students_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    freezeTableName:true
});

Votes.belongsTo(Candidates, { foreignKey: 'candidates_id' });
Candidates.hasMany(Votes, { foreignKey: 'candidates_id' });

Votes.belongsTo(Organizations, { foreignKey: 'organizations_id' });
Organizations.hasMany(Votes, { foreignKey: 'organizations_id' });

Votes.belongsTo(Students, { foreignKey: 'students_id' });
Students.hasMany(Votes, { foreignKey: 'students_id' });
 
(async () => {
    await db.sync();
})();
 
export default Votes;