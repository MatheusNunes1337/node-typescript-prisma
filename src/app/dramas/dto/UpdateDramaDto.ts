import { CreateDramaDTO } from "./CreateDramaDto";

export interface UpdateDramaDTO extends Partial<CreateDramaDTO> {
    title?: string,
    synopsis?: string,
    genres?: Array<string>,
    episodes?: number,
    actors?: Array<string>
}