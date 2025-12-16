import { useState } from "react";
import Post from "../../components/post/post";
import "./home.css";
import PostModal from "../../components/postModal/postModal";

function Home() {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="main">
        <div className="container">
          {/* TITLE SECTION */}
          <div className="title-wrapper">
            <div className="title-container">
              <h4 className="title">Happies!!!</h4>
              <button onClick={handleOpen} className="create-post-btn">
                Create Post
              </button>
            </div>
          </div>

          {/* POST SECTION */}
          <div className="post-wrapper">
            {/* POST COMPONENT */}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>

      <PostModal isOpen={isOpen} handleClose={handleClose} />
    </>
  );
}

export default Home;
