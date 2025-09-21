# Cloudstream Web Player

A lightweight HTML video player inspired by Cloudstream APK, with Firebase integration for dynamic repositories.

## Features
- Firebase Firestore for repository management
- Video playback via HTML5
- GitHub Pages compatible

## Setup
1. Clone the repo
2. Replace Firebase config in `firebase-config.js`
3. Deploy via GitHub Pages

## Firebase Firestore Structure
Collection: `repositories`
Each document:
```json
{
  "name": "Sample Repo",
  "videoUrl": "https://..."
}
