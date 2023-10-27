const express = require('express');
const noteController = require('../controller/noteController');
const router = express.Router();

router.get('/notes', noteController.getAllNotes);
router.post('/notes/create', noteController.createNote);
router.put('/notes/update', noteController.updateNote);
router.delete('/notes/delete/:noteId', noteController.deleteNote);


module.exports = router;