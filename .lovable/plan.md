## Status

The project is already wired for Vercel:
- `vite.config.ts` uses `tanstackStart.server.preset: "vercel"` — the build will emit a `.vercel/output/` directory in the Vercel Build Output API format.
- `vercel.json` exists with an SPA-style rewrite.

So no deployment-blocking changes are needed. The plan below is a small cleanup so the repo is unambiguously a Vercel project and deploys cleanly from a fresh `git clone` on Vercel.

## Changes

1. **Fix `vercel.json`** — remove the `/(.*) → /` rewrite. TanStack Start on Vercel ships its own server handler via the Build Output API; a catch-all rewrite to `/` would intercept every request (including `/api/*` and static assets) and break routing. Replace the file with an empty config `{}` (or delete it entirely).

2. **Remove Cloudflare-only artifacts** that are no longer used by the Vercel preset:
   - delete `wrangler.jsonc`
   - delete `src/server.ts` only if it's the Cloudflare Worker entry referenced by `wrangler.jsonc` and not imported anywhere else (will verify by reading it first; if it's the TanStack Start server entry, leave it)
   - remove the `@cloudflare/vite-plugin` and `nitro` (beta) entries from `package.json` dependencies if unused, then run `bun install` to refresh the lockfile

3. **Add a `.vercelignore`** with `node_modules`, `.vercel`, `dist`, `.cache` to keep uploads small.

4. **Verify the build** locally with `bun run build` and confirm `.vercel/output/config.json` is generated — that's the artifact Vercel needs.

## Deploying

After these changes, deployment on Vercel is:
- Framework preset: **Other** (Vercel auto-detects the Build Output API; no preset override needed)
- Build command: `bun run build` (or `npm run build`)
- Output: auto-detected from `.vercel/output/`
- Install command: `bun install` (or default)

No env vars are required for the current site (no Lovable Cloud / Supabase integration is enabled).

## Notes

- The Lovable "Publish" button is independent of Vercel — it deploys to `*.lovable.app`. Doing this Vercel cleanup does not affect Lovable publishing.
- If you later enable Lovable Cloud, you'll need to copy its env vars (`VITE_SUPABASE_*`, server secrets) into Vercel's Project Settings → Environment Variables.

Confirm and I'll apply the changes.
