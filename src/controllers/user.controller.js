import User from "../models/User";

export const addUser = async (req, res, next) => {
  // console.log(req.body);
  const newUser = new User(req.body);
  try {
    await newUser.save();
    console.log(newUser);
    res.json("POST request Complete");
  } catch (error) {
    res.status(400).json({ error });
  }
  next();
};

export const getUsers = async (req, res) => {
  const users = await User.find();

  try {
    res.json(users);
  } catch (error) {
    res.status(404).json({ error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User were deleted successfully" });
  } catch (error) {
    res.status(404).json({ error });
  }
};
