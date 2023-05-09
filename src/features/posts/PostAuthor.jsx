import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';


const PostAuthor = ({userId}) => {
    const users = useSelector(selectAllUsers)
    // console.log(users)
    let author

    if (userId) {
        author = users.find(user => user.id === userId)
    }

    if (!author) {
        console.log('User not found')
    };
    return <span className='font-bold'>by {author ? author.name : 'Unknown Author'}</span>
  }
  

export default PostAuthor