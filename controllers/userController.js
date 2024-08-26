exports.getDashboard = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    res.render('userDashboard', { user: req.session.user });
};
