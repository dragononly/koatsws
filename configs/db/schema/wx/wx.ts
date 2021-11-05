import mongoose from "../../../../configs/db/mongo";

var Schema = mongoose.Schema;

var WxSchema = new Schema({
    openid: { type: String },
    nickname: { type: String },
    headimgurl: { type: String },
    sex: { type: String },
    name: { type: String },
    degree: { type: String },
    height: { type: String },
    income: { type: String },
    university: { type: String },
    house: { type: String },
    age: { type: String },
    like: { type: Object },
    heart: { type: Object },
    parent_occupation:{type:String},
    marriage:{type:String},
    occupation:{type:String},
    idcardImg:{ type: String },
    degreeImg:{ type: String },
});


export const wx = mongoose.model('wx', WxSchema);
