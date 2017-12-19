var items =
{
  "items": [
    {
      "id": 1,
      "name": "Drip Coffee",
      "price": "$4.99"
    },
    {
      "id": 2,
      "name": "Plain Latte",
      "price": "$5.99"
    },
    {
      "id": 3,
      "name": "Vanilla Latte",
      "price": "$6.99"
    }]
};

module.exports = {

  getAllItems: function (req, res) {
    res.json(items);
  },

  getItem: function (req, res) {

    var id = parseInt(req.params.id);

    var item = items.find(function (i) {
      return i[0] === id;
    });

    if (item === undefined) {
      return res.sendStatus(404);
    }

    res.json(item);
  }
};