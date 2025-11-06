
export default function AuthPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          Authentication
        </h2>
        <p className="text-muted-foreground text-center">
          Auth implementation placeholder (Google, Phone, Guest)
        </p>
      </div>
    </div>
  );
}