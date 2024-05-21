const IncomeSchema = require("../models/incomeModel");

exports.addIncome = async (req,res) => {
    try
    {
        const {
            title,amount,category,description,date
        } = req.body;
        console.log(req.body)
        if(!title || !category || !description || !date)
        {
            return res.status(400).json({
                success: false,
                message: "Invalid Data",
            })
        }

        // if( amount <= 0 || typeof amount !== 'number')
        // {
        //     console.log("a")
        //     return res.status(400).json({
        //         success: false,
        //         message: "Invalid Amount",
        //     })
        // }

        const income = await IncomeSchema.create({
            title: title,
            amount: amount,
            category: category,
            description: description,
            date: date
        });
        console.log("Income",income)
        return res.status(201).json({
            success: true,
            message: "Income has been added succssfully",
        })
    }
    catch(e)
    {
        return res.status(500).json({
            success: false,
            message: "Server Error",
            error: e.message
        });
    }
}

exports.getIncomes = async(req,res) => {
    try
    {
        const incomes = await IncomeSchema.find({}).sort({createdAt: -1});
        return res.status(200).json({
            success: true,
            data: incomes,
        });
    }
    catch(e)
    {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }
}

exports.deleteIncome = async(req,res) => {
    try
    {
        const {id} = req.params;
        console.log(id)
        const income = await IncomeSchema.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            data: income,
            message: "Data deleted successfully",
        })
    }
    catch(e)
    {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }
}