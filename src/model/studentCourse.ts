import mongoose from "mongoose";
const Schema = mongoose.Schema;

const studentCourseSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'UserInfo',
        required: true
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    }
});

export const studentCourse = mongoose.model('StudentCourse', studentCourseSchema);