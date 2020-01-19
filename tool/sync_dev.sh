#! /bin/bash

if [[ ${1} == "" ]] || [[ ${2} == "" ]]; then
    echo "Usage: sync_dev.sh <src dir> <user@server:path>"
    exit 1
fi

while true; do
  inotifywait -r -e modify,create,delete ${1}
  rsync -avz ${1} ${2}
done