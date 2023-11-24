#!/usr/bin/env sh
set -Ex

function apply_path {

    echo "Check that we have NEXT_PUBLIC_API_HOST vars"
    test -n "$NEXT_PUBLIC_API_HOST"
    echo "Check that we have NEXT_PUBLIC_STORAGE_KEY vars"
    test -n "$NEXT_PUBLIC_STORAGE_KEY"

    find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#APP_NEXT_PUBLIC_API_HOST#$NEXT_PUBLIC_API_HOST#g"
    find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#APP_NEXT_PUBLIC_STORAGE_KEY#$NEXT_PUBLIC_STORAGE_KEY#g"
}

apply_path
echo "Starting Nextjs"
exec "$@"