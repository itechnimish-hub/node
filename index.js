const express = require('express');
const app1 = express();
// const app1 = express();
const userRoutes = require("./ex_basic");
app1.use("/users", userRoutes);
// app1.use("/admin", userRoutes);

app1.listen(5000, () => {
    console.log("Server running on port 5000");
});

// app1.listen(4000, () => {
//     console.log("Server running on port 3000");
// });
