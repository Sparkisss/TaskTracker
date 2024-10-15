import mongoose from 'mongoose'

const PrioritiesSchema = new mongoose.Schema({
    life: { type: String, required: false },
    health: { type: String, required: false },
    career: { type: String, required: false }
});

export default mongoose.model('Priorities', PrioritiesSchema)