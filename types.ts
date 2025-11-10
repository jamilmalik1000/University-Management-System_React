
export enum UserRole {
  ADMIN = 'admin',
  TEACHER = 'teacher',
  STUDENT = 'student',
}

export enum UserStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  departmentId?: string;
  password?: string; // For mock auth
  status?: UserStatus;
}

export interface Department {
  id: string;
  name: string;
}

export interface Course {
  id: string;
  name: string;
  code: string;
  departmentId: string;
  teacherId?: string;
  credits: number;
  description: string;
}

export interface Attendance {
  studentId: string;
  date: string;
  status: 'present' | 'absent';
}

export interface Grade {
  studentId: string;
  assignment: number;
  midterm: number;
  final: number;
}

export interface EnrolledCourse extends Course {
  attendance: number; // percentage
  grades: Grade;
  materials: CourseMaterial[];
}

export interface CourseMaterial {
    id: string;
    title: string;
    type: 'pdf' | 'video' | 'link';
    url: string;
}
