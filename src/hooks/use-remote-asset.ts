import { Asset } from 'expo-asset';
import { useEffect, useState } from 'react';

export default function useRemoteAsset(url: string) {
  const [localUri, setLocalUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    Asset.loadAsync(url).then(([asset]) => {
      if (!cancelled) setLocalUri(asset.localUri);
    }).catch((err) => {
      if (!cancelled) setError(err);
    }).finally(() => {
      if (!cancelled) setLoading(false);
    });

    return () => { cancelled = true; };
  }, [url]);

  return { localUri, loading, error };
}
