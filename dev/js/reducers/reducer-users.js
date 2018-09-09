import UUID from "uuid";

export default  function (state, action) {
  if (!state) {
    return [
      {
        id: "1",
        name: "Batman",
        description: "aaaaaaaaaaaaaaaaaaa"
      },
      {
        id: "2",
        name: "Superman",
        description: "bbbbbbbbbbbbbbbbbb"
      },
      {
        id: "3",
        name: "Robin",
        description: "ccccccccccccccccccc"
      }
    ];
  }

  switch (action.type) {
    case "DELETE_USER":
      let userToDelete = action.payload;
      let newState = state.filter((user) => user.id !== userToDelete.id);
      return newState;
    case "ADD_USER":
      let newUser = action.payload;
      newUser.id = UUID();
      return [...state, newUser];
    case "UPDATE_USER":
      let updatedUser = action.payload;

      return state.map((user) => {
        if (user.id === updatedUser.id) {
          return updatedUser;
        } else {
          return user;
        }
      });
  }

	return state;
	
};