import mongoose from 'mongoose'

const HabitItemSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    label: { type: String, required: false },
    days: { type: [Boolean], required: true }
}, { _id: false });

const HabitSchema = new mongoose.Schema({
    habits: [HabitItemSchema]
});

export default mongoose.model('Habit', HabitSchema)