# 快速开始

本指南旨在协助您完成 **PvzLauncher**（植物大战僵尸启动器）的环境准备、下载与首次启动。请严格按照以下步骤顺序操作。

## 检查系统版本

PvzLauncher 目前仅提供 Windows x64,Android 7+平台的官方支持。同时，您也可以在Linux 兼容层环境下运行，请您对照表格进行检查。

|操作系统|支持情况|备注|
|-|-|-|
|![win10](/image/Icons/windows.png)Windows 10(1809 及以上) / ![win11](/image/Icons/windows11.png)Windows 11 64-bit|✅完全支持|[跳转到 Windows 版快速开始](#Windows)|
|![win7](/image/Icons/windows7.png)Windows 7(7600 及以上) / ![win8](/image/Icons/windows8.png)Windows 8.1 / ![win10-1809](/image/Icons/windows10-1809-.png)Windows 10(1809 及以下)|❔理论支持|.NET10 官方已放弃对这些平台的支持，但已有成功运行案例 [跳转到 Windows 版快速开始](#Windows)|
|![linux](/image/Icons/linux.png)Linux 部分发行版|❔理论支持|可以使用 Wine 等 Windows 兼容层运行 [跳转到 Windows 版快速开始](#Windows)|
|![android](/image/Icons/android.png)Android 7 及以上|✅完全支持|[跳转到 Android 版快速开始](#Android)|
|![macos](/image/Icons/macos.png)MacOS / ![ios](/image/Icons/macos.png)iOS / ![web](/image/Icons/web.png)Web / ![winxp](/image/Icons/windows7.png)Windows 7 以下 / ![android](/image/Icons/android.png)Android 7 及以下 / ![winlator](/image/Icons/windows.png)Winlator 等 Android 端 Windows 模拟器等|❌不支持|目前暂无计划支持此类平台|

* **✅完全支持**: 程序可以在此平台完美运行，如出现问题会积极解决
* **❔理论支持**: 程序理论上可以在这些平台上运行，但体验感极差。尤其不推荐在这些平台上允许，如果出现问题，开发者不会解决
* **❌不支持**: 程序不可以在这些平台上运行，之后也不会支持


## 选择目标版本

由于目标平台不同，快速开始部分不可避免的有差异，请在以下启动器版本的快速开始文档中进行选择：[Windows 版](#Windows) / [Android 版](#Android)

---

# Windows

## 1. 安装 . NET 10 运行时

此程序需要依赖 `.NET 桌面运行时` x64 运行，因此在使用之前你需要前往[此处](https://get.dot.net/10)下载并安装，如果你已经安装，那么可以跳过此步骤

接着，运行下方命令。检查安装是否成功

```bash
dotnet --list-runtimes
```

通常情况下它会输出类似下方的内容

```
Microsoft.AspNetCore.App 10.0.x [C:\Program Files\dotnet\shared\Microsoft.AspNetCore.App]
Microsoft.NETCore.App 10.0.x [C:\Program Files\dotnet\shared\Microsoft.NETCore.App]
Microsoft.WindowsDesktop.App 10.0.x [C:\Program Files\dotnet\shared\Microsoft.WindowsDesktop.App]
```

## 2. 下载最新发行版

PvzLauncher有多个更新通道，可供您选择，你可以根据下表来选择自己需要的版本并使用

|更新通道|备注|下载|
|-|-|-|
| `Stable` |稳定版，但更新较慢。追求稳定的可以选择此|[下载](https://github.com/PvzLauncher/PvzLauncher/releases/latest)|
| `Development` |开发版，更新较快。包含了最新的新功能，但可能会出一些BUG。追求抢先体验新功能的可选择此|[下载](https://github.com/PvzLauncher/PvzLauncher/releases)|

## 3. 安装与使用

此软件通过 `.zip` 压缩包方式发布，如过您是通过**其他渠道**下载的，或下载的格式**并非** `.zip` ，<b><u>请不要运行它！</u></b>其内部可能包含**未经验证的危险内容**！

确认下载的内容是安全的之后，请使用**任意一款**解压缩软件，解压压缩包内所有文件至**任意文件夹**内

打开目标文件夹，双击运行 `PvzLauncher.exe` 即可。如果您的杀毒软件出现了报毒现象，请不要理睬它。我们的内容是安全的。如果您实在不放心，可以随时停止使用本软件

---

# Android

## 1. 运行时相关

此程序全部使用Kotlin编写，无需依赖**任何**运行时运行，因此在使用之前你无须担心任何有关运行时的问题！

## 2. 下载最新发行版

PvzLauncher**有且只有一条**下载通道，即为通过小飞机网盘下载，如您发现任何第三方下载渠道声称PvzLauncher的，均为**盗版**！

## 3. 安装与使用

此软件通过 `.apk` 软件包方式发布，如过您是通过**其他渠道**下载的 ，<b><u>请不要运行它！</u></b>其内部可能包含**未经验证的危险内容**！

确认下载的内容是安全的之后，您就可以直接安装了！

本程序需要依赖以下权限，请您**全部允许**，否则程序无法正常运行后果自负
|权限名称|作用|
|-|-|
|应用内安装未知应用|为您安装不同的植物大战僵尸版本|
|读取应用列表|让您可以导入手机内现有的植物大战僵尸版本|
|访问网络|用于检测更新和访问云端游戏库|
|读写应用内部目录|用于配置文件的读写，记录您的自定义设置|
