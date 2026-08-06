
[Windows.Media.Ocr.OcrEngine, Windows.Foundation.UniversalApiContract, ContentType = WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null

function Get-TextFromImg($path) {
    $file = [Windows.Storage.StorageFile]::GetFileFromPathAsync($path)
    while (-not $file.IsCompleted) { Start-Sleep -Milliseconds 20 }
    $storageFile = $file.GetResults()

    $stream = $storageFile.OpenAsync([Windows.Storage.FileAccessMode]::Read)
    while (-not $stream.IsCompleted) { Start-Sleep -Milliseconds 20 }
    $randomStream = $stream.GetResults()

    $decoder = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($randomStream)
    while (-not $decoder.IsCompleted) { Start-Sleep -Milliseconds 20 }
    $bmpDecoder = $decoder.GetResults()

    $bitmap = $bmpDecoder.GetSoftwareBitmapAsync()
    while (-not $bitmap.IsCompleted) { Start-Sleep -Milliseconds 20 }
    $softBmp = $bitmap.GetResults()

    $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage([Windows.Globalization.Language]::new('en-US'))
    $ocr = $engine.RecognizeAsync($softBmp)
    while (-not $ocr.IsCompleted) { Start-Sleep -Milliseconds 20 }
    return $ocr.GetResults().Text
}

Get-ChildItem 'd:\FormX\FormX-master\.planning\*.png' | ForEach-Object {
    Write-Host "==================== $($_.Name) ===================="
    try {
        $t = Get-TextFromImg $_.FullName
        Write-Host $t
    } catch {
        Write-Host "Error:" $_
    }
}
