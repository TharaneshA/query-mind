# Query Mind 🔍

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-13.4+-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MySQL](https://img.shields.io/badge/MySQL-00000F?style=flat&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

A powerful database query interface with natural language processing capabilities. Connect to your databases and query them using plain English.

## ✨ Features

### 🔌 Database Connection Interface
- **Multi-database Support**: Connect to MySQL, PostgreSQL, and MongoDB
- **Connection Management**: Save and manage multiple database connections
- **Secure Credentials**: Safe storage of database credentials

### 💬 Natural Language Query Interface
- **AI-Powered Conversion**: Transform English questions into database queries
- **Query Preview**: View and edit generated queries before execution
- **Syntax Highlighting**: Clear formatting of database queries

### 📐 Schema Visualization
- **Interactive View**: Explore database tables and their relationships
- **Column Details**: View types, constraints, and metadata
- **Relationship Mapping**: Visual representation of foreign key relationships

### 📜 Query History
- **Recent Queries**: Track your query history
- **Favorites**: Save useful queries for future reference
- **Management**: Copy, edit, or delete saved queries

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/TharaneshA/query-mind.git

# Navigate to the project directory
cd query-mind

# Install dependencies
npm install
# or
yarn install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Start the development server
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see the application running.

## 📖 Usage Guide

1. **Connect to a Database**
   - Click "Connect Database" in the sidebar
   - Fill in the required connection details
   - Test and save the connection

2. **Query in Natural Language**
   - Select a saved connection
   - Type your question in plain English (e.g., "Show me all customers who placed orders last month")
   - Review the generated query

3. **Execute and View Results**
   - Click "Run Query" to execute
   - View results in the table view
   - Export data if needed

4. **Manage Saved Queries**
   - Save useful queries with "Star" icon
   - Access saved queries in the Query History section

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, shadcn/ui
- **Database Connectivity**: Database-specific client libraries
- **Natural Language Processing**: AI language models for query generation
- **State Management**: React Context API / Zustand
- **Authentication**: NextAuth.js (optional)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help with QueryNLP, please open an issue on GitHub or contact the maintainers.

