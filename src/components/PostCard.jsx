import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredimage }) {
  const imageUrl = featuredimage ? appwriteService.getFilePreview(featuredimage) : null;
  const altText = title || "Post image";

  return (
    <Link to={`/post/${$id}`} className="block">
      <div className='w-full bg-gray-100 rounded-xl p-4 hover:bg-gray-200 transition'>
        {imageUrl && (
          <div className='w-full justify-center mb-4'>
            <img 
              src={imageUrl} 
              alt={altText}
              className='rounded-xl w-full h-48 object-cover'
              onError={(e) => {
                e.target.style.display = 'none';
                // Or you could set a placeholder image:
                // e.target.src = '/placeholder.jpg';
              }}
            />
          </div>
        )}
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;


