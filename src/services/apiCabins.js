import supabase from "./supabase";

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
  const { data, error } = await supabase.from("cabins").insert([newCabin]);

  if (error) {
    console.log(error);
    throw new Error("Could not add the new cabin!");
  }

  return data;
};
