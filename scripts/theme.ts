import type { GetThemeOptions } from './helper'
import { toArray } from '@antfu/utils'
import { VitesseThemes, GitHubLightColors } from './colors'
import { createThemeHelpers } from './helper'

export default function getTheme(options: GetThemeOptions) {
  const isGithub = options.github === true
  const githubColor = isGithub ? GitHubLightColors : null
  
  const {
    pick,
    v,
    colors,
  } = createThemeHelpers(options)
  
  const foreground = githubColor?.foreground || v('foreground')
  const secondaryForeground = githubColor?.secondary || v('secondaryForeground')
  const activeForeground = githubColor?.iconActive || v('activeForeground')
  const primary = v('primary')

  const border = githubColor?.border || v('border')
  const background = githubColor?.background || v('background')
  const activeBackground = githubColor?.activeBackground || v('activeBackground')

  const punctuation = v('punctuation')

  const selectionBackground = v('selectionBackground')
  const selectionBackgroundActive = v('selectionBackgroundActive')
  const selectionBackgroundInActive = v('selectionBackgroundInActive')

  const theme = {
    name: options.name,
    base: pick({ light: 'vs', dark: 'vs-dark' }),
    colors: {
      'focusBorder': '#00000000',
      foreground,
      'descriptionForeground': secondaryForeground,
      'errorForeground': v('red'),

      'textLink.foreground': primary,
      'textLink.activeForeground': primary,
      'textBlockQuote.background': background,
      'textBlockQuote.border': border,
      'textCodeBlock.background': background,
      'textPreformat.foreground': colors.gray[6],
      'textSeparator.foreground': colors.gray[3],

      'button.background': primary,
      'button.foreground': background,
      'button.hoverBackground': primary,

      'checkbox.background': activeBackground,
      'checkbox.border': pick({ light: colors.gray[3], dark: colors.gray[1] }),

      'dropdown.background': background,
      'dropdown.border': border,
      'dropdown.foreground': foreground,
      'dropdown.listBackground': activeBackground,

      'input.background': activeBackground,
      'input.border': border,
      'input.foreground': foreground,
      'input.placeholderForeground': secondaryForeground,
      'inputOption.activeBackground': v('ignored'),

      'badge.foreground': background,
      'badge.background': secondaryForeground,

      'progressBar.background': primary,

      'titleBar.activeForeground': activeForeground,
      'titleBar.activeBackground': background,
      'titleBar.inactiveForeground': colors.gray[5],
      'titleBar.inactiveBackground': background,
      'titleBar.border': activeBackground,

      'activityBar.foreground': githubColor?.iconActive || foreground,
      'activityBar.inactiveForeground': githubColor?.iconInactive || v('ignored'),
      'activityBar.background': background,
      'activityBarBadge.foreground': background,
      'activityBarBadge.background': activeForeground,
      'activityBar.activeBorder': githubColor?.selectionLine || primary,
      'activityBar.border': border,

      'sideBar.foreground': githubColor?.iconDefault || activeForeground,
      'sideBar.background': background,
      'sideBar.border': border,
      'sideBarTitle.foreground': foreground,
      'sideBarSectionHeader.foreground': foreground,
      'sideBarSectionHeader.background': background,
      'sideBarSectionHeader.border': border,

      'list.hoverForeground': foreground,
      'list.inactiveSelectionForeground': foreground,
      'list.activeSelectionForeground': foreground,
      'list.hoverBackground': activeBackground,
      'list.inactiveSelectionBackground': activeBackground,
      'list.activeSelectionBackground': activeBackground,
      'list.inactiveFocusBackground': background,
      'list.focusBackground': activeBackground,
      'list.highlightForeground': primary,

      'tree.indentGuidesStroke': pick({ light: colors.gray[2], dark: colors.gray[1] }),

      'notificationCenterHeader.foreground': colors.gray[5],
      'notificationCenterHeader.background': background,
      'notifications.foreground': foreground,
      'notifications.background': background,
      'notifications.border': border,
      'notificationsErrorIcon.foreground': v('red'),
      'notificationsWarningIcon.foreground': v('orange'),
      'notificationsInfoIcon.foreground': v('blue'),

      'pickerGroup.border': border,
      'pickerGroup.foreground': foreground,
      'quickInput.background': background,
      'quickInput.foreground': foreground,
      'quickInputList.focusBackground': activeBackground,

      'statusBar.foreground': githubColor?.iconDefault || activeForeground,
      'statusBar.background': background,
      'statusBar.border': border,
      'statusBar.noFolderBackground': background,
      'statusBar.debuggingBackground': activeBackground,
      'statusBar.debuggingForeground': activeForeground,
      'statusBarItem.prominentBackground': activeBackground,

      'editorGroupHeader.tabsBackground': background,
      'editorGroupHeader.tabsBorder': border,
      'editorGroup.border': border,

      'tab.activeForeground': foreground,
      'tab.inactiveForeground': githubColor?.iconDefault || colors.gray[5],
      'tab.inactiveBackground': background,
      'tab.activeBackground': background,
      'tab.hoverBackground': activeBackground,
      'tab.unfocusedHoverBackground': background,
      'tab.border': border,
      'tab.unfocusedActiveBorderTop': border,
      'tab.activeBorder': border,
      'tab.unfocusedActiveBorder': border,
      'tab.activeBorderTop': githubColor?.selectionLine || secondaryForeground,

      'breadcrumb.foreground': colors.gray[5],
      'breadcrumb.focusForeground': foreground,
      'breadcrumb.background': activeBackground,
      'breadcrumb.activeSelectionForeground': selectionBackgroundActive,
      'breadcrumbPicker.background': background,

      'editor.foreground': foreground,
      'editor.background': background,
      'editorWidget.background': background,
      'editor.foldBackground': pick({ light: '#22222210', dark: '#eeeeee10' }),
      'editor.lineHighlightBackground': activeBackground,
      'editorLineNumber.foreground': githubColor?.lineNumber || v('ignored'),
      'editorLineNumber.activeForeground': activeForeground,
      'editorIndentGuide.background': pick({ light: '#00000015', dark: '#ffffff15' }),
      'editorIndentGuide.activeBackground': pick({ light: '#00000030', dark: '#ffffff30' }),
      'editorWhitespace.foreground': pick({ light: '#00000015', dark: '#ffffff15' }),
      // 'editorCursor.foreground': primary,

      'editor.findMatchBackground': pick({ light: '#e6cc7744', dark: '#e6cc7722' }),
      'editor.findMatchHighlightBackground': pick({ light: '#e6cc7766', dark: '#e6cc7744' }),
      'editor.inactiveSelectionBackground': selectionBackgroundInActive,
      'editor.selectionBackground': selectionBackground,
      'editor.selectionHighlightBackground': selectionBackgroundInActive,
      'editor.wordHighlightBackground': pick({ light: '#1c6b4805', dark: '#1c6b4805' }),
      'editor.wordHighlightStrongBackground': pick({ light: '#1c6b4810', dark: '#1c6b4810' }),
      'editorBracketMatch.background': pick({ light: '#1c6b4820', dark: '#4d937520' }),

      'diffEditor.insertedTextBackground': pick({ light: '#1c6b4830', dark: '#4d937550' }),
      'diffEditor.removedTextBackground': pick({ light: '#ab595940', dark: '#ab595950' }),

      'scrollbar.shadow': pick({ light: '#6a737d33', dark: '#0000' }),
      'scrollbarSlider.background': v('faded'),
      'scrollbarSlider.hoverBackground': v('ignored'),
      'scrollbarSlider.activeBackground': v('ignored'),
      'editorOverviewRuler.border': colors.white,

      'panel.background': background,
      'panel.border': border,
      'panelTitle.activeBorder': githubColor?.selectionLine || primary,
      'panelTitle.activeForeground': foreground,
      'panelTitle.inactiveForeground': colors.gray[5],
      'panelInput.border': pick({ light: colors.gray[2], dark: colors.gray[1] }),

      'terminal.foreground': foreground,
      'terminal.selectionBackground': selectionBackground,
      'terminal.ansiBrightBlack': pick({ light: '#aaaaaa', dark: '#777777' }),
      'terminal.ansiBrightBlue': v('blue'),
      'terminal.ansiBrightCyan': v('cyan'),
      'terminal.ansiBrightGreen': v('green'),
      'terminal.ansiBrightMagenta': v('magenta'),
      'terminal.ansiBrightRed': v('red'),
      'terminal.ansiBrightWhite': pick({ light: '#dddddd', dark: '#ffffff' }),
      'terminal.ansiBrightYellow': v('yellow'),
      'terminal.ansiBlack': pick({ light: VitesseThemes.background[0], dark: VitesseThemes.foreground[1] }),
      'terminal.ansiBlue': v('blue'),
      'terminal.ansiCyan': v('cyan'),
      'terminal.ansiGreen': v('green'),
      'terminal.ansiMagenta': v('magenta'),
      'terminal.ansiRed': v('red'),
      'terminal.ansiWhite': '#dbd7ca',
      'terminal.ansiYellow': v('yellow'),

      'gitDecoration.addedResourceForeground': v('green'),
      'gitDecoration.modifiedResourceForeground': v('blue'),
      'gitDecoration.deletedResourceForeground': v('red'),
      'gitDecoration.untrackedResourceForeground': v('cyan'),
      'gitDecoration.ignoredResourceForeground': githubColor?.ignoredFile || v('ignored'),
      'gitDecoration.conflictingResourceForeground': v('orange'),
      'gitDecoration.submoduleResourceForeground': v('secondaryForeground'),

      'editorGutter.modifiedBackground': v('blue'),
      'editorGutter.addedBackground': v('green'),
      'editorGutter.deletedBackground': v('red'),

      'editorBracketHighlight.foreground1': v('cyan'),
      'editorBracketHighlight.foreground2': v('green'),
      'editorBracketHighlight.foreground3': v('orange'),
      'editorBracketHighlight.foreground4': v('magenta'),
      'editorBracketHighlight.foreground5': v('yellow'),
      'editorBracketHighlight.foreground6': v('blue'),

      'debugToolBar.background': background,
      'editor.stackFrameHighlightBackground': pick({ light: colors.yellow[1], dark: '#a707' }),
      'editor.focusedStackFrameHighlightBackground': pick({ light: colors.yellow[2], dark: '#b808' }),

      'peekViewEditor.matchHighlightBackground': pick({ dark: '#ffd33d33', light: undefined }),
      'peekViewResult.matchHighlightBackground': pick({ dark: '#ffd33d33', light: undefined }),
      'peekViewEditor.background': background,
      'peekViewResult.background': background,

      'settings.headerForeground': foreground,
      'settings.modifiedItemIndicator': primary,
      'welcomePage.buttonBackground': colors.gray[1],
      'welcomePage.buttonHoverBackground': colors.gray[2],

      'problemsErrorIcon.foreground': v('red'),
      'problemsWarningIcon.foreground': v('orange'),
      'problemsInfoIcon.foreground': v('blue'),

      'editorError.foreground': v('red'),
      'editorWarning.foreground': v('orange'),
      'editorInfo.foreground': v('blue'),
      'editorHint.foreground': v('green'),

      'editorGutter.commentRangeForeground': v('ignored'),
      'editorGutter.foldingControlForeground': v('secondaryForeground'),

      'editorInlayHint.foreground': punctuation,
      'editorInlayHint.background': activeBackground,

      'editorStickyScroll.background': activeBackground,
      'editorStickyScrollHover.background': activeBackground,

      'menu.separatorBackground': border,
    },
    semanticHighlighting: true,
    semanticTokenColors: {
      namespace: v('namespace'),
      property: v('property'),
      interface: v('interface'),
      type: v('interface'),
      class: v('class'),
    },
    tokenColors: [
      {
        scope: [
          'comment',
          'punctuation.definition.comment',
          'string.comment',
        ],
        settings: {
          foreground: v('comment'),
        },
      },
      {
        scope: [
          'keyword.control',
          'keyword.control.conditional',
          'keyword.control.loop',
          'keyword.control.trycatch',
          'keyword.control.import',
          'keyword.control.export',
        ],
        settings: {
          foreground: v('keyword'),
        },
      },
      {
        scope: [
          'storage',
          'storage.type',
          'storage.modifier',
          'storage.class',
          'storage.function',
        ],
        settings: {
          foreground: v('builtin'),
        },
      },
      {
        scope: [
          'constant',
          'constant.numeric',
          'constant.boolean',
          'constant.language',
          'constant.character',
          'constant.escape',
          'constant.other',
        ],
        settings: {
          foreground: v('constant'),
        },
      },
      {
        scope: [
          'string',
          'string.quoted',
          'string.quoted.double',
          'string.quoted.single',
          'string.template',
          'string.interpolated',
          'string.regexp',
        ],
        settings: {
          foreground: v('string'),
        },
      },
      {
        scope: [
          'entity.name.function',
          'entity.name.function.member',
          'entity.name.function.method',
          'entity.name.function.constructor',
          'entity.name.function.decorator',
        ],
        settings: {
          foreground: v('function'),
        },
      },
      {
        scope: [
          'support.function',
          'support.function.builtin',
        ],
        settings: {
          foreground: v('function'),
        },
      },
      {
        scope: [
          'entity.name.type',
          'entity.name.class',
          'entity.name.interface',
          'entity.name.enum',
          'entity.name.struct',
          'entity.name.union',
        ],
        settings: {
          foreground: v('type'),
        },
      },
      {
        scope: [
          'support.class',
          'support.type',
          'support.type.builtin',
        ],
        settings: {
          foreground: v('type'),
        },
      },
      {
        scope: [
          'variable',
          'variable.other',
          'variable.other.readwrite',
          'variable.other.property',
          'variable.other.object',
          'variable.other.member',
        ],
        settings: {
          foreground: v('variable'),
        },
      },
      {
        scope: [
          'variable.parameter',
          'variable.parameter.function',
        ],
        settings: {
          foreground: v('variable'),
        },
      },
      {
        scope: [
          'entity.name.tag',
          'tag.html',
        ],
        settings: {
          foreground: v('keyword'),
        },
      },
      {
        scope: [
          'entity.other.attribute-name',
          'entity.other.attribute-name.html',
        ],
        settings: {
          foreground: v('variable'),
        },
      },
      {
        scope: [
          'keyword.operator',
          'keyword.operator.assignment',
          'keyword.operator.arithmetic',
          'keyword.operator.logical',
          'keyword.operator.bitwise',
          'keyword.operator.comparison',
        ],
        settings: {
          foreground: v('operator'),
        },
      },
      {
        scope: [
          'entity.name.namespace',
          'variable.other.readwrite.alias',
        ],
        settings: {
          foreground: v('namespace'),
        },
      },
      {
        scope: [
          'entity.name.decorator',
          'entity.name.function.decorator',
        ],
        settings: {
          foreground: v('namespace'),
        },
      },
      {
        scope: [
          'entity.name.type.parameter',
          'entity.name.type.typeParameter',
        ],
        settings: {
          foreground: v('namespace'),
        },
      },
      {
        scope: [
          'support.type.property-name.json',
        ],
        settings: {
          foreground: v('variable'),
        },
      },
      {
        scope: [
          'punctuation.definition.heading.markdown',
          'entity.name.section.markdown',
        ],
        settings: {
          foreground: v('type'),
        },
      },
      {
        scope: ['markup.bold.markdown'],
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        scope: ['markup.italic.markdown'],
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        scope: ['markup.inserted'],
        settings: {
          foreground: v('green'),
        },
      },
      {
        scope: ['markup.deleted'],
        settings: {
          foreground: v('red'),
        },
      },
      {
        scope: ['markup.changed'],
        settings: {
          foreground: v('yellow'),
        },
      },
      {
        scope: [
          'invalid',
          'invalid.illegal',
          'invalid.broken',
          'invalid.deprecated',
          'invalid.unimplemented',
        ],
        settings: {
          foreground: v('red'),
        },
      },
    ],

    rules: [] as any[],
  }

  // monaco rules
  const rules: any[] = []

  theme.tokenColors.forEach(({ scope, settings }: any) => {
    for (const s of toArray(scope)) {
      rules.push({
        token: s,
        foreground: settings.foreground?.replace('#', ''),
      })
    }
  })

  theme.rules = rules

  return theme
}
