export interface IValueVolumeVideo {
    pre: string;
    current: string;
}

export interface IDataSplitVideo {
    id: number;
    width: number;
    startTime: number;
    endTime: number;
    thumbImage: string;
    thumbImageFile: File | null;
    name: string;
    description: string;
}

export type IListDataSplitVideo = IDataSplitVideo[];

export interface IThumbInfo {
    urlImage: string;
    fileImage: File | null;
}
