const api = {
  cloud_name: import.meta.env.VITE_REACT_APP_CLOUD_NAME,
  preset: import.meta.env.VITE_REACT_APP_PRESET,
}

const { cloud_name, preset } = api

export const fileUpload = async file => {
  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`

  const formData = new FormData()
  formData.append('upload_preset', `${preset}`)
  formData.append('file', file)

  try {
    const res = await fetch(cloudinaryUrl, {
      method: 'POST',
      body: formData,
    })

    if (!res.ok) return null

    const data = await res.json()
    return {
      img: data.secure_url,
      id: data.public_id,
    }
  } catch (error) {
    return null
  }
}
