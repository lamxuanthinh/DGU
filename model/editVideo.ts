export interface IValueVolumeVideo {
    pre: string;
    current: string;
}

export interface IDataSplitVideo {
    id: number;
    width: number;
    startTime: number;
    endTime: number;
}

export interface IListDataSplitVideo extends Array<IDataSplitVideo> {}
