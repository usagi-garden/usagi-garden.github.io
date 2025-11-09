# Usagi Garden

Personal blog and reflections

Personal blog built with MkDocs Material, hosted on GitHub Pages.

## Quick Start

### Prerequisites

- Python 3.13 or higher
- [Poetry](https://python-poetry.org/docs/#installation) (Python package manager)
- Git

### Local Development

1. **Install dependencies**
   ```bash
   poetry install
   ```

2. **Activate virtual environment**
   ```bash
   poetry shell
   ```

3. **Start local server**
   ```bash
   make serve
   # Visit http://127.0.0.1:8000/
   ```

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository

**IMPORTANT - Repository Naming:**

For your main personal site (recommended):
- Repository name MUST be: `usagi-garden.github.io`
- Your blog will be at: `https://usagi-garden.github.io/`

Or for a project site:
- Repository name can be anything: `my-blog`, `blog`, etc.
- Your blog will be at: `https://usagi-garden.github.io/repository-name/`
- **Note:** You'll need to add `site_url` to `mkdocs.yml` for project sites

**Create the repository:**
1. Go to https://github.com/new
2. Repository name: `usagi-garden.github.io`
3. Make it **Public** (required for free GitHub Pages)
4. **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

### Step 2: Push Your Code

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Usagi Garden"

# Rename branch to main
git branch -M main

# Add remote (for user site)
git remote add origin https://github.com/usagi-garden/usagi-garden.github.io.git

# Push to GitHub
git push -u origin main
```

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages` (will appear after first workflow runs)
   - **Folder:** `/ (root)`
4. Click **Save**

### Step 4: Wait for Deployment

1. Go to **Actions** tab in your repository
2. Wait for "Deploy MkDocs to GitHub Pages" workflow to complete (~2 min)
3. Once complete, your site is live at: `https://usagi-garden.github.io/`

**Note:** First deployment can take up to 10 minutes to be fully available.

### Automatic Deployments

After initial setup, every push to `main` branch will automatically:
1. Trigger GitHub Actions workflow (`.github/workflows/cicd.yml`)
2. Build your site with MkDocs
3. Deploy to GitHub Pages
4. Update your live site within 2-3 minutes

### Optional: Custom Domain Setup

To use a custom domain:

1. Create a file `docs/CNAME` with your domain name
2. Configure DNS with your domain provider
3. See [GitHub Pages Custom Domain Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Post Organization

Posts are organized in a **category-based directory structure** under `docs/posts/`:

```
docs/posts/
├── reflections/      # Life reflections & meditation
└── books/            # Book reviews and reading notes
```

You can add more categories by creating new folders!

## Post Structure

Posts support **two formats**:

### Format 1: With YAML Frontmatter (Recommended)
```yaml
---
draft: false                    # Set to true to hide
date: 2025-11-09                # Publication date (YYYY-MM-DD)
categories:
    - reflections               # reflections, books, or your custom category
---

# Post Title

Your content here...
```

### Format 2: Simple Markdown
```markdown
# Post Title

Content here...
```

## How to Add a New Post

**Step 1: Create the markdown file**
```bash
# Choose appropriate category folder:
docs/posts/reflections/   # For life reflections & meditation
docs/posts/books/         # For book reviews
```

**Step 2: Write your post** with frontmatter (recommended):
```yaml
---
draft: false
date: 2025-11-09
categories:
    - your-category
---

# Your Post Title

Your content here...
```

**Step 3: Update homepage** (`docs/index.md`):
```markdown
- **2025-11-09 :emoji: [Post Title](posts/category/filename.md)**
```

**Step 4: Preview locally**
```bash
make serve
# Visit http://127.0.0.1:8000/
```

**Step 5: Commit and push**
```bash
git add .
git commit -m "post: your post title"
git push
```

GitHub Actions will automatically build and deploy to GitHub Pages.

## Available Features in Posts

- **Emojis**: `:coffee:` → ☕ ([Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md))
- **Math**: `$E=mc^2$` → Math notation via MathJax
- **Mermaid diagrams**: Code blocks with ` ```mermaid ` syntax
- **Admonitions**: Callout boxes with `!!! note`
- **Images**: Reference assets via `/assets/folder/image.png`
- **Bilingual**: Multiple language posts work seamlessly
- **Auto timestamps**: Git creation/modification dates added automatically

## Customization

### Change Site Name
Edit `mkdocs.yml`:
```yaml
site_name: Your New Site Name
```

### Change Theme Color
Edit `mkdocs.yml`:
```yaml
palette:
  primary: indigo  # Options: lime, indigo, purple, pink, red, orange, amber, teal, cyan, blue
```

### Change Logo
Edit `mkdocs.yml`:
```yaml
theme:
  logo: assets/your-logo.png  # Use local file
  # Or use a URL
```

### Add Google Analytics (Optional)

1. Sign up at [Google Analytics](https://analytics.google.com/)
2. Get your tracking ID
3. Edit `mkdocs.yml` and uncomment the analytics section:
```yaml
extra:
  analytics:
    provider: google
    property: G-XXXXXXXXXX  # Your tracking ID
```

### Add Custom CSS/JavaScript

Create files in `docs/` and reference them in `mkdocs.yml`:
```yaml
extra_css:
  - stylesheets/extra.css

extra_javascript:
  - javascripts/extra.js
```

## Important Configuration Files

### `mkdocs.yml` - Main site configuration
- Blog plugin settings (URL format: `yyyy/MM/dd`)
- Theme configuration (Material with light/dark mode)
- Markdown extensions (emoji, math, diagrams, etc.)
- Analytics configuration
- Git revision date plugin (timeago format)

### `pyproject.toml` - Python dependencies
- MkDocs Material version
- Plugin dependencies
- Python version requirement

### `.github/workflows/cicd.yml` - Deployment
- Auto-deploys to GitHub Pages on push to `main`

### `docs/index.md` - Homepage
- Main landing page with featured posts

## Technology Stack

- **Framework**: MkDocs with Material theme
- **Language**: Python 3.13
- **Package Manager**: Poetry
- **Deployment**: GitHub Actions → GitHub Pages
## Troubleshooting

### Local server won't start
- Make sure you've run `poetry install`
- Make sure you're in the poetry shell: `poetry shell`
- Check Python version: `python --version` (should be 3.13+)

### Changes not showing on deployed site
- Check GitHub Actions tab for build errors
- Wait a few minutes for GitHub Pages to update
- Clear your browser cache

### Custom domain not working
- Verify DNS settings with your domain provider
- Check that `docs/CNAME` contains your domain
- Enable HTTPS in GitHub Pages settings

## Resources

- [MkDocs Documentation](https://www.mkdocs.org/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)
- [Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)

## License

This blog template is open source. Feel free to customize it for your own use!

---

Made with :heart: using MkDocs Material
