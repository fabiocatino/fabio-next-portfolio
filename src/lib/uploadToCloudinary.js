import axios from 'axios';

const uploadPic = async (image) => {
	try {
		const form = new FormData();
		form.append('file', image);
		form.append('upload_preset', 'portfolio');
		form.append('cloud_name', 'fabiocatino');
		const res = await axios.post(process.env.NEXT_PUBLIC_CLOUDINARY_URL, form);
		return res.data.url;
	} catch (error) {
		return;
	}
};

export default uploadPic;
