# Dynamic List with Filtering

This project is a dynamic user list application built with **React** and **Vite**. It fetches user data from an external API, displays the details, and allows users to filter the list dynamically using a search bar. The matched text in the search results is highlighted, and a message is displayed if no users match the search criteria.

## Features

- **Fetch User Data**: Fetches user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users).
- **Display User Details**: Displays the following details for each user:
  - Name
  - Email
  - Company Name
- **Dynamic Filtering**: Filters the user list dynamically as the user types in the search bar.
- **Highlight Matched Text**: Highlights the matched text in the search results.
- **No Results Message**: Displays a message if no users match the search criteria.

## Technologies Used

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: CSS (or any CSS framework of your choice)
- **API**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/dynamic-list-filtering.git
   ```

2. Navigate to the project directory:
    ```bash
    cd dynamic-list-filtering
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open the application:
    Visit `http://localhost:5173` in your browser to view the application.

## Usage

1. View User List:

    - The application fetches and displays a list of users with their name, email, and company name.

2. Filter Users:

    - Use the search bar to filter users dynamically. The list updates as you type.

3. Highlight Matched Text:

    - The text matching the search query is highlighted in the user details.

4. No Results Message:

    - If no users match the search criteria, a message is displayed indicating no results were found.

## Code Structure

    ```
    dynamic-list-filtering/
    ├── public/
    ├── src/
    │   ├── components/          # Reusable components
    │   │    ├── UserCard.jsx/
    │   │    ├── UserList.jsx/   
    │   ├── App.jsx              # Main application component with API service functions
    │   ├── main.jsx             # Entry point
    │   └── App.css           # Global styles
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── README.md
    └── vite.config.js
    ```

## API Used
This project uses the JSONPlaceholder API to fetch user data. The API provides a list of fake users with details such as name, email, and company name.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bugfix.

3. Commit your changes.

4. Push your branch and open a pull request.

## Acknowledgments
- JSONPlaceholder for providing the fake user data API.

- React and Vite for making this project possible.

## Contact
- For any questions or feedback, feel free to reach out to kashishkumar0012@gmail.com
