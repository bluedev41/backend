import Formula from "../models/FormulaModel.js";

// const calcualte_salary = function(formula_id, gross){
    
// }

export const calculate = async (req, res) => {

    try {
        await Formula.findById(req.params.id)
            .populate("item.list")
            .then(data => {
                var item = data.item;        
                var sum = 0;
                for( const index in item){
                    if(item[index].list.type == "addition"){
                       sum += item[index].number*(item[index].percent/100 * req.body.gross + item[index].value);
                    }else{
                        sum -= item[index].number*(item[index].percent/100 * req.body.gross + item[index].value);
                    }
                }
                sum += data.basic_salary.percent/100*req.body.gross + data.basic_salary.value;
                res.json(sum);
            });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getFormulas = async (req, res) => {
    try {
        const formulas = await Formula.find();
        res.json(formulas);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
export const getFormulaById = async (req, res) => {
    try {
        const formula = await Formula.findById(req.params.id);
        res.json(formula);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
export const saveFormula = async (req, res) => {
    const formula = new Formula(req.body);
    try {
        const insertedformula = await formula.save();
        res.status(201).json(insertedformula);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const updateFormula = async (req, res) => {
    try {
        const updatedformula = await Formula.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedformula);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const deleteFormula = async (req, res) => {
    try {
        const deletedformula = await Formula.deleteOne({_id:req.params.id});
        res.status(200).json(deletedformula);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}