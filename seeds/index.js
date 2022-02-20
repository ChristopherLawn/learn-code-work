const sequelize = require('../config/connection');
const seedLanguages = require('./seedLanguages');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedLanguages();

    process.exit(0);
};

seedAll();