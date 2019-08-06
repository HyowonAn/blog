import React from 'react';
import styles from './PostBody.scss';
import className from 'classnames/bind';
import MarkdownRender from 'components/common/MarkdownRender';

const cx = className.bind(styles);

const PostBody = ({body}) => {
    return (
        <div className={cx('post-body')}>
            <div className={cx('paper')}>
                <MarkdownRender markdown={body}/>
            </div>
        </div>
    );
};

export default PostBody;