import { lazy, Suspense } from "react"; 
import { Routes, Route } from 'react-router-dom'; //npm i react-router-dom 

import { PostProvider } from './contexts/PostContext';

import Header from './components/Header/Header'
const Home = lazy(() => import('./components/Home/Home'));
const Catalog = lazy(() => import('./components/Catalog/Catalog'));
 const Create = lazy(() => import('./components/Create/Create'));
 const Edit = lazy(() => import('./components/Edit/Edit'));
 //const Search = lazy(() => import('./components/Search/Search'));
 const Page404 = lazy(() => import('./components/Page404/Page404'));

 const App = () => {
  return (
    <div id="container">
      <Header />
      <PostProvider>
      <main>
      <Suspense fallback={<div>Loading...</div>}>  
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="*" element={<Page404 />} />
      </Routes> 
      </Suspense>
      </main>
      </PostProvider>
    
    </div>
  )
}

export default App;





