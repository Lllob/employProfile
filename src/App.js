import { Routes, Route } from 'react-router-dom'; //npm i react-router-dom 

import { PostProvider } from './contexts/PostContext';

import Header from './components/Header/Header'
import Home from './components/Home/Home'
 import  Catalog  from './components/Catalog/Catalog'
 import  Create  from './components/Create/Create'
 import  Edit  from './components/Edit/Edit'
 import  Page404  from './components/Page404/Page404';

 const App = () => {
  return (
    <div id="container">
      <Header />
      <PostProvider>
      <main>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="*" element={<Page404 />} />
      </Routes> 
      </main>
      </PostProvider>
    
    </div>
  )
}

export default App;





