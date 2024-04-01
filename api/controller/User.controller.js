import User from "../models/user.model";
import { errorHandle } from "../../utilis/error";
import bcryptjs from 'bcryptjs'


//UPDATE

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
      return next(errorHandle(401, "You can update only your account"));
    }
  
    try {
      if (req.body.password) {
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
      }
  
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.id }, 
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
          },
        },
        { new: true }
      );
  
      if (!updatedUser) {
        // Handle the case where the user is not found
        return next(errorHandle(404, "User not found"));
      }
  
      const { password, ...rest } = updatedUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };

  

