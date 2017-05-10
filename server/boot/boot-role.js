/**
* Created by Jérémy Adoux on 10/05/2017.
 */
module.exports = function (app) {
  let Role = app.models.Role;
  let Customer = app.models.customer;
  let RoleMapping = app.models.RoleMapping;

  let userAdminList = [
    {username: "jadouxsysadmin", email: "jadoux@visiativ.com", password: "123456", firstname: "Jérémy", lastname: "Adoux"}
  ];

  Role.findOrCreate({where:{name: "AdminRole"}}, {name: "AdminRole"}, function(err, role) {
    if(err) throw err;

    userAdminList.forEach(function(newUser) {
      Customer.findOrCreate({where:{email: newUser.email}}, newUser, function(err, user) {
        if(err) throw err;

        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: user.id
        }, function(err, principal) {
          if(err) throw err;
        });
      })
    });
  });
};
