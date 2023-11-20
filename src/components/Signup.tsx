import { useState } from "react"


const photo = () => {
    const [inputTagImage, setInputTagImage] = useState<File | null>(null);
    const [profilePicture, setProfilePicture] = useState<string>("");

    const handleClick = (e: any) => {

        const files = e.target.files;
        setInputTagImage(files[0]);
    };

    const handleSubmit = () => {
        if (inputTagImage && (inputTagImage.type === "image/jpeg" || inputTagImage.type === "image/png")) {
            const formDataVar = new FormData()
            formDataVar.append("file", inputTagImage)
            formDataVar.append("upload_preset", "deployWebsite")
            formDataVar.append("cloud_name", "dpm6uveua")
            fetch("https://api.cloudinary.com/v1_1/dpm6uveua/image/upload", {
                method: "post",
                body: formDataVar
            }).then((res) => res.json()).then((data) => {
                setProfilePicture(data.url)
            })
        }
    };


    return (
        <>
            <input type="file" onChange={(e) => handleClick(e)} />
            <div></div>
            <button onClick={handleSubmit}>submit</button>
            {profilePicture}
        </>
    )
}

export default photo