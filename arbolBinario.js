class Node{
  constructor(data, left=null, middle=null, right=null){
    this.data = data
    this.left = left
    this.middle = middle
    this.right = right
  }
}
class Tree{
  constructor(){
    this.root = null
  }
  add(data) {
    const node = this.root
    if(node == null) {
      this.root = new Node(data)
      return
    } else {
      const searchTree = (node) => {
        if(data < node.data){
          if(node.left === null){
            node.left = new Node(data)
            return
          }else if(node.left !== null){
            return searchTree(node.left)
          }
        }else if(data > node.data){
          if(node.right === null){
            node.right = new Node(data)
            return
          }else if(node.right !==null){
            return searchTree(node.right)
          }
        }else {
          return null
        }
      }
      return searchTree(node)
    }
  }
}
const tree = new Tree()
tree.add(20)
tree.add(10)
tree.add(29)
tree.add(39)
tree.add(20)
tree.add(10)
tree.add(20)
tree.add(22)
console.log(tree)