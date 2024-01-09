import React from 'react';
import {useLocation,useNavigate} from 'react-router-dom';

function Routar(props) {
    const str =
    `
    <BrowserRouter>

      <header>
        <nav>
          <Link to="/">home</Link>
          <Link to="/css">Css 활용</Link>
          <Link to="/image">Image 활용</Link>
          <Link to="router">Routar</Link>
          <Link to="props">Stata&Props</Link>
          <Link to="deploy">Github Deploy</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/css' element={<Css/>}/>
          <Route path='/Image' element={<Image/>}/>
          <Route path='/router' element={<Routar/>}/>
          <Route path='/props' element={<Props/>}/>
          <Route path='/deploy' element={<Deploy/>}/>
          
          {/* <Route path='/*' element={<Not/>}/> */}
        </Routes>
      </main>
    </BrowserRouter>
    `;
    const locate = useLocation();
    const navigate = useNavigate();
    console.log(locate);

    return (
        <div>
            <article>
                <h2>Router 활용법</h2>
                <p> 
                    새로운 페이지를 로드하지 않고 페이지 안에서 필요한 
                    데이터만 가져오는 형태
                </p>
                <ul>
                    <li>모듈설치 (npm i react-router-dom)</li>
                    <li>
                        App.js <br/>
                        ㄴimport &#123;BrowserRouter,Route,Routes,Link&#125; from 'react-router-dom'
                    </li>
                    <li>
                        메뉴을 Link컨포넌트를 이용하여 설정(브라우저 주소값 변경)<br/>
                        ㄴRoute컨포넌트를 이용하여 컴포넌트 분리(Link값과 path갑을 일치시킴)<br/>
                        <textarea /*</li>defaultValue={str}*/ cols='70' rows='10'>{str}</textarea>
                    </li>
                </ul>
            </article>
            <button onClick={()=>{navigate('/')}}></button>
        </div>
    );
}

export default Routar;
