export interface CreateDramaDTO {
    title: string,
    synopsis: string,
    genres: Array<string>,
    episodes: number,
    actors: Array<string>
}