import axios from "axios";
import { useEffect, useState } from "react";

function useGetImage() {
  const [card, setCard] = useState<IGetCardData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getCardById() {
    setIsLoading(true);
    const response = await axios.get(`http://localhost:3000/design`);
    setCard(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getCardById();
  }, []);

  return {
    card,
    isLoading,
  };
}

export default useGetImage;
