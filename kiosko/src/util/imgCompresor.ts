export const compressImage = (imageFile: File, compressionFactor: number): Promise<File> => {
  return new Promise(resolve => {
    const reader = new FileReader()

    // Cuando se termina de leer el archivo, se comprime la imagen
    reader.onload = (event: ProgressEvent<FileReader>) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const MAX_WIDTH = img.width
        const MAX_HEIGHT = img.height
        const width = MAX_WIDTH * compressionFactor
        const height = MAX_HEIGHT * compressionFactor

        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, width, height)

        canvas.toBlob(
          blob => {
            const compressedFile = new File([blob], imageFile.name, {
              type: imageFile.type,
              lastModified: Date.now(),
            })
            resolve(compressedFile)
          },
          imageFile.type,
          compressionFactor
        )
      }

      img.src = event.target?.result as string
    }

    reader.readAsDataURL(imageFile)
  })
}
