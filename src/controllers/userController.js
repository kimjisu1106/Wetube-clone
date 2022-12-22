export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => res.redirect("/login");
export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Log out" });
export const join = (req, res) => res.send("JOIN");
