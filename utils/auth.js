const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

const isAdmin = (req, res, next) => {
  
    if (!req.session.admin) {
        //res.redirect('/login');
        res.json({message: 'ADMINISTRATOR'});
    } else {
        next();
    }
};

module.exports = withAuth, isAdmin;