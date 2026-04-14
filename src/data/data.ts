interface Data {
  name: string;
  surname: string;
  hobby: string;
  role: string;
  stack: string;
  country: string;
  avatar_url: string;
  skills: string[];
}

export const data: Data = {
  name: "Арсений",
  surname: "Ступников",
  hobby: "Программирование",
  role: "Fullstack Developer",
  stack: "TypeScript, React, Node.js",
  country: "Россия",
  avatar_url:
    "https://supabase.id.senyer7.moscow/storage/v1/object/public/avatars/fc13be3e-5385-40e1-b324-86b43796f414/avatar?v=1773583140587",
  skills: [
    "TypeScript",
    "React",
    "Node.js",
    "CSS",
    "HTML",
    "Git",
    "Docker",
    "Express.js",
    "PostgreSQL",
  ],
};
