require("dotenv").config();

module.exports = {
    development: {
        dialect: "mysql",
        host: process.env.FE_HOST,
        username: process.env.FE_UNAME,
        password: process.env.FE_PASS,
        database: process.env.FE_DB,
        port: process.env.FE_PORT,
        use_env_variable: false,
        define: {
            charset: 'utf8mb4',
            collate: 'utf8mb4_bin'
        },
    },
    local: {
        username: "root",
        password: null,
        database: "gcc_stw",
        host: "127.0.0.1",
        dialect: "mysql",
    },
    production: {
        username: process.env.FE_UNAME,
        password: process.env.FE_PASS,
        database: process.env.FE_DB,
        host: process.env.FE_HOST,
        dialect: "mysql",
    },
};
