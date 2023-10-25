import mongoose from "mongoose";

const semesterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export const semester = mongoose.model('Semester', semesterSchema);