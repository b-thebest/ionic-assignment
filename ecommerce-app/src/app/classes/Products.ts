import { Data } from './Data';

export interface Products {
    total: number;
    limit: number;
    skip:  number;
    data:  Data[];
}