import { getConnection } from "./../database/database";

const getLanguages = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, apellido, numero FROM datos");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getLanguage = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, apellido, numero FROM datos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addLanguage = async (req, res) => {
    try {
        const { id, nombre, apellido, numero } = req.body;

        if (id === undefined || nombre === undefined || apellido === undefined || numero === undefined) {
            res.status(400).json({ message: "Ingrese datos." });
        }
        const datos = { id, nombre, apellido, numero };
        const connection = await getConnection();
        await connection.query("INSERT INTO datos SET ?", datos);
        res.json({ message: "Language added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateLanguage = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, numero } = req.body;

        if (id === undefined || nombre === undefined || apellido === undefined || numero === undefined)  {
            res.status(400).json({ message: "Llene los campos" });
        }

        const datos = { id, nombre, apellido, numero };
        const connection = await getConnection();
        const result = await connection.query("UPDATE datos SET ? WHERE id = ?", [datos, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteLanguage = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM datos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getLanguages,
    getLanguage,
    addLanguage,
    updateLanguage,
    deleteLanguage
    
}