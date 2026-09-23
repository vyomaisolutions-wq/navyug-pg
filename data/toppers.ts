export interface StudentTopper {
  id: string;
  name: string;
  photo: string;
  percentage: number;
  rank: number;
  board: string;
  rankType: "University Rank" | "District Rank" | "College Rank";
}

export interface SubjectTopper {
  subject: string;
  studentName: string;
  marks: number;
  board: string;
}

export interface YearToppers {
  year: string;
  students: StudentTopper[];
  subjects: SubjectTopper[];
}

export const toppersData: YearToppers[] = [
  {
    year: "2026",
    students: [
      {
        id: "2026-t1",
        name: "Abhishek Dubey",
        photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop",
        percentage: 92.4,
        rank: 1,
        board: "BCA (Computer Applications)",
        rankType: "University Rank",
      },
      {
        id: "2026-t2",
        name: "Sneha Singh",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
        percentage: 91.2,
        rank: 1,
        board: "BSc (Bachelor of Science)",
        rankType: "District Rank",
      },
      {
        id: "2026-t3",
        name: "Priyansh Mishra",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
        percentage: 89.8,
        rank: 1,
        board: "MA (Master of Arts - Hindi)",
        rankType: "College Rank",
      },
      {
        id: "2026-t4",
        name: "Komal Yadav",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
        percentage: 88.5,
        rank: 2,
        board: "BA (Bachelor of Arts)",
        rankType: "College Rank",
      },
    ],
    subjects: [
      { subject: "Artificial Intelligence", studentName: "Abhishek Dubey", marks: 98, board: "BCA" },
      { subject: "Physics", studentName: "Sneha Singh", marks: 95, board: "BSc" },
      { subject: "Chemistry", studentName: "Sneha Singh", marks: 94, board: "BSc" },
      { subject: "Sociology", studentName: "Priyansh Mishra", marks: 92, board: "MA" },
      { subject: "Hindi Literature", studentName: "Komal Yadav", marks: 96, board: "BA" },
    ],
  },
  {
    year: "2025",
    students: [
      {
        id: "2025-t1",
        name: "Divya Prakash Pandey",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
        percentage: 90.8,
        rank: 1,
        board: "BSc (Math Stream)",
        rankType: "District Rank",
      },
      {
        id: "2025-t2",
        name: "Roshni Sen",
        photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop",
        percentage: 89.4,
        rank: 2,
        board: "BCA",
        rankType: "College Rank",
      },
    ],
    subjects: [
      { subject: "Mathematics", studentName: "Divya Prakash Pandey", marks: 98, board: "BSc" },
      { subject: "Software Engineering", studentName: "Roshni Sen", marks: 95, board: "BCA" },
    ],
  },
  {
    year: "2024",
    students: [
      {
        id: "2024-t1",
        name: "Satyam Upadhyay",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
        percentage: 91.6,
        rank: 1,
        board: "BCA (Computer Applications)",
        rankType: "University Rank",
      },
      {
        id: "2024-t2",
        name: "Pooja Maurya",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
        percentage: 89.2,
        rank: 1,
        board: "BA (Bachelor of Arts)",
        rankType: "College Rank",
      },
    ],
    subjects: [
      { subject: "Database Management Systems", studentName: "Satyam Upadhyay", marks: 97, board: "BCA" },
      { subject: "English Literature", studentName: "Pooja Maurya", marks: 93, board: "BA" },
    ],
  },
];
