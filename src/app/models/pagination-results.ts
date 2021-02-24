export class PaginationResults {
    constructor(
        public pageIndex: number,
        public pageSize: number,
        public pageOptions: number[]
    ) {}
}
