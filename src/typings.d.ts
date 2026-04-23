// filepath: /path/to/your-project/src/typings.d.ts
declare module 'react' {
  export = any;
}

// 解决 JSX 命名空间问题
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}