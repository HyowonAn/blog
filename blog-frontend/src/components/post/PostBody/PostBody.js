import React from 'react';
import styles from './PostBody.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

const PostBody = () => {
    return (
        <div className={cx('post-body')}>
            <div className={cx('paper')}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt est vitae feugiat commodo. Nam scelerisque nec augue quis lobortis. Nam pulvinar nunc ut gravida lobortis. In a ex eget magna condimentum fermentum pharetra vitae nisi. Suspendisse mollis nec nibh in sagittis. Donec finibus, nunc nec pulvinar maximus, nisl metus sodales nisi, at tristique tortor nulla quis metus. Phasellus tempor quam nisl, at accumsan sapien commodo laoreet. Proin arcu tortor, tincidunt sit amet malesuada eu, aliquet elementum erat. Ut sodales sodales odio at cursus. Sed dapibus urna mi. Maecenas sagittis volutpat sem ut varius. Fusce leo nisl, pellentesque mollis diam vitae, vehicula condimentum ipsum. Phasellus mauris tortor, fermentum at urna ac, hendrerit pellentesque metus. Cras elementum sit amet est quis imperdiet.

Vestibulum elementum porta odio, sit amet congue dui tincidunt nec. Curabitur aliquam risus risus, id rhoncus nisl tempor ut. Duis laoreet nisl nec nisi interdum, et finibus eros pharetra. Aliquam viverra quis dolor at sodales. Praesent vel lorem eget orci posuere placerat. Aenean fringilla, quam in vehicula feugiat, turpis turpis sagittis augue, sit amet congue justo metus at sem. Sed sit amet nibh dapibus, sodales orci condimentum, porttitor erat. Suspendisse tempus metus lorem, vel tincidunt mi ullamcorper vel. Nulla sed posuere ex. Suspendisse vitae mauris lectus. Etiam nibh lectus, eleifend et arcu sed, tempor volutpat leo. Pellentesque risus lorem, congue vel dignissim quis, hendrerit at enim.
            </div>
        </div>
    );
};

export default PostBody;