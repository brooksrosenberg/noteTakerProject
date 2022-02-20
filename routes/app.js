// const express = require('express');
const req = require('express/lib/request');
const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');


//render note
module.exports = function (app) {
    app.get("/api/notes", (req, res) =>
        res.sendFile(path.join(__dirname, "../db/db.json")))

    app.post("/api/notes", (req, res) => {
        let newNote = {
            id: uuid(),
            title: req.body.title,
            text: req.body.text,
        };
        let pastNote = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf-8"))
        pastNote.push(newNote)
        fs.writeFileSync("./db/db.json", JSON.stringify(pastNote))
        res.json(pastNote)

    });
}