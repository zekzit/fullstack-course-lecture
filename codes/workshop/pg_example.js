const pg = require('pg')
const connectionString = process.env.DATABASE_URL || 'postgres://mee@localhost:5432/workshop'

try {
    const client = new pg.Client(connectionString)
    client.connect()

    // const createQuery = client.query('CREATE TABLE test(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)')
    // createQuery.on('end', () => {
    //     client.end()
    // })

    client.query('INSERT INTO test(text,complete) VALUES($1,$2)', ["test", true])

    const selectQuery = client.query('SELECT * FROM test ORDER BY id ASC')
    selectQuery.on('row', row => {
        console.log(row)
    })
} catch (e) {
    console.log(e)
}