const express = require('express')
const store = require('../middlewares/multer')

const { titleSubtitle,allHeros,deleteHeros,updateHeros,
     addCaptions, allCaptions, deleteCaptions, updateCaption ,
     addCards,allCards, deleteCards,updateCard,
     addQuestions, allQuestions,deleteQuestions, updateQuestion,
     addSimples, allSimples, deleteSimples, updateSimple} = require('../controllers/home')


const router = express.Router()
//----------------------Hero------------------------------------
router.post('/heroTitle',titleSubtitle)
router.get('/getHeroTitle',allHeros)
router.post('/deleteHero',deleteHeros)
router.post('/updateHero',updateHeros)

//----------------------Caption---------------------------------
router.post('/addCaption',addCaptions)
router.get('/allCaption',allCaptions)
router.post('/deleteCaption',deleteCaptions)
router.post('/updateCaption',updateCaption)

//----------------------Card--------------------------------------
router.post('/addCard',addCards)
router.get('/allCard',allCards)
router.post('/deleteCard',deleteCards)
router.post('/updateCard',updateCard)

//----------------------Question--------------------------------------
router.post('/addQuestion',addQuestions)
router.get('/allQuestion',allQuestions)
router.post('/deleteQuestion',deleteQuestions)
router.post('/updateQuestion',updateQuestion)

//----------------------Simple--------------------------------------
router.post('/addSimple',store.single('image'),addSimples)
router.get('/allSimple',allSimples)
router.post('/deleteSimple',deleteSimples)
router.post('/updateSimple',updateSimple)



module.exports = router
