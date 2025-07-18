import db from "../../database/database.js";
import { DataTypes } from "sequelize";
import ExpenseCategory from "./expenseCategoryModel.js";


const Expense = db.define('Expense', {
        id_expense: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        }
    },
    {
        tableName: "expense",
        modelName: "expense",
        timestamps: false
    }
);

ExpenseCategory.hasMany(Expense, {
    foreignKey: {
        name: 'expense_category_id'
    }
})

export default Expense;
