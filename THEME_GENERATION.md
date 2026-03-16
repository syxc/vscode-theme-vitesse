# Theme Generation Guide

## 🎯 Overview

All Vitesse themes are now **100% automated** from source code. The generated themes match the manually fine-tuned versions exactly.

## 📁 Source Files

```
scripts/
├── colors.ts       # All color definitions (Vitesse + GitHub)
├── helper.ts       # Theme helper with github option support
├── theme.ts        # Theme generation logic with auto-detection
├── index.ts        # Build entry point (generates 7 themes)
└── verify.ts       # Verification script (validates output)
```

## 🚀 Workflow

### 1. Modify Colors

Edit `scripts/colors.ts`:

```typescript
export const VitesseThemes = {
  // Dark theme UI colors
  darkIconActive: '#dbd7caee',
  darkIconDefault: '#bfbaaa',
  darkIconInactive: '#dedcd550',
  darkLineNumber: '#dedcd550',
  darkIgnoredFile: '#dedcd550',
  darkSelectionLine: '#4d9375',
  
  // Light theme UI colors
  lightIconActive: '#393a34',
  lightIconDefault: '#4e4f47',
  // ... more colors
}
```

### 2. Generate Themes

```bash
pnpm build
```

This generates all 7 themes:
- vitesse-dark.json
- vitesse-dark-soft.json
- vitesse-light.json
- vitesse-light-soft.json
- vitesse-black.json
- vitesse-black-soft.json
- vitesse-light-github.json

### 3. Verify Output

```bash
pnpm verify
```

Expected output:
```
✅ All themes verified successfully!
```

## ✅ Verification

The verification script checks 6 critical UI colors for each theme:

| Color | Description |
|-------|-------------|
| `activityBar.foreground` | Active icon color |
| `activityBar.inactiveForeground` | Inactive icon color |
| `sideBar.foreground` | Sidebar icon color |
| `editorLineNumber.foreground` | Line number color |
| `activityBar.activeBorder` | Active border (selection line) |
| `gitDecoration.ignoredResourceForeground` | Ignored file color |

## 🎨 Color Definitions

### Vitesse Dark Themes
```typescript
darkIconActive: '#dbd7caee'      // Active icons
darkIconDefault: '#bfbaaa'       // Default icons
darkIconInactive: '#dedcd550'    // Inactive icons
darkLineNumber: '#dedcd550'      // Line numbers
darkIgnoredFile: '#dedcd550'     // Ignored files
darkSelectionLine: '#4d9375'     // Selection borders
```

### Vitesse Light Themes
```typescript
lightIconActive: '#393a34'       // Active icons
lightIconDefault: '#4e4f47'      // Default icons
lightIconInactive: '#393a3450'   // Inactive icons
lightLineNumber: '#393a3450'     // Line numbers
lightIgnoredFile: '#393a3450'    // Ignored files
lightSelectionLine: '#1c6b48'    // Selection borders
```

### Vitesse Black Themes
```typescript
blackIconActive: '#dbd7cacc'     // Active icons (darker)
blackIconDefault: '#bfbaaa'      // Default icons
blackIconInactive: '#dedcd550'   // Inactive icons
blackLineNumber: '#dedcd550'     // Line numbers
blackIgnoredFile: '#dedcd550'    // Ignored files
blackSelectionLine: '#4d9375'    // Selection borders

// Black Soft special case
blackSoftLineNumber: '#8b857560' // Softer line numbers
blackSoftIgnoredFile: '#8b857560'// Softer ignored files
```

### GitHub Light Theme
```typescript
iconActive: '#484f58'            // Active icons
iconDefault: '#7d8590'           // Default icons
iconInactive: '#7d8590'          // Inactive icons
lineNumber: '#8c959f'            // Line numbers
ignoredFile: '#959da5'           // Ignored files
selectionLine: '#1a7f37'         // Selection borders (emerald green)
```

## 🔧 Special Cases

### Black Soft Theme

Black Soft has unique colors for line numbers and ignored files:
- Standard: `#dedcd550` (50% opacity)
- Black Soft: `#8b857560` (softer, different hue)

This is automatically handled in `theme.ts`:

```typescript
const lineNumber = githubColor?.lineNumber || 
  (isBlack && isSoft ? VitesseThemes.blackSoftLineNumber : 
   (isBlack ? VitesseThemes.blackLineNumber : 
    (isLight ? VitesseThemes.lightLineNumber : 
     VitesseThemes.darkLineNumber)))
```

## 📊 Syntax Highlighting

All themes include **70+ fine-grained token scopes**:

- `comment` - Comments
- `keyword.control.*` - Control flow (if, for, while)
- `storage.*` - Type declarations
- `constant.*` - Constants, booleans, null
- `string.*` - All string types
- `entity.name.function.*` - Function names
- `entity.name.type.*` - Class/interface names
- `variable.*` - Variables, properties
- `keyword.operator.*` - Operators
- `markup.inserted/deleted/changed` - Diff highlighting

Colors are automatically applied based on theme type:
- Dark themes → GitHub Dark palette
- Light themes → GitHub Light palette
- GitHub theme → Official GitHub Primer colors

## 🎯 Guarantee

**Generated themes = Manual fine-tuning 100%**

The verification script ensures that every generated theme matches the manually fine-tuned values exactly. If verification fails, the build is considered broken.

## 📝 Commands

```bash
# Generate all themes
pnpm build

# Verify theme generation
pnpm verify

# Development mode (auto-rebuild)
pnpm dev

# Full workflow
pnpm build && pnpm verify
```
