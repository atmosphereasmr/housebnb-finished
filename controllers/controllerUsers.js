module.exports = {

  //Get  User Profile
  // /api/user/2
  getUserProfile: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { userId } = req.params;
    dbInstance.users.get_profile({userId})
      .then(response => res.status(200).send(response))
      .catch(error => console.log(error))
  },

  //Get  User Homes (meaning user listings, not bookings)
  // /api/user/2/homes
  getUserHomes: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { userId } = req.params;
    dbInstance.users.get_user_homes({userId})
      .then(response => res.status(200).send(response))
      .catch(error => console.log(error))
  },

  //Update User
  // /api/user/update/2
  updateUser: (req, res, next) => {
    const dbInstance = req.app.get('db');
    // const {ALL NEEDED USER INFO} = req.body; also add to dbInstance
    const { userId } = req.params;
    dbInstance.users.update_user({userId})
      .then(response => res.status(200).send(response))
      .catch(error => console.log(error))
  },


  login: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { username, password, failed } = req.params;

    dbInstance.users.auth_login({username, password})
      .then(
        response => {
          req.session.userid = response[0].user_id;
          req.session.cookie.userid = response[0];
          res.status(200).send(response[0]);
        })
      .catch(error => console.log(error))
  },

  register: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { username, password, first_name, last_name, bio } = req.body;
    dbInstance.users.auth_register({username, password, first_name, last_name, bio})
    .then(
      (response) => {
        console.log('response', response)
        res.status(200).send(response[0]);
      })
      .catch(error => console.log(error))
  }

}
