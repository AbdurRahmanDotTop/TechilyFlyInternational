import { Turnstile } from '@marsidev/react-turnstile';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-muted-foreground">Enter your email below to login to your account</p>
        </div>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
          <div className="flex justify-center my-4">
            <Turnstile siteKey="1x00000000000000000000AA" /> {/* Cloudflare test key */}
          </div>
          <button type="button" className="w-full bg-teal-600 text-white p-2 rounded">Sign In</button>
        </form>
      </div>
    </div>
  );
}
