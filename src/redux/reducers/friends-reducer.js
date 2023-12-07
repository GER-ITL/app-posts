let initialState = {
    friendsData: [
      {
        id: 1,
        name: "Alex L.",
        img: "https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg",
        status: "online",
      },
      {
        id: 2,
        name: "Jack S.",
        img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676296367166243426.png",
        status: "offline",
      },
      {
        id: 3,
        name: "Max J.",
        img: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg",
        status: "offline",
      },
      {
        id: 4,
        name: "Margo N.",
        img: "https://sunmag.me/wp-content/uploads/2019/11/sunmag-001-small-avatar.png",
        status: "online",
      },
    ],
  }

const friendsReducer = (state = initialState, action) => {
    
    return state
}

export default friendsReducer