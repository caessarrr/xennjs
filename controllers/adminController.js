exports.getDashboard = (req, res) => {
    if (!req.session.admin) {
        return res.redirect('/login');
    }
    res.render('adminDashboard', { admin: req.session.admin });
};
