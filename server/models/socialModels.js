const { Pool } = require('pg');

const PG_URI =
  // 'postgres://yvigeiaa:Qpe4Y1GB8ZP-Rg-fKaLfbYM4Lin6Ce7J@ziggy.db.elephantsql.com:5432/yvigeiaa';
  'postgres://gilbfloq:VFX4UsWP_OJ43C2_jfOX2kRq-ktq0iXL@ziggy.db.elephantsql.com:5432/gilbfloq';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
