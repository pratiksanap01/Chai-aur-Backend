import { asyncHandler } from "../utils/asyncHandler.js"
import { user} from "../models/user.model.js"
import { upload } from "../middlewares/multer.middleware.js";



const registerUser = asyncHandler(async (req, res) => {
    // get user details
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res

    const {username, email, passwod, fullName} = req.body;      // get user details
    console.log("email:", email)
});





export {registerUser}