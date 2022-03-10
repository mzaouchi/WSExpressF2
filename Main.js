const express = require('express')

const app = express()

const port = 5000

var users = [
    {name :'Elyes', age : 19, id:1},
    {name :'Ghassen', age : 100, id:2},
    {name :'Imen', age : 190, id:3}
]

app.use(express.json())

// Read
app.get('/ReadUsers',(req,res)=>{
    res.send(users)
})
//Create
app.post('/AddUser',(req,res)=>{
    users = [...users,req.body]
    res.send({Users : users, Msg : 'User added'})
})
//Delete
app.delete('/DeleteUser/:id',(req,res)=>{
    const {id} = req.params
    users = users.filter(user => user.id != id)
    res.send({Users : users, Msg : 'User deleted'})

})
//Update
app.put('/UpdateUser/:id',(req,res)=>{
    const {id} = req.params
    users = users.map(user => user.id == id ? {...user,...req.body} : user)
    res.send({Users : users, Msg : 'User update'})
})





app.listen(port,console.log(`Server is running on the port ${port}`))