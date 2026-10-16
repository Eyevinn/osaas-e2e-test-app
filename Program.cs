var port = Environment.GetEnvironmentVariable("PORT") ?? "8080";
var app = WebApplication.CreateBuilder(args).Build();
app.MapGet("/", () => Results.Json(new { status = "ok", app = "osaas-e2e-test-app-dotnet" }));
app.Run($"http://0.0.0.0:{port}");
