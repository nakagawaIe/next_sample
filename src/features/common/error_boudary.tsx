import React, { ErrorInfo } from 'react';

type IProps = React.PropsWithChildren<{}>;

interface IState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(_: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
  }

  render() {
    const { error, errorInfo } = this.state;
    if (error) {
      return (
        <div>
          <h2>エラーが発生しました。</h2>
          <p>{error.message}</p>
          <button type='button' onClick={() => this.setState({ error: null })}>
            Try again?
          </button>
          {errorInfo && (
            <details style={{ whiteSpace: 'pre-wrap' }}>{errorInfo.componentStack}</details>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}
