# Time Progress Bar

VSCodeのステータスバーに現在時刻と時間の進行状況を視覚的に表示する拡張機能です。

## Features

⏰ **現在時刻を表示** - ステータスバーに時刻を表示  
📊 **視覚的なプログレスバー** - 5分単位で12個のブロックで1時間の進行状況を表示  
🎨 **ミニマルでスタイリッシュ** - ステータスバーに溶け込むシンプルなデザイン

## Screenshot

![Time Progress Bar in action](https://github.com/toshimitsu151/time-progress-bar/raw/main/screenshot.png)

## Usage

インストール後、VSCodeのステータスバー右側に自動的に表示されます。

- **時刻**: 現在の時（24時間形式）
- **プログレスバー**: 5分ごとに1ブロック進む（12ブロックで1時間）
  - ■: 経過した時間
  - □: 残り時間

例: `$(clock) 18 ■■■■■■■■■□□□` は18時45分を示します。

## Installation

### From VSIX (Recommended)

1. Download the latest `.vsix` file from [Releases](https://github.com/toshimitsu151/time-progress-bar/releases)
2. Open VSCode
3. Go to Extensions view (`Cmd+Shift+X`)
4. Click the `...` menu → `Install from VSIX...`
5. Select the downloaded `.vsix` file

Or via command line:
```bash
code --install-extension time-progress-bar-0.0.1.vsix
```

### From Source

```bash
# Clone the repository
git clone https://github.com/toshimitsu151/time-progress-bar.git
cd time-progress-bar

# Install dependencies
npm install

# Compile
npm run compile

# Package the extension
npm install -g @vscode/vsce
vsce package

# Install the .vsix file in VSCode
code --install-extension time-progress-bar-0.0.1.vsix
```

## Development

```bash
# Install dependencies
npm install

# Watch mode (auto-compile on save)
npm run watch:esbuild

# Run in Extension Development Host
# Press F5 in VSCode
```

## Requirements

- VSCode 1.107.0 or higher

## Release Notes

### 0.0.1

初回リリース

- ステータスバーに時刻とプログレスバーを表示
- 5分単位で12個のブロック表示
- 自動更新（1分ごと）

## License

MIT

## Author

toshimitsu151
