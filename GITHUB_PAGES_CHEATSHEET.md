# GitHub Pages Deployment - One Page Cheatsheet

## 📋 Before You Start

- [ ] You have a GitHub account
- [ ] Your GitHub username is: **usagi-garden**
- [ ] You're in the blog directory: `usagi-garden.github.io/`

---

## 🎯 The Goal

Make your blog live at: **https://usagi-garden.github.io/**

---

## 🔑 The Secret

**Repository name MUST be:** `usagi-garden.github.io`

❌ Wrong: `my-blog`, `blog`, `usagi-garden.github.io`
✅ Right: `usagi-garden.github.io`

---

## 📝 The Commands (Copy & Paste)

### 1️⃣ Create Repo on GitHub

Go to: https://github.com/new

- Name: `usagi-garden.github.io`
- Public: ✅
- README: ❌
- .gitignore: ❌
- License: ❌

Click: **Create repository**

---

### 2️⃣ Run These Commands

```bash
git init
git add .
git commit -m "Initial commit: Usagi Garden"
git branch -M main
git remote add origin https://github.com/usagi-garden/usagi-garden.github.io.git
git push -u origin main
```

---

### 3️⃣ Configure GitHub Pages

1. Go to: https://github.com/usagi-garden/usagi-garden.github.io
2. Click: **Settings** → **Pages**
3. Wait for Actions to complete (check Actions tab)
4. Under "Branch":
   - Select: **`gh-pages`** (NOT main!)
   - Select: **`/ (root)`**
5. Click: **Save**

---

### 4️⃣ Wait & Visit

Wait: 2-10 minutes

Visit: **https://usagi-garden.github.io/**

🎉 **DONE!**

---

## 🔄 Future Updates

```bash
# Edit files, then:
git add .
git commit -m "post: New post title"
git push

# Wait 2-3 minutes → Live!
```

---

## ❌ Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| 404 Page Not Found | Wait 10 min, check branch is `gh-pages`, repo is Public |
| No `gh-pages` option | Wait for Actions to complete, refresh page |
| Red X in Actions | Click it, read error, check `mkdocs.yml` syntax |
| No styling | Check repo name is exactly `usagi-garden.github.io` |

---

## 📞 Need Help?

Read: `DEPLOY_TO_GITHUB_PAGES.md` (detailed guide in this folder)

---

**That's it! Keep this handy for reference.**
