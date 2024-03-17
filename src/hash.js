const bcrypt = require("bcryptjs");

const password = "12345";

const run = async () => {
    const salt = await bcrypt.genSalt(10);

    console.log(salt);
};

run();
