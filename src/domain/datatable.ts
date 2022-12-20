// where T = Columns, M = Data passed to table
export interface IDataTable<T extends object = [], M = []> {
    data: Array<T>;
    columns: Array<M>;
}
