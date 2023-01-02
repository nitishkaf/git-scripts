#!/bin/bash

# Check if the first argument is "summary"
if [ "$1" == "summary" ]; then
  # Run the summary script
  $HOME/.git-scripts/summary
elif [ "$1" == "refresh" ]; then
  # Run the refresh script
  $HOME/.git-scripts/refresh
else
  # Print the usage instructions
  printf "Usage: gs [command]\n\n"
  printf "Available commands:\n"
  printf "  summary\t\tShow a summary of the Git repository\n"
  printf "  refresh\t\tRefresh the Git repository\n"
fi
