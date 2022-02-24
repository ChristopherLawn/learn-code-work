const { User } = require('../models');
require('dotenv').config();

const adminUser =
{
   username: 'Admin',
   email: 'learn-it-admin@gmail.com',
   password: 'learn-it-admin-1',
   is_admin: true 
}

const seedAdminUser = () => User.create(adminUser);
module.exports = seedAdminUser;