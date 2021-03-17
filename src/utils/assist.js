/**
 * 由一个组件，向上找到最近的指定组件
 * @param context
 * @param componentName
 * @returns {Vue}
 */
export const findComponentUpward = (context, componentName) => {
  let parent = context.$parent;
  let name = parent.$options.name;
  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent;
    if (parent) {
      name = parent.$options.name;
    }
  }
  return parent;
};

/**
 * 向上找到所有的指定组件
 * @param context
 * @param componentName
 * @returns {*[]}
 */
export const findComponentsUpward = (context, componentName) => {
  let parents = [];
  const parent = context.$parent;
  if (parent) {
    if (parent.$options.name === componentName) {
      parents.push(parent);
    }
    return parents.concat(findComponentsUpward(parent, componentName));
  } else {
    return []
  }
}

export const findComponentDownward = (context, componentName) => {
  const childrens = context.$children
  let children = null
  if(childrens.length) {
    for(const child of childrens) {
      const name = child.$options.name
      if(name === componentName) {
        children = child
        break
      } else {
        children = findComponentDownward(child,componentName)
        if(children) break
      }
    }
  }
  return children
}
















