var port = Environment.GetEnvironmentVariable("PORT") ?? "8080";
var app = WebApplication.CreateBuilder(args).Build();
app.MapGet("/", () => Results.Json(new { status = "ok", app = "osaas-e2e-test-app-dotnet" }));
// Deliberate compile error: undefined method, so `dotnet publish` exits non-zero.
app.ThisMethodDoesNotExist($"http://0.0.0.0:{port}");
