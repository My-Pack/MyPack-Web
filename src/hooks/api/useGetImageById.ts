import { useEffect, useState } from "react";
import { instance } from "src/libs/api/api";

interface UseGetImageById {
  imageId: string | string[] | undefined;
}

function useGetImage({ imageId }: UseGetImageById) {
  const [image, setImage] = useState<IImage | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getImageById(id: string) {
      setIsLoading(true);
      const response = await instance.get<{}, IImage>(`/api/v1/images/${id}`);
      setImage(response);
      setIsLoading(false);
    }

    if (typeof imageId === "string") getImageById(imageId);
  }, [imageId, setImage]);

  return {
    image,
    isLoading,
  };
}

export default useGetImage;
