//===========================================================Simple========================================

//Simple and subSimple---------------------http://localhost:7000/api/home/heroSimple
const addSimples = asyncHandler(async(req,res,next)=>{
    try {
        const { Simple,description} = req.body;
        console.log(Simple,description);
        if (!Simple || !description ) {
            return next(new ErrorHandler("Please enter all fields....."))
         }
         const Simples = await Simple.toLocaleLowerCase()
          const SimpleExist = await Simple.findOne({ Simple:Simples });
         
          if (SimpleExist) {
            return next(new ErrorHandler("already added"))
          }
        const addSimple = await Simple.create({
            Simple: Simple,
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
        console.log(findSimple);
        res.json(findSimple)
    } catch (error) {
        next(new ErrorHandler(error.message, "Error while showing all Simple, controller-allSimples", 500))
    }
})


//update the Simple -http://localhost:7000/api/home/updateSimple
const updateSimple = asyncHandler(async (req, res, next) => {
    try {
       
        const {id,Simple,description}= req.body
       
        if (!id || !Simple || !description) {
            return next(new ErrorHandler("Didnt get all data to update"))
        }
        const SimpleExist = await Simple.findOne({_id:id});
        if (!SimpleExist) {
           return next(new ErrorHandler("No Simples to show....."))
        }
       const updatedSimple= await Simple.findByIdAndUpdate({ _id: id }, { $set: { Simple: Simple ,description:description} })
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
        console.log(id);
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
