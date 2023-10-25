import mongoose from "mongoose";
const Schema = mongoose.Schema;

const branchCourseSchema = new mongoose.Schema({
    branch: {
        type: Schema.Types.ObjectId,
        ref: 'Branch',
        required: true
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    }
});

export const branchCourse = mongoose.model('BranchCourse', branchCourseSchema);