const UserAction = () => {

  return {

    userClicked: (user) => {
      return {
        type: "USER_CLICKED",
        payload: user
      };
    },

    deleteUser: (user) => {
      return {
        type: "DELETE_USER",
        payload: user
      };
    },

    addUser: (user) => {
      return {
        type: "ADD_USER",
        payload: user
      };
    },

    updateUser: (user) => {
      return {
        type: "UPDATE_USER",
        payload: user
      };
    }

  };

};

export default UserAction;