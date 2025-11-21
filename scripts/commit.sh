#! /usr/bin/env zsh

untrackedFiles=$(git ls-files -o --exclude-standard --directory)
echo "Untracked Files는 다음과 같습니다.\n$untrackedFiles\n"
read "answer?모든 변경 사항을 커밋하시겠습니까? [Y/n] "
if [[ $answer != "Y" ]]; then
  exit
fi

git add .
scope=$(git diff --name-only --cached)
commitMessage="solve($scope)"
if [ -z $1 ]; then
  git commit -m "$commitMessage"
else
  git commit -m "$commitMessage: $1"
fi
echo "\n"
echo "성공적으로 커밋했습니다."

touch "$scope:r.md"