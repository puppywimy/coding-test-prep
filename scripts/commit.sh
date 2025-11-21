git add .

SCOPE=$(git diff --name-only --cached)
COMMIT_MESSAGE="solve($SCOPE)"

if [ -z $1 ]; then
  git commit -m "$COMMIT_MESSAGE"
else
  git commit -m "$COMMIT_MESSAGE: $1"
fi

echo "\n성공적으로 커밋했습니다."