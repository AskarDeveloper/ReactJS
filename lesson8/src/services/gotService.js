export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    async getAllCharacters() {
        const res = await this.getResource('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }

    async getCharacter(id) {
        const charachter = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(charachter);
    }

    async getAllHouses() {
        const res = await this.getResource('/houses/');
        return res.map(this._transformHouse);
    }

    async getHouse(id) {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house);
    }

    async getAllBooks() {
        const res = await this.getResource('/books/');
        return res.map(this._tranformBook);
    }

    async getBook(id) {
        const book = await this.getResource(`/books/${id}`)
        return this._tranformBook(book);
    }

    _transformCharacter(char) {
        return {
            name: char.name || 'no data',
            gender: char.gender || 'no data',
            born: char.born || 'no data',
            died: char.died || 'no data',
            culture: char.culture || 'no data'
        }
    }

    _transformHouse(house) {
        return {
            name: house.name || 'no data',
            region: house.region || 'no data',
            words: house.words || 'no data',
            titles: house.titles || 'no data',
            overlord: house.overlord || 'no data',
            ancestralWeapons: house.ancestralWeapons || 'no data'
        }
    }

    _tranformBook(book) {
        return {
            name: book.name || 'no data',
            numberOfPages: book.numberOfPages || 'no data',
            publiser: book.publiser || 'no data',
            released: book.released || 'no data'
        }
    }
}