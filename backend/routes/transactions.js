const express = require("express");
const router = express.Router();

const {addIncome, getIncomes, deleteIncome} = require("../controllers/income");
const { addExpense, getExpense, deleteExpense } = require("../controllers/expense");

router.get("/",(req,res)=>{
    res.json({
        user:"Anubhav 1"
    })
})

router.post("/add-income",addIncome);
router.get("/get-incomes",getIncomes);
router.delete("/delete-income/:id",deleteIncome);
router.post("/add-expense",addExpense);
router.get("/get-expenses",getExpense);
router.delete("/delete-expense/:id",deleteExpense);

module.exports = router;