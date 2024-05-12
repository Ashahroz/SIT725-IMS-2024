const { isAuthenticated } = require('../models/auth');


exports.login = async (req, res) => {
    if (req.method === 'GET') {
        return res.render('login.ejs', { messages: { error: '' } });
    }
    console.log('Request Body:', req.body);
    try {
        const authenticated = await isAuthenticated(req);
        console.log('Authenticated:', authenticated)
        if (authenticated) {
            res.redirect('/home');
        } else {
            res.status(401).render('login.ejs', { messages: { error: 'Invalid Credentials' } });
        }
    } catch (error) {
        console.error('Error in login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.logout = (req, res) => {
    res.clearCookie('sessionID');
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
        }
        res.redirect('/login');
    });
}

exports.home = (req, res) => {
    // Render home page for authenticated users
    res.render('home.ejs', {
        total_sales: [{ TotalItemsOrdered: "5,633" }],
        ord_num: [{ NumberOfProducts: 12 }],
        stock_num: [{ NumberOfProducts: 98 }],
        total_stock: [{ TotalItemsOrdered: "36,982" }]
    });
}
