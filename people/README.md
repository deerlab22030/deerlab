# 人员资料

这里按 People 页面的角色分组保存人员信息和照片。每人一个文件夹，供后续更新页面时使用。

```text
people/
├── _template/               # 新成员通用模板，复制后填写
│   └── info.md
├── phd-students/
│   ├── gmu/                 # George Mason University 在读博士
│   │   └── junjie-ma/
│   │       ├── info.md
│   │       └── portrait.jpg
│   └── cityu/               # City University of Hong Kong 在读博士
├── alumni-phds/             # 博士毕业生
└── collaborators/           # Collaborators & Interns
```

## 新增人员

1. 在对应分组下新建文件夹，建议使用英文名小写加连字符，例如 `phd-students/gmu/new-member/`。
2. 把 `_template/info.md` 复制进去，填写已知信息。姓名、职称、链接、邮箱按希望网页显示的内容原样填写；不知道的可选项留空。
3. 把照片放在同一文件夹，推荐命名为 `portrait.jpg` 或 `portrait.png`，在 `Photo` 中填写实际文件名。没有照片就留空，页面使用默认头像。`Photo source` 可填写照片来源网址或说明“本人提供”。
4. 告诉 Codex：“根据 people 中的资料更新 People 页面”，也可以指定某个文件夹。资料不会自动显示到网站，仍需要更新页面代码。

`Group` 与 `Name` 必填。Group 使用 `phd-students/gmu`、`phd-students/cityu`、`alumni-phds` 或 `collaborators`；硕士、本科成员及实习生归入 collaborators。`University` 填学校全称。博士生的 `Title` 通常为 `PhD Student`。校友的 `Name` 使用 `Name, Ph.D.` 格式，`Degree` 单独填写，例如 `Ph.D., City University of Hong Kong`；`Title` 仅填写已知的现职。合作者的 `Title` 请提供完整身份与学校，例如 `Master student, George Mason University`；仅填写身份时可结合 University 补全学校信息。`Major` 是可选专业，填写后在页面身份下单独展示。

也可以像本次一样直接把多位新人资料放入 `_template/`：`1.md` 配 `1.jpg`、`2.md` 配 `2.png`。在每份资料中填写 Group、Name 和 Photo 后通知 Codex 更新。完成后，Codex 会按姓名建立对应分组文件夹，将资料统一命名为 `info.md`、照片命名为 `portrait.原扩展名`，清除填写说明，将使用过的资料移出 `_template/`，仅保留空白模板。已有人员的修改应放在原成员目录中。

## 修改现有人员或毕业转组

- 直接修改该成员文件夹的 `info.md`，或替换照片，并在 `Notes` 说明改动。
- 在读博士毕业时，将整个文件夹移动到 `alumni-phds/`，补充毕业后的姓名格式与学位信息。保留网站、邮箱和共同指导信息，现职未知就留空。通知 Codex 同时移除页面中的在读记录，避免重复。
- 不要为同一人新建第二个文件夹。文件夹名不决定页面顺序；已有顺序保持不变，新成员追加到对应组末尾。
- 若资料与页面内容不同，以本次明确提供的修改为准；未填写的项目不代表删除已有信息。需要删除时，请在 `Notes` 明确说明。

## 现有资料与页面的关系

最初 27 位成员的资料由 `src/pages/TeamPage.tsx` 整理而来，后续新增成员按同一规则归档；已有照片也已复制到各自文件夹。缺少照片的成员仅有 `info.md`。PI 继续按页面原有方式维护，不在这三个分组中。

`people/` 是资料提交目录，不是页面自动读取的数据源。当前网页记录仍在 `src/pages/TeamPage.tsx`；实际发布的照片仍在 `public/images/people/manual/`。以后同步资料时，应同时维护相应资料文件夹，使下一次修改有据可查。

请只放准备公开展示的人员资料和照片；仓库中的文件可能公开可见。

## 页面更新要求

- 保留各组原有顺序，GMU 与 CityU 博士生分别追加，避免重复人员。
- 新照片复制为 `public/images/people/manual/姓名.jpg` 等描述性文件名；页面路径使用 `import.meta.env.BASE_URL` 以适配 GitHub Pages。
- 优先使用用户放入文件夹的照片；未提供照片且要求补充时，从该成员个人主页获取。检查 132px 圆形头像中的面部裁切。
- 更新当天的 `src/sections/Footer.tsx` 中 `Last Update` 日期，保留 Grok 与 GPT-Image2 的原有声明。
- 检查姓名、分组、顺序、重复记录、链接、图片和桌面/窄屏布局；运行生产构建并 lint 修改的代码。

仅整理资料文件夹、没有修改网页时，无需改页脚日期。
