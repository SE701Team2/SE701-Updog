// eslint-disable-next-line import/no-cycle
import PostView from './PostView'
import useApi from '../../../hooks/useApi'

/**
 * Creates a post. One of either id or data must be provided
 * @prop {string} activity - optional, POSTED, SHARED or LIKED
 * @prop {number} id - optional, data will be fetched using the id
 * @prop {object} data - optional, use this post data to render the post
 * @prop {boolean} condensed - optional, makes the post take up less space
 * @prop {boolean} showReplies - optional, also renders each 1st level reply to the post
 */
const PostController = ({
    activity = 'POSTED',
    id = 0,
    data = null,
    condensed = false,
    showReplies = false,
}) => {
    let postData = data
    if (id) {
        const res = useApi(`posts/${id}`)

        if (res.loading) {
            return <div>Loading...</div>
        }

        if (res.err) {
            return <div>Error: {res.err}</div>
        }

        postData = res.data
    } else if (!data) {
        // true if neither id or data is given
        return <div>Error retrieving post data</div>
    }

    return (
        <PostView
            activity={activity}
            condensed={condensed}
            postData={postData}
            showReplies={showReplies}
        />
    )
}

export default PostController
