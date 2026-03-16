import { readJSON } from 'fs-extra'
import { GitHubLightColors, VitesseThemes } from './colors'

interface ThemeCheck {
  name: string
  file: string
  checks: Record<string, string>
}

const themes: ThemeCheck[] = [
  {
    name: 'Vitesse Dark',
    file: './themes/vitesse-dark.json',
    checks: {
      'activityBar.foreground': VitesseThemes.darkIconActive,
      'activityBar.inactiveForeground': VitesseThemes.darkIconInactive,
      'sideBar.foreground': VitesseThemes.darkIconDefault,
      'editorLineNumber.foreground': VitesseThemes.darkLineNumber,
      'activityBar.activeBorder': VitesseThemes.darkSelectionLine,
      'gitDecoration.ignoredResourceForeground': VitesseThemes.darkIgnoredFile,
    },
  },
  {
    name: 'Vitesse Dark Soft',
    file: './themes/vitesse-dark-soft.json',
    checks: {
      'activityBar.foreground': VitesseThemes.darkIconActive,
      'activityBar.inactiveForeground': VitesseThemes.darkIconInactive,
      'sideBar.foreground': VitesseThemes.darkIconDefault,
      'editorLineNumber.foreground': VitesseThemes.darkLineNumber,
      'activityBar.activeBorder': VitesseThemes.darkSelectionLine,
      'gitDecoration.ignoredResourceForeground': VitesseThemes.darkIgnoredFile,
    },
  },
  {
    name: 'Vitesse Light',
    file: './themes/vitesse-light.json',
    checks: {
      'activityBar.foreground': VitesseThemes.lightIconActive,
      'activityBar.inactiveForeground': VitesseThemes.lightIconInactive,
      'sideBar.foreground': VitesseThemes.lightIconDefault,
      'editorLineNumber.foreground': VitesseThemes.lightLineNumber,
      'activityBar.activeBorder': VitesseThemes.lightSelectionLine,
      'gitDecoration.ignoredResourceForeground': VitesseThemes.lightIgnoredFile,
    },
  },
  {
    name: 'Vitesse Light Soft',
    file: './themes/vitesse-light-soft.json',
    checks: {
      'activityBar.foreground': VitesseThemes.lightIconActive,
      'activityBar.inactiveForeground': VitesseThemes.lightIconInactive,
      'sideBar.foreground': VitesseThemes.lightIconDefault,
      'editorLineNumber.foreground': VitesseThemes.lightLineNumber,
      'activityBar.activeBorder': VitesseThemes.lightSelectionLine,
      'gitDecoration.ignoredResourceForeground': VitesseThemes.lightIgnoredFile,
    },
  },
  {
    name: 'Vitesse Black',
    file: './themes/vitesse-black.json',
    checks: {
      'activityBar.foreground': VitesseThemes.blackIconActive,
      'activityBar.inactiveForeground': VitesseThemes.blackIconInactive,
      'sideBar.foreground': VitesseThemes.blackIconDefault,
      'editorLineNumber.foreground': VitesseThemes.blackLineNumber,
      'activityBar.activeBorder': VitesseThemes.blackSelectionLine,
      'gitDecoration.ignoredResourceForeground': VitesseThemes.blackIgnoredFile,
    },
  },
  {
    name: 'Vitesse Black Soft',
    file: './themes/vitesse-black-soft.json',
    checks: {
      'activityBar.foreground': VitesseThemes.blackIconActive,
      'activityBar.inactiveForeground': VitesseThemes.blackIconInactive,
      'sideBar.foreground': VitesseThemes.blackIconDefault,
      'editorLineNumber.foreground': VitesseThemes.blackSoftLineNumber,
      'activityBar.activeBorder': VitesseThemes.blackSelectionLine,
      'gitDecoration.ignoredResourceForeground': VitesseThemes.blackSoftIgnoredFile,
    },
  },
  {
    name: 'Vitesse Light GitHub',
    file: './themes/vitesse-light-github.json',
    checks: {
      'activityBar.foreground': GitHubLightColors.iconActive,
      'activityBar.inactiveForeground': GitHubLightColors.iconInactive,
      'sideBar.foreground': GitHubLightColors.iconDefault,
      'editorLineNumber.foreground': GitHubLightColors.lineNumber,
      'activityBar.activeBorder': GitHubLightColors.selectionLine,
      'gitDecoration.ignoredResourceForeground': GitHubLightColors.ignoredFile,
    },
  },
]

async function verify() {
  console.log('🔍 Verifying theme generation...\n')
  
  let allPassed = true
  
  for (const theme of themes) {
    console.log(`📝 ${theme.name}`)
    const data = await readJSON(theme.file)
    const colors = data.colors
    
    let themePassed = true
    for (const [key, expected] of Object.entries(theme.checks)) {
      const actual = colors[key]
      const passed = actual === expected
      if (!passed) {
        themePassed = false
        allPassed = false
        console.log(`  ❌ ${key}: ${actual} (expected: ${expected})`)
      }
    }
    
    if (themePassed) {
      console.log(`  ✅ All checks passed\n`)
    } else {
      console.log()
    }
  }
  
  console.log(allPassed ? '\n✅ All themes verified successfully!' : '\n❌ Some themes failed verification!')
  process.exit(allPassed ? 0 : 1)
}

verify()
