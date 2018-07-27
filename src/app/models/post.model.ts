export class Post {

    constructor(
        public title?: string,
        public content?: string,
        public loveIts?: number,
        public creationDate?: number
    ) {
        this.creationDate = this.creationDate ? creationDate : Date.now();
        this.loveIts = this.loveIts ? loveIts : 0;
    }

    increaseLikes() {
        this.loveIts++;
    }

    decreaseLikes() {
        this.loveIts--;
    }
}