import Account from '../models/Account'

export const addAccount = async (req, res, next) => {
  // console.log(req.body);
  const newAccount = new Account(req.body);
  try {
    await newAccount.save();
    console.log(newAccount);
    res.json("POST request Complete");
  } catch (error) {
    res.status(400).json({ error });
  }
  next();
};

export const getAccount = async (req, res) => {
  const accounts = await Account.find();
  try {
    res.json(accounts);
  } catch (error) {
    res.status(404).json({ error });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    await Account.findByIdAndDelete(req.params.id);
    res.json({ message: "Account were deleted successfully" });
  } catch (error) {
    res.status(404).json({ error });
  }
};
