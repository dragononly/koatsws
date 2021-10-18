const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://strapi:pp888888@xiong.pccpa.cn:3306/strapi');
}
export default mongoose