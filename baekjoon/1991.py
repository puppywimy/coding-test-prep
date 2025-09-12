# 제출 시 파일 입출력 부분 지우기

import sys

sys.stdin = open("input", "r")


def solution():
    N = int(input())
    tree = {}
    for _ in range(N):
        parent, left, right = input().split(" ")
        tree[parent] = {"left": left, "right": right}

    def preorderTraversal(node):
        if node == ".":
            return ""
        result = ""
        result += node
        result += preorderTraversal(tree[node]["left"])
        result += preorderTraversal(tree[node]["right"])
        return result

    def inorderTraversal(node):
        if node == ".":
            return ""
        result = ""
        result += inorderTraversal(tree[node]["left"])
        result += node
        result += inorderTraversal(tree[node]["right"])
        return result

    def postorderTraversal(node):
        if node == ".":
            return ""
        result = ""
        result += postorderTraversal(tree[node]["left"])
        result += postorderTraversal(tree[node]["right"])
        result += node
        return result

    output = [preorderTraversal("A"), inorderTraversal("A"), postorderTraversal("A")]
    print("\n".join(output))


solution()
