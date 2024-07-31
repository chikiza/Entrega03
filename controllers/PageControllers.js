const vistaPrincipal = (req, res)=>{
    res.render('home')
}

const vistaTables = (req, res)=>{
    res.render('tables')
}

const vistaNotificstions = (req, res)=>{
    res.render('notifications')
}

module.exports = {
    vistaPrincipal,
    vistaTables,
    vistaNotificstions,
}