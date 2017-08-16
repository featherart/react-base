// @flow
export type DefaultObject = {
  title: string,
  description: string
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};
