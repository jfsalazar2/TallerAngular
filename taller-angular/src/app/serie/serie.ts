export class Serie {
    id: number;
    Name: string;
    Channel: string;
    Seasons: number;
    Description: string;
    Webpage: string;
    Poster: string;

    public constructor(id: number, Name: string, Channel: string, Seasons: number, Description: string, Webpage: string, Poster: string ) {
        this.id = id;
        this.Name = Name;
        this.Channel = Channel;
        this.Seasons = Seasons;
        this.Description = Description;
        this.Webpage = Webpage;
        this.Poster = Poster

    }

    series: Array<Serie> = [];
}
