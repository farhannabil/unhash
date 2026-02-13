# Stake Mines Predictor

A Next.js web application that demonstrates the use of provably fair algorithms to calculate mine positions and highlight safe spots in a 5x5 grid game.

## Features

- 🎯 **Mine Position Calculation**: Uses HMAC-SHA256 to deterministically calculate mine positions
- ⭐ **Safe Spot Highlighting**: Displays safe spots in green with a star (★)
- 💣 **Mine Visualization**: Shows mine positions in red with a bomb emoji (💣)
- 🔐 **Provably Fair**: Implements standard provably fair gaming algorithms
- 🎨 **Modern UI**: Built with Next.js 16, React, and Tailwind CSS

## Screenshots

### Initial View
![Initial View](https://github.com/user-attachments/assets/9a51b6f1-4097-47a5-ae47-d60607a388fe)

### Working Example
![Working Example](https://github.com/user-attachments/assets/1b3efcf1-5e7f-460a-ab53-c30d684a7581)

## How It Works

This tool uses provably fair algorithms to calculate mine positions based on:
1. **Server Seed**: The hashed or raw server seed (64-character hex string)
2. **Client Seed**: Your client seed for randomization
3. **Nonce**: The bet number in the current seed pair
4. **Number of Mines**: How many mines to place (1-24)

The algorithm:
1. Creates an HMAC-SHA256 hash using the client seed and nonce with the server seed as the key
2. Iterates through the hash in 8-character chunks
3. Converts each chunk to a decimal number
4. Uses the decimal to generate a random float between 0 and 1
5. Maps the float to a position in the remaining available squares
6. Repeats until all mines are placed

Safe spots are any positions that do NOT contain mines.

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Usage

1. Open your browser to `http://localhost:3000`
2. Enter the following information:
   - **Server Seed**: The server's seed (can be hashed or raw 64-character hex)
   - **Client Seed**: Your client seed
   - **Nonce**: Current bet number (default: 0)
   - **Number of Mines**: How many mines (default: 3)
3. Click "Calculate Safe Spots"
4. View the 5x5 grid showing:
   - Green cells with ★ for safe spots
   - Red cells with 💣 for mines

## Example

Try these test values:
- **Server Seed**: `0000000000000000000000000000000000000000000000000000000000000001`
- **Client Seed**: `test-client-seed`
- **Nonce**: `0`
- **Number of Mines**: `3`

This will generate a deterministic pattern of mines and safe spots.

## Dependencies

- **Next.js 16**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **crypto-js**: Cryptographic functions (HMAC-SHA256)

## Integration with unhash

While this example currently uses a mock unhash function (for browser compatibility), in a real application you would:

1. Create an API route in Next.js (e.g., `/api/unhash`)
2. Import and use the `unhash` module on the backend
3. Call this API from the frontend to unhash server seeds

Example API route:

```typescript
// app/api/unhash/route.ts
import { NextRequest, NextResponse } from 'next/server'
const unhash = require('unhash')

export async function POST(request: NextRequest) {
  const { hash } = await request.json()
  
  try {
    const result = await unhash(hash)
    return NextResponse.json({ 
      success: true, 
      seed: result.toString('utf8') 
    })
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Could not unhash' 
    }, { status: 400 })
  }
}
```

## License

This example is part of the [unhash](https://github.com/farhannabil/unhash) project.

## Disclaimer

This tool is for educational and verification purposes only. It demonstrates how provably fair algorithms work. Always verify game outcomes using official casino verification tools.
