"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value
  this.left = null
  this.right = null

}
BinarySearchTree.prototype.size = function () {


  if (this.right === null && this.left === null) return 1
  if (this.right !== null && this.left === null) return 1 + this.right.size()

  if (this.right === null && this.left !== null) return 1 + this.left.size()
  if (this.right !== null && this.left !== null) return 1 + this.right.size() + this.left.size()

}
BinarySearchTree.prototype.insert = function (value) {
  //menor
  if (this.value < value) {
    if (value > this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value)
      } else {
        this.right.insert(value);
      }
    }
  }

  if (this.value > value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value)
    } else {
      this.left.insert(value)
    }
  }
}


BinarySearchTree.prototype.contains = function (value) {
  
  if (this.value === value) return true

  if (value > this.value) {
    // voy hacia la derecha
      if (this.right=== null)return false;
      else {
        return this.right.contains(value);
      }  
  }

  if (value < this.value) {
    // voy hacia la izquierda
   if(this.left === null) return false;
   else {
     return this.left.contains(value)
   }
  }
};

BinarySearchTree.prototype.depthFirstForEach = function (funcionCallBack, order) {
  if (order === "pre-order") {
    // root- izq -der
    funcionCallBack(this.value);
    if (this.left !== null) this.left.depthFirstForEach(funcionCallBack, order);
    if (this.right !== null) this.right.depthFirstForEach(funcionCallBack, order);
  }
  else if (order === "post-order") {
    // izq - der - root

    if (this.left !== null) this.left.depthFirstForEach(funcionCallBack, order)
    if (this.right !== null) this.right.depthFirstForEach(funcionCallBack, order)
    funcionCallBack(this.value)
    /* OTRA MANERA DE RESOLVERLO:
    if (this.left) this.left.depthFirstForEach(funcionCallback,order)
    if (this.right) this.right.depthFirstForEach(funcionCallback,order)
    cb(this.value)
    */
  }
  else {
    //in-order
    // izq - root -der
    if (this.left !== null) this.left.depthFirstForEach(funcionCallBack, order)
    funcionCallBack(this.value)
    if (this.right !== null) this.right.depthFirstForEach(funcionCallBack, order)

  }

}
BinarySearchTree.prototype.breadthFirstForEach = function (cb, arreglo = []) {
  cb(this.value)

  if (this.left !== null) {
    arreglo.push(this.left)
  }
  if (this.right !== null) {
    arreglo.push(this.right)
  }
  //hasta cuando se tiene que ejecutar? ---> mientras el arreglo no esté vacio
  if (arreglo.length > 0) {
    arreglo.shift().breadthFirstForEach(cb, arreglo)
  }
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
