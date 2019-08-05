import React, { Component } from 'react';
import styles from './EditorPane.scss';
import classNames from 'classnames/bind';
import CodeMirror from 'codemirror';

import 'codemirror/mode/markdown/markdown'; //마크다운 문법 색
// 마크다운 내부 코드 색
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';
//css style
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css'; //https://codemirror.net/demo/theme.html

const cx = classNames.bind(styles);

class EditorPane extends Component {

    editor = null;
    codeMirror = null;

    initializeEditor = () => {
        this.codeMirror = CodeMirror(this.editor, {
            mode: 'markdown',
            theme: 'monokai',
            lineNumbers: true,
            lineWrapping: true
        });
    }

    componentDidMount() {
        this.initializeEditor();
    }

    render() {
        return (
            <div className={cx('editor-pane')}>
                <input className={cx('title')} placeholder="제목을 입력하세요" naem="title"/>
                <div className={cx('code-editor')} ref={ref => this.editor=ref}></div>
                <div className={cx('tags')}>
                    <div className={cx('description')}>태그</div>
                    <input name="tags" placeholder="태그를 입력하세요 (쉼표로 구분)"/>
                </div>
            </div>
        );
    }
}

export default EditorPane;