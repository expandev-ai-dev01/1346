# Password Generator Backend API

## Description
Backend API for secure password generator system. Generates customizable random passwords with size control (6-64 characters) and character type selection (lowercase, uppercase, numbers, special characters). Includes real-time strength analysis with 0-100 scoring, weak pattern detection, and quick actions like copy and regenerate.

## Features
- Random password generation with customizable parameters
- Password size customization (6-64 characters)
- Character type selection (lowercase, uppercase, numbers, special characters)
- Real-time strength analysis (0-100 score)
- Weak pattern detection
- Quick copy to clipboard
- Instant regeneration with same parameters

## Technology Stack
- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Architecture**: REST API
- **Validation**: Zod

## Project Structure
```
src/
├── api/                    # API controllers
│   └── v1/                 # API version 1
│       └── internal/       # Internal endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
│   ├── error/              # Error handling
│   ├── notFound/           # 404 handler
│   └── validation/         # Request validation
├── services/               # Business logic
├── utils/                  # Utility functions
│   ├── errors/             # Error handling utilities
│   └── validation/         # Validation utilities
├── constants/              # Application constants
│   ├── http/               # HTTP status codes
│   └── errors/             # Error codes
├── config/                 # Configuration
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Configure environment variables in `.env`:
```bash
NODE_ENV=development
PORT=3000
API_VERSION=v1
CORS_ORIGINS=http://localhost:3000,http://localhost:5173
```

### Development

Start development server with hot reload:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

### Building for Production

Build the project:
```bash
npm run build
```

Start production server:
```bash
npm start
```

### Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate coverage report:
```bash
npm run test:coverage
```

### Code Quality

Run linter:
```bash
npm run lint
```

Fix linting issues:
```bash
npm run lint:fix
```

## API Documentation

### Base URL
```
Development: http://localhost:3000/api/v1
Production: https://api.yourdomain.com/api/v1
```

### Health Check
```
GET /health
```

Response:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "version": "v1"
}
```

### API Endpoints

API endpoints will be documented here as features are implemented.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|----------|
| NODE_ENV | Environment mode | development |
| PORT | Server port | 3000 |
| API_VERSION | API version | v1 |
| CORS_ORIGINS | Allowed CORS origins | localhost URLs |
| CACHE_TTL | Cache time-to-live (seconds) | 3600 |
| CACHE_CHECK_PERIOD | Cache check period (seconds) | 600 |

## Error Handling

All API errors follow a consistent format:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {}
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Success Response Format

All successful API responses follow this format:

```json
{
  "success": true,
  "data": {},
  "metadata": {
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
}
```

## Contributing

1. Follow the established code structure and patterns
2. Write tests for new features
3. Ensure all tests pass before committing
4. Follow TypeScript and ESLint standards
5. Document new API endpoints

## License

ISC