const validSurname = (req, res, next) => {
    const surname = req.params.surname
    if (!isNaN(surname)) {
        return res.status(400).send("El apellido no puede contener números");
    }
    next();
};

