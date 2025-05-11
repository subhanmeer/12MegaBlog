import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredimage }) {
  // Check if featuredimage is defined and valid
  // const imageUrl = featuredimage ? appwriteService.getFilePreview(featuredimage) : null
  // console.log("Image URL:", imageUrl);


  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredimage)} alt={title} 
                className='rounded-xl' />
                {/* <img src={imageUrl} alt={title} /> */}

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard;


