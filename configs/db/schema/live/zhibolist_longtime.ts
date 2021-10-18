import mongoose from "../../mongo";

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    zhiboid: { type: String },
    eid: { type: String },
    name: { type: String },
    time: { type: String },
});


export const zhibolist_longtime = mongoose.model('zhibolist_longtime', UserSchema);
