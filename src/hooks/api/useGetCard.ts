import axios from "axios";
import { useEffect, useState } from "react";

function useGetCard() {
  const [card, setCard] = useState<IGetCardData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getCard() {
    setIsLoading(true);
    const response = await axios.get<{}, IGetCard>(
      `http://localhost:3000/design`,
    );
    console.log(response.data);
    setCard(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getCard();
  }, []);

  return {
    card,
    isLoading,
  };
}

export default useGetCard;
