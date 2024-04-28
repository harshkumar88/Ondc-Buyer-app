import { ONDC_URL } from "./config";
import { post_data_without_token } from "./networkhandler";

const handleAddItem = (
  quantity,
  content,
  setAlert,
  setQuantity,
  setTotalItem,
  totalItem,
  storeItems,
  setStoreItems
) => {
  if (quantity + 1 > content?.pack_details?.max_quantity) {
    setAlert(
      `Cannot add more than ${content?.pack_details?.max_quantity} items`
    );
    return;
  }
  handleTouch();
  setQuantity((current) => current + 1);
  setTotalItem({
    quantity: totalItem?.quantity + 1,
    price: totalItem?.price + content?.price?.value,
  });
  handleAddItemInStore(quantity + 1, storeItems, content, setStoreItems);
};

const handleRemoveItem = (
  quantity,
  content,
  setQuantity,
  setTotalItem,
  totalItem,
  storeItems,
  setStoreItems
) => {
  handleTouch();
  setQuantity((current) => current - 1);
  setTotalItem({
    quantity: totalItem?.quantity - 1 < 0 ? 0 : totalItem?.quantity - 1,
    price:
      totalItem?.price - content?.price?.value < 0
        ? 0
        : totalItem?.price - content?.price?.value,
  });
  handleAddItemInStore(quantity - 1, storeItems, content, setStoreItems);
};

const handleAddItemInStore = (quantity, storeItems, content, setStoreItems) => {
  if (quantity === 0) {
    const { [content?.id]: removedItem, ...rest } = storeItems;
    setStoreItems({ ...rest });
    return;
  }

  let dict = {
    ...storeItems,
    [content?.id]: {
      name: content?.name,
      in_stock: true,
      id: content?.id,
      images: content?.images,
      price: {
        item_price: content?.price?.value,
        final_price: content?.price?.value,
        mrp: content?.price?.mrp,
      },
      quantity: quantity,
      pack_details: {
        unit: content?.pack_details?.unit,
        value: content?.pack_details?.value,
        max_quantity: content?.pack_details?.max_quantity,
      },
      category: content?.category,
    },
  };

  setStoreItems({ ...dict });
};

const handleCartCheck = (itemsData, setTotalItem) => {
  let totalQuantity = 0;
  let totalPrice = 0;

  // Loop through each item and calculate total quantity and total price
  for (const itemId in itemsData) {
    if (itemsData.hasOwnProperty(itemId)) {
      const item = itemsData[itemId];

      totalQuantity += item.quantity;
      totalPrice += item.price.item_price * item.quantity;
    }
  }

  setTotalItem({ quantity: totalQuantity, price: totalPrice });
};

const handleSaveCart = async (cartData, appContext) => {
  const res = await post_data_without_token(
    `${ONDC_URL}/bap/cart/v1/`,
    { data: cartData },
    appContext
  );
};

const handleTouch = (value) => {
  if (navigator.vibrate) {
    if (value) {
      navigator.vibrate(value);
    } else {
      navigator.vibrate(50);
    }
  }
};

export {
  handleAddItem,
  handleRemoveItem,
  handleAddItemInStore,
  handleTouch,
  handleCartCheck,
  handleSaveCart,
};
