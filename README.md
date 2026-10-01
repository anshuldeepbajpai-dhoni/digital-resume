# Digital Resume

A clay-style (claymorphism) digital resume for **Anshul Deep Bajpai**, AI & Machine Learning Engineer (Fresher). It shows my education, skills, internships, projects and certifications on one page, and it can be saved as a clean PDF with one click.

**Live:** https://anshuldeepbajpai-dhoni.github.io/digital-resume/

## Features

- Claymorphism design with a soft blue, mint, butter and coral palette
- Light and dark theme that remembers the visitor's choice
- "Save as PDF" button with a separate print layout (white background, no photo, A4 size) that works well with resume-screening software
- Optional "Download PDF" button for a ready-made resume file
- "Copy email" button
- Resume text written in plain HTML, so search engines and screen readers can read it
- Responsive on phones, tablets and desktops
- No frameworks and no build step

## Project structure

```
digital-resume/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── photo.jpg                        (ignored by git)
    └── Anshul_Deep_Bajpai_Resume.pdf    (optional)
```

## Run locally

Open `index.html` in a browser, or use the Live Server extension in VS Code.

## Customise

- **Content:** edit the text directly in `index.html` (summary, experience, projects, certifications)
- **PDF button:** set `PDF_FILE` at the top of `script.js` to your PDF path, or to `""` to hide the button
- **Colours and theme:** change the variables at the top of `style.css`
- **Photo:** save it as `assets/photo.jpg`. If it is missing, the page shows initials instead

## Save as PDF

1. Click **Save as PDF**
2. In the print dialog choose **Save as PDF**
3. Turn off **Headers and footers**

## Contact

- Email: anshuldeepbajpai@gmail.com
- GitHub: https://github.com/anshuldeepbajpai-dhoni
- Portfolio: https://anshul-deep-bajpai-portfolio.vercel.app
- LinkedIn: https://www.linkedin.com/in/anshul-deep-bajpai-441b1b37b