import mongoose from "../../../../configs/db/mongo";

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String },
    starttime: { type: Object },
    group: { type: Object },
    power: { type: Object },
    signtime: { type: Object },
    usersign: { type: Object },
    like: { type: Object },
    url: { type: String },
    ask: { type: Array },
    a: { type: Number, default: 0 },
    b: { type: Number, default: 0 },
    c: { type: Number, default: 0 },
    d: { type: Number, default: 0 }

});


export const zhibolist = mongoose.model('zhibolist', UserSchema);
