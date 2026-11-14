const express = require('express');
const app1 = express();
// const app1 = express();
// const userRoutes = require("./ex_basic");
const userRoutes = require("./temp_eng");
app1.use("/users", userRoutes);
// app1.use("/admin", userRoutes);
// localhost:5000/users/user
app1.listen(5000, () => {
    console.log("Server running on port 5000");
});
// app1.listen(4000, () => {
//     console.log("Server running on port 3000");
// });
