const models = require("../models");

// ** iot switch toggle
exports.switchToggle = async (req, res) => {
  const { turnOff } = req?.query;
  const result = {
    values: [0, 1],
    _id: "6416e680e06be182670f182e",
    name: "switch",
    type: "Boolean",
    value: turnOff == "false" ? false : true,
    createdAt: "2023-03-19T10:40:00.755Z",
    updatedAt: "2023-03-19T10:40:00.755Z",
  };
  res.io.emit("iotSwitch", {
    receiver: req.params.id,
    sender: req.body.id,
    result,
  });
  res.json(result);
};
