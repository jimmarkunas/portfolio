# portfolio
Jim Markunas Portfolio Site

## Production Build
Run:

```bash
python3 scripts/build_prod.py
```

This generates a deployable `dist/` directory with:
- Minified + content-hashed CSS/JS in `dist/assets/`
- Rewritten HTML references to hashed assets
- Precompressed `.gz` assets for CDN/server use
