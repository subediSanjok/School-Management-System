param(
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$Args
)

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptDir

if ($Args.Count -gt 0 -and ($Args[0] -eq 'springboot:run' -or $Args[0] -eq 'spring-boot:run')) {
    if (Test-Path '.\mvnw.cmd') {
        & .\mvnw.cmd spring-boot:run
    } else {
        mvn spring-boot:run
    }
    exit $LASTEXITCODE
}

if ($Args.Count -gt 0) {
    if (Test-Path '.\mvnw.cmd') {
        & .\mvnw.cmd @Args
    } else {
        mvn @Args
    }
    exit $LASTEXITCODE
}

Write-Host 'Usage: .\mvm springboot:run'
exit 1

