import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import Post from 'containers/post/Post';
import AskRemoveModal from 'components/modal/AskRemoveModal';

const PostPage = ({match}) => {
    const {id} = match.params;
    return(
        <PageTemplate>
            <Post id={id}/>
            <AskRemoveModal/>
        </PageTemplate>
    );
};

export default PostPage;