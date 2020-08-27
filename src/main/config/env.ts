export default {
  mongoUrl: process.env.DB_HOST || 'mongodb://localhost:27017/telzir-api',
  port: process.env.PORT || 3333,
  jwtSecret: process.env.JWT_SECRET || 'tj67O==5H'
}
