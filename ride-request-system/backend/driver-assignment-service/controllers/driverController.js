const assignmentService = require('../services/assignmentService');

exports.assignDriver = async (req, res) => {
  try {
    const driver = await assignmentService.assignDriver(req.body);
    if (!driver) {
      return res.status(404).json({ message: 'No available drivers found' });
    }
    res.status(200).json(driver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
