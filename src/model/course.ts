import mongoose from "mongoose";
const Schema = mongoose.Schema;

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String, 
        required: true
    },
    courseCode: {
        type: String, 
        required: true
    },
    semester: {
        type: Schema.Types.ObjectId, 
        ref: 'Semester',
        required: true
    }
});

export const course = mongoose.model('Course', courseSchema);