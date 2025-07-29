# Custom Image Setup - Detailed Guide

## Step 1: Prepare Your Images

### Required Images:
1. **profile.jpg** - Your professional headshot
   - Size: 400x400 pixels (square)
   - Format: JPG or PNG
   - Style: Professional photo, good lighting, clean background

2. **workspace.jpg** - Your coding workspace
   - Size: 800x600 pixels (landscape)
   - Format: JPG or PNG
   - Style: Your desk setup, monitors, coding environment

3. **grievancegrid.jpg** - GrievanceGrid project screenshot
   - Size: 800x400 pixels (landscape)
   - Format: JPG or PNG
   - Style: Dashboard, app interface, or project mockup

4. **firesentinel.jpg** - FireSentinel project screenshot
   - Size: 800x400 pixels (landscape)
   - Format: JPG or PNG
   - Style: AI/ML interface, detection results, or system diagram

5. **finvault.jpg** - FinVault project screenshot
   - Size: 800x400 pixels (landscape)
   - Format: JPG or PNG
   - Style: Banking interface, security features, or app mockup

## Step 2: Add Images to Your Project

### Method A: Using File Explorer (Windows)
1. Navigate to your downloaded project folder
2. You should see a `public` folder (I created it for you)
3. Inside `public`, go to the `images` folder
4. Copy and paste your 5 images into this folder
5. Make sure the filenames match exactly:
   - `profile.jpg`
   - `workspace.jpg`
   - `grievancegrid.jpg`
   - `firesentinel.jpg`
   - `finvault.jpg`

### Method B: Using Command Line
```bash
# Navigate to your project folder
cd your-project-folder

# Copy your images (example)
cp /path/to/your/profile-photo.jpg public/images/profile.jpg
cp /path/to/your/workspace-photo.jpg public/images/workspace.jpg
cp /path/to/your/project1-screenshot.jpg public/images/grievancegrid.jpg
cp /path/to/your/project2-screenshot.jpg public/images/firesentinel.jpg
cp /path/to/your/project3-screenshot.jpg public/images/finvault.jpg
```

## Step 3: Update the Code

Once your images are in place, I'll update the code to use your custom images:

```javascript
// In hero-section.tsx
src="/images/profile.jpg"

// In about-section.tsx  
src="/images/workspace.jpg"

// In projects-section.tsx
src="/images/grievancegrid.jpg"
src="/images/firesentinel.jpg"
src="/images/finvault.jpg"
```

## Step 4: Test Your Images

1. Make sure your server is running: `npx tsx server/index.ts`
2. Open `http://localhost:5000` in your browser
3. Your custom images should now appear in:
   - Hero section (profile photo with glowing border)
   - About section (workspace photo)
   - Projects section (project screenshots)

## Troubleshooting

### If Images Don't Show:
1. **Check file names**: Must be exact (profile.jpg, not Profile.JPG)
2. **Check file location**: Must be in `public/images/` folder
3. **Check file format**: Use JPG or PNG only
4. **Restart server**: Stop and restart your development server
5. **Clear browser cache**: Refresh the page with Ctrl+F5

### If Images Look Bad:
- **Too small/pixelated**: Use higher resolution images
- **Wrong aspect ratio**: Crop your images to the recommended sizes
- **Poor quality**: Use well-lit, high-quality photos

## Quick Test Method

To test if the image system works, you can:
1. Download any image from the internet
2. Rename it to `profile.jpg`
3. Place it in `public/images/profile.jpg`
4. Refresh your browser - you should see the new image in the hero section

## Current Status

I've temporarily reverted your profile image back to a placeholder so you can see it working. Once you add your custom images to the `public/images/` folder, I'll update the code to use them.

Your folder structure should look like this:
```
your-project/
├── public/
│   └── images/
│       ├── profile.jpg          ← Add your headshot here
│       ├── workspace.jpg        ← Add your workspace here
│       ├── grievancegrid.jpg    ← Add project screenshot here
│       ├── firesentinel.jpg     ← Add project screenshot here
│       └── finvault.jpg         ← Add project screenshot here
├── client/
├── server/
└── package.json
```