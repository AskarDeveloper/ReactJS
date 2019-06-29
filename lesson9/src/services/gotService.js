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
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
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
            name: char.name || 'No data',
            gender: char.gender || 'No data',
            born: char.born || 'No data',
            died: char.died || 'No data',
            culture: char.culture || 'No data',
            url: char.url
        }
    }

    _transformHouse(house) {
        return {
            name: house.name || 'No data',
            region: house.region || 'No data',
            words: house.words || 'No data',
            titles: house.titles || 'No data',
            overlord: house.overlord || 'No data',
            ancestralWeapons: house.ancestralWeapons || 'No data'
        }
    }

    _tranformBook(book) {
        return {
            name: book.name || 'No data',
            numberOfPages: book.numberOfPages || 'No data',
            publiser: book.publiser || 'No data',
            released: book.released || 'No data'
        }
    }
}