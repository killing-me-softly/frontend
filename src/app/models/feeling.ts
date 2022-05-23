export class Feeling {
    public id?: string;
    constructor(
        public category: string,
        public sub_category: string[],
        public value: string,
        public hebrew_name: string
    ) { }
}