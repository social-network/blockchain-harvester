# Install dependencies

Required helm v3.x, see https://helm.sh/docs/intro/install.

# Deploy

```bash
helm upgrade --install postgres charts/postgres \
    --set "password=password" \
    --set "storage_class=do-block-storage"
```
