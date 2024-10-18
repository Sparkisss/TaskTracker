import mongoose from 'mongoose'

const NotesSchema = new mongoose.Schema({
    notes: { type: String, required: false }
});

export default mongoose.model('Notes', NotesSchema)