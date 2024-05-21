import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {PostsPage} from "./pages/postsPage/PostsPage";
import {PostsDetailPage} from "./pages/postsPage/PostsDetailPage";
import {Layout} from "./components/hoc/Layout";


function App() {
  return (
    <BrowserRouter>
      <Routes>

            <Route path="/">
              <Route index element={<PostsPage/>}/>

                <Route path="/" element={<Layout/>}>
                    <Route path='posts/:id' element={<PostsDetailPage/>}/>
                </Route>

            </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
