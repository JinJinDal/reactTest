import React from 'react';

import log from './logo.svg'

function Image(props) {
    return (
        <div>
            <h2>Image 활용</h2>
            <ul>
                <li>src폴더 내에 이미지 호출<br/>
                    ㄴimport log from './logo.svg'<br/>
                    ㄴ&lt;img src={log}/&gt;
                </li>
                <li>
                    public폴더안에 있는 이미지 호출<br/>
                    ㄴ&lt;img src="logo192.png"/&gt;<br/>
                    ㄴindex.html문서 기준으로 상대경로 작성
                </li>
            </ul>
        </div>
    );
}

export default Image;
