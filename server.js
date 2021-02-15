const path = require('path')
const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin.routes')
const shopRoutes = require('./routes/shop.routes')
const errors = require('./controllers/errors.conroller')
const PORT = process.env.PORT || 5000

//!     *** Mildellwars ***     // 
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
  console.log('This middleware is allways runing')
  next()
})
app.use('/admin', adminRoutes.routes)
app.use(shopRoutes.routes)
app.use(errors.get404page);


app.listen(5000, () => console.log(`app listning on port : ${PORT}`))
