class MinHeap {
    private int size = 0;
    private int[] arr = null;
    
    public MinHeap(int[] arr) {
        this.arr = new int[arr.length + 1];
        this.arr[0] = -1;
        for (int i = 0; i < arr.length; i++) {
            push(arr[i]);
        }
    }
    
    public int size() {
        return this.size;
    }
    
    public void push(int x) {
        int cursor = ++size;
        this.arr[cursor] = x;
        while (cursor > 1 && this.arr[cursor / 2] > this.arr[cursor]) {
            swap(cursor / 2, cursor);
            cursor = cursor / 2;
        }
    }
    
    public int pop() {
        int cursor = 1;
        int temp = this.arr[cursor];
        swap(cursor, size--);
        while (cursor * 2 <= size) {
            if (cursor * 2 + 1 <= size) {
                if (this.arr[cursor * 2] < this.arr[cursor * 2 + 1]) {
                    if (this.arr[cursor] > this.arr[cursor * 2]) {
                        swap(cursor, cursor * 2);
                        cursor = cursor * 2;
                    } else {
                        break;
                    }
                } else {
                    if (this.arr[cursor] > this.arr[cursor * 2 + 1]) {
                        swap(cursor, cursor * 2 + 1);
                        cursor = cursor * 2 + 1;
                    } else {
                        break;
                    }
                }
            } else {
                if (this.arr[cursor] > this.arr[cursor * 2]) {
                    swap(cursor, cursor * 2);
                    cursor = cursor * 2;
                } else {
                    break;
                }
            }
        }
        return temp;
    }
    
    private void swap(int x, int y) {
        int temp = this.arr[x];
        this.arr[x] = this.arr[y];
        this.arr[y] = temp;
    }
}

class Solution {
    public int solution(int[] scoville, int K) {
        MinHeap heap = new MinHeap(scoville);
        
        int count = 0;
        while (heap.size() > 1) {
            int a = heap.pop();
            if (a >= K) break;
            int b = heap.pop();
            heap.push(a + b * 2);
            count++;
        }
        
        return heap.pop() >= K ? count : -1;
    }
}