# vscode-theme-porcelain

[![vscode](https://img.shields.io/visual-studio-marketplace/v/cyansalt.vscode-theme-porcelain?label=vs%20marketplace)](https://marketplace.visualstudio.com/items?itemName=cyansalt.vscode-theme-porcelain)
[![ovsx](https://img.shields.io/open-vsx/v/cyansalt/vscode-theme-porcelain)](https://open-vsx.org/extension/cyansalt/vscode-theme-porcelain)

<p align="center">
<img src="icon.png" alt="Icon" width="96" height="96"><br>
<img width="1024" alt="Porcelain Light Screenshot" src="screenshots/porcelain-light.png"><br>
<img width="1024" alt="Porcelain Dark Screenshot" src="screenshots/porcelain-dark.png">
</p>

Inspired by
- Interface contrast from [Vitesse Theme](https://github.com/antfu/vscode-theme-vitesse)
- Hue of the token coloring from [Boxy Theme Kit](https://github.com/trongthanh/vscode-boxythemekit)
- Palette modified from [Catppuccin](https://github.com/catppuccin/catppuccin)
- Color levels of foreground and background from [Nuxt UI](https://ui.nuxt.com/).

## Usage

```jsonc
// .vscode/setting.json
{
  "window.autoDetectColorScheme": true,
  "workbench.preferredLightColorTheme": "Porcelain Light",
  "workbench.preferredDarkColorTheme": "Porcelain Dark",
}
```

## Recommendation

### Icon Theme

- File Icon Theme: [Catppuccin](https://marketplace.visualstudio.com/items?itemName=Catppuccin.catppuccin-vsc-icons) (Latte for light, Mocha for dark)
- Product Icon Theme: [Carbon](https://marketplace.visualstudio.com/items?itemName=antfu.icons-carbon)

```jsonc
// .vscode/setting.json
{
  "workbench.iconTheme": "catppuccin-latte",
  "workbench.productIconTheme": "icons-carbon"
}
```

Additionally, we recommend using [Dynamic Icon Theme](https://marketplace.visualstudio.com/items?itemName=manuthebyte.dynamic-icon-theme) to change tour icon theme dynamically.

```jsonc
// .vscode/setting.json
{
  "icontheme.darkIconTheme": "catppuccin-mocha",
  "icontheme.lightIconTheme": "catppuccin-latte"
}
```

### Font

I use [Fira Code](https://github.com/tonsky/FiraCode) with ligatures enabled, but these fonts are also quite interesting:

- [Annotation Mono](https://github.com/qwerasd205/AnnotationMono): A monospaced font with handwriting-style characters.
- [Input Mono](https://input.djr.com/): A monospaced font with a modern look.

### Terminal

Porcelain themes include terminal colors. It looks fantastic when used with [Starship](https://starship.rs/).
