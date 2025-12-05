import { colord } from 'colord'

export interface PorcelainColors {
  text: {
    default: string,
    muted: string,
    dimmed: string,
  },
  bg: {
    default: string,
    elevated: string,
  },
  border: {
    default: string,
    stroked: string,
  },
  red: string,
  scarlet: string,
  orange: string,
  yellow: string,
  green: string,
  cyan: string,
  blue: string,
  magenta: string,
}

export interface PorcelainThemeMetadata {
  type: 'light' | 'dark',
  name: string,
}

export function createPorcelainTheme(metadata: PorcelainThemeMetadata, colors: PorcelainColors) {
  const isLight = metadata.type === 'light'
  const pureColor = isLight ? '#000000' : '#ffffff'
  const grayColor = isLight ? '#222222' : '#eeeeee'

  const primaryColor = colors.blue

  const transparentColor = '#00000000'
  const invertedTextColor = colors.bg.default
  const disabledTextColor = colors.text.muted

  const foregroundColor = isLight ? colors.text.default : '#ffffff'
  const softBgColor = colors.bg.default
  // const softBgColor = colord(colors.bg.elevated).mix(colors.bg.default).toHex()
  const badgeBgColor = colors.text.muted
  const linkColor = primaryColor

  const errorColor = colors.red
  const warningColor = colors.orange
  const infoColor = colors.blue
  const hintColor = colors.cyan

  const modifiedColor = colors.blue
  const deletedColor = colors.red
  const addedColor = colors.green

  const languageColors = {
    type: colors.yellow,
    function: colors.blue,
    comment: colors.text.dimmed,
    string: colors.green,
    keyword: colors.magenta,
    literal: colors.orange,
    operator: colors.cyan,
    key: colors.yellow,
    tag: colors.scarlet,
    attribute: colors.magenta,
    variable: colors.text.default,
    builtin: colors.red,
  }

  return {
    $schema: 'vscode://schemas/color-theme',
    type: metadata.type,
    name: metadata.name, // 'Porcelain Light',
    base: metadata.type === 'light' ? 'vs' : 'vs-dark',
    colors: {
      focusBorder: transparentColor,
      foreground: foregroundColor,
      descriptionForeground: colord(foregroundColor).alpha(0x90 / 0xff).toHex(),
      errorForeground: errorColor,

      'textLink.foreground': linkColor,
      'textLink.activeForeground': linkColor,
      'textBlockQuote.background': colors.bg.default,
      'textBlockQuote.border': colors.border.default,
      'textCodeBlock.background': colors.bg.default,
      'textSeparator.foreground': colors.border.default,

      'button.background': primaryColor,
      'button.foreground': invertedTextColor,
      'button.hoverBackground': primaryColor,

      'checkbox.background': colors.bg.default,
      'checkbox.border': colors.border.stroked,

      'dropdown.background': colors.bg.default,
      'dropdown.border': colors.border.stroked,
      'dropdown.foreground': foregroundColor,
      'dropdown.listBackground': colors.bg.elevated,

      'input.background': colors.bg.default,
      'input.border': colors.border.stroked,
      'input.foreground': foregroundColor,
      'input.placeholderForeground': colord(foregroundColor).alpha(0x90 / 0xff).toHex(),
      'inputOption.activeBackground': colord(foregroundColor).alpha(0x50 / 0xff).toHex(),

      'badge.foreground': invertedTextColor,
      'badge.background': colord(foregroundColor).alpha(0x90 / 0xff).toHex(),

      'progressBar.background': primaryColor,

      'titleBar.activeForeground': foregroundColor,
      'titleBar.activeBackground': colors.bg.default,
      'titleBar.inactiveForeground': colors.text.muted,
      'titleBar.inactiveBackground': colors.bg.default,
      'titleBar.border': colors.border.default,

      'activityBar.foreground': foregroundColor,
      'activityBar.inactiveForeground': colord(foregroundColor).alpha(0x50 / 0xff).toHex(),
      'activityBar.background': colors.bg.default,
      'activityBarBadge.foreground': invertedTextColor,
      'activityBarBadge.background': badgeBgColor,
      'activityBar.activeBorder': primaryColor,
      'activityBar.border': colors.border.default,

      'sideBar.foreground': colors.text.muted,
      'sideBar.background': softBgColor,
      'sideBar.border': colors.border.default,
      'sideBarTitle.foreground': foregroundColor,
      'sideBarSectionHeader.foreground': foregroundColor,
      'sideBarSectionHeader.background': colors.bg.default,
      'sideBarSectionHeader.border': colors.border.default,

      'list.hoverForeground': foregroundColor,
      'list.inactiveSelectionForeground': foregroundColor,
      'list.activeSelectionForeground': foregroundColor,
      'list.hoverBackground': colors.bg.elevated,
      'list.inactiveSelectionBackground': colors.bg.elevated,
      'list.activeSelectionBackground': colors.bg.elevated,
      'list.inactiveFocusBackground': colors.bg.default,
      'list.focusBackground': colors.bg.elevated,
      'list.highlightForeground': primaryColor,

      'tree.indentGuidesStroke': colors.border.default,

      'notificationCenterHeader.foreground': colors.text.muted,
      'notificationCenterHeader.background': colors.bg.default,
      'notifications.foreground': foregroundColor,
      'notifications.background': colors.bg.default,
      'notifications.border': colors.border.default,
      'notificationsErrorIcon.foreground': errorColor,
      'notificationsWarningIcon.foreground': warningColor,
      'notificationsInfoIcon.foreground': infoColor,

      'pickerGroup.border': colors.border.default,
      'pickerGroup.foreground': foregroundColor,
      'quickInput.background': colors.bg.default,
      'quickInput.foreground': foregroundColor,
      'quickInputList.focusBackground': colors.bg.elevated,

      'statusBar.foreground': colors.text.muted,
      'statusBar.background': colors.bg.default,
      'statusBar.border': colors.border.default,
      'statusBar.noFolderBackground': colors.bg.default,
      'statusBar.debuggingBackground': colors.bg.elevated,
      'statusBar.debuggingForeground': colors.text.muted,
      'statusBarItem.prominentBackground': colors.bg.elevated,
      'statusBarItem.hoverBackground': colors.bg.elevated,
      'statusBarItem.hoverForeground': foregroundColor,

      'editorGroupHeader.tabsBackground': softBgColor,
      'editorGroupHeader.tabsBorder': colors.border.default,
      'editorGroup.border': colors.border.default,
      'tab.activeForeground': foregroundColor,
      'tab.inactiveForeground': disabledTextColor,
      'tab.inactiveBackground': colors.bg.default,
      'tab.activeBackground': colors.bg.default,
      'tab.hoverBackground': colors.bg.elevated,
      'tab.unfocusedHoverBackground': colors.bg.default,
      'tab.border': colors.border.default,
      'tab.unfocusedActiveBorderTop': colors.border.default,
      'tab.activeBorder': colors.border.default,
      'tab.unfocusedActiveBorder': colors.border.default,
      'tab.activeBorderTop': colord(foregroundColor).alpha(0x90 / 0xff).toHex(),
      'tab.activeModifiedBorder': modifiedColor,

      'breadcrumb.foreground': colors.text.muted,
      'breadcrumb.focusForeground': foregroundColor,
      'breadcrumb.background': colors.bg.default,
      'breadcrumb.activeSelectionForeground': colord(grayColor).alpha(0x18 / 0xff).toHex(),
      'breadcrumbPicker.background': colors.bg.default,

      'editor.foreground': colors.text.default,
      'editor.background': colors.bg.default,
      'editorWidget.background': colors.bg.default,
      'editor.foldBackground': colord(grayColor).alpha(0x10 / 0xff).toHex(),
      'editor.lineHighlightBackground': colors.bg.elevated,
      'editorLineNumber.foreground': colord(colors.text.default).alpha(0x80 / 0xff).toHex(),
      'editorLineNumber.activeForeground': colors.text.muted,
      'editorIndentGuide.background1': colord(pureColor).alpha(0x15 / 0xff).toHex(),
      'editorIndentGuide.activeBackground1': colord(pureColor).alpha(0x30 / 0xff).toHex(),
      'editor.findMatchBackground': isLight ? '#e6cc7744' : '#eed49f22',
      'editor.findMatchHighlightBackground': isLight ? '#e6cc7766' : '#eed49f44',
      'editor.inactiveSelectionBackground': colord(grayColor).alpha(0x10 / 0xff).toHex(),
      'editor.selectionBackground': colord(grayColor).alpha(0x18 / 0xff).toHex(),
      'editor.selectionHighlightBackground': colord(grayColor).alpha(0x10 / 0xff).toHex(),
      'editor.wordHighlightBackground': colord(primaryColor).alpha(0x05 / 0xff).toHex(),
      'editor.wordHighlightStrongBackground': colord(primaryColor).alpha(0x10 / 0xff).toHex(),
      'editorBracketMatch.background': colord(primaryColor).alpha(0x20 / 0xff).toHex(),

      'scrollbar.shadow': isLight ? colord(colors.text.muted).alpha(0x33 / 0xff).toHex() : transparentColor,
      'scrollbarSlider.background': colord(foregroundColor).alpha(0x20 / 0xff).toHex(),
      'scrollbarSlider.hoverBackground': colord(foregroundColor).alpha(0x50 / 0xff).toHex(),
      'scrollbarSlider.activeBackground': colord(foregroundColor).alpha(0x50 / 0xff).toHex(),
      'editorOverviewRuler.border': colors.bg.default,

      'panel.background': colors.bg.default,
      'panel.border': colors.border.default,
      'panelTitle.activeBorder': primaryColor,
      'panelTitle.activeForeground': foregroundColor,
      'panelTitle.inactiveForeground': disabledTextColor,
      'panelInput.border': colors.border.stroked,

      'terminal.foreground': colors.text.default,
      'terminal.selectionBackground': colord(grayColor).alpha(0x18 / 0xff).toHex(),
      'terminal.ansiBrightBlack': '#000000',
      'terminal.ansiBrightBlue': colors.blue,
      'terminal.ansiBrightCyan': colors.cyan,
      'terminal.ansiBrightGreen': colors.green,
      'terminal.ansiBrightMagenta': colors.magenta,
      'terminal.ansiBrightRed': colors.red,
      'terminal.ansiBrightWhite': '#ffffff',
      'terminal.ansiBrightYellow': colors.yellow,
      'terminal.ansiBlack': isLight ? colors.text.default : colors.bg.default,
      'terminal.ansiBlue': colors.blue,
      'terminal.ansiCyan': colors.cyan,
      'terminal.ansiGreen': colors.green,
      'terminal.ansiMagenta': colors.magenta,
      'terminal.ansiRed': colors.red,
      'terminal.ansiWhite': isLight ? colors.bg.default : colors.text.default,
      'terminal.ansiYellow': colors.yellow,

      'gitDecoration.addedResourceForeground': addedColor,
      'gitDecoration.modifiedResourceForeground': modifiedColor,
      'gitDecoration.stageModifiedResourceForeground': modifiedColor,
      'gitDecoration.deletedResourceForeground': deletedColor,
      'gitDecoration.stageDeletedResourceForeground': deletedColor,
      'gitDecoration.untrackedResourceForeground': colors.cyan,
      'gitDecoration.ignoredResourceForeground': colord(foregroundColor).alpha(0x70 / 0xff).toHex(),
      'gitDecoration.conflictingResourceForeground': colors.yellow,
      'gitDecoration.submoduleResourceForeground': colord(foregroundColor).alpha(0x90 / 0xff).toHex(),

      'editorGutter.modifiedBackground': modifiedColor,
      'editorGutter.addedBackground': addedColor,
      'editorGutter.deletedBackground': deletedColor,
      'editorBracketHighlight.foreground1': colors.cyan,
      'editorBracketHighlight.foreground2': colors.green,
      'editorBracketHighlight.foreground3': colors.orange,
      'editorBracketHighlight.foreground4': colors.magenta,
      'editorBracketHighlight.foreground5': colors.yellow,
      'editorBracketHighlight.foreground6': colors.blue,

      'debugToolBar.background': colors.bg.default,

      'editor.stackFrameHighlightBackground': isLight ? '#fffbdd' : '#a707',
      'editor.focusedStackFrameHighlightBackground': isLight ? '#fff5b1' : '#b808',

      'peekViewEditor.background': colors.bg.default,
      'peekViewResult.background': colors.bg.default,

      'settings.headerForeground': foregroundColor,
      'settings.modifiedItemIndicator': modifiedColor,

      'problemsErrorIcon.foreground': errorColor,
      'problemsWarningIcon.foreground': warningColor,
      'problemsInfoIcon.foreground': infoColor,
      'editorError.foreground': errorColor,
      'editorWarning.foreground': warningColor,
      'editorInfo.foreground': infoColor,
      'editorHint.foreground': hintColor,

      'editorGutter.commentRangeForeground': colord(foregroundColor).alpha(0x50 / 0xff).toHex(),
      'editorGutter.foldingControlForeground': colord(foregroundColor).alpha(0x90 / 0xff).toHex(),
      'editorInlayHint.foreground': isLight ? '#999999' : '#666666',
      'editorInlayHint.background': colors.bg.elevated,
      'editorStickyScroll.background': colors.bg.elevated,
      'editorStickyScrollHover.background': colors.bg.elevated,
      'menu.separatorBackground': colors.border.default,
    },
    semanticTokenColors: {
      class: languageColors.type,
      interface: languageColors.type,
      struct: languageColors.type,
      type: languageColors.type,
      function: languageColors.function,
      method: languageColors.function,
      comment: languageColors.comment,
      string: languageColors.string,
      keyword: languageColors.keyword,
      number: languageColors.literal,
      operator: languageColors.operator,
      regexp: languageColors.operator,
      // e.g. `__init__` in python
      magicFunction: languageColors.keyword,
      // Reset defaults
      variable: languageColors.variable,
      property: languageColors.variable,
      namespace: languageColors.variable,
      // e.g. `Math` or `window` in javascript
      'variable.defaultLibrary': languageColors.builtin,
      // `self` parameter in python
      selfParameter: {
        foreground: languageColors.builtin,
        italic: true,
      },
      // e.g. `Partial` in typescript
      // 'type.defaultLibrary': languageColors.literal,
      // e.g. `str` in python
      // 'class.typeHint.builtin': languageColors.literal
    },
    semanticHighlighting: true,
    tokenColors: [
      {
        name: 'Global',
        settings: {
          foreground: colors.text.default,
        },
      },
      {
        name: 'Variables',
        scope: [
          // Variables (e.g. `variable` in `variable = value`)
          // Useful for regexp named group in javascript
          'variable',
        ],
        settings: {
          foreground: languageColors.variable,
        },
      },
      {
        name: 'Comments',
        scope: [
          // Comment blocks
          'comment',
          // `//` in `// Comments`
          'punctuation.definition.comment',
        ],
        settings: {
          fontStyle: 'italic',
          foreground: languageColors.comment,
        },
      },
      {
        name: 'Syntax Noises',
        scope: [
          // e.g. `{}` in javascript function blocks
          'punctuation.definition',
          // Commas (,)
          'punctuation.separator.comma',
          // Semicolons (;)
          'punctuation.terminator',
          // `{}` in python f-strings
          'constant.character.format.placeholder',
        ],
        settings: {
          foreground: languageColors.comment,
        },
      },
      {
        name: 'Keywords',
        scope: [
          // Keywords (e.g. `import` in javascript, `g` in regexp, `!important` in css)
          'keyword',
          // e.g. `@` in `@keyframes`
          'punctuation.definition.keyword',
          // e.g. `function` in javascript declarations
          'storage.type',
          // e.g. `async` in javascript declarations
          'storage.modifier',
        ],
        settings: {
          foreground: languageColors.keyword,
        },
      },
      {
        name: 'Operators',
        scope: [
          // e.g. `.` in `variable.key`
          'punctuation',
          // e.g. `=` in `variable = value`
          'keyword.operator',
          // `[]` in `variable[key]`
          'meta.brace',
        ],
        settings: {
          foreground: languageColors.operator,
        },
      },
      {
        name: 'Tags',
        scope: [
          // HTML tag names
          'entity.name.tag',
        ],
        settings: {
          foreground: languageColors.tag,
        },
      },
      {
        name: 'Functions',
        scope: [
          // Function declaration names, function call names, or method call names
          'entity.name.function',
          // e.g. `rgb` in css
          'support.function',
          // Python function call names
          'meta.function-call.generic',
          // Shell command
          'entity.name.command',
        ],
        settings: {
          foreground: languageColors.function,
        },
      },
      {
        name: 'Literals',
        scope: [
          // Number literals
          'constant.numeric',
          // e.g. `undefined` or `*`
          'constant.language',
          // CSS value keywords (e.g. `fixed`)
          'support.constant',
          // CSS units
          'keyword.other.unit',
          // TypeScript builtin types (e.g. `undefined`)
          'support.type.builtin',
        ],
        settings: {
          foreground: languageColors.literal,
        },
      },
      {
        name: 'Strings',
        scope: [
          // String contents
          'string',
          // String quotes
          'punctuation.definition.string',
          // Markdown code block language
          'fenced_code.block.language',
        ],
        settings: {
          foreground: languageColors.string,
        },
      },
      {
        name: 'Classes and Types',
        scope: [
          // 'entity.name.class',
          // e.g. `Type` in `variable: Type`, or type declaration names
          'entity.name.type',
          // e.g. `Promise` in javascript
          'support.class',
          // Parent classes in javascript
          'entity.other.inherited-class',
        ],
        settings: {
          foreground: languageColors.type,
        },
      },
      {
        name: 'Keys',
        scope: [
          // keys in json and css
          'support.type',
        ],
        settings: {
          foreground: languageColors.key,
        },
      },
      {
        name: 'Special Keys',
        scope: [
          // CSS vendor-prefixed keys (e.g. `-webkit-box-orient`)
          'support.type.vendored',
          // e.g. `void` in typescript
          // 'support.type.primitive'
        ],
        settings: {
          fontStyle: 'italic',
          foreground: languageColors.key,
        },
      },
      {
        name: 'Attributes',
        scope: [
          // HTML attribute names
          'entity.other.attribute-name',
        ],
        settings: {
          foreground: languageColors.attribute,
        },
      },
      {
        name: 'Deprecated Attributes',
        scope: [
          // e.g. `align` for `p`
          'invalid.deprecated.entity.other.attribute-name',
        ],
        settings: {
          fontStyle: 'strikethrough',
          foreground: languageColors.attribute,
        },
      },
      {
        name: 'Special Variables',
        scope: [
          // e.g. `this` in javascript, `self` in python
          'variable.language',
          // CSS vendor-prefixed values (e.g. `-webkit-box`)
          'support.constant.vendored',
        ],
        settings: {
          fontStyle: 'italic',
          foreground: languageColors.builtin,
        },
      },
      {
        name: 'Special Syntax',
        scope: [
          // Regular expressions
          'string.regexp',
          // Escape characters
          'constant.character.escape',
          // CSS colors
          'constant.other.color',
        ],
        settings: {
          foreground: languageColors.operator,
        },
      },
      {
        name: 'URL',
        scope: [
          '*url*',
          '*link*',
          '*uri*',
        ],
        settings: {
          fontStyle: 'underline',
        },
      },
      {
        name: 'Link',
        scope: [
          'string.other.link',
        ],
        settings: {
          foreground: linkColor,
        },
      },
      {
        name: 'Code',
        scope: [
          'markup.inline.raw',
        ],
        settings: {
          foreground: colors.text.muted,
        },
      },
      {
        name: 'Bold',
        scope: [
          'heading',
          'markup.bold',
        ],
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        name: 'Italic',
        scope: [
          'markup.italic',
        ],
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        name: 'Strikethrough',
        scope: [
          'markup.strikethrough',
        ],
        settings: {
          fontStyle: 'strikethrough',
        },
      },
      {
        name: 'Bold & Italic',
        scope: [
          'markup.italic markup.bold',
          'markup.bold markup.italic',
          'heading markup.italic',
        ],
        settings: {
          fontStyle: 'bold italic',
        },
      },
      {
        name: 'Bold & Strikethrough',
        scope: [
          'markup.strikethrough markup.bold',
          'markup.bold markup.strikethrough',
        ],
        settings: {
          fontStyle: 'bold strikethrough',
        },
      },
      {
        name: 'Italic & Strikethrough',
        scope: [
          'markup.strikethrough markup.italic',
          'markup.italic markup.strikethrough',
        ],
        settings: {
          fontStyle: 'italic strikethrough',
        },
      },
      {
        name: 'Bold, Italic & Strikethrough',
        scope: [
          'markup.italic markup.bold markup.strikethrough',
          'markup.italic markup.strikethrough markup.bold',
          'markup.strikethrough markup.bold markup.italic',
          'markup.strikethrough markup.italic markup.bold',
          'markup.bold markup.italic markup.strikethrough',
          'markup.bold markup.strikethrough markup.italic',
          'heading markup.italic markup.strikethrough',
          'heading markup.strikethrough markup.italic',
        ],
        settings: {
          fontStyle: 'bold italic strikethrough',
        },
      },
    ],
  }
}
