# Context Directory
This directory is reserved for global React Context providers.

### What belongs here:
- `AuthContext.jsx`: User authentication state, login/logout methods, token management.
- `TenantContext.jsx`: Current restaurant/tenant workspace details.
- `ThemeContext.jsx`: Light/dark UI mode toggling.

### Architectural Best Practice:
Always export a custom hook corresponding to each context (e.g., `useAuth()`, `useTenant()`) so components never have to call `useContext(AuthContext)` directly.

