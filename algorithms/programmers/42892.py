import sys

sys.setrecursionlimit(10000)


def solution(nodeinfo):
    tree = dict()
    insertionQueue = [
        {"nodeName": node["name"], "value": node["coordinate"][0]}
        for node in sorted(
            [{"name": i + 1, "coordinate": nodeinfo[i]} for i in range(len(nodeinfo))],
            key=lambda x: (-x["coordinate"][1]),
        )
    ]
    rootNodeName = insertionQueue[0]["nodeName"]
    rootNodeValue = insertionQueue[0]["value"]
    tree[rootNodeName] = {"value": rootNodeValue, "left": None, "right": None}
    insertionQueue = insertionQueue[1:]
    for insertion in insertionQueue:
        nodeCursor = tree[rootNodeName]
        while True:
            if nodeCursor["value"] > insertion["value"]:
                if nodeCursor["left"] == None:
                    nodeCursor["left"] = insertion["nodeName"]
                    tree[insertion["nodeName"]] = {
                        "value": insertion["value"],
                        "left": None,
                        "right": None,
                    }
                    break
                nodeCursor = tree[nodeCursor["left"]]
            elif nodeCursor["value"] < insertion["value"]:
                if nodeCursor["right"] == None:
                    nodeCursor["right"] = insertion["nodeName"]
                    tree[insertion["nodeName"]] = {
                        "value": insertion["value"],
                        "left": None,
                        "right": None,
                    }
                    break
                nodeCursor = tree[nodeCursor["right"]]

    result = [[], []]

    def preorderTraversal(nodeName):
        result[0].append(nodeName)
        left = tree[nodeName]["left"]
        right = tree[nodeName]["right"]
        if left != None:
            preorderTraversal(left)
        if right != None:
            preorderTraversal(right)

    def postorderTraversal(nodeName):
        left = tree[nodeName]["left"]
        right = tree[nodeName]["right"]
        if left != None:
            postorderTraversal(left)
        if right != None:
            postorderTraversal(right)
        result[1].append(nodeName)

    preorderTraversal(rootNodeName)
    postorderTraversal(rootNodeName)
    return result
