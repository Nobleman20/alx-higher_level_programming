#!/bin/bash

# By Emmanuel Oluyege

# Get the byte size of the HTTP response header for a given URL

echo "$(curl -s -w '%{size_download}' -o /dev/null $1)".
