const { people } = require("../data");

const getPeople = (req, res) => {
    if (people) {
        return res.status(200).json({ data: people });
    }
}

const postPeople = (req, res) => {
    const { name } = req.body;
    console.log(name);
    if (!name) {
        return res
            .status(401)
            .send({ success: false, msg: "Please provide name" });
    }
    res.status(201).send({ success: true, person: name });
    people.push({ id: 10, name: name });
}

const postPeoplePostman = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(401).send(`Please enter name!`);
    }
    people.push(name);
    res.status(200).json(people);
}

const putPeople = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) return res.status(400).send(`Please enter name`);

    let index = people.findIndex(person => person.id === +id);
    if (index === -1) return res.status(404).send(`No person found with that id`);
    people[index].name = name;
    res.status(200).json(people);
}

const deletePeople = (req, res) => {
    const { id } = req.params;

    let index = people.findIndex(person => person.id === +id);
    if (index === -1) return res.status(404).send(`No person found with that id`);
    people.splice(index, 1);
    console.log(people);
    res.status(200).json(people);
}

module.exports = {
    getPeople,
    postPeople,
    postPeoplePostman,
    putPeople,
    deletePeople
}