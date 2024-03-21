const asyncHandler = require('express-async-handler')
const ErrorHandler = require('../utils/ErrorHandler');
const Hero = require('../Model/heroModel');
const Caption = require('../Model/captionModel')
const Card = require('../Model/cardModel')
const Question = require('../Model/questionModel')
const Simple = require('../Model/simpleModel')



//title and subtitle---------------------http://localhost:7000/api/home/heroTitle
const titleSubtitle = asyncHandler(async (req, res, next) => {
    try {
        const { name, title, subtitle } = req.body;
        
        if (!name || !title || !subtitle) {
            return next(new ErrorHandler("Please enter all fields....."))
        }
        const names = await name.toLocaleLowerCase()
        const HeroExist = await Hero.findOne({ name: names });
        
        if (HeroExist) {
            return next(new ErrorHandler("already added"))
        }
        const addHero = await Hero.create({
            name: name,
            title: title,
            sub_title: subtitle
        })
        res.json(addHero)

    } catch (error) {
        next(new ErrorHandler(error.message, "Error while adding Hero, controller-titleSubtitle", 500))
    }


})

//showing all Heros ------------------http://localhost:7000/api/home/getHeroTitle
const allHeros = asyncHandler(async (req, res, next) => {
    try {
        const titlesSubtitles = await Hero.find();
        if (!titlesSubtitles) {
            return next(new ErrorHandler("No blogs to show....."))
        }
        
        res.json(titlesSubtitles)
    } catch (error) {
        next(new ErrorHandler(error.message, "Error while showing all blog, controller-allBLogs", 500))
    }
})


//update the blog -http://localhost:7000/api/home/updateHero
const updateHeros = asyncHandler(async (req, res, next) => {
    try {

        const { id, title, subtitle } = req.body
        console.log(title, subtitle, id, "--------------");
        if (!id || !title || !subtitle) {
            return next(new ErrorHandler("Didnt get all data to update"))
        }
        const heroExist = await Hero.findOne({ _id: id });
        if (!heroExist) {
            return next(new ErrorHandler("No Heros to show....."))
        }
        const updatedHero = await Hero.findByIdAndUpdate({ _id: id }, { $set: { title: title, sub_title: subtitle } })
        if (!updatedHero) {
            return next(new ErrorHandler("Updation Error"))
        }
        res.json(updatedHero)
    } catch (error) {
        next(new ErrorHandler(error.message, "Error while showing all blog, controller-allBLogs", 500))
    }
})


//delete the blog -------http://localhost:7000/api/home/deleteHero?id=
const deleteHeros = asyncHandler(async (req, res, next) => {
    try {
        const id = req.query.id.toString();
       
        const heroExist = await Hero.findOne({ _id: id });
        if (!heroExist) {
            return next(new ErrorHandler("No Hero to show....."))
        }
        res.json(heroExist)
        await Hero.deleteOne({ _id: id })

    } catch (error) {
        next(new ErrorHandler(error.message, "Error while deleting Hero, controller-deleteHero", 500))
    }
})




//===========================================================caption========================================

//title and subtitle---------------------http://localhost:7000/api/home/heroTitle
const addCaptions = asyncHandler(async (req, res, next) => {
    try {
        const { name, description } = req.body;
      
        if (!name || !description) {
            return next(new ErrorHandler("Please enter all fields....."))
        }
        const names = await name.toLocaleLowerCase()
        const CaptionExist = await Caption.findOne({ name: names });

        if (CaptionExist) {
            return next(new ErrorHandler("already added"))
        }
        const addCaption = await Caption.create({
            name: name,
            description: description
        })
        res.json(addCaption)

    } catch (error) {
        next(new ErrorHandler(error.message, "Error while adding Hero, controller-addCaption", 500))
    }


})

//showing all captions ------------------http://localhost:7000/api/home/allCaptions
const allCaptions = asyncHandler(async (req, res, next) => {
    try {
        const findCaption = await Caption.find();
        if (!findCaption) {
            return next(new ErrorHandler("No blogs to show....."))
        }
    
        res.json(findCaption)
    } catch (error) {
        next(new ErrorHandler(error.message, "Error while showing all blog, controller-allBLogs", 500))
    }
})


//update the blog -http://localhost:7000/api/home/updateHero
const updateCaption = asyncHandler(async (req, res, next) => {
    try {

        const { id, name, description } = req.body

        if (!id || !name || !description) {
            return next(new ErrorHandler("Didnt get all data to update"))
        }
        const captionExist = await Caption.findOne({ _id: id });
        if (!captionExist) {
            return next(new ErrorHandler("No captions to show....."))
        }
        const updatedCaption = await Caption.findByIdAndUpdate({ _id: id }, { $set: { name: name, description: description } })
        if (!updatedCaption) {
            return next(new ErrorHandler("Updation Error"))
        }
        res.json(updateCaption)
    } catch (error) {
        next(new ErrorHandler(error.message, "Error while showing all blog, controller-updateCaption", 500))
    }
})


//delete the blog -------http://localhost:7000/api/home/deleteHero?id=
const deleteCaptions = asyncHandler(async (req, res, next) => {
    try {
        const id = req.query.id.toString();
 
        const CaptionExist = await Caption.findOne({ _id: id });
        if (!CaptionExist) {
            return next(new ErrorHandler("No caption to show....."))
        }
        res.json(CaptionExist)
        await Caption.deleteOne({ _id: id })

    } catch (error) {
        next(new ErrorHandler(error.message, "Error while deleting caption, controller-deletecaption", 500))
    }
})

//===========================================================Card========================================

//title and subtitle---------------------http://localhost:7000/api/home/heroTitle
const addCards = asyncHandler(async (req, res, next) => {
    try {
        const { title, description } = req.body;
      
        if (!title || !description) {
            return next(new ErrorHandler("Please enter all fields....."))
        }
        const titles = await title.toLocaleLowerCase()
        const CardExist = await Card.findOne({ title: titles });

        if (CardExist) {
            return next(new ErrorHandler("already added"))
        }
        const addCard = await Card.create({
            title: title,
            description: description
        })
        res.json(addCard)

    } catch (error) {
        next(new ErrorHandler(error.message, "Error while adding Hero, controller-addCard", 500))
    }


})

//showing all Cards ------------------http://localhost:7000/api/home/allCards
const allCards = asyncHandler(async (req, res, next) => {
    try {
        const findCard = await Card.find();
        if (!findCard) {
            return next(new ErrorHandler("No blogs to show....."))
        }
       
        res.json(findCard)
    } catch (error) {
        next(new ErrorHandler(error.message, "Error while showing all Card, controller-allCards", 500))
    }
})


//update the blog -http://localhost:7000/api/home/updateCard
const updateCard = asyncHandler(async (req, res, next) => {
    try {

        const { id, title, description } = req.body

        if (!id || !title || !description) {
            return next(new ErrorHandler("Didnt get all data to update"))
        }
        const CardExist = await Card.findOne({ _id: id });
        if (!CardExist) {
            return next(new ErrorHandler("No Cards to show....."))
        }
        const updatedCard = await Card.findByIdAndUpdate({ _id: id }, { $set: { title: title, description: description } })
        if (!updatedCard) {
            return next(new ErrorHandler("Updation Error"))
        }
        res.json(updateCard)
    } catch (error) {
        next(new ErrorHandler(error.message, "Error while showing all Card, controller-updateCard", 500))
    }
})


//delete the blog -------http://localhost:7000/api/home/deleteCard?id=
const deleteCards = asyncHandler(async (req, res, next) => {
    try {
        const id = req.query.id.toString();
     
        const CardExist = await Card.findOne({ _id: id });
        if (!CardExist) {
            return next(new ErrorHandler("No Card to show....."))
        }
        res.json(CardExist)
        await Card.deleteOne({ _id: id })

    } catch (error) {
        next(new ErrorHandler(error.message, "Error while deleting Card, controller-deleteCard", 500))
    }
})




//===========================================================Question========================================

//question and subquestion---------------------http://localhost:7000/api/home/heroquestion
const addQuestions = asyncHandler(async (req, res, next) => {
    try {
        const { question, answer } = req.body;
      
        if (!question || !answer) {
            return next(new ErrorHandler("Please enter all fields....."))
        }
        const questions = await question.toLocaleLowerCase()
        const QuestionExist = await Question.findOne({ question: questions });

        if (QuestionExist) {
            return next(new ErrorHandler("already added"))
        }
        const addQuestion = await Question.create({
            question: question,
            answer: answer
        })
        res.json(addQuestion)

    } catch (error) {
        next(new ErrorHandler(error.message, "Error while adding Hero, controller-addQuestion", 500))
    }


})

//showing all Questions ------------------http://localhost:7000/api/home/allQuestions
const allQuestions = asyncHandler(async (req, res, next) => {
    try {
        const findQuestion = await Question.find();
        if (!findQuestion) {
            return next(new ErrorHandler("No blogs to show....."))
        }
      
        res.json(findQuestion)
    } catch (error) {
        next(new ErrorHandler(error.message, "Error while showing all Question, controller-allQuestions", 500))
    }
})


//update the question -http://localhost:7000/api/home/updateQuestion
const updateQuestion = asyncHandler(async (req, res, next) => {
    try {

        const { id, question, answer } = req.body

        if (!id || !question || !answer) {
            return next(new ErrorHandler("Didnt get all data to update"))
        }
        const QuestionExist = await Question.findOne({ _id: id });
        if (!QuestionExist) {
            return next(new ErrorHandler("No Questions to show....."))
        }
        const updatedQuestion = await Question.findByIdAndUpdate({ _id: id }, { $set: { question: question, answer: answer } })
        if (!updatedQuestion) {
            return next(new ErrorHandler("Updation Error"))
        }
        res.json(updateQuestion)
    } catch (error) {
        next(new ErrorHandler(error.message, "Error while showing all Question, controller-updateQuestion", 500))
    }
})


//delete the question and answer -------http://localhost:7000/api/home/deleteQuestion?id=
const deleteQuestions = asyncHandler(async (req, res, next) => {
    try {
        const id = req.query.id.toString();
      
        const QuestionExist = await Question.findOne({ _id: id });
        if (!QuestionExist) {
            return next(new ErrorHandler("No Question to show....."))
        }
        res.json(QuestionExist)
        await Question.deleteOne({ _id: id })

    } catch (error) {
        next(new ErrorHandler(error.message, "Error while deleting Question, controller-deleteQuestion", 500))
    }
})




//===========================================================Simple========================================

//Simple and subSimple---------------------http://localhost:7000/api/home/heroSimple
const addSimples = asyncHandler(async(req,res,next)=>{
    try {
        const { title,subHeading,description} = req.body;
        const image = req.file
     
        if (!title || !description  || !subHeading) {
            return next(new ErrorHandler("Please enter all fields....."))
         }
         const titles = await title.toLocaleLowerCase()
          const SimpleExist = await Simple.findOne({ title:titles });
         
          if (SimpleExist) {
            return next(new ErrorHandler("already added"))
          }
        const addSimple = await Simple.create({
            title: titles,
            sub_heading:subHeading,
            image:image.filename,
            description:description
        })
         res.json(addSimple)

    } catch (error) {
        next(new ErrorHandler(error.message, "Error while adding Hero, controller-addSimple", 500))
    }
   
    
})

//showing all Simples ------------------http://localhost:7000/api/home/allSimples
const allSimples = asyncHandler(async (req, res, next) => {
    try {
        const findSimple = await Simple.find();
        if (!findSimple) {
           return next(new ErrorHandler("No blogs to show....."))
        }
      
        res.json(findSimple)
    } catch (error) {
        next(new ErrorHandler(error.message, "Error while showing all Simple, controller-allSimples", 500))
    }
})


//update the Simple -http://localhost:7000/api/home/updateSimple
const updateSimple = asyncHandler(async (req, res, next) => {
    try {
       
        const {id,subHeading,description}= req.body
       
        if (!id || !subHeading || !description) {
            return next(new ErrorHandler("Didnt get all data to update"))
        }
        const SimpleExist = await Simple.findOne({_id:id});
        if (!SimpleExist) {
           return next(new ErrorHandler("No Simples to show....."))
        }
       const updatedSimple= await Simple.findByIdAndUpdate({ _id: id }, { $set: { sub_heading: subHeading ,description:description} })
        if (!updatedSimple) {
            return next(new ErrorHandler("Updation Error"))
        }
        res.json(updateSimple)
    } catch (error) {
        next(new ErrorHandler(error.message, "Error while showing all Simple, controller-updateSimple", 500))
    }
})


//delete the Simple and description -------http://localhost:7000/api/home/deleteSimple?id=
const deleteSimples = asyncHandler(async (req, res, next) => {
    try {
        const id = req.query.id.toString();
     
        const SimpleExist = await Simple.findOne({_id:id});
         if (!SimpleExist) {
            return next(new ErrorHandler("No Simple to show....."))
         }
         res.json(SimpleExist)
         await Simple.deleteOne({_id:id})
       
    } catch (error) {
        next(new ErrorHandler(error.message, "Error while deleting Simple, controller-deleteSimple", 500))
    }
})


module.exports = {
    titleSubtitle,
    allHeros,
    deleteHeros,
    updateHeros,
    addCaptions,
    allCaptions,
    deleteCaptions,
    updateCaption,
    addCards,
    allCards,
    deleteCards,
    updateCard,
    addQuestions,
    allQuestions,
    deleteQuestions,
    updateQuestion,
    addSimples,
    allSimples,
    deleteSimples,
    updateSimple
}
