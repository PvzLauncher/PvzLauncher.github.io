# 快速开始

本指南旨在协助您完成 **PvzLauncher**（植物大战僵尸启动器）的环境准备、下载与首次启动。请严格按照以下步骤顺序操作。

## 第一步：检查系统兼容性

PvzLauncher 目前仅提供 Windows x64 平台的官方支持。以下为各操作系统兼容性概览：

| 操作系统| 支持状态|环境要求|备注|
|--------|--------|------|----|
| Windows 10（1809 及以上版本） / Windows 11 (x64) | ✅ 完全支持  | . NET 10 Desktop Runtime| 推荐使用环境|
| Windows 7 / 8.1 / Windows 10（1809 以前版本）(x64) | ⚠️ 部分支持  | . NET 10 Desktop Runtime| 可能出现兼容性问题或部分功能受限 |
| Windows 32 位 / ARM 架构 | ❌ 不支持 | — | 仅提供 x64 版本|
| Linux | ❔ 理论支持 | 通过 Wine / Proton 等兼容层 | 未经过官方测试，稳定性无法保证 |
| macOS / Android / iOS / Web | ❌ 不支持 | — | 无计划支持此类平台 |

**重要提示**：若您的系统未列入完全支持范围，则 PvzLauncher 可能无法启动，或将出现功能缺失、崩溃等现象。

## 第二步：安装 . NET 10 桌面运行时

PvzLauncher 基于 . NET 10 框架开发，必须安装 **. NET Desktop Runtime 10.0** 方可正常运行。

### 推荐安装方式

1. **通过官方网站获取**（适用于所有用户）  
   访问 [. NET 10 下载页面](https://dotnet.microsoft.com/zh-cn/download/dotnet/10.0)  
   → 找到「. NET Desktop Runtime 10.0.x」  
   → 下载适用于 x64 架构的安装程序

2. **直接下载链接**（推荐 Windows x64 用户）  
   [windowsdesktop-runtime-10.0.3-win-x64.exe](https://builds.dotnet.microsoft.com/dotnet/WindowsDesktop/10.0.3/windowsdesktop-runtime-10.0.3-win-x64.exe)

### 验证安装是否成功

安装完成后，可在命令提示符（CMD）或 PowerShell 中执行以下命令进行确认：

```bash
dotnet --list-runtimes
```

正常情况下，您应看到类似以下输出（版本号可能略有差异）：

```
Microsoft.AspNetCore.App 10.0.x [...]
Microsoft.NETCore.App 10.0.x [...]
Microsoft.WindowsDesktop.App 10.0.x [...]
```

若未出现 `Microsoft.WindowsDesktop.App 10.0.x` 条目，则说明桌面运行时未正确安装，请重新执行安装步骤。

## 第三步：下载 PvzLauncher

PvzLauncher 仅通过官方 GitHub 仓库发布。请勿从其他网站或第三方平台下载，以免获取到被篡改或含有恶意代码的版本。

### 版本分支选择

| 分支          | 描述                                   | 适用场景                     | 下载链接                                                                 |
|---------------|----------------------------------------|------------------------------|--------------------------------------------------------------------------|
| **Stable**    | 稳定版，更新频率较低，优先保证稳定性   | 追求稳定性的普通用户         | [最新稳定版](https://github.com/PvzLauncher/PvzLauncher/releases/latest) |
| **Development** | 开发版，更新频繁，包含最新功能与修复 | 愿意接受潜在不稳定性的用户   | [所有版本（含开发版）](https://github.com/PvzLauncher/PvzLauncher/releases) |

### 文件完整性与格式确认

所有官方发行版均以 `.zip` 压缩包形式提供。若下载到单个 `.exe` 文件或其他非压缩包格式，请勿运行，该文件极有可能为未经授权的第三方打包版本，存在安全风险。

正确下载的文件应为压缩包，解压后大致包含以下内容：

![正确发行版压缩包内容示意图](/quick-start/app-pack.png)

若解压后看到类似以下结构，则说明您下载到的是源代码而非可执行发行版（除非您有意参与开发，否则无需使用）：

![源代码目录结构示意图](/quick-start/source-code.png)

## 第四步：运行 PvzLauncher

1. 将下载的 `.zip` 压缩包完整解压至任意文件夹（建议路径中不含中文或特殊字符）。  
2. 双击文件夹内的 `PvzLauncher.exe` 启动程序。

若前述步骤均正确完成，程序将正常启动并显示主界面：

![PvzLauncher 主界面（1.3.0 示例）](/quick-start/app.png)

至此，您已完成 PvzLauncher 的基本部署，可开始浏览、下载和管理不同版本的《植物大战僵尸》游戏。
