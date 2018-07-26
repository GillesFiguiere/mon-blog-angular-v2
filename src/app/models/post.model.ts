export class Post {

    constructor(
        public title: string,
        public content: string,
        public loveIts?: number,
        public creationDate?: Date
    ) {
        this.creationDate = new Date();
        this.loveIts = 0;
    }

    increaseLikes() {
        this.loveIts++;
    }

    decreaseLikes() {
        this.loveIts--;
    }
}