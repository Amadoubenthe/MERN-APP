import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";

export interface Product {
  name: string;
  price: number;
  image: string;
}

function CreateProductPage() {
  const [product, setProduct] = useState<Product>({
    name: "",
    price: 0,
    image: "",
  });

  const handleAddProduct = async () => {
    console.log(product);
  };
  return (
    <Container maxW={"1000px"} px={8}>
      <VStack spaceX={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>

        <Box w={"full"} bg={"gray.100"} p={6} rounded={"lg"} shadow={"md"}>
          <VStack>
            <Input
              placeholder="Product Name"
              name="name"
              value={product?.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: Number(e.target.value) })
              }
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={product.image}
              onChange={(e) =>
                setProduct({ ...product, image: e.target.value })
              }
            />

            <Button colorScheme="blue" onClick={handleAddProduct} w="full">
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default CreateProductPage;
