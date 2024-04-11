import Questions from "../Models/questionSchema.js";
import Results from '../Models/resultSchema.js';
import questions, {answers} from '../database/data.js';


//get all the questions
export async function getQuestions(req,res){
   try {
      const q = await Questions.find();
      res.json(q)
   } catch (error) {
      console.log(error)
   }
}


//insert all the questions
export async function insertQuestions(req,res){
   try {
     await Questions.insertMany({questions,answers });
      res.json({msg:'data fetched succesfully'})
   } catch (error) {
       console.log(error);
   }
}

//delete all the questions
export async function dropQuestions(req,res){
   try {
      await Questions.deleteMany();
       res.json({ msg: "questions deleted succesfully" });
   } catch (error) {
       console.log(error);
   }
}

//get all result
export async function getResult(req,res){
   try {
      const r = await Results.find();
      res.json(r)
   } catch (error) {
      console.log(error);
   }
}

// post all result 
export async function storeResuIt(req,res ){
  try {
    const { username, result, attempts, points, achieved } = await req.body;
   if(!username && !result) throw new Error('Data not provided');

   Results.create({ username, result, attempts, points, achieved });
   res.json({msg:'result saved succesfully'})
  } catch (error) {
     console.log(error);
  }
};

//delete all result 
export async function dropResult(req,res){
  try {
   await Results.deleteMany();
   res.json('Result deleted succesfully')
  } catch (error) {
    console.log(error);
  }
}