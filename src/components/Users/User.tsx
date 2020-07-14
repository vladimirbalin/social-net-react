import React from 'react';
import { NavLink } from 'react-router-dom';

type UserPropsType = {
  id: number
  smallPhoto: string | null
  name: string
  status: string | null
  isFollowed: boolean
  unFollow: (id: number) => void
  follow: (id: number) => void
  disabledButtons: Array<number>
  isAuth: boolean
}
const User: React.FC<UserPropsType> = ({
                                         id, smallPhoto, name, status,
                                         isFollowed, follow, unFollow, disabledButtons, isAuth
                                       }) => {
  let isCurrentUserFetching = disabledButtons.some(el => el === id);
  let buttonClassname = isCurrentUserFetching ? 'btn fetching' : 'btn';
  let followButton;
  const followOrUnfollowButton = (thunk: (id: number) => void, text: string) => {
    return <button onClick={() => thunk(id)}
                           disabled={isCurrentUserFetching}
                           className={buttonClassname}>{text}</button>
  }


  isFollowed ?
    followButton = followOrUnfollowButton(unFollow, 'Unfollow')
    :
    followButton = followOrUnfollowButton(follow, 'Follow');

  return (
    <div className='users__item'>
      <div className='users__left'>
        <div>
          <NavLink to={'/profile/' + id}>
            <img src={smallPhoto === null ? `https://image.flaticon.com/icons/svg/53/53157.svg` : smallPhoto} alt={id + 'photo'}/>
          </NavLink>
        </div>
        <div>
          {isAuth && followButton}
        </div>
      </div>
      <div className='users__right'>
        <div className='users__name'>
          <div><span>nickname: </span>{name}</div>
          <div><span>status: </span>{status === null ? 'no status' : status}</div>
          <div><span>id: </span>{id}</div>
          {isAuth ? <div><span>followed: </span>{isFollowed ? 'yes' : 'no'}</div> : null}
        </div>
      </div>
    </div>);
}

export default User;
