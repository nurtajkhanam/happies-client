import "./post.css";

function Post() {
  return (
    <div className="post-container">
      {/* HEADER COMPONENT */}
      <div className="post">
        <div className="author">
          <img className="author-img" src="https://dummyimage.com/25" alt="" />
          <p>Nurtaj</p>
        </div>
        <div>
          <button className="post-edit-btn">Edit</button>
          <button className="post-delete-btn">Delete</button>
        </div>
      </div>

      {/* DATE COMPONENT */}
      <div>
        <p className="post-date">9 Dec, 2025</p>
      </div>

      {/* POST TEXT COMPONENT */}
      <div className="post-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero
        animi eligendi quaerat, rem sunt aperiam. Temporibus possimus nesciunt,
        quia cum dolorum, incidunt, accusamus consequuntur cumque repudiandae
        officiis aspernatur nihil odit! Quisquam eos, doloribus iure a sint
        tempore aut illo nihil accusamus voluptate suscipit laudantium culpa rem
        consequatur totam incidunt, beatae voluptatibus corporis ipsam nesciunt
        autem. Dolor porro, totam nemo voluptatum doloremque deserunt explicabo,
        repudiandae deleniti reiciendis aliquid beatae? Aperiam corporis harum
        pariatur ipsa ullam incidunt, culpa ea. Quos, beatae?
      </div>
    </div>
  );
}

export default Post;
