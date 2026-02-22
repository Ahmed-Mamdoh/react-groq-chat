# 🚀 NPM Publish Checklist

## Pre-Publish Steps

### 1. ✅ Code Quality
- [ ] All TypeScript errors resolved
- [ ] Component functionality tested
- [ ] Image rendering works correctly
- [ ] Build process completes successfully

### 2. ✅ Package Configuration
- [ ] `package.json` properly configured
- [ ] Version number updated (follow semver)
- [ ] Dependencies correctly specified
- [ ] Peer dependencies properly set
- [ ] `files` field includes only necessary files

### 3. ✅ Documentation
- [ ] `README.md` is comprehensive and professional
- [ ] `SETUP.md` provides clear setup instructions
- [ ] Example usage is included
- [ ] All props are documented
- [ ] License file is present

### 4. ✅ Build Configuration
- [ ] `tsup.config.ts` properly configured
- [ ] TypeScript declarations work correctly
- [ ] Assets (images) are properly handled
- [ ] Build output is optimized

### 5. ✅ Git Configuration
- [ ] `.gitignore` excludes unnecessary files
- [ ] `.npmignore` excludes development files
- [ ] Repository is clean and organized

## 📦 Build Commands

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Test the build (check dist folder)
ls -la dist/

# Dry run to see what will be published
npm pack --dry-run
```

## 🎯 Final Publish Steps

### 1. Login to NPM
```bash
npm login
```

### 2. Publish to NPM
```bash
npm publish
```

### 3. Verify Publication
- [ ] Check npmjs.com for your package
- [ ] Test installation: `npm install react-groq-chat`
- [ ] Verify all files are included correctly

## 📋 Post-Publish

### 1. Create GitHub Repository
- [ ] Create repository with same name
- [ ] Push code to GitHub
- [ ] Update repository URL in package.json

### 2. Update Documentation
- [ ] Add repository URL to README
- [ ] Update installation instructions
- [ ] Add badges and links

### 3. Marketing
- [ ] Share on social media
- [ ] Post on relevant forums/communities
- [ ] Update your portfolio/website

## 🔄 Version Management

When updating the package:

```bash
# Patch version (1.0.0 -> 1.0.1)
npm version patch

# Minor version (1.0.0 -> 1.1.0)
npm version minor

# Major version (1.0.0 -> 2.0.0)
npm version major

# Then publish
npm publish
```

## 🚨 Common Issues & Solutions

### Issue: Package not found after publish
- Wait 5-10 minutes for CDN propagation
- Check npmjs.com directly
- Verify package name is unique

### Issue: Missing files in published package
- Check `.npmignore` file
- Verify `files` field in package.json
- Run `npm pack --dry-run` to preview

### Issue: TypeScript errors in consumer projects
- Ensure proper type declarations are built
- Check `tsconfig.json` configuration
- Verify `types` field in package.json

### Issue: Images not loading
- Check asset handling in build process
- Verify image paths are correct
- Test with different build configurations

## 📞 Support

For help with publishing:
- NPM Documentation: https://docs.npmjs.com/
- TypeScript Documentation: https://www.typescriptlang.org/
- React Documentation: https://reactjs.org/

---

Good luck with your npm package! 🎉