class home_action {
    static home_page = async (req, res) => {
        await res.render('home', { 'title': 'welcome to home!' });
    }

    static register_page = async (req, res) => {
        await res.render('register', { 'title': 'Register here' })

    }

}

export default home_action ;