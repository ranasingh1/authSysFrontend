### Approach and Design Choices

#### Frontend:

1. **React.js:**
   - Chose React.js for its component-based architecture, which facilitates code organization and reusability.
   - Leveraged React's virtual DOM for efficient rendering and improved performance.
   - Utilized React's state and lifecycle methods to manage component state and side effects.

2. **User Interface:**
   - Prioritized user experience by designing intuitive and aesthetically pleasing user interfaces.
   - Implemented responsive design principles to ensure compatibility across various devices and screen sizes.
   - Employed modern UI libraries like Tailwind for consistent and polished UI elements.

3. **HTTP Requests:**
   - Adopted Axios, a popular HTTP client for JavaScript, for its simplicity and flexibility.
   - Configured Axios interceptors to handle request and response middleware, such as attaching authentication tokens or handling errors globally.
   - Ensured compatibility with backend APIs by setting up Axios with appropriate request headers and configurations.

### Implementation Details

1. **React Components:**
   - Created modular and reusable components for user registration, login, and protected routes(Home).
   - Implemented input sanitisation to enhance user input accuracy and prevent submission errors.
   - Integrated error handling mechanisms to provide meaningful feedback to users in case of invalid input or server errors.

2. **HTTP Requests:**
   - Established communication with the backend server using Axios to perform operations and user authentication.
   - Configured Axios to send HTTP requests with appropriate methods (GET, POST, etc.) and data payloads, ensuring compatibility with backend API endpoints.
   - Utilized Axios interceptors to intercept requests and responses, allowing for centralized handling of common tasks like attaching authorization tokens or handling errors.

3. **Protected Routes:**
   - Implemented protected route components using React Router or similar routing libraries to restrict access to authenticated users.
   - Utilized higher-order components (HOCs) or render props patterns to conditionally render components based on the user's authentication status.
   - Integrated redirection logic to redirect unauthenticated users to the login page, enhancing security and user experience.
