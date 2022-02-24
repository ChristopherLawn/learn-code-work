const sequelize = require('../config/connection');
const seedLanguages = require('./seedLanguages');
const seedAdminUser = require('./seedAdminUser');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedLanguages();

    await seedAdminUser();

    process.exit(0);
};

seedAll();