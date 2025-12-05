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
