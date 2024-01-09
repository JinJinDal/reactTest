import React from 'react';

function Home(props) {
    return (
        <div>
           <article>
            <h2>프로젝트 생성 및 실행</h2>
            <ul>
                <li>비주얼코드 react폴더 열기</li>
                <li>터미널열기(ctrl + j)</li>
                <li>window10에서 프로젝트 생성 에러(npm i g create-react-app)</li>
                <li>프로젝트 생성(npx create-react-app 프로젝트명)</li>
                <li>만들어진 프로젝트로 이동(cd 프로젝트명)</li>
                <li>프로젝트를 실행(npm start)</li>
                <li>프로젝트 중지(ctrl + c)</li>
            </ul>
           </article>
           <article>
            <h2>프로젝트 폴더구조</h2>
            <ul>
                <li>node_modules(환경설정시 생성된 모듈 파일)</li>
                <li>public(static 자원이 위치하는 폴더)</li>
                <li>src(작업폴더-js,css,component...)</li>
                <li>package.json(version, dependencies,proxy,git 등의 정보 수록)</li>
            </ul>
           </article>
           <article>
            <h2>문법</h2>
            <ul>
                <li>
                    JSX (Javascript XML) - JavaScript 확장한 문법<br/>
                    ㄴ 클래스 속성을 → className<br/>
                    ㄴ 태그 규칙(열고,닫고)<br/>
                    ㄴ JavaScript구문 사용시 중가로({}) 사용
                    </li>
                <li>return은 하나의 엘리먼트로 반환(필요시 Fragments사용)</li>
                <li>파일 가져오기(import 별칭 form './파일명')</li>
                <li>파일 내보내기 (export default 컨포넌트명 )</li>
            </ul>
           </article>
        </div>
    );
}

export default Home;