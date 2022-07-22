import axios from "axios";

export const getEmp = () => axios.get("http://localhost:9000/teletubbies");

export const postEmp = ({ name, age, team, email, phone, date }) =>
    axios.post("http://localhost:9000/teletubbies", {
        name,
        age,
        team,
        email,
        phone,
        date,
    });

export const delEmp = ({ id }) =>
    axios.delete(`http://localhost:9000/teletubbies/${id}`);

export const editEmp = ({ id, name, age, team, email, phone, date }) =>
    axios.put(`http://localhost:9000/teletubbies/${id}`, {
        name,
        age,
        team,
        email,
        phone,
        date,
    });
