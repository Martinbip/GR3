import axios from "axios";

const generateImageURL = async (image) => {
  console.log(image);
  const file = new FormData();
  file.append("file", image);
  file.append("upload_preset", "yt3phgqv");
  const { data } = await axios.post(
    `https://api.cloudinary.com/v1_1/di7lbdtbt/image/upload`,
    file
  );
  return data;
};

export default generateImageURL;
