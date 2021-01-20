import { FallbackProps } from "react-error-boundary"

const ErrorFallback: React.FC<FallbackProps> = ({ error }) => {
  return (
    <div>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export default ErrorFallback

export const handleError = (error: Error, info: { componentStack: string }) => {
  /** エラーログ送信処理など */
}
