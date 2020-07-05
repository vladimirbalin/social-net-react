import { addPost } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    posts: state.profileComp.posts,
    newPostText: state.profileComp.newPostText
  }
};



export default connect(mapStateToProps, {addPost})(MyPosts);