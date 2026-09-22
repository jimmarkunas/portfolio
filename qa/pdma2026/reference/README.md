# PDMA 2026 visual reference library

Place the approved 1920×1080 reference export for each slide here as `slide-01.png` through `slide-15.png`.

The QA capture pipeline compares runtime renders against these files and writes `diff-summary.json`. The QA guard intentionally fails until all 15 approved references are present; generated runtime renders must never be used as references.
