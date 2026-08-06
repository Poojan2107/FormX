[void][System.Reflection.Assembly]::LoadWithPartialName("System.Drawing")

$code = @"
using System;
using System.Threading.Tasks;
using Windows.Globalization;
using Windows.Graphics.Imaging;
using Windows.Media.Ocr;
using Windows.Storage;

public class OcrHelper {
    public static async Task<string> RecognizeTextAsync(string imagePath) {
        StorageFile file = await StorageFile.GetFileFromPathAsync(imagePath);
        using (var stream = await file.OpenAsync(FileAccessMode.Read)) {
            BitmapDecoder decoder = await BitmapDecoder.CreateAsync(stream);
            SoftwareBitmap bitmap = await decoder.GetSoftwareBitmapAsync();
            OcrEngine engine = OcrEngine.TryCreateFromLanguage(new Language("en-US"));
            OcrResult result = await engine.RecognizeAsync(bitmap);
            return result.Text;
        }
    }
}
"@

Add-Type -TypeDefinition $code -Language CSharp

Get-ChildItem "d:\FormX\FormX-master\.planning\*.png" | ForEach-Object {
    Write-Host "==================== $($_.Name) ===================="
    $task = [OcrHelper]::RecognizeTextAsync($_.FullName)
    $task.Wait()
    Write-Host $task.Result
}
