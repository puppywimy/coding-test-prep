#! /usr/bin/env zsh

type=$1
description=$2

case $1 in
  s)
    type="solve"
    ;;
  d)
    type="description"
    ;;
esac

if [[ $type == "solve" ]]; then
  if ! git diff --cached --quiet; then
    echo "스테이지 영역이 비어 있지 않습니다."
    exit 1
  fi

  files=(${(f)"$(git -c core.quotepath=off ls-files -m -d -o --exclude-standard | sort -u)"})
  if (( ${#files} != 1 )); then
    echo "워킹 트리에 변경된 파일이 하나여야 합니다. (현재 ${#files}개)"
    printf '%s\n' $files
    exit 1
  fi

  if ! grep -qs '[^[:space:]]' -- $files[1]; then
    echo "파일이 비어 있습니다: $files[1]"
    exit 1
  fi
fi

untrackedFiles=$(git ls-files -o --exclude-standard --directory)
echo "Untracked Files는 다음과 같습니다.\n$untrackedFiles\n"
read "answer?모든 변경 사항을 커밋하시겠습니까? [Y/n] "
if [[ $answer != "Y" ]]; then
  exit
fi

git add .
scope=$(git diff --name-only --cached)
commitMessage="$type($scope)"
if [[ -z $description ]]; then
  git commit -m "$commitMessage"
else
  git commit -m "$commitMessage: $description"
fi
echo "\n성공적으로 커밋했습니다."

if [[ ( $type == "solve" ) || ( $type == "solving" ) ]]; then
  [[ -e "$scope:r.md" ]] || cp description_template.md "$scope:r.md"
fi