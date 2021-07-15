import { User } from './User';

export interface UsersSearch {
    incomplete_results: boolean,
    items: User[],
    total_count: number,
}