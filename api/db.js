const sql = require('mssql');

const config = {
  user: 'SA',
  password: 'Tridel@2024',
  server: '192.168.0.113',
  database: 'temsv2',
  options: {
    encrypt: true, // For Azure, use true; otherwise, false
    trustServerCertificate: true, // Change to false in production
  },
};

const connectDB = async () => {
  try {
    await sql.connect(config);
    console.log('Connected to SQL Server');
  } catch (err) {
    console.error('Database connection failed:', err);
  }
};

module.exports = { sql, connectDB };
