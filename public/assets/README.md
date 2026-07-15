# FormX asset handover

Drop final files under `public/assets/` using the **exact relative paths** shown on each placeholder caption / clients page / HANDOVER.md.

```
public/
  assets/
    projects/     # cover + gallery JPGs
    services/     # one image per service
    sectors/      # one image per sector
    insights/     # knowledge covers
    news/         # news covers
    team/         # leadership portraits
    clients/      # SVG/PNG logos
    about/        # studio / home about
  brochure/
    formx.pdf     # company brochure
```

Until a file exists, `AssetImage` renders a content-aware placeholder. After you add the file, set `src={`/assets/${slot}`}` in data or wire automatic resolution.
