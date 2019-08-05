import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const PostItem = () => {
    return (
        <div className={cx('post-item')}>
            <h2><a>타이틀</a></h2>
            <div className={cx('date')}>2019-08-01</div>
            <p>내용</p>
            <div className={cx('tags')}>
                <a>#Tags</a>
                <a>#Tags</a>
                <a>#Tags</a>
            </div>
        </div>
    );
};

const PostList = () => {
    return (
        <div className={cx('post-list')}>
        <PostItem/>
        <PostItem/>
        <PostItem/>
        <PostItem/>
        <PostItem/>
        <PostItem/>
    </div>
    );
};

export default PostList;