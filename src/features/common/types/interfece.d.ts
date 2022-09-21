/** アクションごとに必要な追加のプロパティ群から、アクションの形式に整形する */
type ActionTypeCreator<T> = {
  [P in keyof T]: { type: P } & T[P];
}[keyof T];
