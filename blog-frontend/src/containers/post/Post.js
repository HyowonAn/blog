import React, { Component } from 'react';
import PostInfo from 'components/post/PostInfo';
import PostBody from 'components/post/PostBody';
import * as postActions from 'store/modules/post';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Post extends Component {
    initialize = async ()=> {
        const {PostActions, id} = this.props;
        try {
            await PostActions.getPost(id);
            console.log(this.props);
        } catch(e) {
            console.log(e);
        }
    }

    componentDidMount() {
        this.initialize();
    }

    render() {
        const {loading, post} = this.props;

        if(loading) return null;

        console.log(post);
        const {title, body, publishedDate, tags} = post.toJS();

        return (
            <div>
                <PostInfo title={title} publishedDate={publishedDate} tags={tags}/>
                <PostBody body={body}/>    
            </div>
        );
    }
}

export default connect(
    (state) => ({
        post: state.post.get('post'),
        loading: state.pender.pending['post/GET_POST']
    }),
    (dispatch) => ({
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(Post);