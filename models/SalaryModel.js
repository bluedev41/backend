import mongoose from "mongoose"; 

const salarySchema = mongoose.Schema({
                                                                           
    year:{  type: Date, required: true },         // paying year                                      
    month:{ type: Date, required: true },         // paying month 
       
    
    formula_id: { type: mongoose.Schema.Types.ObjectId,  ref: "formulas" },           // Formula that is used to calculate salary

    gross:{ type: Number,  required: true },      // Gross salary per month
                                  
    /* 
        Basic salary per month 
    */
    basic_salary:{
        percent:{type: Number, default: 0, min: 0},     // Basic salary amount(percent of gross salary)per one time. It's applied when set this item as a percent of gross salary.
        value: {type: Number, default: 0,  min: 0 }     // Basic salary amount($)per one time. It's applied when set this item directly as $.
    },
    
    livingSalary:{ type: Number,  required: true },                                  // Living salary per month ($) 

    withdrawSarary:{ type: String, default: 0 },                                    // Withdrawed salary per month ($)

    released:{ type: String, default: 0 }                                           // Realeased salary per month ($)

});

export default mongoose.model('salarys', salarySchema);