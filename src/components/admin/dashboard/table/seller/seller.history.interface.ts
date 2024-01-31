type TSellerInfo = {
  _id: string;
  name: {
    firstName: string;
    lastName: string;
    _id?: string;
  };
  email: string;
  role: string;
  gender: string;
  profileImage: string;
  isDeleted: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type TSellerHistoryDataType = {
  totalSalesTime: number;
  sellerId: number;
  sellerInfo: TSellerInfo;
  // sellerInfo: object;
};
