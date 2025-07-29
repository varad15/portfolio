# 📸 Custom Image Setup Guide

This guide explains how to customize all images in your portfolio website.

## 🗂️ Image Folder Structure

Place your custom images in the `public/images/` directory:

```
public/images/
├── profile.jpg          # Your professional headshot (400x400px)
├── workspace.jpg        # Your coding workspace/setup (800x600px)
├── project1.jpg         # GrievanceGrid project screenshot
├── project2.jpg         # FireSentinel project screenshot  
├── project3.jpg         # FinVault project screenshot
└── ... (add more as needed)
```

## 🖼️ Image Requirements

### Profile Photo (`profile.jpg`)
- **Size**: 400x400 pixels (square)
- **Format**: JPG or PNG
- **Content**: Professional headshot with good lighting
- **Background**: Clean, preferably solid color or blurred
- **Usage**: Hero section, main profile display

### Workspace Photo (`workspace.jpg`)
- **Size**: 800x600 pixels (landscape)
- **Format**: JPG or PNG
- **Content**: Your coding setup, desk, monitors, development environment
- **Style**: Clean, professional workspace that represents your work environment

### Project Screenshots
- **Size**: 600x400 pixels (landscape)
- **Format**: JPG or PNG
- **Content**: Clear screenshots, mockups, or demos of your projects
- **Quality**: High resolution, good contrast for web display

## 🔧 How to Update Images

### 1. Add Your Images
1. Take or prepare your images according to the specifications above
2. Rename them according to the naming convention
3. Place them in the `public/images/` folder

### 2. Update Image Paths in Code

The images are referenced in the following files:

#### Hero Section Profile Image
**File**: `client/src/components/hero-section.tsx`
**Line**: ~75
```jsx
src="/images/profile.jpg"  // Update this path
```

#### About Section Workspace Image
**File**: `client/src/components/about-section.tsx`
**Line**: ~67
```jsx
src="/images/workspace.jpg"  // Update this path
```

#### Project Images
**File**: `client/src/components/projects-section.tsx`
**Lines**: ~9, ~25, ~41
```jsx
const projects = [
  {
    // ... project details
    image: "/images/project1.jpg",  // Update these paths
    // ...
  },
  // ... more projects
];
```

## 🎨 Image Optimization Tips

### For Best Results:
1. **Compress images** before uploading to reduce file size
2. **Use consistent lighting** across all photos
3. **Maintain aspect ratios** as specified
4. **Test on mobile devices** to ensure they look good on all screen sizes

### Recommended Tools:
- **Photoshop/GIMP**: For resizing and editing
- **TinyPNG**: For compression
- **Canva**: For creating consistent backgrounds

## 🚀 Quick Setup Checklist

- [ ] Create `public/images/` folder
- [ ] Add `profile.jpg` (400x400px)
- [ ] Add `workspace.jpg` (800x600px)
- [ ] Add project screenshots (600x400px each)
- [ ] Update image paths in component files
- [ ] Test the website to ensure images load correctly
- [ ] Check mobile responsiveness

## 🔍 Troubleshooting

### Images Not Showing?
1. Check file paths are correct
2. Ensure images are in `public/images/` directory
3. Verify file names match exactly (case-sensitive)
4. Check file extensions (.jpg, .png)

### Images Look Pixelated?
1. Use higher resolution source images
2. Ensure images meet minimum size requirements
3. Check image compression settings

### Slow Loading?
1. Compress images to reduce file size
2. Consider using WebP format for better compression
3. Optimize images for web using tools like TinyPNG

## 📱 Mobile Considerations

- Images automatically resize for mobile devices
- Test your images on different screen sizes
- Ensure text in project screenshots remains readable when scaled down

## 🎯 Pro Tips

1. **Consistency**: Use similar lighting and style across all images
2. **Branding**: Consider using a consistent color scheme
3. **Quality**: Always use high-quality, professional-looking images
4. **Accessibility**: Add descriptive alt text for all images
5. **Performance**: Optimize file sizes without sacrificing quality

---

**Need help?** The code includes detailed comments showing exactly where to update image paths!