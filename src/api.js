import axios from 'axios';

//export const APIurl = `http://localhost:1337/tasks`;
export const APIurl = `https://powerful-peak-77927.herokuapp.com/tasks`
const responseData = (res) => res.data;

export default {
    
    creatrTask: async (description) => {
        const res = await axios.post(APIurl, {description});
        return responseData(res);
    },

    editTaskChanges: async ({id, description}) => { console.log('description', description)
        const res = await axios.put(`${APIurl}/${id}`, {description}); 
        return responseData(res);
    },

    deleteTask: async (id) => {
        const res = await axios.delete(`${APIurl}/${id}`); 
        console.log('res', res)
        return responseData(res);
    },
};

