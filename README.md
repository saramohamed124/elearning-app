### Changelog

#### v1.05

- **Refactored Data Fetching with React Query**
  - Optimized **student & instructor info fetching** using React Query best practices.
  - Added `staleTime` and `enabled` conditions to prevent unnecessary API calls.
  - Improved error handling and loading states for better UX.

- **UI Enhancements**
  - Used `sx` for responsive styling instead of inline styles.
  - Improved layout with **MUI Grid** for better responsiveness.
  - Added `CircularProgress` loader for a smoother loading experience.

- **Code Clean-Up**
  - Removed redundant context usage where API calls are sufficient.
  - Ensured **default values** for API responses to prevent UI errors.