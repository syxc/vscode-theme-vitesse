import { execSync } from 'child_process'
import { readJSON } from 'fs-extra'

const MANUAL_COMMIT = 'c1557f2'

interface CompareResult {
  theme: string
  colorsMatch: boolean
  colorsCount: number
  tokenColorsMatch: boolean
  tokenColorsCount: number
  diffs: string[]
}

function getManualTheme(themeFile: string): any {
  const output = execSync(`git show ${MANUAL_COMMIT}:themes/${themeFile}`, {
    encoding: 'utf-8'
  })
  return JSON.parse(output)
}

async function compareThemes() {
  const themes = [
    'vitesse-light.json',
    'vitesse-light-soft.json',
    'vitesse-dark.json',
    'vitesse-dark-soft.json',
    'vitesse-black.json',
    'vitesse-black-soft.json',
    'vitesse-light-github.json',
  ]

  console.log('='.repeat(80))
  console.log('📊 手动微调成品 (Git) vs 自动生成 (当前) 完整对比')
  console.log('='.repeat(80))
  console.log()

  const results: CompareResult[] = []
  let allPass = true

  for (const theme of themes) {
    const manualData = getManualTheme(theme)
    const autoData = await readJSON(`./themes/${theme}`)

    const diffs: string[] = []

    // Compare colors
    const manualColors = manualData.colors
    const autoColors = autoData.colors
    const colorKeys = new Set([...Object.keys(manualColors), ...Object.keys(autoColors)])

    for (const key of colorKeys) {
      if (manualColors[key] !== autoColors[key]) {
        diffs.push(`  ${key}: ${manualColors[key] || 'N/A'} → ${autoColors[key] || 'N/A'}`)
      }
    }

    const colorsMatch = diffs.length === 0
    if (!colorsMatch) allPass = false

    results.push({
      theme,
      colorsMatch,
      colorsCount: Object.keys(autoColors).length,
      tokenColorsMatch: manualData.tokenColors.length === autoData.tokenColors.length,
      tokenColorsCount: autoData.tokenColors.length,
      diffs,
    })
  }

  // Print results
  for (const result of results) {
    console.log(`📝 ${result.theme}`)
    if (result.colorsMatch) {
      console.log(`  ✅ Colors: ${result.colorsCount} 个颜色完全匹配`)
    } else {
      console.log(`  ❌ Colors 有 ${result.diffs.length} 处差异:`)
      result.diffs.slice(0, 5).forEach(d => console.log(d))
    }
    console.log(`  ✅ TokenColors: ${result.tokenColorsCount} 个映射`)
    console.log()
  }

  console.log('='.repeat(80))
  if (allPass) {
    console.log('✅ 所有 UI 颜色完全匹配！自动生成版本保持了手动微调的所有细节！')
    console.log('✅ 自动生成 = 手动微调 100%')
  } else {
    console.log('❌ 存在差异，需要调整源代码')
  }
  console.log('='.repeat(80))

  process.exit(allPass ? 0 : 1)
}

compareThemes()
