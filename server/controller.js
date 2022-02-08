const houses = require("./db.json");
const nextId = houses.length + 1;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    deleteHouse: (req, res) => {
        const index = houses.findIndex(
            (element) => element.id === +req.params.id
        );
        houses.splice(index, 1);
        res.status(200).send(houses);
    },
    createHouse: (req, res) => {
        const { address, price, imageURL } = req.body;
        const newHouse = {
            id: nextId,
            address,
            price: +price,
            imageURL
        };

        houses.push(newHouse);
        res.status(200).send(houses);
    },
    updateHouse: (req, res) => {
        const { type } = req.body;
        const index = houses.findIndex(
            (element) => element.id === +req.params.id
        );

        if (type === "plus") {
            console.log(houses);
            houses[index].price += 10000;
        } else if (type === "minus") {
            console.log(houses);
            houses[index].price -= 10000;
        } else {
            req.status(400).send("Bad Request");
            return;
        }

        res.status(200).send(houses);
    }
};
