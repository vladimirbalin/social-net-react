import photoUrl from '../assets/img/dmitriy.jpg';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let id = 100;
let initialState = {
  users: [ ]
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return  {...state,
              users: state.users.map(u=>{
                return u.id === action.userID ? {...u, followed: true} : u; })
              };
    case UNFOLLOW:
      return  {...state,
              users: state.users.map(u=>{
                  return u.id === action.userID ? {...u, followed: false} : u; })
              };
    case SET_USERS:
      return {...state,
              users: [...state.users, ...action.users]};

    default:
      return state;
  }

};

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unFollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;