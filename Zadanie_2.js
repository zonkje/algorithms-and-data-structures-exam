class BST {
	constructor() {
		this.root = null
	}
	add(key) {
    if(this.root == null) {
            this.root = {
                key: key,
                left: null,
                right: null,
                parent: null    
            }
            return
        }
        let node = this.root
        while(true)
            if(key < node.key)
                if(node.left == null) {
                    node.left = {
                        key: key,
                        left: null,
                        right: null,
                        parent: node   
                    }
                    return
                }
                else
                    node = node.left
            else
                if(node.right == null) {
                    node.right = {
                        key: key,
                        left: null,
                        right: null,
                        parent: node   
                    }
                    return
                }
                else
                    node = node.right

	}

	contains(key) {
		let node = this.root
		while(node != null)
			if(key == node.key)
				return true
			else if(key < node.key)
				node = node.left
			else
				node = node.right
		return false
	}
}
