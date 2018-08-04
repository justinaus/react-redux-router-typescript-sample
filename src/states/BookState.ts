export class BookState {
    private _id: number;
    private _title: string;

    constructor( nId: number, strTitle: string ) {
        this._id = nId;
        this._title = strTitle;
    }

    public get id(): number {
        return this._id;
    }
    public get title(): string {
        return this._title;
    }
}