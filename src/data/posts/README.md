# How to Add a New Blog Post

1. **Duplicate template**: Copy `src/data/posts/_template.ts`.
2. **Rename**: Name the file using the format `YYYY-MM-DD-slug.ts` (e.g., `2026-05-20-new-ai-trends.ts`).
3. **Move**: Move the file to the correct year folder, e.g., `src/data/posts/2026/`. Create the folder if it doesn't exist.
4. **Edit**: Open the file and fill in the fields.
   - **Important**: Ensure `id` matches the filename (without `.ts`).
   - **Important**: set `language` to either `"de"` or `"en"`.
5. **Verify**: The post will automatically appear on the blog page due to `import.meta.glob`.
