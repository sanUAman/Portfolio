FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Копіюємо всі файли з проєкту
COPY . ./

# Компільовуємо окремі .cs файли
RUN dotnet new console -o /build && \
    mv *.cs /build && \
    cd /build && \
    dotnet build -c Release

# Використовуємо runtime образ для запуску
FROM mcr.microsoft.com/dotnet/runtime:8.0 AS runtime
WORKDIR /app
COPY --from=build /build/bin/Release/net8.0/ ./

ENTRYPOINT ["dotnet", "build.dll"]