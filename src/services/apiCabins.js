import supabase, { supabaseUrl } from "./supabase";

export const getCabins = async () => {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("There was an error fetching cabins");
  }

  return data;
};

export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Could not delete the cabin!");
  }

  return data;
};

export const createCabin = async (newCabin) => {
  // 1.Upload image
  const imagePath = await uploadImage(newCabin.image);

  // 2.Create Cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }]);

  if (error) {
    throw new Error("Could not add the new cabin!");
  }

  return data;
};

export const editCabin = async (editedCabin) => {
  const { id } = editedCabin;
  let imagePath = "";

  if (
    !editedCabin?.image?.startsWith?.(supabaseUrl) &&
    editedCabin.image !== null
  ) {
    imagePath = await uploadImage(editedCabin.image[0]);
  }

  const { data, error } = await supabase
    .from("cabins")
    .update({ ...editedCabin, image: imagePath ? imagePath : editCabin.image })
    .eq("id", id);

  if (error) throw new Error("The cabin was not edited!");

  return data;
};

async function uploadImage(image) {
  if (!image) return false;

  //1.create image name and image path
  const imageName = `${Math.random()}-${image?.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 2. Upload Image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, image);

  if (storageError) {
    throw new Error("The image was not uploaded!");
  }

  return imagePath;
}
