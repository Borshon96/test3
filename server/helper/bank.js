const Bank = require("../models/Bank");

exports.createBanks = async (req, res) => {
    console.log(req.body);
    const bank = new bank({
      name: req.body.name,
      pan: req.body.pan,
      nationality: req.body.nationality,
      accountNum: req.body.accountNum,
      creditCard: req.body.creditCard,
      loans: req.body.loans,
    });
  
    try {
      const savedBank = await bank.save();
      res.json(savedBank);
    } catch (err) {
      res.json({ message: err });
    }
  };