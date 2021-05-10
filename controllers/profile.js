const handleProfile = (req, res, db) => {
    const { id } = req.params;
    db.select('*').from('users').where({id})
    .then(user => {
        if (!user.length) {
            res.status(400).json('Not found')
        }
        else {
           res.json(user[0]) 
        }
 })
 .catch(err => res.status(400).json('Fail'))
}

module.exports = {
    handleProfile: handleProfile
}