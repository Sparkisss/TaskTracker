export interface PrioritiesState {
    _id: string;
    life: string;
    health: string;
    career: string;
}

export interface NotesState {
    _id: string;
    notes: string;
}

export interface Habit {
    _id: string;
    label: string;
    days: boolean[];
}