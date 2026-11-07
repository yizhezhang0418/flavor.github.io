# FLAVOR Project Page

论文 **Beyond Memory Limits: A Hierarchical Spatio-Temporal Map Representation for Large-Scale 3D Autonomous Exploration** 的静态项目主页。

文案、作者、方法图和仿真结果依据 `../BML_exploration/main.tex` 与 `../BML_exploration/chapter/`。页面保持英文，样式和图标使用本地资源；主 demo 使用 YouTube 内嵌播放器。

## 本地预览

在本目录运行 `python3 -m http.server 8000`，然后用浏览器打开本机 8000 端口。

## 视频

- 主 demo：使用 YouTube 内嵌地址 `https://www.youtube.com/embed/f4DFurk1gYc`，放在标题、作者信息之后，论文总览图之前。原有 `AAdemo.mp4`、`AAdemo-web.mp4` 作为本地备份保留，页面不再加载它们。
- 仿真：Cave、Forest、Lava Tube，分别使用 `static/videos/simulation/` 下三个场景目录中的 `cave-web.mp4`、`forest-web.mp4`、`lava-tube-web.mp4` 和已有 JPG 封面，不再保留空的视频位。
- 实机：使用 `static/videos/realworld/forest-web.mp4` 和 `static/videos/realworld/complex_construction_site-web.mp4`，封面仍在 `static/images/`。
- `static/videos/realworld/forest.mp4` 和 `complex_construction_site.mp4` 是原始 HEVC 文件，保持不变；页面使用同目录中的 H.264/AAC 兼容副本。
- 新增主 demo 和仿真原片也均保留不变；带 `-web` 后缀的文件是 H.264/AAC 播放副本。

更换主 demo 时，修改 `index.html` 中 `<iframe>` 的 `/embed/视频ID`，并同步更新顶部 YouTube 图标的 `watch?v=视频ID` 链接。通过本地 HTTP 服务或已部署网站预览，YouTube 播放器需要网络连接。

更换仿真或实机视频时，修改对应 `<video>` 的 `<source src="…">` 和 `poster` 路径即可。五个本地实验视频使用原生播放器，点击播放时才加载，彼此之间自动暂停；YouTube 播放器独立控制。

视频图标在新标签页打开 YouTube 主 demo，代码图标在新标签页打开 GitHub 仓库 `https://github.com/yizhezhang0418/FLAVOR`。论文入口仍是禁用的图标按钮；发布后再将其改为带实际 `href` 的链接，并更新提示文字及 `aria-label`。

作者顺序已同步论文：Yizhe Zhang、Jianping Li（通讯作者）、Yilun Gao、Liangliang Yin、Pengfei Wan、Zhen Dong、Bisheng Yang。Liangliang Yin 属于单位 1，Pengfei Wan 属于单位 2。

## 导航、致谢与引用

- 顶部 Home 指向 Yizhe Zhang 的个人主页；More Research 包含 FU-MPC 和 AWARE。
- Acknowledgements 致谢 MARSIM 仿真平台、ROG-Map 地图表示及 EPIC 的开源工作。
- 页面末尾的 `#BibTeX` 为待填写的引用模板；直接替换 `index.html` 中 `.bibtex-entry` 内的内容即可。

## 页面素材

- `static/images/framework.png`：论文 `fig/fig1.png`。
- `static/images/method-overview.png`：论文 `fig/method_overview.png`。
- `static/images/main-demo-poster.jpg`：原本地主 demo 的备用封面，当前 YouTube 播放器使用平台提供的预览图。
- `static/images/forest-poster.jpg`、`static/images/construction-poster.jpg`：实机视频封面。

仿真内存结果仅指论文测量的地图表示内存，不代表整个进程 RAM。实机视频叠字与论文中的施工现场飞行时间、距离不同，因此页面没有重复列出这两项数值；发布前可统一对应实验版本。

## Template attribution

Adapted from the [Nerfies](https://nerfies.github.io/) and [ARMOR](https://yizhezhang0418.github.io/armor.github.io/) project-page templates. The original template is licensed under [Creative Commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The page footer retains a compact source attribution and license link; the unrelated template citation has been removed.
