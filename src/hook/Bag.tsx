/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable prettier/prettier */
import React, {
  createContext, useCallback, useContext, useState,
} from 'react';

interface IItens {
  id: number;
  name: string;
  img: string;
  price: number;
  des: number | undefined;
  quant: number;
}

interface IBagProviderData {
  bag: IItens[];
  add(iten: IItens): void;
  remove(id: number): void;
//   update(iten: IItens): void;
  deleteBag(): void;
}
type Props = {
    children?: React.ReactNode
  };
const BagContext = createContext<IBagProviderData>({} as IBagProviderData);

export const BagProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<IItens[]>([]);

  const deleteBag = useCallback(() => {
    setData([]);
  }, []);
  const add = useCallback(
    (iten: IItens) => {
      const find = data.find((i) => i.id === iten.id);
      if (find) {
        data[data.indexOf(find)].quant += 1;
        setData(data);
      } else {
        setData([...data.concat(iten)]);
      }
    },
    [data],
  );
  const remove = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    (id:number) => {
      const find = data.find((i) => i.id === id);
      if (find && data[data.indexOf(find)].quant > 1) {
        data[data.indexOf(find)].quant -= 1;
        setData(data);
      }
      if (find && data[data.indexOf(find)].quant === 1) {
        setData(data.filter((i) => i.id !== id));
      }
      console.log(data);
    },
    [data],
  );
  return (
    <BagContext.Provider value={{
      add, deleteBag, remove, bag: data,
    }}
    >
      {children }
    </BagContext.Provider>

  );
};

export function useBag():IBagProviderData {
  const context = useContext(BagContext);
  if (!context) {
    throw new Error('não deu');
  }
  return context;
}
