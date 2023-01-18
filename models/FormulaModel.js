import mongoose from "mongoose"; 

const formulaSchema = mongoose.Schema({

    name:{ type: String, required: true, unique: true },      //formula name

    /* When you use any alreay defined formula to calcualte salary, these items are used. */
    other_formula:{
        id: { type:String }, 
        number: { type: Number, default: 0 }    // cofficent of this formula
    },

    /* Basic salary */
    basic_salary:{
        percent:{type: Number, default: 0, min: 0, max: 100},     // Basic salary amount(percent of gross salary)per one time. It's applied when set this item as a percent of gross salary.
        value: {type: Number, default: 0,  min: 0 }     // Basic salary amount($)per one time. It's applied when set this item directly as $.
    },

   item:[{
        list:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "salarylists"
        },
        number: {type: Number, default: 0},
        percent:{type: Number, default: 0, min: 0, max: 100},     // Basic salary amount(percent of gross salary)per one time. It's applied when set this item as a percent of gross salary.
        value: {type: Number, default: 0,  min: 0 }     // Basic salary amount($)per one time. It's applied when set this item directly as $.
   }]

});

export default mongoose.model('formulas', formulaSchema);