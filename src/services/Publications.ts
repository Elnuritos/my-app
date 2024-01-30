import appAxios from "./appAxios";
import { IPublication } from "../utils/types";

const getPublications = async (): Promise<IPublication[]> => {
    return appAxios.get(`/publications/`).then(
        (response) => {
            const data = response.data;
            console.log(data);

            return data;
        });
}

const addPublication = async (Publication: IPublication): Promise<IPublication> => {
    return appAxios.post('/publications/', Publication).then(
        (response) => {
            const data = response.data;
            console.log("Publication: ", data);

            return data;
        });
}

const updatePublication = async (data: IPublication) => {
    return appAxios
        .put(`/publications/${data.id}`, data)
        .then((response) => response.data);
};

const deletePublication = async (id: string) => {
    return appAxios.delete(`publications/${id}`).then(response => {
        const { data } = response;
        return data;
    });
};
const api = { getPublications, addPublication, updatePublication, deletePublication };

export default api;