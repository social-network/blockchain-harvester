# Install dependencies

Required helm v3.x, see https://helm.sh/docs/intro/install.

# Deploy

```bash
helm upgrade --install polkastats charts/polkastats \
    --set "postgres.password=password" \
    --set "storage_class=do-block-storage"
```
