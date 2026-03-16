export const colors = {
  black: '#111',
  white: '#fff',
  gray: ['#fafbfc', '#f6f8fa', '#e1e4e8', '#d1d5da', '#959da5', '#6a737d', '#586069', '#444d56', '#2f363d', '#24292e'],
  blue: ['#f1f8ff', '#dbedff', '#c8e1ff', '#79b8ff', '#2188ff', '#0366d6', '#005cc5', '#044289', '#032f62', '#05264c'],
  green: ['#f0fff4', '#dcffe4', '#bef5cb', '#85e89d', '#34d058', '#28a745', '#22863a', '#176f2c', '#165c26', '#144620'],
  yellow: ['#fffdef', '#fffbdd', '#fff5b1', '#ffea7f', '#ffdf5d', '#ffd33d', '#f9c513', '#dbab09', '#b08800', '#735c0f'],
  orange: ['#fff8f2', '#ffebda', '#ffd1ac', '#ffab70', '#fb8532', '#f66a0a', '#e36209', '#d15704', '#c24e00', '#a04100'],
  red: ['#ffeef0', '#ffdce0', '#fdaeb7', '#f97583', '#ea4a5a', '#d73a49', '#cb2431', '#b31d28', '#9e1c23', '#86181d'],
  purple: ['#f5f0ff', '#e6dcfd', '#d1bcf9', '#b392f0', '#8a63d2', '#6f42c1', '#5a32a3', '#4c2889', '#3a1d6e', '#29134e'],
  pink: ['#ffeef8', '#fedbf0', '#f9b3dd', '#f692ce', '#ec6cb9', '#ea4aaa', '#d03592', '#b93a86', '#99306f', '#6d224f'],
}

// [dark, light]
export const VitesseThemes = {
  primary: ['#4d9375', '#1c6b48'],

  foreground: ['#dbd7caee', '#393a34'],
  activeForeground: ['#bfbaaa', '#4e4f47'],
  secondaryForeground: ['#dedcd590', '#393a3490'],

  ignored: ['#dedcd550', '#393a3450'],
  faded: ['#dedcd510', '#393a3410'],
  border: ['#191919', '#f0f0f0'],

  background: ['#121212', '#ffffff'],
  activeBackground: ['#181818', '#f7f7f7'],
  selectionBackground: ['#eeeeee18', '#22222218'],
  selectionBackgroundActive: ['#eeeeee18', '#22222218'],
  selectionBackgroundInActive: ['#eeeeee10', '#22222210'],

  // soft overrides
  softBackground: ['#222', '#F1F0E9'],
  softActiveBackground: ['#292929', '#E7E5DB'],
  softBorder: ['#252525', '#E7E5DB'],

  // black overrides
  blackForeground: '#dbd7cacc',
  blackBackground: '#000',
  blackActiveBackground: '#121212',
  blackPunctuation: '#444444',

  comment: ['#758575dd', '#a0ada0'],
  string: ['#c98a7d', '#b56959'],
  variable: ['#bd976a', '#b07d48'],
  keyword: ['#4d9375', '#1e754f'],
  number: ['#4C9A91', '#2f798a'],
  boolean: ['#4d9375', '#1e754f'],
  operator: ['#cb7676', '#ab5959'],
  function: ['#80a665', '#59873a'],
  constant: ['#c99076', '#a65e2b'],
  class: ['#6872ab', '#5a6aa6'],
  interface: ['#5d99a9', '#2e808f'],
  type: ['#5DA994', '#2e8f82'],
  builtin: ['#cb7676', '#ab5959'],
  property: ['#b8a965', '#998418'],
  namespace: ['#db889a', '#b05a78'],
  punctuation: ['#666666', '#999999'],
  decorator: ['#bd8f8f', '#bd8f8f'],
  regex: ['#c4704f', '#ab5e3f'],

  // colors
  green: ['#4d9375', '#1e754f'],
  cyan: ['#5eaab5', '#2993a3'],
  blue: ['#6394bf', '#296aa3'],
  red: ['#cb7676', '#ab5959'],
  orange: ['#d4976c', '#a65e2b'],
  yellow: ['#e6cc77', '#bda437'],
  magenta: ['#d9739f', '#a13865'],
  
  // UI colors for all themes (fine-tuned)
  // Dark theme
  darkIconActive: '#dbd7caee',
  darkIconDefault: '#bfbaaa',
  darkIconInactive: '#dedcd550',
  darkLineNumber: '#dedcd550',
  darkIgnoredFile: '#dedcd550',
  darkSelectionLine: '#4d9375',
  
  // Light theme
  lightIconActive: '#393a34',
  lightIconDefault: '#4e4f47',
  lightIconInactive: '#393a3450',
  lightLineNumber: '#393a3450',
  lightIgnoredFile: '#393a3450',
  lightSelectionLine: '#1c6b48',
  
  // Black theme
  blackIconActive: '#dbd7cacc',
  blackIconDefault: '#bfbaaa',
  blackIconInactive: '#dedcd550',
  blackLineNumber: '#dedcd550',
  blackIgnoredFile: '#dedcd550',
  blackSelectionLine: '#4d9375',
  
  // Black Soft theme (special colors)
  blackSoftBackground: '#1a1a1a',
  blackSoftActiveBackground: '#242424',  // checkbox, input, dropdown
  blackSoftBorder: '#303030',
  blackSoftCheckboxBorder: '#2a2a2a',
  blackSoftPlaceholderForeground: '#8b8575',
  blackSoftSecondaryForeground: '#a89f8e',
  blackSoftInputOptionActiveBackground: '#d5c4a130',
  blackSoftListHoverBackground: '#202020',
  blackSoftListInactiveSelectionBackground: '#262626',
  blackSoftListActiveSelectionBackground: '#2a2a2a',
  blackSoftListFocusBackground: '#2a2a2a',
  blackSoftTreeIndentGuidesStroke: '#5a5550',
  blackSoftTabInactiveForeground: '#959da5',
  blackSoftTabInactiveBackground: '#1e1e1e',
  blackSoftTabHoverBackground: '#202020',
  blackSoftTabActiveBorderTop: '#dedcd590',
  blackSoftEditorFoldBackground: '#d5c4a115',
  blackSoftEditorLineHighlightBackground: '#30303080',
  blackSoftEditorLineNumberActiveForeground: '#a89f8e',
  blackSoftEditorIndentGuideBackground: '#d5c4a120',
  blackSoftEditorIndentGuideActiveBackground: '#d5c4a140',
  blackSoftEditorWhitespaceForeground: '#d5c4a118',
  blackSoftEditorFindMatchBackground: '#e6cc7733',
  blackSoftEditorFindMatchHighlightBackground: '#e6cc7755',
  blackSoftEditorInactiveSelectionBackground: '#d5c4a112',
  blackSoftEditorSelectionBackground: '#d5c4a122',
  blackSoftEditorSelectionHighlightBackground: '#d5c4a115',
  blackSoftEditorWordHighlightBackground: '#d5c4a108',
  blackSoftEditorWordHighlightStrongBackground: '#d5c4a115',
  blackSoftEditorBracketMatchBackground: '#4d937540',
  blackSoftDiffEditorInsertedTextBackground: '#4d937540',
  blackSoftDiffEditorRemovedTextBackground: '#cb767640',
  blackSoftScrollbarShadow: '#00000030',
  blackSoftScrollbarBackground: '#d5c4a115',
  blackSoftScrollbarHoverBackground: '#d5c4a130',
  blackSoftScrollbarActiveBackground: '#d5c4a145',
  blackSoftEditorOverviewRulerBorder: '#303030',
  blackSoftPanelInputBorder: '#2a2a2a',
  blackSoftTerminalSelectionBackground: '#d5c4a122',
  blackSoftTerminalAnsiBrightBlack: '#858075',
  blackSoftTerminalAnsiBrightBlue: '#6fa3c7',
  blackSoftTerminalAnsiBrightCyan: '#6ab5bf',
  blackSoftTerminalAnsiBrightGreen: '#5aa385',
  blackSoftTerminalAnsiBrightMagenta: '#e080ab',
  blackSoftTerminalAnsiBrightRed: '#d68585',
  blackSoftTerminalAnsiBrightWhite: '#f5f0e8',
  blackSoftTerminalAnsiBrightYellow: '#f0d890',
  blackSoftTerminalAnsiBlack: '#2a2a2a',
  blackSoftTerminalAnsiWhite: '#dbd7ca',
  blackSoftTerminalForeground: '#dbd7cacc',
  blackSoftGitDecorationSubmoduleResourceForeground: '#a89f8e',
  blackSoftEditorStackFrameHighlightBackground: '#e6cc7720',
  blackSoftEditorFocusedStackFrameHighlightBackground: '#e6cc7730',
  blackSoftPeekViewEditorMatchHighlightBackground: '#e6cc7740',
  blackSoftWelcomePageButtonBackground: '#3a3734',
  blackSoftWelcomePageButtonHoverBackground: '#4a4642',
  blackSoftEditorGutterCommentRangeForeground: '#8b857560',
  blackSoftEditorInlayHintForeground: '#858075',
  blackSoftEditorStickyScrollHoverBackground: '#262626',
  blackSoftEditorGutterFoldingControlForeground: '#a89f8e',
  blackSoftLineNumber: '#8b857560',
  blackSoftIgnoredFile: '#8b857560',
  
  // Other themes folding control
  darkEditorGutterFoldingControlForeground: '#dedcd590',
  lightEditorGutterFoldingControlForeground: '#393a3490',
  
  // GitHub theme editor colors
  githubEditorStackFrameHighlightBackground: '#ffd33d26',
  githubEditorFocusedStackFrameHighlightBackground: '#ffd33d40',
} satisfies Record<string, [string, string] | string>

// GitHub Light theme colors (from GitHub Primer)
export const GitHubLightColors = {
  // Core
  foreground: '#1f2328',
  background: '#ffffff',
  activeBackground: '#f6f8fa',
  border: '#d1d9e0',
  
  primary: '#0969da',
  secondary: '#59636e',
  
  // gray scale (for compatibility)
  gray: ['#fafbfc', '#f6f8fa', '#e1e4e8', '#d1d9e0', '#959da5', '#6a737d', '#586069', '#444d56', '#2f363d', '#24292e'],
  
  // Syntax highlighting (fine-grained)
  comment: '#6e7781',
  keyword: '#cf222e',
  string: '#0a3069',
  constant: '#0550ae',
  function: '#8250df',
  type: '#0550ae',
  variable: '#1f2328',
  operator: '#1f2328',
  property: '#1f2328',
  builtin: '#cf222e',
  namespace: '#953800',
  decorator: '#953800',
  
  // UI colors (optimized)
  iconActive: '#484f58',
  iconDefault: '#7d8590',
  iconInactive: '#7d8590',
  lineNumber: '#8c959f',
  lineNumberActive: '#1f2328',
  ignoredFile: '#959da5',
  selectionLine: '#1a7f37',
  
  // colors
  green: '#1a7f37',
  cyan: '#0969da',
  blue: '#0969da',
  red: '#cf222e',
  orange: '#9a6700',
  yellow: '#9a6700',
  magenta: '#8250df',
}

