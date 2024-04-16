# Blood Donation Management System

This project is a web application designed to manage blood donation activities, including donor management, recipient management, blood inventory management, and volunteering activities.

## Features

- **Donor Management**: Allows registration and management of blood donors, including their personal information, blood type, and donation history.
- **Recipient Management**: Enables registration and management of recipients in need of blood transfusions, including their personal information and medical history.
- **Blood Inventory Management**: Tracks the inventory of available blood units, including their blood type, quantity, and expiration date.
- **Volunteering**: Provides a platform for volunteers to sign up and participate in blood donation drives and other volunteering activities.

## Technologies Used

- **Frontend**: React.js for building the user interface
- **Backend**: Node.js with Express.js for building the RESTful API
- **Database**: MySQL for storing donor, recipient, and blood inventory data
- **Data Visualization**: Chart.js for visualizing statistics such as blood type distribution and age group distribution
- **Styling**: Tailwind CSS for styling the user interface
- **Deployment**: The application is deployed on a web server using a platform like Heroku or AWS.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blood-donation-management-system.git
   ```

2. Navigate to the project directory:

   ```bash
   cd blood-donation-management-system
   ```

3. Install dependencies in both folders:

   ```bash
   npm install
   ```

4. Set up the database:

   - Create a MySQL database and execute the SQL scripts in the `database` directory to create the necessary tables.
   - Update the database configuration in the `.env` file with your database credentials.

5. Start the server:

   ```bash
   npm run dev ( server terminal ) 
   bun run dev ( client terminal )
   ```

6. Open the application in your browser:

   ```
   http://localhost:5173
   ```

## Contributing

Contributions are welcome! If you have any ideas for new features, improvements, or bug fixes, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
