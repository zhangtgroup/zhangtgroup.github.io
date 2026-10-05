# Zhang Research Group Website

Built with [Hugo](https://gohugo.io/). Self-contained — no external theme dependency.

## Quick setup

### 1. Upload to GitHub
1. Create a new repository named `zhangtgroup.github.io` (or your preferred name)
2. Upload all files in this folder to the repository root
3. Go to **Settings → Pages → Source** and select **GitHub Actions**
4. The site will build and deploy automatically on every push to `main`

Your site will be live at `https://zhangtgroup.github.io` within a few minutes.

### 2. Optional: custom domain
1. Register a domain (e.g. `zhangtgroup.com`) at Namecheap (~$12/yr)
2. In your domain registrar, add these DNS records:
   ```
   A     185.199.108.153
   A     185.199.109.153
   A     185.199.110.153
   A     185.199.111.153
   CNAME www → zhangtgroup.github.io
   ```
3. In **Settings → Pages**, add your custom domain
4. Update `baseURL` in `hugo.toml` to `https://zhangtgroup.com/`

## Updating content

### Add a news item
Edit `data/news.yaml` — add a new entry at the top of the list.

### Add a publication
Edit `data/publications.yaml` — add a new entry under the correct year section.

### Add/update a person
Edit `data/people.yaml`:
- Add to `current:` for current members
- Move to `alumni:` when they leave
- To add a photo: place a square image (about 400×400) in `static/img/people/` and set `photo: "img/people/yourname.jpg"`

### Update featured publications on home page
Edit `data/featured_pubs.yaml`.

### Journal covers and outreach photos
- Covers on the home page: `data/covers.yaml`, images in `static/img/covers/`
- Outreach photos on the Teaching & Outreach page: `data/outreach.yaml`, images in `static/img/outreach/`

### Figures on content pages
Put the image in `static/img/research/` and add it to a Markdown page with:
`{{< fig src="img/research/name.jpg" alt="..." caption="..." >}}`

### Google Scholar numbers and CV
- Citation counts live in `hugo.toml` under `[params]` (update all four together).
- The CV button on the People page appears automatically once `static/files/CV_TengZhang.pdf` exists.

## Local preview (optional)

Install Hugo: https://gohugo.io/installation/

```bash
hugo server
```

Open http://localhost:1313 in your browser.
