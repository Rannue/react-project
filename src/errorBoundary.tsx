import React, { ReactNode } from 'react';
import './App.css';

interface IErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };

    this.resetApp = this.resetApp.bind(this);
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: info,
    });
  }

  resetApp() {
    this.setState({
      error: null,
      errorInfo: null,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className="errorBoundary-container">
          <div className="error-interface">
            <h1>Error</h1>
            <button onClick={this.resetApp} className="restart-button">
              Fix up
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
