git add .

PATH=$(git diff --name-only --cached)
COMMIT_MESSAGE="solve($PATH)"

if [ -z $1 ]; then
  git commit -m "$COMMIT_MESSAGE"
else
  git commit -m "$COMMIT_MESSAGE: $1"
fi