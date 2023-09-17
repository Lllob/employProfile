import { createContext, useReducer } from "react";
import { useNavigate } from 'react-router-dom';

export const PostContext = createContext();

const postReducer = (state, action) => {
    switch (action.type) { 

        case 'CATALOG': 
            return action.data;

        case 'CREATE':
            return [...state, action.data];
            
         case 'DETAILS':
            return state.map(p => Number(p.id) === Number(action.postId) ? action.data : p);

        case 'EDIT':
            return state.map(p => Number(p.id) === Number(action.postId) ? action.data : p);

        case 'REMOVE':
            return state.filter(p => Number(p.id) !== Number(action.postId));

        default: 
            return state;
    }

};

///
export const PostProvider = ({   
    children,    
}) => {
    const navigate = useNavigate();
    const [posts, dispatch] = useReducer(postReducer, []);

    // useEffect(() => {
    //     Axios.get('http://localhost:5000/catalog')
    //     .then((result) => {
    //         dispatch({
    //             type: 'CATALOG',
    //             data: result.data, 
    //         })
           
    //    })
    // }, [])

    const postCatalog = (data) => {
        dispatch({
            type: 'CATALOG',
            data, 
        })
    };

    

    const postDetails = (data, postId) => {
      if (data) {
        const action = { 
            type: 'DETAILS', 
            data,
            postId,   
        };
         dispatch(action)
       }
    };
   

    const postCreate = (data) => {
        dispatch({
            type: 'CREATE',
            data, 
        })
        navigate('/catalog');
    };
    


    const postEdit = (data, postId) => {
        dispatch({
            type: 'EDIT',
            data,
            postId,
        });
        console.log()
    };

 
    const postRemove = (postId) => {
        dispatch({
            type: 'REMOVE',
            postId,
        })
        navigate('/catalog')
    }


    
    return (
        <PostContext.Provider value={{
            posts,
            postCatalog,
            postCreate,
            postEdit,
            postRemove,
            postDetails,
         }}>
            {children}
        </PostContext.Provider>
    );
}
