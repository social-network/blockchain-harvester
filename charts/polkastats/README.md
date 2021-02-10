# Install dependencies

Required helm v3.x, see https://helm.sh/docs/intro/install.

# Deploy

```bash
helm upgrade --install polkastats charts/polkastats \
    --set "postgres.host=postgres.example.com" \
    --set "postgres.port=5432" \
    --set "postgres.user=polkastats" \
    --set "postgres.database=polkastats" \
    --set "postgres.password=password" \
    --set "nodes.network_name=net" \
    --set "storage_class=do-block-storage"
```
