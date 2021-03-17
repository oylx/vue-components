/**
 * 由一个组件，向上找到最近的指定组件
 * 向上的路径唯一，while判断即可
 * @param context
 * @param componentName
 * @returns {Vue}
 */
export const findComponentUpward = (context, componentName) => {
  let parent = context.$parent;
  let name = parent.$options.name;
  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent;
    name = parent?.$options.name;
  }
  return parent;
};

/**
 * 向上找到所有的指定组件
 * 向上路径虽然唯一，但是存在多个可能性，需要递归至顶级parent不存在的情况
 * @param context
 * @param componentName
 * @returns {*[]}
 */
export const findComponentsUpward = (context, componentName) => {
  let parents = [];
  const parent = context.$parent;
  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent);
    return parents.concat(findComponentsUpward(parent, componentName));
  } else {
    return []
  }
}

/**
 * 向下找到最近的指定组件
 * 路径唯一，但是子元素多个，类似树
 * @param context
 * @param componentName
 * @returns {null}
 */
export const findComponentDownward = (context, componentName) => {
  const children = context.$children
  let foundChild = null
  if(children.length) {
    for(const child of children) {
      if(child.$options.name === componentName) {
        foundChild = child
        break
      } else {
        foundChild = findComponentDownward(child, componentName)
        if(foundChild) break
      }
    }
  }
  return foundChild;
}

/**
 * 由一个组件，向下找到所有指定的组件
 * @param context
 * @param componentName
 * @returns {*[]}
 */
export const findComponentsDownward = (context, componentName) => {
  return context.$children.reduce((components, child)=> {
    if (child.$options.name === componentName) components.push(child)
    const foundChildren = findComponentsDownward(child, componentName)
    return components.concat(foundChildren)

  }, []);
}
















