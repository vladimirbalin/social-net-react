import { addPost } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    postData: state.profileComp.postData,
    newPostText: state.profileComp.newPostText
  }
};



export default connect(mapStateToProps, {addPost})(MyPosts);