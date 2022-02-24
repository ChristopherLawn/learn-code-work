const sequelize = require('../config/connection');
const seedLanguages = require('./seedLanguages');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    // await User.create({
    //     username: "firstadmin",
    //     email: "admin@mail.com",
    //     password: "adminpassword",
    //     is_admin: true
       
    // })
    await seedLanguages();

    process.exit(0);
};

seedAll();