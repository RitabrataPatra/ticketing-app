# Ticket Submission App

This is a **Next.js** application for creating and managing tickets, with a **MongoDB** backend for data storage. Users can submit tickets by providing details such as title, description, category, priority, progress, and status. The app is designed to be user-friendly and efficient for tracking issues or requests.

---
## Live Link
[Link(Vercel)](https://ticketing-app-fawn.vercel.app/)


## Features

- **Ticket Creation:** Users can fill out a form to create tickets with various details.
- **MongoDB Integration:** Persistent storage of ticket data.
- **Dynamic Forms:** Supports text inputs, dropdowns, sliders, and radio buttons for ticket details.
- **API Integration:** Uses Next.js API routes to handle server-side logic for submitting tickets.
- **Responsive UI:** Built with modern UI components for a seamless experience across devices.
- **Error Handling:** Basic error handling for form submission and server responses.

---

## Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/)
- **Backend:** Node.js (with Next.js API routes)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **UI Components:** Custom components with utility-first CSS frameworks like TailwindCSS.

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/ticket-submission-app.git
   cd ticket-submission-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add the following:
   ```env
   MONGODB_URI=your-mongodb-connection-string
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

1. Open the application in your browser.
2. Fill out the ticket creation form with the required details:
   - Title
   - Description
   - Category (Hardware Issue, Software Issue, etc.)
   - Priority (1 to 5)
   - Progress (using a slider)
   - Status (Not Started, Started, Done)
3. Submit the form to save the ticket.
4. View or manage the submitted tickets from the dashboard (if applicable).

---

## API Endpoints

### **POST** `/api/tickets`
- **Description:** Creates a new ticket in the database.
- **Request Body:**
  ```json
  {
    "title": "Ticket Title",
    "description": "Detailed description of the issue",
    "category": "Hardware Issue",
    "priority": 3,
    "progress": 50,
    "status": "not started"
  }
  ```
- **Response:**
  - `201 Created`: Ticket successfully created.
  - `400 Bad Request`: Invalid input.

---

## Folder Structure

```plaintext
├── app
│   ├── (components)
│   │   └── TicketForm.jsx  // Form for creating tickets
│   ├── api
│   │   └── tickets.js      // API routes for handling tickets
├── public                  // Static assets
├── styles                  // Global styles
├── .env.local              // Environment variables
└── README.md               // Project documentation
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)