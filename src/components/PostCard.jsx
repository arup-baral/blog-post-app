import { Link } from "react-router-dom";
import Services from "../appwrite/config_service";

function PostCard({ $postId, title, featuredImage }) {
  const service = new Services();
  return (
    <Link to={`/post/${$postId}`}>
      <div>
        <div>
          <img src={service.getPreviewFile(featuredImage)} alt={title} />
        </div>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
