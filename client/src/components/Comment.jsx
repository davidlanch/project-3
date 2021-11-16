import React, { Component } from "react";
import { Link } from "react-router-dom";
import APIHandler from "./../api/handler";
import "./../styles/Comment.css";
import { withAuth } from "../auth/UserContext";

class Comment extends Component {
  state = {
    message: "",
    date: Date.now(),
    recipe: this.props.idRecipe,
    comments: [],
    didMount: false,
  };

  async componentDidMount() {
    this.updateComments();
  }

  updateComments = async () => {
    try {
      const response = await APIHandler.get("/comments/" + this.props.recipeId);
      this.setState({
        comments: response.data,
        didMount: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await APIHandler.post(
        "/comments/" + this.props.userId + "/" + this.props.recipeId,
        this.state
      );
      this.updateComments();
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    if (!this.state.didMount) return <div>loading</div>;
    return (
      <div className="comments">
        <div className="header">
          <h1 className="title">Leave a comment</h1>
          <form action="" className="form">
            <input
              type="text"
              className="input"
              placeholder="leave a comment here .."
              onChange={this.handleChange}
            />

            {this.props.userContext.isLoggedIn === true && (
              <button className="btn" onClick={this.handleSubmit}>
                send !
              </button>
            )}

            {this.props.userContext.isLoggedIn === false && (
              <Link to="/sign-in"><button className="btn" >
                send !
              </button>
              </Link>
            )}
          </form>
        </div>

        {!this.state.comments.length ? (
          <div className="comment"> no comments yet </div>
        ) : (
          this.state.comments.map((comment, i) => {
            return (
              <div className="comment" key={comment._id}>
                <div className="date">
                  {comment.date.slice(0, 10)} {comment.date.slice(11, 19)}{" "}
                </div>
                <div className="author-infos">
                  <img
                    className="avatar"
                    src={comment.author?.avatar}
                    alt="user-avatar"
                  />
                  <b>{comment.author?.username}</b>
                </div>
                <div className="message">{comment.message}</div>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default withAuth(Comment);
