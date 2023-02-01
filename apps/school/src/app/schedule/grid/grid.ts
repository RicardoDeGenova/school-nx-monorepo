export type Classroom = '6A'| '6B'| '7A'| '7B'| '8A'| '8B'| '8C'| '9A'| '9B'| '9C'| '1A'| '1B'| '2A'| '2B'| '3A';
export type Teacher = 'Teacher A' | 'Teacher B';

export type GridRow = {
    day: 'Monday'| 'Tuesday'| 'Wednesday'| 'Thursday'| 'Friday';
    timeSlot: number; 
    classroom: Classroom;
    teacher: Teacher;
}