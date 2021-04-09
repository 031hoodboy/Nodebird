import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {Card, Popover, ButtonGroup, Button, Avatar} from 'antd';
import {
    RetweetOutlined, 
    HeartOutlined, 
    MessageOutlined, 
    EllipsisOutlined,
    HeartTwoTone,
    FolderOpenFilled,
} from '@ant-design/icons';
import PostImages from './PostImages';

const PostCard = ({post}) => {

    const [liked, setLiked] = useState(false);
    const [commentFormOpend, setCommentFormOpend] = useState(false);
    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev );
    }, []);
    const onToggleComment = useCallback(() => {
        setCommentFormOpend((prev) => !prev);
    })
    const id = useSelector((state) => state.user.me?.id);
    return (
        <div style={{marginBottom: 20}} >
            <Card 
                cover={post.Images[0] && <PostImages images={post.Images} /> }
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked
                    ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
                    : <MessageOutlined key="heart" onClick={onToggleLike} />,
                    <MessageOutlined key="heart" onClick={onToggleComment} />,
                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.User.id === id  
                            ? (
                                 <>
                                    <Button>수정</Button>
                                    <Button type="danger" >삭제</Button>
                                </>
                            ) 
                            : <Button>신고</Button> }
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
            >
            <Card.Meta 
            avatat={<Avatar>{post.User.nickname[0]}</Avatar>}
                title={post.User.nickname}
                description={post.comtemt}
            />
            </Card>
            {commentFormOpend && (
                <div>
                    댓글부분   
                </div>)} 
            {/* <CommentForm /> */}
            {/* <Comments/> */}
        </div>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        user: PropTypes.object,
        content: PropTypes.string,
        createAt: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
}

export default PostCard;