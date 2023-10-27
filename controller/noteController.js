// const { json } = require('body-parser');
const generator = require('../util/generator');
const memStorage = require('../util/memoryStorage');
const model = require('../model/note.model');

exports.getAllNotes = (req, res) => {
    // var seqId = generator.generate();
    // memStorage.store.setItem(seqId, "1st_key");
    // seqId = generator.generate();
    // memStorage.store.setItem(seqId, "2nd_key");

    // let keys = memStorage.getKeys(memStorage.store);
    
    let values = memStorage.getValues(memStorage.store);
    
    return res.status(200).send(JSON.stringify(values))
    // var Note = model.Note;
    // var noteObj = new Note(seqId,"ccc","sss","sdada",new Date());
    // res.send(`${JSON.stringify(noteObj)}`);
    
}

exports.createNote = (req, res) => {
    
    var seqId = generator.generate();
    var title = req.body.title;
    var content = req.body.content;
    var createdBy = "admin";
    var createdOn = new Date();
    if (!content || !title )
        return res.status(500).send({error: 'Title and content should not be empty'});

    var Note = model.Note;
    var obj = new Note(seqId, title, content, createdBy,createdOn);
    memStorage.store.setItem(seqId, obj);
    return res.status(201).send('Note successfully created');
}

exports.updateNote = (req, res) => {
    var noteId = req.body.noteId;
    var title = req.body.title;
    var content = req.body.content;
    var createdBy = "admin";
    var createdOn = new Date();
    
    if (!noteId)
        return res.status(500).send({error: 'ID cannot be empty'});

    if (!content || !title )
        return res.status(500).send({error: 'Title and content should not be empty'});

    if (!memStorage.store.getItem(noteId))
    {
        return res.status(500).send({error: 'ID does not exist'});
    }
    var Note = model.Note;
    var obj = new Note(noteId, title, content, createdBy,createdOn);
    memStorage.store.setItem(noteId, obj);
    return res.status(200).send('Note successfully updated');
}

exports.deleteNote = (req, res) => {
    var noteId = req.params.noteId;
    
    if (!noteId)
        return res.status(500).send({error: 'cannot delete empty ID'});

    if (!memStorage.store.getItem(noteId))
        return res.status(500).send({error: 'ID does not exist'});
    
    memStorage.store.removeItem(noteId);
    return res.status(200).send('Note successfully deleted');

}
