const { User } = require('../models');
require('dotenv').config();

const adminUser =
{
   username: ADMIN_USER,
   email: ADMIN_EMAIL,
   password: ADMIN_USER,
   is_admin: true 
}

const seedAdminUser = () => User.create(adminUser);
module.exports = seedAdminUser;