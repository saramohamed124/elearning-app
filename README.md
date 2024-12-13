### Changelog

#### v1.03

- **Authentication**  
  - **Integration**: Integrated the Register Student and Register Instructor pages using `useReducer` for better state management.  
  - **Refactoring**: Refactored the codebase by separating files to follow best practices, making the project more modular and easier to maintain.  
  - **Logic Enhancements**:  
    - Restructured the validation and state management logic to be more flexible and reusable.  
    - Added new **Utilities** for better validation handling and reusability across the project.  
  - **Regex**:  
    - Added all regex for inputs in `regex.js` in the `constants` directory.  
  - **API**:  
    - Separated API calls for authentication into `endpoint.js`.  
  - **Reducers**:  
    - Separated `handleChangeField`, `handleFocus`, `formReducers`, and `Action Types` into separate files.  
  - **Toasts**:  
    - Separated `toasts.js` and `ToasterWrapper.js` for better structure and focus in reducers.

- **Utilities**  
  - Created shared **Utilities** in the `src/utils` directory to provide common functions that can be used throughout the project.  
  - Added specialized utilities for handling logic within the **Authentication Utilities** section.  

- **Common Components**  
  - Improved and refactored shared components like `TextInput`, `ErrorInput`, and `ButtonAuth`, enhancing reusability across the project.  

- **Best Practices**  
  - Improved the project structure for better clarity and scalability in the future.  
  - Adopted a more organized folder structure with a clear separation of concerns (Common, Auth, Utilities).
