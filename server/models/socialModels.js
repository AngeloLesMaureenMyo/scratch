const { Pool } = require('pg');

// danger noodle's DB

// original group's DB
// const PG_URI = 'postgres://yvigeiaa:Qpe4Y1GB8ZP-Rg-fKaLfbYM4Lin6Ce7J@ziggy.db.elephantsql.com:5432/yvigeiaa';

// const PG_URI = 'postgres://wnfdaaen:3cBUwRC0Jl16p-RzWFw0c5LNKCT92ryr@ziggy.db.elephantsql.com:5432/wnfdaaen';
//postgres://wnfdaaen:3cBUwRC0Jl16p-RzWFw0c5LNKCT92ryr@ziggy.db.elephantsql.com:5432/wnfdaaen
//working
//const PG_URI = 'postgres://yvigeiaa:Qpe4Y1GB8ZP-Rg-fKaLfbYM4Lin6Ce7J@ziggy.db.elephantsql.com:5432/yvigeiaa';

const PG_URI = 'postgres://wnfdaaen:3cBUwRC0Jl16p-RzWFw0c5LNKCT92ryr@ziggy.db.elephantsql.com:5432/wnfdaaen';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

