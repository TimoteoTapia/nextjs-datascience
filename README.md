# Overview

This project is a web application for a Data Science course platform, built to provide an engaging and informative user experience for those looking to deepen their skills in data analysis, machine learning, and related technologies. The purpose of this software is to explore modern web development practices, focusing on user authentication, interactive components, and efficient data handling using Prisma and PostgreSQL. This project enhances skills in creating fully functional, database-connected applications, deployed live for testing in production environments.

To run a local test server:

1. Clone this repository.
2. Install dependencies by running `pnpm install`.
3. Set up a PostgreSQL database and configure the connection string in your `.env` file.
4. Run the command `pnpm dev` to start the development server, then open `http://localhost:3000` to view the app.

[Software Demo Video](https://drive.google.com/file/d/1gN8gGjxnl3DtOhTcciG0xiPTGZ9Pe3-H/view?usp=sharing)

# Web Pages

- **Home Page**: The main page includes a hero section, testimonials, and an animated terminal that dynamically displays the key topics covered in the Data Science course. This interactive terminal serves as an engaging feature to attract users' interest.
- **Course Information Page**: This page provides detailed information about the course, including its objectives, modules, and a breakdown of skills that will be acquired. It is designed to guide potential students on what they can expect to learn.
- **Signup and Login Pages**: These forms allow users to create an account and log in. The forms are connected to a PostgreSQL database using Prisma for secure user data management, with form validation to ensure proper credential handling. Authentication works seamlessly across sessions after deploying on Vercel.

# Development Environment

- **Tools**: Next.js, Node.js, Vercel (for deployment)
- **Database**: PostgreSQL, managed through Prisma ORM
- **Libraries**: Tailwind CSS for styling, Prisma for data modeling and database interaction, and lucide-react for icons.

# Useful Websites

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

# Future Work

- Implement a course progress tracker for users.
- Add an admin panel for managing course content and user data.
- Expand the testimonials section to allow users to submit reviews after completing the course.

# Proyect Deployed

You can see the project [Web Site DataSicence](https://nextjs-datascience.vercel.app/)
